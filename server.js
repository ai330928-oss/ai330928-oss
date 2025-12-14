import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { promisify } from 'util';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
// PlayerData는 동적 import로 처리 (ES 모듈 호환성)
let SOCCER_DATA, NBA_DATA;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어
app.use(cors());
app.use(express.json());

// SQLite 데이터베이스 초기화
const dbPath = join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath);

// Promise 기반 래퍼
const dbRun = promisify(db.run.bind(db));
const dbGet = promisify(db.get.bind(db));
const dbAll = promisify(db.all.bind(db));

// 데이터베이스 초기화
async function initDatabase() {
  // PlayerData 동적 import
  const playerDataModule = await import('./src/PlayerData.js');
  SOCCER_DATA = playerDataModule.SOCCER_DATA;
  NBA_DATA = playerDataModule.NBA_DATA;
  // 사용자 저장 데이터 테이블
  await dbRun(`
    CREATE TABLE IF NOT EXISTS user_saves (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      sport TEXT NOT NULL,
      money INTEGER NOT NULL,
      formation TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(user_id, sport)
    )
  `);

  // 선수 데이터 테이블
  await dbRun(`
    CREATE TABLE IF NOT EXISTS players (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      save_id INTEGER NOT NULL,
      player_id INTEGER NOT NULL,
      name TEXT NOT NULL,
      team TEXT NOT NULL,
      ovr INTEGER NOT NULL,
      pos TEXT NOT NULL,
      img TEXT,
      level INTEGER DEFAULT 1,
      uid TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (save_id) REFERENCES user_saves(id) ON DELETE CASCADE
    )
  `);

  // 마켓 선수 데이터 테이블 (전체 선수 풀)
  await dbRun(`
    CREATE TABLE IF NOT EXISTS market_players (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      team TEXT NOT NULL,
      ovr INTEGER NOT NULL,
      pos TEXT NOT NULL,
      img TEXT,
      sport TEXT NOT NULL
    )
  `);

  // 마켓 선수 데이터 초기화 (비어있을 경우만)
  const existingSoccer = await dbGet("SELECT COUNT(*) as count FROM market_players WHERE sport = 'soccer'");
  if (existingSoccer.count === 0) {
    for (const player of SOCCER_DATA) {
      const team = Array.isArray(player.team) ? JSON.stringify(player.team) : player.team;
      await dbRun(
        `INSERT INTO market_players (id, name, team, ovr, pos, img, sport) VALUES (?, ?, ?, ?, ?, ?, 'soccer')`,
        [player.id, player.name, team, player.ovr, player.pos, player.img]
      );
    }
  }

  const existingNBA = await dbGet("SELECT COUNT(*) as count FROM market_players WHERE sport = 'nba'");
  if (existingNBA.count === 0) {
    for (const player of NBA_DATA) {
      const team = Array.isArray(player.team) ? JSON.stringify(player.team) : player.team;
      await dbRun(
        `INSERT INTO market_players (id, name, team, ovr, pos, img, sport) VALUES (?, ?, ?, ?, ?, ?, 'nba')`,
        [player.id, player.name, team, player.ovr, player.pos, player.img]
      );
    }
  }

  console.log('데이터베이스 초기화 완료');
}

// API 라우트

// 사용자 저장 데이터 로드
app.get('/api/save/:userId/:sport', async (req, res) => {
  try {
    const { userId, sport } = req.params;
    
    const save = await dbGet(
      'SELECT * FROM user_saves WHERE user_id = ? AND sport = ?',
      [userId, sport]
    );

    if (!save) {
      return res.json({ exists: false });
    }

    const players = await dbAll(
      'SELECT * FROM players WHERE save_id = ?',
      [save.id]
    );

    // team 필드 파싱 (JSON 문자열인 경우)
    const squad = players.map(p => ({
      ...p,
      team: p.team.startsWith('[') ? JSON.parse(p.team) : p.team
    }));

    res.json({
      exists: true,
      money: save.money,
      mySquad: squad,
      formation: save.formation
    });
  } catch (error) {
    console.error('저장 데이터 로드 오류:', error);
    res.status(500).json({ error: error.message });
  }
});

// 사용자 저장 데이터 저장
app.post('/api/save/:userId/:sport', async (req, res) => {
  try {
    const { userId, sport } = req.params;
    const { money, mySquad, formation } = req.body;

    // 저장 데이터 업데이트 또는 생성
    const existing = await dbGet(
      'SELECT id FROM user_saves WHERE user_id = ? AND sport = ?',
      [userId, sport]
    );

    let saveId;
    if (existing) {
      await dbRun(
        'UPDATE user_saves SET money = ?, formation = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [money, formation || null, existing.id]
      );
      saveId = existing.id;
      
      // 기존 선수 삭제
      await dbRun('DELETE FROM players WHERE save_id = ?', [saveId]);
    } else {
      const result = await dbRun(
        'INSERT INTO user_saves (user_id, sport, money, formation) VALUES (?, ?, ?, ?)',
        [userId, sport, money, formation || null]
      );
      saveId = result.lastID;
    }

    // 선수 데이터 저장
    for (const player of mySquad) {
      const team = Array.isArray(player.team) ? JSON.stringify(player.team) : player.team;
      await dbRun(
        `INSERT INTO players (save_id, player_id, name, team, ovr, pos, img, level, uid) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          saveId,
          player.id || player.player_id || 0,
          player.name,
          team,
          player.ovr,
          player.pos,
          player.img || '',
          player.level || 1,
          player.uid || `${Date.now()}_${Math.random()}`
        ]
      );
    }

    res.json({ success: true, message: '저장 완료' });
  } catch (error) {
    console.error('저장 데이터 저장 오류:', error);
    res.status(500).json({ error: error.message });
  }
});

// 마켓 선수 목록 조회
app.get('/api/market/:sport', async (req, res) => {
  try {
    const { sport } = req.params;
    const players = await dbAll(
      'SELECT * FROM market_players WHERE sport = ?',
      [sport]
    );

    const formatted = players.map(p => ({
      ...p,
      team: p.team.startsWith('[') ? JSON.parse(p.team) : p.team
    }));

    res.json(formatted);
  } catch (error) {
    console.error('마켓 선수 조회 오류:', error);
    res.status(500).json({ error: error.message });
  }
});

// 선수 추가 (마켓에서 구매)
app.post('/api/player', async (req, res) => {
  try {
    const { userId, sport, player } = req.body;
    
    // 저장 데이터 가져오기
    const save = await dbGet(
      'SELECT id FROM user_saves WHERE user_id = ? AND sport = ?',
      [userId, sport]
    );

    if (!save) {
      return res.status(404).json({ error: '저장 데이터를 찾을 수 없습니다' });
    }

    const team = Array.isArray(player.team) ? JSON.stringify(player.team) : player.team;
    await dbRun(
      `INSERT INTO players (save_id, player_id, name, team, ovr, pos, img, level, uid) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        save.id,
        player.id || 0,
        player.name,
        team,
        player.ovr,
        player.pos,
        player.img || '',
        player.level || 1,
        player.uid || `${Date.now()}_${Math.random()}`
      ]
    );

    res.json({ success: true });
  } catch (error) {
    console.error('선수 추가 오류:', error);
    res.status(500).json({ error: error.message });
  }
});

// 선수 삭제 (판매)
app.delete('/api/player/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    await dbRun('DELETE FROM players WHERE uid = ?', [uid]);
    res.json({ success: true });
  } catch (error) {
    console.error('선수 삭제 오류:', error);
    res.status(500).json({ error: error.message });
  }
});

// 선수 업데이트 (강화 등)
app.put('/api/player/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const { level } = req.body;
    
    await dbRun('UPDATE players SET level = ? WHERE uid = ?', [level, uid]);
    res.json({ success: true });
  } catch (error) {
    console.error('선수 업데이트 오류:', error);
    res.status(500).json({ error: error.message });
  }
});

// 서버 시작
initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`서버가 포트 ${PORT}에서 실행 중입니다`);
    console.log(`API 엔드포인트: http://localhost:${PORT}/api`);
  });
});

// Graceful shutdown
process.on('SIGINT', () => {
  db.close((err) => {
    if (err) {
      console.error('데이터베이스 종료 오류:', err);
    } else {
      console.log('데이터베이스 연결이 종료되었습니다');
    }
    process.exit(0);
  });
});

