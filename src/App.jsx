import React, { useState, useEffect } from 'react';

// 🔥 분리된 데이터 파일 불러오기
import {
  SOCCER_DATA, NBA_DATA,
  SOCCER_FORMATIONS, NBA_FORMATIONS,
  TEAMS_SOCCER, TEAMS_NBA,
  DIFFICULTIES,
  ENHANCE_RATES
} from './PlayerData';

// 🗄️ 데이터베이스 API 서비스
import apiService from './api-service';

export default function App() {
  // --- [Global State] ---
  const [sport, setSport] = useState(null); // 'soccer' | 'nba'
  const [screen, setScreen] = useState('lobby');
  const [toast, setToast] = useState({ show: false, msg: '' });

  // --- [User Data] ---
  const [user, setUser] = useState(null); // { id: string, name: string }
  const [money, setMoney] = useState(0);
  const [mySquad, setMySquad] = useState([]);

  // --- [New Features State] ---
  const [records, setRecords] = useState({
    matches: 0, wins: 0, draws: 0, losses: 0,
    goalsScored: 0, goalsConceded: 0,
    tournamentWins: 0, highestRound: 16
  });
  const [quests, setQuests] = useState([
    { id: 'q1', type: 'daily_login', desc: '매일 출석체크', target: 1, current: 0, reward: 1000000, claimed: false },
    { id: 'q2', type: 'enhance_success', desc: '강화 3회 성공', target: 3, current: 0, reward: 5000000, claimed: false },
    { id: 'q3', type: 'play_match', desc: '경기 5회 진행', target: 5, current: 0, reward: 3000000, claimed: false },
    { id: 'q4', type: 'tournament_win', desc: '토너먼트 우승', target: 1, current: 0, reward: 'pack_gold', claimed: false }, // 보상이 아이템
  ]);
  const [inventory, setInventory] = useState([]); // [{ type: 'pack_bronze', count: 1 }, ...]

  // --- [Auth State] ---
  const [showLogin, setShowLogin] = useState(true);
  const [loginId, setLoginId] = useState("");

  // --- [Feature State] ---
  const [searchText, setSearchText] = useState("");
  const [teamFilter, setTeamFilter] = useState("ALL"); // 팀 필터
  const [marketTab, setMarketTab] = useState('buy');

  // --- [Enhance State] ---
  const [enhanceTarget, setEnhanceTarget] = useState(null);
  const [materials, setMaterials] = useState([]);
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [enhanceMsg, setEnhanceMsg] = useState("선수를 선택하세요");

  // --- [Match State] ---
  const [myFormation, setMyFormation] = useState('');
  const [lineup, setLineup] = useState([]);
  const [gameMode, setGameMode] = useState('friendly');
  const [round, setRound] = useState(16);
  const [opponent, setOpponent] = useState('AI');
  const [difficulty, setDifficulty] = useState('초급');
  const [matchState, setMatchState] = useState({ q: 1, time: 0, score: { my: 0, ai: 0 }, logs: [], isPlaying: false, isFinished: false });

  const [modalSlot, setModalSlot] = useState(null);

  // --- [설정 로드 & 저장] ---
  // 자동 로그인 체크
  useEffect(() => {
    const savedId = localStorage.getItem('user_id');
    if (savedId) {
      setUser({ id: savedId, name: savedId.startsWith('guest_') ? '게스트' : savedId });
      setShowLogin(false);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginId.trim()) return;
    localStorage.setItem('user_id', loginId);
    setUser({ id: loginId, name: loginId });
    setShowLogin(false);
  };

  const handleGuestLogin = () => {
    let guestId = localStorage.getItem('user_id');
    if (!guestId || !guestId.startsWith('guest_')) {
      guestId = `guest_${Date.now()}`;
      localStorage.setItem('user_id', guestId);
    }
    setUser({ id: guestId, name: '게스트' });
    setShowLogin(false);
  };

  const handleLogout = () => {
    // 로그아웃 시 로컬스토리지 id 정보는 유지? 아니면 삭제?
    // 보통 로그아웃은 자동로그인 해제이므로 삭제가 맞음.
    // 하지만 데이터는 유지되어야 함.
    localStorage.removeItem('user_id');
    setUser(null);
    setSport(null);
    setShowLogin(true);
  };

  const loadData = async (selectedSport) => {
    if (!user) return; // 안전장치

    // 현재 종목 저장
    localStorage.setItem('current_sport', selectedSport);
    const dataSrc = selectedSport === 'soccer' ? SOCCER_DATA : NBA_DATA;
    const defaultForm = selectedSport === 'soccer' ? '4-4-2' : 'Balanced';
    const squadSize = selectedSport === 'soccer' ? 11 : 5;

    // 1. 기본 게임 데이터 로드 (money, squad)
    try {
      const saved = await apiService.loadSave(selectedSport);
      if (saved.exists) {
        setMoney(saved.money);
        const safeSquad = saved.mySquad.map((p, idx) => ({ ...p, uid: p.uid || Date.now() + idx + Math.random() }));
        setMySquad(safeSquad);
        setMyFormation(saved.formation || defaultForm);
      } else {
        // 초기화
        const starters = [];
        for (let i = 0; i < squadSize; i++) {
          const rnd = dataSrc[Math.floor(Math.random() * dataSrc.length)];
          starters.push({ ...rnd, uid: Date.now() + i, level: 1 });
        }
        const initialMoney = selectedSport === 'soccer' ? 50000000000 : 50000000;
        setMoney(initialMoney);
        setMySquad(starters);
        setMyFormation(defaultForm);
        await apiService.saveGame(selectedSport, initialMoney, starters, defaultForm);
      }
    } catch (error) {
      console.error(error);
      // Error Handling 폴백은 기존과 동일하게 유지하거나 생략
    }

    // 2. 확장 데이터 로드 (Records, Quests, Inventory) - LocalStorage Only for now
    // user.id 별로 저장
    const extKey = `ext_data_${user.id}`;
    const savedExt = localStorage.getItem(extKey);
    if (savedExt) {
      const parsed = JSON.parse(savedExt);
      if (parsed.records) setRecords(parsed.records);
      if (parsed.quests) setQuests(parsed.quests);
      if (parsed.inventory) setInventory(parsed.inventory);
    }

    setLineup(Array(squadSize).fill(null));
  };

  // 자동 저장 (기본 데이터)
  useEffect(() => {
    if (!sport || mySquad.length === 0) return;
    const timeoutId = setTimeout(async () => {
      try {
        await apiService.saveGame(sport, money, mySquad, myFormation);
      } catch (error) {
        console.error('자동 저장 오류:', error);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [money, mySquad, sport, myFormation]);

  // 자동 저장 (확장 데이터)
  useEffect(() => {
    if (!user) return;
    const extKey = `ext_data_${user.id}`;
    const data = { records, quests, inventory };
    localStorage.setItem(extKey, JSON.stringify(data));
  }, [records, quests, inventory, user]);

  // 화면 이동 시 필터 초기화
  useEffect(() => {
    setSearchText("");
    setTeamFilter("ALL");
  }, [screen]);


  // --- [유틸리티] ---
  const showToast = (msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: '' }), 2000); };
  const handleImgError = (e) => { e.target.onerror = null; e.target.src = "https://placehold.co/100?text=No+Img"; };

  const formatMoney = (val) => {
    if (sport === 'soccer') {
      if (val >= 1000000000000) return (val / 1000000000000).toFixed(1) + '조';
      return (val / 100000000).toFixed(0) + '억';
    }
    return `$ ${(val / 10000).toFixed(0)}만`;
  };

  const getPrice = (ovr, lvl) => {
    const base = sport === 'soccer' ? 500000000 : 10000;
    const baseline = sport === 'soccer' ? 100 : 100;
    return Math.floor(base * Math.pow(1.1, ovr - baseline) * (lvl * lvl));
  };

  const getCardColor = (lvl) => {
    if (lvl >= 8) return "linear-gradient(135deg, #fce38a, #f38181)";
    if (lvl >= 5) return "linear-gradient(135deg, #e0e0e0, #cfdef3)";
    return sport === 'soccer' ? "linear-gradient(135deg, #2b5876, #4e4376)" : "linear-gradient(135deg, #002d62, #000)";
  };

  const themeColor = sport === 'soccer' ? '#00e676' : '#ff5722';
  const dataList = sport === 'soccer' ? SOCCER_DATA : NBA_DATA;
  const currentTeams = sport === 'soccer' ? TEAMS_SOCCER : TEAMS_NBA;
  const formationList = sport === 'soccer' ? SOCCER_FORMATIONS : NBA_FORMATIONS;


  // --- [게임 로직] ---

  const getSavename = (uid) => {
    // helper to find player OVR from uid ??
    // mySquad에서 찾으면 됨.
    return "";
  };

  const calculateTeamOvr = (squadIds) => {
    if (!squadIds || squadIds.length === 0) return 0;
    let total = 0;
    let count = 0;
    squadIds.forEach(uid => {
      if (!uid) return;
      const p = mySquad.find(x => x.uid === uid) || (localStorage.getItem('friend_squad') ? JSON.parse(localStorage.getItem('friend_squad')).find(x => x.uid === uid) : null);
      if (p) {
        total += (p.ovr + (p.level || 1)); // 레벨도 능력치에 반영
        count++;
      }
    });
    return count > 0 ? Math.floor(total / count) : 0;
  };

  const buyPlayer = async (p) => {
    const cost = getPrice(p.ovr, 1);
    if (money < cost) { showToast("잔액이 부족합니다!"); return; }

    const newPlayer = { ...p, uid: `${Date.now()}_${Math.random()}`, level: 1 };
    setMoney(prev => prev - cost);
    setMySquad(prev => [newPlayer, ...prev]);

    // 데이터베이스에 선수 추가
    try {
      await apiService.addPlayer(sport, newPlayer);
    } catch (error) {
      console.error('선수 추가 오류:', error);
    }

    showToast(`🎉 ${p.name} 영입 성공!`);
  };

  const sellPlayer = async (p) => {
    if (!p.uid) { showToast("오류: 선수 데이터 갱신 필요"); return; }
    const val = getPrice(p.ovr, p.level);
    if (window.confirm(`${p.name} 판매하시겠습니까? (${formatMoney(val)})`)) {
      setMoney(prev => prev + val);
      setMySquad(prev => prev.filter(x => x.uid !== p.uid));
      if (lineup.includes(p.uid)) setLineup(prev => prev.map(u => u === p.uid ? null : u));

      try {
        await apiService.deletePlayer(p.uid);
      } catch (error) {
        console.error('선수 삭제 오류:', error);
      }

      showToast("💰 판매 완료");
    }
  };

  // 🔥 [완전 개편] 새로운 강화 시스템 - 13강 만렙, 확률 테이블 기반
  const doEnhance = async () => {
    if (!enhanceTarget) return;

    const currentLevel = enhanceTarget.level;

    // 만렙 체크 (13강)
    if (currentLevel >= 13) {
      showToast("이미 최대 강화 단계입니다!");
      return;
    }

    setIsEnhancing(true);
    setEnhanceMsg("🎲 강화 시도 중...");

    setTimeout(async () => {
      const rateInfo = ENHANCE_RATES[currentLevel];
      const baseRate = rateInfo.success;

      // 재료 개수에 따른 보너스 (1~5개, 최대 +10%)
      const materialBonus = Math.min(materials.length * 2, 10);
      const finalRate = Math.min(baseRate + materialBonus, 100);

      const roll = Math.random() * 100;
      const success = roll < finalRate;

      let nextLevel = currentLevel;

      if (success) {
        // 성공: 레벨 +1
        nextLevel = currentLevel + 1;
        setEnhanceMsg(`🔥 성공! +${nextLevel}강 달성!`);
        showToast(`✨ 강화 성공! +${nextLevel}강!`);

        // 퀘스트 업데이트 (강화 성공)
        setQuests(prev => prev.map(q => q.type === 'enhance_success' && !q.claimed ? { ...q, current: q.current + 1 } : q));

      } else {
        // 실패 처리
        if (rateInfo.downgrade && currentLevel > 1) {
          // 7강 이상에서 실패 시 레벨 하락
          nextLevel = currentLevel - 1;
          setEnhanceMsg(`💔 실패... +${nextLevel}강으로 하락`);
          showToast(`😭 강화 실패... ${currentLevel}강 → ${nextLevel}강`);
        } else {
          // 6강 이하에서 실패 시 레벨 유지
          nextLevel = currentLevel;
          setEnhanceMsg(`💫 실패... +${currentLevel}강 유지`);
          showToast(`실패했지만 레벨이 유지됩니다!`);
        }
      }

      const used = materials.map(m => m.uid);
      setMySquad(prev => prev.filter(x => !used.includes(x.uid)).map(x => x.uid === enhanceTarget.uid ? { ...x, level: nextLevel } : x));

      // enhanceTarget도 업데이트
      setEnhanceTarget(prev => prev ? { ...prev, level: nextLevel } : null);

      // 데이터베이스 업데이트
      try {
        await apiService.updatePlayer(enhanceTarget.uid, nextLevel);
        // 재료 선수들 삭제
        for (const material of materials) {
          await apiService.deletePlayer(material.uid);
        }
      } catch (error) {
        console.error('강화 업데이트 오류:', error);
      }

      setMaterials([]);
      setIsEnhancing(false);
    }, 1200);
  };

  // 🔥 [추가] 강화 확률 표시 함수
  const getEnhanceChance = () => {
    if (!enhanceTarget) return 0;
    const currentLevel = enhanceTarget.level;
    if (currentLevel >= 13) return 0;

    const rateInfo = ENHANCE_RATES[currentLevel];
    const materialBonus = Math.min(materials.length * 2, 10);
    return Math.min(rateInfo.success + materialBonus, 100);
  };

  const autoLineup = () => {
    const slots = formationList[myFormation].slots;
    const newArr = Array(slots.length).fill(null);
    const used = new Set();
    slots.forEach((pos, idx) => {
      const cand = mySquad.filter(x => x.pos === pos && !used.has(x.uid)).sort((a, b) => (b.ovr + (b.level || 1) * 2) - (a.ovr + (a.level || 1) * 2));
      if (cand.length > 0) { newArr[idx] = cand[0].uid; used.add(cand[0].uid); }
    });
    setLineup(newArr);
    showToast("자동 선발 완료");
  };

  const startMatch = () => {
    if (lineup.includes(null)) { showToast("라인업을 모두 채워주세요!"); return; }

    let oppName = opponent;
    let diff = difficulty;
    let oppSquadOvr = 0; // AI or Friend OVR

    // 내 팀 오버롤 계산
    const myTeamOvr = calculateTeamOvr(lineup);

    if (gameMode === 'tournament') {
      const teams = sport === 'soccer' ? TEAMS_SOCCER : TEAMS_NBA;

      // 내 팀 제외하고 랜덤 (내 팀 정보가 있으면)
      let cand = teams;
      if (mySquad.length > 0) {
        const myTeamVal = mySquad[0].team;
        const myTeamName = Array.isArray(myTeamVal) ? myTeamVal[0] : myTeamVal;
        cand = teams.filter(t => t !== myTeamName);
      }

      if (cand.length === 0) cand = teams; // 예외 처리
      oppName = cand[Math.floor(Math.random() * cand.length)];
      setOpponent(oppName);

      // 토너먼트 AI OVR: 내 오버롤 + 난이도에 따른 조정 (긴장감 조성)
      oppSquadOvr = myTeamOvr + DIFFICULTIES[difficulty].bonus;
    } else {
      // 친선 or 친구
      if (opponent.startsWith('(Friend)')) {
        // 친구 대전: 친구 스쿼드 OVR 계산
        try {
          const friendSquad = JSON.parse(localStorage.getItem('friend_squad'));
          // 친구는 라인업을 안짰으므로, 상위 11명/5명 자동 계산한다고 가정 (간략화)
          const sorted = friendSquad.sort((a, b) => (b.ovr + b.level) - (a.ovr + a.level));
          const best = sorted.slice(0, sport === 'soccer' ? 11 : 5);
          let total = 0;
          best.forEach(p => total += (p.ovr + p.level));
          oppSquadOvr = Math.floor(total / best.length);
        } catch (e) {
          oppSquadOvr = myTeamOvr; // Fallback
        }
      } else {
        // 일반 AI 친선: 내 오버롤 기준 난이도 적용
        oppSquadOvr = myTeamOvr + DIFFICULTIES[difficulty].bonus;
      }
    }

    setMatchState({
      q: 1, time: sport === 'soccer' ? 0 : 12.0, score: { my: 0, ai: 0 },
      logs: [`경기 시작! vs ${oppName} (OVR: ${oppSquadOvr})`], isPlaying: true, isFinished: false,
      myTeamOvr, oppSquadOvr // 매치 스테이트에 오버롤 저장
    });
    setScreen('match');

    // 퀘스트 업데이트 (경기 시작)
    setQuests(prev => prev.map(q => q.type === 'play_match' && !q.claimed ? { ...q, current: q.current + 1 } : q));
  };

  // --- [경기 시뮬레이션] ---
  useEffect(() => {
    let interval;
    if (screen === 'match' && matchState.isPlaying && !matchState.isFinished) {
      interval = setInterval(() => {
        setMatchState(prev => {
          let { q, time, score, logs, myTeamOvr, oppSquadOvr } = prev;
          let newTime = time;
          let newScore = { ...score };
          let newLogs = [...logs];
          let finished = false;

          // 오버롤 차이에 따른 승률 보정
          const powerDiff = (myTeamOvr || 100) - (oppSquadOvr || 100);

          // 종목별 점수/시간 로직
          if (sport === 'soccer') {
            newTime += 2;
            if (newTime >= 90) {
              finished = true;
              // 🔥 [추가] 토너먼트 승부차기 로직
              if (gameMode === 'tournament' && newScore.my === newScore.ai) {
                // 승부차기 로그 추가
                newLogs.unshift(`📢 90분 종료! 승부차기 돌입!`);

                // 단순 확률 계산 (50:50 + 전력차 미세 보정?)
                // PK는 운이 강하므로 거의 5:5
                let myPK = 0;
                let aiPK = 0;
                const rounds = 5;
                for (let i = 0; i < rounds; i++) {
                  if (Math.random() < 0.75) myPK++; // 기본 성공률 75%
                  if (Math.random() < 0.75) aiPK++;
                }
                while (myPK === aiPK) { // 서든데스
                  if (Math.random() < 0.75) myPK++;
                  if (Math.random() < 0.75) aiPK++;
                }

                newLogs.unshift(`⚽ 승부차기 결과: ${myPK} - ${aiPK}`);
                // 점수에 PK 결과 반영하지 않고 승패만 결정? 
                // 아니면 점수에 .1 등을 더해서 승리 처리?
                // 가장 깔끔한 건 점수 자체를 PK 점수로 덮어쓰거나, 별도 winner 플래그 사용.
                // 여기서는 점수에 가산하여 승패 판별되게 함.
                if (myPK > aiPK) newScore.my += 0.1; // 승리 마킹
                else newScore.ai += 0.1;
              }
            }

            if (!finished) {
              const myP = 100 + formationList[myFormation].atk;
              const aiP = 100 + DIFFICULTIES[difficulty].bonus;
              // powerDiff is already calculated above based on myTeamOvr and oppSquadOvr
              // Re-calculating it here with formationList and DIFFICULTIES might be redundant or different.
              // Sticking to the original powerDiff calculation for consistency with the instruction's intent.
              // const powerDiff = myP - aiP; // This line is from the instruction, but powerDiff is already defined.
              const myGoalChance = Math.max(0.01, Math.min(0.10, 0.04 + powerDiff * 0.002));
              const aiGoalChance = Math.max(0.01, Math.min(0.10, 0.04 - powerDiff * 0.002));
              if (Math.random() < myGoalChance) { newScore.my++; newLogs.unshift(`⚽ GOAL! (${newTime}')`); }
              if (Math.random() < aiGoalChance) { newScore.ai++; newLogs.unshift(`⚽ 실점... (${newTime}')`); }
            }
          } else {
            // NBA Logic
            newTime -= 0.5;
            if (newTime <= 0) {
              // 4쿼터 종료 시점
              if (q >= 4) {
                if (newScore.my === newScore.ai) {
                  // 🔥 [추가] 무한 연장전 (OT)
                  // 친선이든 토너먼트든 농구는 비기면 연장
                  q++;
                  newTime = 5.0; // 연장전은 짧게 (5단위)
                  newLogs.unshift(`🏀 동점! ${q - 4}차 연장(OT) 돌입!`);
                } else {
                  finished = true;
                }
              } else {
                q++; newTime = 12.0; newLogs.unshift(`🏀 ${q}쿼터 시작`);
              }
            }

            // 득점 로직 (연장전 포함 동일)
            if (!finished) {
              const myP = 100 + formationList[myFormation].atk;
              const aiP = 100 + DIFFICULTIES[difficulty].bonus;
              // powerDiff is already calculated above based on myTeamOvr and oppSquadOvr
              // const powerDiff = myP - aiP; // This line is from the instruction, but powerDiff is already defined.
              const myScoreChance = Math.max(0.15, Math.min(0.60, 0.35 + powerDiff * 0.01));
              const aiScoreChance = Math.max(0.15, Math.min(0.60, 0.35 - powerDiff * 0.01));

              if (Math.random() < myScoreChance) {
                const pts = Math.random() > 0.6 ? 3 : 2; newScore.my += pts; if (Math.random() < 0.3) newLogs.unshift(`🔥 ${pts}점 성공!`);
              }
              if (Math.random() < aiScoreChance) newScore.ai += Math.random() > 0.6 ? 3 : 2;
            }
          }

          if (finished) {
            const win = newScore.my > newScore.ai;
            newLogs.unshift(`🏁 경기 종료! ${win ? '승리' : '패배'}`);
            return { ...prev, isFinished: true, isPlaying: false, logs: newLogs, winner: win };
          }
          return { ...prev, q, time: newTime, score: newScore, logs: newLogs };
        });
      }, sport === 'soccer' ? 50 : 100);
    }
    return () => clearInterval(interval);
  }, [screen, matchState.isPlaying, sport]);

  const endMatch = () => {
    if (matchState.winner) {
      const reward = sport === 'soccer' ? 500000000 : 3000000;
      setMoney(prev => prev + reward);

      // 전적 업데이트 (승리)
      setRecords(prev => ({
        ...prev,
        matches: prev.matches + 1,
        wins: prev.wins + 1,
        goalsScored: prev.goalsScored + matchState.score.my,
        goalsConceded: prev.goalsConceded + matchState.score.ai
      }));

      // 🔥 [핵심 수정] 토너먼트 진행 로직
      if (gameMode === 'tournament') {
        if (round === 2) {
          // 결승 승리 -> 우승 처리
          showToast(`🏆🏆🏆 토너먼트 우승!!! (${formatMoney(reward * 10)} 획득)`);
          setMoney(prev => prev + (reward * 10)); // 우승 보너스
          setRecords(prev => ({ ...prev, tournamentWins: prev.tournamentWins + 1 })); // 우승 기록
          setRound(16); // 라운드 초기화
          setScreen('lobby');
        } else {
          // 16강, 8강, 4강 승리 -> 다음 라운드 진출
          const nextRound = round / 2;
          setRound(nextRound);
          showToast(`🎉 승리! ${nextRound === 2 ? '결승' : nextRound + '강'} 진출!`);

          setRecords(prev => ({
            ...prev, highestRound: nextRound < prev.highestRound ? nextRound : prev.highestRound // 16 -> 8 -> 4 -> 2 순으로 작아짐
          }));

          // 로비로 가지 않고 즉시 라인업 화면 유지 (다음 경기 준비)
          setScreen('lineup');
        }
      } else { // 친선
        showToast(`💰 승리 보상 획득!`);
        setScreen('lobby');
      }
    } else {
      // 패배 시
      setRecords(prev => ({
        ...prev,
        matches: prev.matches + 1,
        losses: prev.losses + 1,
        goalsScored: prev.goalsScored + matchState.score.my,
        goalsConceded: prev.goalsConceded + matchState.score.ai
      }));

      if (gameMode === 'tournament') {
        showToast("😭 토너먼트 탈락...");
        setRound(16); // 탈락 시 초기화
      }
      setScreen('lobby');
    }
  };


  // --- [렌더링] ---
  if (showLogin) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginTop: '150px' }}>
          <h1 style={{ color: '#fff', fontSize: '28px', marginBottom: '10px' }}>MULTI SPORTS MANAGER</h1>
          <p style={{ color: '#aaa', marginBottom: '50px' }}>로그인 또는 게스트로 시작하세요</p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px', margin: '0 auto' }}>
            <input
              style={styles.input}
              placeholder="ID 입력 (신규/기존)"
              value={loginId}
              onChange={e => setLoginId(e.target.value)}
            />
            <button type="submit" style={{ ...styles.actionBtn, background: themeColor }}>로그인 / 회원가입</button>
          </form>

          <div style={{ marginTop: '20px' }}>
            <button onClick={handleGuestLogin} style={{ background: 'transparent', border: 'none', color: '#aaa', textDecoration: 'underline', cursor: 'pointer' }}>
              게스트로 바로 시작하기
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!sport) {
    return (
      <div style={styles.container}>
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h1 style={{ color: '#fff', fontSize: '28px', marginBottom: '10px' }}>MULTI SPORTS MANAGER</h1>
          <p style={{ color: '#aaa', marginBottom: '50px' }}>v18.0 Ultimate Team Edition</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <button onClick={() => { (async () => { setSport('soccer'); await loadData('soccer'); setScreen('lobby'); })(); }} style={{ ...styles.selectBtn, background: 'linear-gradient(45deg, #11998e, #38ef7d)' }}>
              ⚽ 축구 (FC STYLE)
            </button>
            <button onClick={() => { (async () => { setSport('nba'); await loadData('nba'); setScreen('lobby'); })(); }} style={{ ...styles.selectBtn, background: 'linear-gradient(45deg, #f12711, #f5af19)' }}>
              🏀 농구 (NBA STYLE)
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (screen === 'lobby') {
    return (
      <div style={styles.container}>
        <div style={styles.topBar}>
          <div>
            <button onClick={() => setSport(null)} style={styles.miniBtn}>🔙 뒤로가기</button>
            <button onClick={handleLogout} style={{ ...styles.miniBtn, marginLeft: '5px', background: '#d32f2f' }}>로그아웃</button>
          </div>
          <div style={{ color: themeColor, fontWeight: 'bold' }}>{formatMoney(money)}</div>
        </div>
        <h1 style={{ textAlign: 'center', color: themeColor, marginTop: '30px' }}>{sport === 'soccer' ? 'FC MANAGER' : 'NBA MANAGER'}</h1>
        <div style={{ ...styles.menuGrid, gridTemplateColumns: '1fr 1fr' }}>
          <button style={styles.menuBtn} onClick={() => setScreen('market')}>🛒 이적 시장</button>
          <button style={styles.menuBtn} onClick={() => setScreen('enhance')}>🔨 선수 강화</button>
          <button style={styles.menuBtn} onClick={() => setScreen('management')}>💼 선수 관리</button>
          <button style={styles.menuBtn} onClick={() => setScreen('shop')}>📦 선수팩 상점</button>
          <button style={styles.menuBtn} onClick={() => setScreen('records')}>📊 전적 기록</button>
          <button style={styles.menuBtn} onClick={() => setScreen('quests')}>📜 퀘스트</button>
          <button style={{ ...styles.menuBtn, background: '#2979ff' }} onClick={() => { setGameMode('friendly'); setScreen('lineup'); }}>⚔️ 친선 경기</button>
          <button style={{ ...styles.menuBtn, background: '#ff9800' }} onClick={() => { setGameMode('tournament'); setRound(16); setScreen('lineup'); }}>🏆 토너먼트</button>
          <button style={{ ...styles.menuBtn, background: '#9c27b0', gridColumn: '1 / -1' }} onClick={() => setScreen('friend_match')}>🤝 친구 대전 (코드 공유)</button>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {toast.show && <div style={styles.toast}>{toast.msg}</div>}

      <div style={styles.header}>
        <button onClick={() => setScreen('lobby')} style={styles.backBtn}>🏠 홈</button>
        <h3 style={{ color: themeColor, margin: 0 }}>{screen.toUpperCase()}</h3>
        <div style={{ fontSize: '12px' }}>{formatMoney(money)}</div>
      </div>

      {screen === 'friend_match' && (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2 style={{ color: themeColor }}>🤝 친구 대전</h2>
          <div style={{ marginBottom: '30px', background: '#333', padding: '15px', borderRadius: '10px' }}>
            <h3>📤 내 팀 코드 공유</h3>
            <p style={{ fontSize: '12px', color: '#aaa' }}>이 코드를 친구에게 보내주세요.</p>
            <textarea
              readOnly
              value={btoa(JSON.stringify({ name: user.name, squad: mySquad, formation: myFormation, sport }))}
              style={{ width: '100%', height: '60px', background: '#222', color: '#fff', border: '1px solid #555', borderRadius: '5px', padding: '5px', fontSize: '10px' }}
            />
            <button onClick={() => {
              navigator.clipboard.writeText(btoa(JSON.stringify({ name: user.name, squad: mySquad, formation: myFormation, sport })));
              showToast("코드가 복사되었습니다!");
            }} style={{ ...styles.actionBtn, marginTop: '10px', background: themeColor }}>팀 코드 복사하기</button>
          </div>

          <div style={{ background: '#333', padding: '15px', borderRadius: '10px' }}>
            <h3>📥 친구 팀 불러오기</h3>
            <p style={{ fontSize: '12px', color: '#aaa' }}>친구가 보낸 코드를 입력하세요.</p>
            <textarea
              className="friend-code-input"
              placeholder="코드 붙여넣기..."
              style={{ width: '100%', height: '60px', background: '#222', color: '#fff', border: '1px solid #555', borderRadius: '5px', padding: '5px' }}
            />
            <button onClick={() => {
              const code = document.querySelector('.friend-code-input').value;
              if (!code) return;
              try {
                const data = JSON.parse(atob(code));
                if (data.sport !== sport) { showToast(`종목이 다릅니다! (${data.sport})`); return; }

                // 친구 데이터로 매치 설정
                setOpponent(`(Friend) ${data.name}`);
                setGameMode('friendly'); // 친구 대전은 친선 모드 기반
                // 여기서 친구 스쿼드를 어딘가 저장해서 매치 엔진이 쓰게 해야 함.
                // 간단히 opponent state를 객체로 확장하거나, 임시 전역 변수/State 사용
                // 여기서는 Opponent string에 마커를 남기고, startMatch에서 분기 처리하거나
                // matchState에 opponentSquad를 넘겨주는게 좋음. 
                // matchState 구조상 startMatch 내에서 처리해야 함. 
                // **중요**: startMatch 로직 수정 필요.

                // 임시 방편: 로컬스토리지에 'friend_squad' 저장
                localStorage.setItem('friend_squad', JSON.stringify(data.squad));

                setScreen('lineup');
                showToast(`${data.name}님의 팀을 불러왔습니다! 경기 시작을 눌러주세요.`);
              } catch (e) {
                showToast("잘못된 코드입니다.");
              }
            }} style={{ ...styles.actionBtn, marginTop: '10px', background: '#2979ff', color: '#fff' }}>대결 준비 (라인업 이동)</button>
          </div>
        </div>
      )}

      {screen === 'quests' && (
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: themeColor, textAlign: 'center' }}>퀘스트</h2>
          <div style={styles.list}>
            {quests.map(q => (
              <div key={q.id} style={{ ...styles.card, background: q.claimed ? '#222' : '#333', opacity: q.claimed ? 0.5 : 1 }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold', color: q.claimed ? '#aaa' : '#fff' }}>{q.desc}</div>
                  <div style={{ fontSize: '12px', color: '#aaa' }}>진행도: {q.current} / {q.target}</div>
                </div>
                <div>
                  {q.current >= q.target && !q.claimed ? (
                    <button onClick={() => {
                      // 보상 수령 로직
                      if (typeof q.reward === 'number') {
                        setMoney(prev => prev + q.reward);
                        showToast(`💰 ${formatMoney(q.reward)} 획득!`);
                      } else {
                        // 아이템(팩) 보상
                        const type = q.reward;
                        setInventory(prev => {
                          const exists = prev.find(i => i.type === type);
                          if (exists) return prev.map(i => i.type === type ? { ...i, count: i.count + 1 } : i);
                          return [...prev, { type, count: 1 }];
                        });
                        showToast(`🎁 ${type} 획득!`);
                      }
                      setQuests(prev => prev.map(x => x.id === q.id ? { ...x, claimed: true } : x));
                    }} style={{ padding: '5px 10px', background: themeColor, border: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
                      보상 받기
                    </button>
                  ) : (
                    <span style={{ fontSize: '12px', color: '#666' }}>{q.claimed ? '완료됨' : '진행중'}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {screen === 'shop' && (
        <div style={{ padding: '20px' }}>
          <h2 style={{ color: themeColor, textAlign: 'center' }}>선수팩 상점</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { id: 'pack_bronze', name: '브론즈 팩', price: 10000000, color: '#cd7f32', desc: 'OVR 70+' },
              { id: 'pack_silver', name: '실버 팩', price: 50000000, color: '#c0c0c0', desc: 'OVR 80+' },
              { id: 'pack_gold', name: '골드 팩', price: 200000000, color: '#ffd700', desc: 'OVR 85+' },
              { id: 'pack_pos_fw', name: '공격수 팩', price: 150000000, color: '#ff5252', desc: 'FW 확정' },
            ].map(pack => (
              <div key={pack.id} style={{ ...styles.card, flexDirection: 'column', alignItems: 'center', padding: '20px', background: '#333' }}>
                <div style={{ width: '50px', height: '70px', background: pack.color, marginBottom: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000' }}>PACK</div>
                <div style={{ fontWeight: 'bold' }}>{pack.name}</div>
                <div style={{ fontSize: '10px', color: '#aaa' }}>{pack.desc}</div>
                <button onClick={() => {
                  const cost = sport === 'soccer' ? pack.price : pack.price / 1000;
                  if (money < cost) { showToast("잔액이 부족합니다."); return; }
                  setMoney(prev => prev - cost);

                  // 팩 오픈 로직 (즉시 오픈)
                  const pool = (sport === 'soccer' ? SOCCER_DATA : NBA_DATA);
                  let filtered = pool;
                  if (pack.id === 'pack_bronze') filtered = pool.filter(p => p.ovr >= 70);
                  if (pack.id === 'pack_silver') filtered = pool.filter(p => p.ovr >= 80);
                  if (pack.id === 'pack_gold') filtered = pool.filter(p => p.ovr >= 85);
                  if (pack.id === 'pack_pos_fw') filtered = pool.filter(p => p.pos === 'FW' || p.pos === 'F');

                  const result = filtered[Math.floor(Math.random() * filtered.length)];
                  const newPlayer = { ...result, uid: `${Date.now()}_${Math.random()}`, level: 1 };

                  setMySquad(prev => [newPlayer, ...prev]);
                  // 퀘스트 업데이트 (팩 까기도 퀘스트가 있다면..?)
                  showToast(`🎉 ${result.name} (${result.ovr}) 획득!`);

                  // 인벤토리 팩 까기 (보관함에 있는 경우) - 상점 구매는 즉시 오픈
                }} style={{ marginTop: '10px', padding: '5px 10px', background: themeColor, border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  {formatMoney(sport === 'soccer' ? pack.price : pack.price / 1000)}
                </button>
              </div>
            ))}
          </div>

          <h3 style={{ marginTop: '30px' }}>나의 보관함</h3>
          <div style={styles.hScroll}>
            {inventory.length === 0 ? <div style={{ color: '#aaa' }}>보관함이 비어있습니다.</div> : inventory.map((item, idx) => (
              <div key={idx} style={{ minWidth: '80px', padding: '10px', background: '#444', borderRadius: '10px', textAlign: 'center' }}>
                <div>📦 {item.type}</div>
                <div>x{item.count}</div>
                <button onClick={() => {
                  // 인벤토리 팩 오픈
                  const packId = item.type;
                  const pool = (sport === 'soccer' ? SOCCER_DATA : NBA_DATA);
                  let filtered = pool.filter(p => p.ovr >= 85); // 기본 골드팩 가정
                  // ... 팩 타입별 로직 ...
                  const result = filtered[Math.floor(Math.random() * filtered.length)];
                  setMySquad(prev => [{ ...result, uid: `${Date.now()}_${Math.random()}`, level: 1 }, ...prev]);

                  setInventory(prev => {
                    const target = prev.find(i => i.type === packId);
                    if (target.count > 1) return prev.map(i => i.type === packId ? { ...i, count: i.count - 1 } : i);
                    return prev.filter(i => i.type !== packId);
                  });
                  showToast(`🎉 ${result.name} 획득!`);
                }} style={{ fontSize: '10px', padding: '2px 5px', marginTop: '5px' }}>사용</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {screen === 'records' && (
        <div style={{ padding: '20px', color: '#fff' }}>
          <h2 style={{ color: themeColor, textAlign: 'center' }}>나의 전적</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '20px' }}>
            <div style={styles.card}>경기 수: {records.matches}</div>
            <div style={styles.card}>승리: {records.wins}</div>
            <div style={styles.card}>무승부: {records.draws}</div>
            <div style={styles.card}>패배: {records.losses}</div>
            <div style={styles.card}>득점: {records.goalsScored}</div>
            <div style={styles.card}>실점: {records.goalsConceded}</div>
            <div style={{ ...styles.card, gridColumn: '1 / -1', background: '#333' }}>
              승률: {records.matches > 0 ? ((records.wins / records.matches) * 100).toFixed(1) : 0}%
            </div>
            <div style={{ ...styles.card, gridColumn: '1 / -1', background: '#ff9800', color: '#000' }}>
              🏆 토너먼트 우승: {records.tournamentWins}회
            </div>
            <div style={{ ...styles.card, gridColumn: '1 / -1', background: '#444' }}>
              최고 성적: {records.highestRound === 16 ? '본선 진출' : records.highestRound === 2 ? '준우승' : (records.highestRound === 1 ? '우승' : records.highestRound + '강')}
            </div>
          </div>
        </div>
      )}

      {screen === 'management' && (
        <>
          <div style={{ textAlign: 'center', marginBottom: '10px' }}>나의 선수단 가치: {formatMoney(mySquad.reduce((acc, p) => acc + getPrice(p.ovr, p.level || 1), 0))}</div>
          <input style={styles.input} placeholder="선수 검색..." value={searchText} onChange={e => setSearchText(e.target.value)} />
          <div style={styles.list}>
            {mySquad.filter(p => p.name.includes(searchText)).map((p, idx) => (
              <div key={p.uid} style={styles.card}>
                <img src={p.img} style={styles.face} onError={handleImgError} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 'bold' }}>{p.name} (+{p.level})</div>
                  <div style={{ fontSize: '10px', color: '#aaa' }}>{Array.isArray(p.team) ? p.team[0] : p.team} | {p.pos}</div>
                  <div style={{ fontSize: '10px', color: themeColor }}>가치: {formatMoney(getPrice(p.ovr, p.level || 1))}</div>
                </div>
                <div style={{ display: 'flex', gap: '5px' }}>
                  <button onClick={() => { setEnhanceTarget(p); setScreen('enhance'); }} style={{ ...styles.miniBtn, background: themeColor, color: '#000' }}>강화</button>
                  <button onClick={() => sellPlayer(p)} style={{ ...styles.miniBtn, background: '#d32f2f' }}>방출</button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {screen === 'market' && (
        <>
          <div style={styles.teamScroll}>
            <button onClick={() => setTeamFilter('ALL')} style={teamFilter === 'ALL' ? { ...styles.teamBadge, background: '#fff', color: '#000' } : styles.teamBadge}>ALL</button>
            {currentTeams.map(t => (
              <button key={t} onClick={() => setTeamFilter(t)} style={teamFilter === t ? { ...styles.teamBadge, background: themeColor, border: `1px solid ${themeColor}` } : styles.teamBadge}>{t}</button>
            ))}
          </div>
          <input style={styles.input} placeholder="이름 검색..." value={searchText} onChange={e => setSearchText(e.target.value)} />
          <div style={styles.tabBox}>
            <button onClick={() => setMarketTab('buy')} style={marketTab === 'buy' ? { ...styles.tab, background: themeColor } : { ...styles.tab }}>영입</button>
            <button onClick={() => setMarketTab('sell')} style={marketTab === 'sell' ? { ...styles.tab, background: themeColor } : { ...styles.tab }}>방출</button>
          </div>
          <div style={styles.list}>
            {(marketTab === 'buy' ? dataList : mySquad)
              .filter(p => {
                const isTeamMatch = teamFilter === 'ALL' || (Array.isArray(p.team) ? p.team.includes(teamFilter) : p.team === teamFilter);
                return isTeamMatch && p.name.includes(searchText);
              })
              .map((p, idx) => (
                <div key={`${p.uid || p.id}_${idx}`} style={styles.card} onClick={() => marketTab === 'buy' ? buyPlayer(p) : sellPlayer(p)}>
                  <img src={p.img} style={styles.face} onError={handleImgError} />
                  <div>
                    <div style={{ fontWeight: 'bold' }}>{p.name} {p.level && `(+${p.level})`}</div>
                    <div style={{ fontSize: '10px', color: '#aaa' }}>{Array.isArray(p.team) ? p.team[0] : p.team} | {p.pos}</div>
                  </div>
                  <div style={{ marginLeft: 'auto', color: '#ffeb3b', fontSize: '12px' }}>{formatMoney(getPrice(p.ovr, p.level || 1))}</div>
                </div>
              ))}
          </div>
        </>
      )}

      {screen === 'enhance' && (
        enhanceTarget ? (
          <div style={{ textAlign: 'center' }}>
            <div style={{ ...styles.bigCard, background: getCardColor(enhanceTarget.level) }}>
              <img src={enhanceTarget.img} style={{ width: '80px', borderRadius: '50%' }} onError={handleImgError} />
              <h2>{enhanceTarget.name} +{enhanceTarget.level}</h2>
            </div>
            <div style={{ color: themeColor, margin: '10px' }}>{enhanceMsg}</div>
            <button onClick={doEnhance} disabled={isEnhancing || materials.length === 0} style={{ ...styles.actionBtn, background: themeColor }}>강화 시작</button>
            <div style={{ textAlign: 'left', marginTop: '20px' }}>재료 ({materials.length}/5):</div>
            <input style={styles.input} placeholder="재료 검색..." value={searchText} onChange={e => setSearchText(e.target.value)} />
            <div style={styles.hScroll}>
              {mySquad.filter(x => x.uid !== enhanceTarget.uid && !materials.find(m => m.uid === x.uid) && x.name.includes(searchText)).map(p => (
                <div key={p.uid} onClick={() => { if (materials.length < 5) setMaterials([...materials, p]) }} style={styles.miniCard}>
                  <img src={p.img} style={{ width: '30px', borderRadius: '50%' }} onError={handleImgError} />
                  <div style={{ fontSize: '9px' }}>{p.name}</div>
                </div>
              ))}
            </div>
            <button onClick={() => { setEnhanceTarget(null); setMaterials([]); }} style={{ marginTop: '20px', background: '#555', padding: '10px', border: 'none', color: '#fff', borderRadius: '5px' }}>취소</button>
          </div>
        ) : (
          <>
            <input style={styles.input} placeholder="강화할 선수 검색..." value={searchText} onChange={e => setSearchText(e.target.value)} />
            <div style={styles.list}>
              {mySquad.filter(p => p.name.includes(searchText)).map(p => (
                <div key={p.uid} style={styles.card} onClick={() => { setEnhanceTarget(p); setMaterials([]); setSearchText(""); }}>
                  <img src={p.img} style={styles.face} onError={handleImgError} />
                  <div>{p.name} (+{p.level})</div>
                </div>
              ))}
            </div>
          </>
        )
      )}

      {screen === 'lineup' && (
        <>
          {modalSlot && (
            <div style={styles.modal}>
              <div style={styles.modalBox}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <h3>{modalSlot.pos} 선택</h3>
                  <button onClick={() => setModalSlot(null)} style={{ background: '#444', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>닫기</button>
                </div>
                <input style={styles.input} placeholder="검색..." value={searchText} onChange={e => setSearchText(e.target.value)} />
                <div style={styles.list}>
                  {mySquad.filter(p => p.pos === modalSlot.pos && p.name.includes(searchText)).map(p => (
                    <div key={p.uid} style={{ ...styles.card, border: lineup.includes(p.uid) ? `1px solid ${themeColor}` : '1px solid #333' }}
                      onClick={() => { const next = [...lineup]; next[modalSlot.idx] = p.uid; setLineup(next); setModalSlot(null); setSearchText(""); }}>
                      <img src={p.img} style={styles.face} onError={handleImgError} /><div>{p.name} (+{p.level})</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 🔥 [추가됨] 토너먼트 라운드 표시 UI */}
          {gameMode === 'tournament' && (
            <div style={{ textAlign: 'center', marginBottom: '15px', padding: '10px', background: '#333', borderRadius: '10px', border: `1px solid ${themeColor}` }}>
              <div style={{ color: '#aaa', fontSize: '12px' }}>현재 라운드</div>
              <div style={{ color: themeColor, fontWeight: 'bold', fontSize: '20px' }}>
                {round === 2 ? '🏆 결승전 (FINAL)' : `🏆 ${round}강 토너먼트`}
              </div>
            </div>
          )}

          {/* 🔥 [추가] 난이도 선택 UI */}
          <div style={{ display: 'flex', gap: '5px', marginBottom: '10px', background: '#222', padding: '5px', borderRadius: '10px' }}>
            {Object.keys(DIFFICULTIES).map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                style={{
                  flex: 1,
                  padding: '8px',
                  borderRadius: '5px',
                  border: difficulty === d ? `1px solid ${themeColor}` : '1px solid #444',
                  background: difficulty === d ? themeColor : '#333',
                  color: difficulty === d ? '#000' : '#888',
                  fontWeight: difficulty === d ? 'bold' : 'normal',
                  cursor: 'pointer',
                  fontSize: '12px'
                }}
              >
                {d}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <select style={{ flex: 1, background: '#222', color: '#fff', padding: '8px', borderRadius: '5px' }} value={myFormation} onChange={e => setMyFormation(e.target.value)}>
              {Object.keys(formationList).map(k => <option key={k} value={k}>{formationList[k].name}</option>)}
            </select>
            <button onClick={autoLineup} style={styles.miniBtn}>자동 선발</button>
          </div>

          <div style={{
            ...styles.pitch,
            background: sport === 'soccer' ? '#1b5e20' : '#1a1a1a',
            border: sport === 'soccer' ? '2px solid #fff' : '2px solid #ff5722'
          }}>
            {formationList[myFormation].slots.map((pos, idx) => {
              const p = mySquad.find(x => x.uid === lineup[idx]);
              return (
                <div key={idx} onClick={() => setModalSlot({ idx, pos })} style={{
                  ...styles.slot,
                  width: sport === 'soccer' ? '22%' : '30%',
                }}>
                  <div style={{ fontSize: '10px', color: '#aaa' }}>{pos}</div>
                  {p ? <><img src={p.img} style={{ width: '30px', borderRadius: '50%' }} onError={handleImgError} /><div style={{ fontSize: '9px', whiteSpace: 'nowrap', overflow: 'hidden', maxWidth: '100%' }}>{p.name}</div></> : <div style={{ fontSize: '20px' }}>+</div>}
                </div>
              )
            })}
          </div>
          <button onClick={startMatch} style={{ ...styles.actionBtn, background: themeColor, marginTop: '10px' }}>경기 시작</button>
        </>
      )}

      {screen === 'match' && (
        <>
          {/* 경기 화면 상단에도 라운드 표시 */}
          {gameMode === 'tournament' && (
            <div style={{ textAlign: 'center', color: '#aaa', fontSize: '12px', marginBottom: '5px' }}>
              {round === 2 ? '결승전' : `${round}강전`} - 난이도: {difficulty}
            </div>
          )}
          <div style={{ background: '#222', padding: '20px', borderRadius: '10px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '24px', fontWeight: 'bold' }}>
            <div style={{ color: themeColor }}>{matchState.score.my}</div>
            <div style={{ fontSize: '14px', textAlign: 'center', color: '#aaa' }}>{sport === 'soccer' ? `${matchState.time}'` : `Q${matchState.q}`}</div>
            <div>{matchState.score.ai}</div>
          </div>
          <div style={{ height: '300px', overflowY: 'auto', background: '#111', padding: '10px', borderRadius: '10px' }}>
            {matchState.logs.map((l, i) => <div key={i} style={{ fontSize: '12px', padding: '4px', borderBottom: '1px solid #333', color: l.includes('GOAL') || l.includes('성공') ? 'yellow' : '#fff' }}>{l}</div>)}
            ```
          </div>
          {matchState.isFinished && (
            <button onClick={endMatch} style={{ ...styles.actionBtn, background: themeColor, marginTop: '10px' }}>
              {gameMode === 'tournament' && matchState.winner && round > 2 ? '다음 라운드 진출 ➡️' : '나가기'}
            </button>
          )}
        </>
      )}

    </div>
  );
}

// --- [스타일] ---
const styles = {
  container: { maxWidth: '500px', margin: '0 auto', padding: '20px', background: '#121212', minHeight: '100vh', color: '#fff', fontFamily: 'sans-serif', position: 'relative', boxSizing: 'border-box' },
  selectBtn: { width: '100%', padding: '30px', fontSize: '20px', fontWeight: 'bold', color: '#fff', border: 'none', borderRadius: '15px', cursor: 'pointer' },
  topBar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: '#1e1e1e', borderRadius: '10px' },
  menuGrid: { display: 'grid', gap: '15px', marginTop: '30px' },
  menuBtn: { width: '100%', padding: '20px', background: '#333', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #333', paddingBottom: '10px' },
  backBtn: { background: 'transparent', border: '1px solid #555', color: '#aaa', padding: '5px 10px', borderRadius: '5px', cursor: 'pointer' },
  input: { width: '100%', padding: '10px', background: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px', boxSizing: 'border-box', marginBottom: '10px' },
  tabBox: { display: 'flex', gap: '10px', marginBottom: '10px' },
  tab: { flex: 1, padding: '10px', background: '#333', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  list: { height: '60vh', overflowY: 'auto' },
  card: { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', background: '#1e1e1e', marginBottom: '5px', borderRadius: '8px', cursor: 'pointer' },
  face: { width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', background: '#333' },
  bigCard: { padding: '20px', borderRadius: '15px', marginBottom: '10px' },
  actionBtn: { width: '100%', padding: '15px', color: '#000', border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer', fontSize: '16px' },
  hScroll: { display: 'flex', overflowX: 'auto', gap: '10px', padding: '10px 0' },
  miniCard: { minWidth: '60px', padding: '5px', background: '#333', borderRadius: '5px', textAlign: 'center', cursor: 'pointer' },

  // 🔥 [수정됨] Pitch: Flexbox로 변경하여 자동 줄바꿈 및 정렬
  pitch: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignContent: 'center', gap: '5px', padding: '20px 5px', borderRadius: '10px', minHeight: '300px', boxSizing: 'border-box', width: '100%' },

  // 🔥 [수정됨] Slot: aspectRatio 유지하되 크기는 JSX에서 제어
  slot: { background: 'rgba(0,0,0,0.5)', aspectRatio: '1/1', borderRadius: '50%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px dashed #aaa', cursor: 'pointer', boxSizing: 'border-box' },

  modal: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 1000, display: 'flex', justifyContent: 'center', alignItems: 'center' },
  modalBox: { width: '90%', maxWidth: '400px', background: '#181818', padding: '20px', borderRadius: '15px', maxHeight: '80vh', overflowY: 'auto', border: '1px solid #333' },
  toast: { position: 'fixed', bottom: '30px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,255,100,0.9)', color: '#000', padding: '10px 20px', borderRadius: '30px', zIndex: 2000, fontWeight: 'bold', animation: 'fadeIn 0.3s' },
  miniBtn: { padding: '5px 10px', background: '#444', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  teamScroll: { display: 'flex', overflowX: 'auto', gap: '8px', paddingBottom: '10px', marginBottom: '10px' },
  teamBadge: { padding: '5px 10px', borderRadius: '20px', border: '1px solid #444', background: '#222', color: '#aaa', fontSize: '12px', whiteSpace: 'nowrap', cursor: 'pointer' },
};
