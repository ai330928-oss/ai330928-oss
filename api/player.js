// 간단한 인메모리 저장소
const storage = new Map();

export default async function handler(req, res) {
  // CORS 헤더 설정
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    // 선수 추가 (구매)
    const { userId, sport, player } = req.body;
    const key = `${userId}_${sport}`;
    const saved = storage.get(key) || { money: 0, mySquad: [], formation: null };
    
    if (!saved.mySquad) saved.mySquad = [];
    saved.mySquad.push(player);
    storage.set(key, saved);
    
    res.json({ success: true });
  } else if (req.method === 'DELETE') {
    // 선수 삭제 (판매)
    const { uid } = req.query;
    const { userId, sport } = req.query;
    
    if (userId && sport) {
      const key = `${userId}_${sport}`;
      const saved = storage.get(key);
      if (saved && saved.mySquad) {
        saved.mySquad = saved.mySquad.filter(p => p.uid !== uid);
        storage.set(key, saved);
      }
    }
    
    res.json({ success: true });
  } else if (req.method === 'PUT') {
    // 선수 업데이트 (강화)
    const { uid } = req.query;
    const { userId, sport, level } = req.body;
    
    if (userId && sport) {
      const key = `${userId}_${sport}`;
      const saved = storage.get(key);
      if (saved && saved.mySquad) {
        const player = saved.mySquad.find(p => p.uid === uid);
        if (player) {
          player.level = level;
          storage.set(key, saved);
        }
      }
    }
    
    res.json({ success: true });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

