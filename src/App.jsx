import React, { useState, useEffect } from 'react';

// 🔥 분리된 데이터 파일 불러오기
import { 
  SOCCER_DATA, NBA_DATA, 
  SOCCER_FORMATIONS, NBA_FORMATIONS, 
  TEAMS_SOCCER, TEAMS_NBA, 
  DIFFICULTIES 
} from './PlayerData';

export default function App() {
  // --- [Global State] ---
  const [sport, setSport] = useState(null); // 'soccer' | 'nba'
  const [screen, setScreen] = useState('lobby'); 
  const [toast, setToast] = useState({ show: false, msg: '' });

  // --- [User Data] ---
  const [money, setMoney] = useState(0);
  const [mySquad, setMySquad] = useState([]);

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
  const [matchState, setMatchState] = useState({ q: 1, time: 0, score: {my:0, ai:0}, logs: [], isPlaying: false, isFinished: false });

  const [modalSlot, setModalSlot] = useState(null);

  // --- [설정 로드 & 저장] ---
  const loadData = (selectedSport) => {
    // 버전 충돌 방지를 위해 v18로 업데이트
    const key = selectedSport === 'soccer' ? 'fc_save_v18' : 'nba_save_v18'; 
    const saved = localStorage.getItem(key);

    // 데이터 소스 선택
    const dataSrc = selectedSport === 'soccer' ? SOCCER_DATA : NBA_DATA;
    const defaultForm = selectedSport === 'soccer' ? '4-4-2' : 'Balanced';
    const squadSize = selectedSport === 'soccer' ? 11 : 5;

    if (saved) {
      const parsed = JSON.parse(saved);
      setMoney(parsed.money);
      // [중요] 기존 데이터에 uid가 없는 경우를 대비해 안전장치 추가
      const safeSquad = parsed.mySquad.map((p, idx) => ({
        ...p,
        uid: p.uid || Date.now() + idx + Math.random()
      }));
      setMySquad(safeSquad);
    } else {
      // 초기화 (Starter Pack)
      const starters = [];
      for(let i=0; i<squadSize; i++) {
        const rnd = dataSrc[Math.floor(Math.random()*dataSrc.length)];
        starters.push({ ...rnd, uid: Date.now()+i, level: 1 });
      }
      setMoney(selectedSport === 'soccer' ? 50000000000 : 50000000); // 초기 자금 상향
      setMySquad(starters);
    }

    setMyFormation(defaultForm);
    setLineup(Array(squadSize).fill(null));
  };

  // 자동 저장
  useEffect(() => {
    if (!sport) return;
    const key = sport === 'soccer' ? 'fc_save_v18' : 'nba_save_v18';
    localStorage.setItem(key, JSON.stringify({ money, mySquad }));
  }, [money, mySquad, sport]);

  // 화면 이동 시 필터 초기화
  useEffect(() => { 
    setSearchText(""); 
    setTeamFilter("ALL");
  }, [screen]);


  // --- [유틸리티] ---
  const showToast = (msg) => { setToast({ show: true, msg }); setTimeout(() => setToast({ show: false, msg: '' }), 2000); };
  const handleImgError = (e) => { e.target.onerror=null; e.target.src="https://placehold.co/100?text=No+Img"; };

  const formatMoney = (val) => {
    if (sport === 'soccer') {
       if(val>=1000000000000) return (val/1000000000000).toFixed(1)+'조';
       return (val/100000000).toFixed(0)+'억';
    }
    return `$ ${(val/10000).toFixed(0)}만`;
  };

  const getPrice = (ovr, lvl) => {
    const base = sport === 'soccer' ? 500000000 : 10000;
    const baseline = sport === 'soccer' ? 100 : 100; 
    // 레벨에 따른 가격 상승폭 증가
    return Math.floor(base * Math.pow(1.1, ovr-baseline) * (lvl * lvl));
  };

  const getCardColor = (lvl) => {
    if (lvl >= 8) return "linear-gradient(135deg, #fce38a, #f38181)";
    if (lvl >= 5) return "linear-gradient(135deg, #e0e0e0, #cfdef3)";
    return sport === 'soccer' ? "linear-gradient(135deg, #2b5876, #4e4376)" : "linear-gradient(135deg, #002d62, #000)";
  };

  // 현재 모드에 따른 데이터
  const themeColor = sport === 'soccer' ? '#00e676' : '#ff5722';
  const dataList = sport === 'soccer' ? SOCCER_DATA : NBA_DATA;
  const currentTeams = sport === 'soccer' ? TEAMS_SOCCER : TEAMS_NBA;
  const formationList = sport === 'soccer' ? SOCCER_FORMATIONS : NBA_FORMATIONS;


  // --- [게임 로직] ---

  const buyPlayer = (p) => {
    const cost = getPrice(p.ovr, 1);
    if (money < cost) { showToast("잔액이 부족합니다!"); return; }
    setMoney(prev => prev - cost);
    // [중요] 구매 시 고유 UID 생성 강화
    setMySquad(prev => [{ ...p, uid: Date.now() + Math.random(), level: 1 }, ...prev]);
    showToast(`🎉 ${p.name} 영입 성공!`);
  };

  const sellPlayer = (p) => {
    // [수정] 방출 로직 안전성 강화
    if (!p.uid) { showToast("오류: 선수 데이터 갱신 필요"); return; }

    const val = getPrice(p.ovr, p.level);
    if(window.confirm(`${p.name} (+${p.level}) 판매하시겠습니까? (${formatMoney(val)})`)) {
      setMoney(prev => prev + val);

      // UID로 정확히 제거
      setMySquad(prev => prev.filter(x => x.uid !== p.uid));

      // 라인업에서도 제거
      if(lineup.includes(p.uid)) {
        setLineup(prev => prev.map(u => u === p.uid ? null : u));
      }
      showToast("💰 판매 완료");
    }
  };

  const doEnhance = () => {
    if(!enhanceTarget) return;
    setIsEnhancing(true);
    setEnhanceMsg("강화 시도 중...");

    setTimeout(() => {
      const prob = (11 - enhanceTarget.level) * 10 * (materials.length / 5);
      const success = Math.random()*100 < prob;
      let next = enhanceTarget.level;

      if(success) { next++; setEnhanceMsg(`🔥 성공! +${next}강`); showToast("강화 성공!"); }
      else { next=Math.max(1, next-1); setEnhanceMsg(`💥 실패... +${next}강`); showToast("강화 실패..."); }

      const used = materials.map(m=>m.uid);
      setMySquad(prev => prev.filter(x => !used.includes(x.uid)).map(x => x.uid===enhanceTarget.uid ? {...x, level: next} : x));
      setMaterials([]); 
      setIsEnhancing(false);
    }, 1000);
  };

  const autoLineup = () => {
    const slots = formationList[myFormation].slots;
    const newArr = Array(slots.length).fill(null);
    const used = new Set();
    slots.forEach((pos, idx) => {
      // 포지션 매칭 로직 (G=G, F=F 등)
      const cand = mySquad.filter(x => {
        // 농구 포지션 유연성 (G,F,C) / 축구 (GK,DF,MF,FW)
        return x.pos === pos && !used.has(x.uid);
      }).sort((a,b)=>(b.ovr+b.level*2)-(a.ovr+a.level*2));

      if(cand.length>0) { newArr[idx]=cand[0].uid; used.add(cand[0].uid); }
    });
    setLineup(newArr);
    showToast("자동 선발 완료");
  };

  const startMatch = () => {
    if(lineup.includes(null)) { showToast("라인업을 모두 채워주세요!"); return; }

    let oppName = opponent;
    let diff = difficulty;

    if (gameMode === 'tournament') {
       const teams = sport === 'soccer' ? TEAMS_SOCCER : TEAMS_NBA;
       oppName = teams[Math.floor(Math.random()*teams.length)]; 
       setOpponent(oppName);
       if(round===16) diff='초급'; else if(round===8) diff='중급'; else diff='고급';
    }

    setMatchState({
      q: 1, time: sport==='soccer'?0:12.0, score: {my:0, ai:0}, 
      logs: [`경기 시작! vs ${oppName} (${diff})`], isPlaying: true, isFinished: false 
    });
    setScreen('match');
  };

  // --- [경기 시뮬레이션] ---
  useEffect(() => {
    let interval;
    if(screen === 'match' && matchState.isPlaying && !matchState.isFinished) {
      interval = setInterval(() => {
        setMatchState(prev => {
          let { q, time, score, logs } = prev;
          let newTime = time;
          let newScore = {...score};
          let newLogs = [...logs];
          let finished = false;

          // ⚽ 축구 로직
          if (sport === 'soccer') {
             newTime += 2; // 시간 가속
             const end = 90; 
             if (newTime >= end) finished = true;

             const myP = 100 + formationList[myFormation].atk;
             const aiP = 100 + DIFFICULTIES[difficulty].bonus;

             if(Math.random() < 0.05 + (myP-aiP)*0.001) { newScore.my++; newLogs.unshift(`⚽ GOAL! (${newTime}')`); }
             if(Math.random() < 0.05 - (myP-aiP)*0.001) { newScore.ai++; newLogs.unshift(`⚽ 실점... (${newTime}')`); }
          } 
          // 🏀 농구 로직
          else {
             newTime -= 0.5; // 30초씩 감소
             if (newTime <= 0) {
                if (q < 4) { q++; newTime = 12.0; newLogs.unshift(`🏀 ${q}쿼터 시작`); }
                else finished = true;
             }
             const myP = 100 + formationList[myFormation].atk;
             const aiP = 100 + DIFFICULTIES[difficulty].bonus;

             if(Math.random() < 0.4 + (myP-aiP)*0.01) { 
               const pts = Math.random()>0.6?3:2; newScore.my+=pts; if(Math.random()<0.3) newLogs.unshift(`🔥 ${pts}점 성공!`); 
             }
             if(Math.random() < 0.4 - (myP-aiP)*0.01) newScore.ai+=Math.random()>0.6?3:2;
          }

          if (finished) {
             const win = newScore.my > newScore.ai;
             newLogs.unshift(`🏁 경기 종료! ${win?'승리':'패배'}`);
             return { ...prev, isFinished: true, isPlaying: false, logs: newLogs, winner: win };
          }
          return { ...prev, q, time: newTime, score: newScore, logs: newLogs };
        });
      }, sport==='soccer'?50:100);
    }
    return () => clearInterval(interval);
  }, [screen, matchState.isPlaying, sport]);

  const endMatch = () => {
    if(matchState.winner) {
       const reward = sport==='soccer' ? 500000000 : 3000000;
       setMoney(prev => prev + reward);
       showToast(`💰 승리 보상 획득!`);
       if(gameMode==='tournament' && round>2) setRound(r=>r/2);
    }
    setScreen('lobby');
  };


  // --- [렌더링 - JSX] ---

  // 1. [메인]
  if (!sport) {
    return (
      <div style={styles.container}>
        <div style={{textAlign:'center', marginTop:'100px'}}>
          <h1 style={{color:'#fff', fontSize:'28px', marginBottom:'10px'}}>MULTI SPORTS MANAGER</h1>
          <p style={{color:'#aaa', marginBottom:'50px'}}>v18.0 Ultimate Team Edition</p>
          <div style={{display:'flex', flexDirection:'column', gap:'20px'}}>
            <button onClick={()=>{setSport('soccer'); loadData('soccer'); setScreen('lobby');}} style={{...styles.selectBtn, background: 'linear-gradient(45deg, #11998e, #38ef7d)'}}>
               ⚽ 축구 (FC STYLE)
            </button>
            <button onClick={()=>{setSport('nba'); loadData('nba'); setScreen('lobby');}} style={{...styles.selectBtn, background: 'linear-gradient(45deg, #f12711, #f5af19)'}}>
               🏀 농구 (NBA STYLE)
            </button>
          </div>
        </div>
      </div>
    )
  }

  // 2. [로비]
  if (screen === 'lobby') {
    return (
      <div style={styles.container}>
         <div style={styles.topBar}>
            <button onClick={()=>setSport(null)} style={styles.miniBtn}>🔙 나가기</button>
            <div style={{color: themeColor, fontWeight:'bold'}}>{formatMoney(money)}</div>
         </div>
         <h1 style={{textAlign:'center', color: themeColor, marginTop:'30px'}}>{sport==='soccer'?'FC MANAGER':'NBA MANAGER'}</h1>
         <div style={styles.menuGrid}>
            <button style={styles.menuBtn} onClick={()=>setScreen('market')}>🛒 이적 시장</button>
            <button style={styles.menuBtn} onClick={()=>setScreen('enhance')}>🔨 선수 강화</button>
            <button style={{...styles.menuBtn, background:'#2979ff'}} onClick={()=>{setGameMode('friendly'); setScreen('lineup');}}>⚔️ 친선 경기</button>
            <button style={{...styles.menuBtn, background:'#ff9800'}} onClick={()=>{setGameMode('tournament'); setRound(16); setScreen('lineup');}}>🏆 토너먼트</button>
         </div>
      </div>
    )
  }

  // 3. [공통 기능]
  return (
    <div style={styles.container}>
      {toast.show && <div style={styles.toast}>{toast.msg}</div>}

      <div style={styles.header}>
         <button onClick={()=>setScreen('lobby')} style={styles.backBtn}>🏠 홈</button>
         <h3 style={{color:themeColor, margin:0}}>{screen.toUpperCase()}</h3>
         <div style={{fontSize:'12px'}}>{formatMoney(money)}</div>
      </div>

      {/* --- MARKET (이적시장) --- */}
      {screen === 'market' && (
        <>
          <div style={styles.teamScroll}>
             <button onClick={()=>setTeamFilter('ALL')} style={teamFilter==='ALL'?{...styles.teamBadge, background:'#fff', color:'#000'}:styles.teamBadge}>ALL</button>
             {currentTeams.map(t=>(
                <button key={t} onClick={()=>setTeamFilter(t)} style={teamFilter===t?{...styles.teamBadge, background:themeColor, border:`1px solid ${themeColor}`}:styles.teamBadge}>{t}</button>
             ))}
          </div>

          <input style={styles.input} placeholder="이름 검색..." value={searchText} onChange={e=>setSearchText(e.target.value)} />
          <div style={styles.tabBox}>
             <button onClick={()=>setMarketTab('buy')} style={marketTab==='buy'?{...styles.tab, background:themeColor}:{...styles.tab}}>영입</button>
             <button onClick={()=>setMarketTab('sell')} style={marketTab==='sell'?{...styles.tab, background:themeColor}:{...styles.tab}}>방출</button>
          </div>
          <div style={styles.list}>
             {(marketTab==='buy' ? dataList : mySquad)
                .filter(p => {
                   const isTeamMatch = teamFilter === 'ALL' || (Array.isArray(p.team) ? p.team.includes(teamFilter) : p.team === teamFilter);
                   const isNameMatch = p.name.includes(searchText);
                   return isTeamMatch && isNameMatch;
                })
                .map((p, idx)=>(
               <div key={`${p.uid || p.id}_${idx}`} style={styles.card} onClick={()=>marketTab==='buy'?buyPlayer(p):sellPlayer(p)}>
                  <img src={p.img} style={styles.face} onError={handleImgError}/>
                  <div>
                     <div style={{fontWeight:'bold'}}>{p.name} {p.level && `(+${p.level})`}</div>
                     <div style={{fontSize:'10px', color:'#aaa'}}>
                       {Array.isArray(p.team) ? p.team[0] : p.team} | {p.pos}
                     </div>
                  </div>
                  <div style={{marginLeft:'auto', color:'#ffeb3b', fontSize:'12px'}}>{formatMoney(getPrice(p.ovr, p.level||1))}</div>
               </div>
             ))}
          </div>
        </>
      )}

      {/* --- ENHANCE (강화) --- */}
      {screen === 'enhance' && (
        enhanceTarget ? (
          <div style={{textAlign:'center'}}>
             <div style={{...styles.bigCard, background: getCardColor(enhanceTarget.level)}}>
                <img src={enhanceTarget.img} style={{width:'80px', borderRadius:'50%'}} onError={handleImgError}/>
                <h2>{enhanceTarget.name} +{enhanceTarget.level}</h2>
             </div>
             <div style={{color:themeColor, margin:'10px'}}>{enhanceMsg}</div>
             <button onClick={doEnhance} disabled={isEnhancing||materials.length===0} style={{...styles.actionBtn, background:themeColor}}>강화 시작</button>
             <div style={{textAlign:'left', marginTop:'20px'}}>재료 ({materials.length}/5):</div>
             <input style={styles.input} placeholder="재료 검색..." value={searchText} onChange={e=>setSearchText(e.target.value)} />
             <div style={styles.hScroll}>
               {mySquad.filter(x=>x.uid!==enhanceTarget.uid && !materials.find(m=>m.uid===x.uid) && x.name.includes(searchText)).map(p=>(
                 <div key={p.uid} onClick={()=>{if(materials.length<5)setMaterials([...materials,p])}} style={styles.miniCard}>
                    <img src={p.img} style={{width:'30px', borderRadius:'50%'}} onError={handleImgError}/>
                    <div style={{fontSize:'9px'}}>{p.name}</div>
                 </div>
               ))}
             </div>
             <button onClick={()=>{setEnhanceTarget(null); setMaterials([]);}} style={{marginTop:'20px', background:'#555', padding:'10px', border:'none', color:'#fff', borderRadius:'5px'}}>취소</button>
          </div>
        ) : (
          <>
             <input style={styles.input} placeholder="강화할 선수 검색..." value={searchText} onChange={e=>setSearchText(e.target.value)} />
             <div style={styles.list}>
               {mySquad.filter(p=>p.name.includes(searchText)).map(p=>(
                 <div key={p.uid} style={styles.card} onClick={()=>{setEnhanceTarget(p); setMaterials([]); setSearchText("");}}>
                    <img src={p.img} style={styles.face} onError={handleImgError}/>
                    <div>{p.name} (+{p.level})</div>
                 </div>
               ))}
             </div>
          </>
        )
      )}

      {/* --- LINEUP (라인업) --- */}
      {screen === 'lineup' && (
        <>
          {modalSlot && (
             <div style={styles.modal}>
                <div style={styles.modalBox}>
                   <div style={{display:'flex', justifyContent:'space-between', marginBottom:'10px'}}>
                      <h3>{modalSlot.pos} 선택</h3>
                      <button onClick={()=>setModalSlot(null)} style={{background:'#444', color:'#fff', border:'none', padding:'5px 10px', borderRadius:'5px'}}>닫기</button>
                   </div>
                   <input style={styles.input} placeholder="검색..." value={searchText} onChange={e=>setSearchText(e.target.value)} />
                   <div style={styles.list}>
                      {mySquad.filter(p=>p.pos===modalSlot.pos && p.name.includes(searchText)).map(p=>(
                         <div key={p.uid} style={{...styles.card, border: lineup.includes(p.uid)?`1px solid ${themeColor}`:'1px solid #333'}} 
                              onClick={()=>{ const next=[...lineup]; next[modalSlot.idx]=p.uid; setLineup(next); setModalSlot(null); setSearchText(""); }}>
                            <img src={p.img} style={styles.face} onError={handleImgError}/><div>{p.name} (+{p.level})</div>
                         </div>
                      ))}
                   </div>
                </div>
             </div>
          )}
          <div style={{display:'flex', gap:'10px', marginBottom:'10px'}}>
             <select style={{flex:1, background:'#222', color:'#fff', padding:'8px', borderRadius:'5px'}} value={myFormation} onChange={e=>setMyFormation(e.target.value)}>
               {Object.keys(formationList).map(k=><option key={k} value={k}>{formationList[k].name}</option>)}
             </select>
             <button onClick={autoLineup} style={styles.miniBtn}>자동 선발</button>
          </div>
          <div style={{...styles.pitch, background: sport==='soccer'?'#1b5e20':'#1a1a1a', border: sport==='soccer'?'2px solid #fff':'2px solid #ff5722'}}>
             {formationList[myFormation].slots.map((pos, idx)=>{
               const p = mySquad.find(x=>x.uid===lineup[idx]);
               return (
                 <div key={idx} onClick={()=>setModalSlot({idx, pos})} style={styles.slot}>
                    <div style={{fontSize:'10px', color:'#aaa'}}>{pos}</div>
                    {p ? <><img src={p.img} style={{width:'30px', borderRadius:'50%'}} onError={handleImgError}/><div style={{fontSize:'9px'}}>{p.name}</div></> : <div style={{fontSize:'20px'}}>+</div>}
                 </div>
               )
             })}
          </div>
          <button onClick={startMatch} style={{...styles.actionBtn, background:themeColor, marginTop:'10px'}}>경기 시작</button>
        </>
      )}

      {/* --- MATCH (경기) --- */}
      {screen === 'match' && (
         <>
            <div style={{background:'#222', padding:'20px', borderRadius:'10px', marginBottom:'10px', display:'flex', justifyContent:'space-between', fontSize:'24px', fontWeight:'bold'}}>
               <div style={{color:themeColor}}>{matchState.score.my}</div>
               <div style={{fontSize:'14px', textAlign:'center', color:'#aaa'}}>{sport==='soccer'?`${matchState.time}'`:`Q${matchState.q}`}</div>
               <div>{matchState.score.ai}</div>
            </div>
            <div style={{height:'300px', overflowY:'auto', background:'#111', padding:'10px', borderRadius:'10px'}}>
               {matchState.logs.map((l,i)=><div key={i} style={{fontSize:'12px', padding:'4px', borderBottom:'1px solid #333', color:l.includes('GOAL')||l.includes('성공')?'yellow':'#fff'}}>{l}</div>)}
            </div>
            {matchState.isFinished && <button onClick={endMatch} style={{...styles.actionBtn, background:themeColor, marginTop:'10px'}}>나가기</button>}
         </>
      )}
    </div>
  );
}

// --- [스타일] ---
const styles = {
  container: { maxWidth:'500px', margin:'0 auto', padding:'20px', background:'#121212', minHeight:'100vh', color:'#fff', fontFamily:'sans-serif', position:'relative' },
  selectBtn: { width:'100%', padding:'30px', fontSize:'20px', fontWeight:'bold', color:'#fff', border:'none', borderRadius:'15px', cursor:'pointer' },
  topBar: { display:'flex', justifyContent:'space-between', alignItems:'center', padding:'10px', background:'#1e1e1e', borderRadius:'10px' },
  menuGrid: { display:'grid', gap:'15px', marginTop:'30px' },
  menuBtn: { width:'100%', padding:'20px', background:'#333', color:'#fff', border:'none', borderRadius:'10px', fontSize:'16px', fontWeight:'bold', cursor:'pointer' },
  header: { display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'20px', borderBottom:'1px solid #333', paddingBottom:'10px' },
  backBtn: { background:'transparent', border:'1px solid #555', color:'#aaa', padding:'5px 10px', borderRadius:'5px', cursor:'pointer' },
  input: { width:'100%', padding:'10px', background:'#222', border:'1px solid #444', color:'#fff', borderRadius:'5px', boxSizing:'border-box', marginBottom:'10px' },
  tabBox: { display:'flex', gap:'10px', marginBottom:'10px' },
  tab: { flex:1, padding:'10px', background:'#333', color:'#fff', border:'none', borderRadius:'5px', cursor:'pointer' },
  list: { height:'60vh', overflowY:'auto' },
  card: { display:'flex', alignItems:'center', gap:'10px', padding:'10px', background:'#1e1e1e', marginBottom:'5px', borderRadius:'8px', cursor:'pointer' },
  face: { width:'40px', height:'40px', borderRadius:'50%', objectFit:'cover', background:'#333' },
  bigCard: { padding:'20px', borderRadius:'15px', marginBottom:'10px' },
  actionBtn: { width:'100%', padding:'15px', color:'#000', border:'none', borderRadius:'10px', fontWeight:'bold', cursor:'pointer', fontSize:'16px' },
  hScroll: { display:'flex', overflowX:'auto', gap:'10px', padding:'10px 0' },
  miniCard: { minWidth:'60px', padding:'5px', background:'#333', borderRadius:'5px', textAlign:'center', cursor:'pointer' },
  pitch: { display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'5px', padding:'10px', borderRadius:'10px', minHeight:'300px' },
  slot: { background:'rgba(0,0,0,0.5)', aspectRatio:'1/1', borderRadius:'50%', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', border:'1px dashed #aaa', cursor:'pointer' },
  modal: { position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,0.8)', zIndex:1000, display:'flex', justifyContent:'center', alignItems:'center' },
  modalBox: { width:'90%', maxWidth:'400px', background:'#181818', padding:'20px', borderRadius:'15px', maxHeight:'80vh', overflowY:'auto', border:'1px solid #333' },
  toast: { position:'fixed', bottom:'30px', left:'50%', transform:'translateX(-50%)', background:'rgba(0,255,100,0.9)', color:'#000', padding:'10px 20px', borderRadius:'30px', zIndex:2000, fontWeight:'bold', animation:'fadeIn 0.3s' },
  miniBtn: { padding:'5px 10px', background:'#444', color:'#fff', border:'none', borderRadius:'5px', cursor:'pointer' },
  teamScroll: { display:'flex', overflowX:'auto', gap:'8px', paddingBottom:'10px', marginBottom:'10px' },
  teamBadge: { padding:'5px 10px', borderRadius:'20px', border:'1px solid #444', background:'#222', color:'#aaa', fontSize:'12px', whiteSpace:'nowrap', cursor:'pointer' },
};
