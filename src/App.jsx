import React, { useState, useEffect } from 'react';

// 파일명이 App.jsx이므로 컴포넌트 이름도 App으로 맞췄습니다.
const App = () => {
  // 1. 공통 상태 (모드, 시간, 일시정지)
  const [sportType, setSportType] = useState('soccer'); // 'soccer' 또는 'basketball'
  const [gameTime, setGameTime] = useState(0);
  const [isPaused, setIsPaused] = useState(true);

  // 2. 축구 전용 상태
  const [soccerScore, setSoccerScore] = useState({ home: 0, away: 0 });
  const [half, setHalf] = useState(1);

  // 3. 농구 전용 상태
  const [basketScore, setBasketScore] = useState({ home: 0, away: 0 });
  const [quarter, setQuarter] = useState(1);

  // 4. 타이머 로직 (1초마다 시간 증가)
  useEffect(() => {
    let interval = null;
    if (!isPaused) {
      interval = setInterval(() => {
        setGameTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  // 5. 시간 포맷 변환 (초 -> 00:00)
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  // 6. 점수 핸들러
  const handleSoccerGoal = (team) => {
    setSoccerScore(prev => ({ ...prev, [team]: prev[team] + 1 }));
  };

  const handleBasketScore = (team, points) => {
    setBasketScore(prev => ({ ...prev, [team]: prev[team] + points }));
  };

  // 7. 화면 렌더링
  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif', textAlign: 'center' }}>

      {/* 종목 선택 탭 */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', justifyContent: 'center' }}>
        <button 
          onClick={() => setSportType('soccer')}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: sportType === 'soccer' ? '#007bff' : '#eee', 
            color: sportType === 'soccer' ? '#fff' : '#333',
            border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
          }}
        >
          ⚽ 축구 모드
        </button>
        <button 
          onClick={() => setSportType('basketball')}
          style={{ 
            padding: '10px 20px', 
            backgroundColor: sportType === 'basketball' ? '#ff9800' : '#eee',
            color: sportType === 'basketball' ? '#fff' : '#333',
            border: 'none', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
          }}
        >
          🏀 농구 모드
        </button>
      </div>

      {/* 스코어보드 */}
      <div style={{ backgroundColor: '#222', color: '#fff', padding: '30px', borderRadius: '15px', marginBottom: '20px' }}>
        <h2 style={{ margin: '0 0 10px 0', color: '#aaa' }}>
          {sportType === 'soccer' ? '⚽ SOCCER MATCH' : '🏀 BASKETBALL GAME'}
        </h2>

        <div style={{ fontSize: '4rem', fontWeight: 'bold', margin: '10px 0' }}>
          {sportType === 'soccer' 
            ? `${soccerScore.home} : ${soccerScore.away}`
            : `${basketScore.home} : ${basketScore.away}`
          }
        </div>

        <div style={{ fontSize: '1.2rem', marginBottom: '15px' }}>
          {sportType === 'soccer' ? `전반/후반: ${half}` : `쿼터: ${quarter}Q`}
          <span style={{ marginLeft: '15px', color: '#f1c40f', fontWeight: 'bold' }}>
            ⏱ {formatTime(gameTime)}
          </span>
        </div>

        <button 
          onClick={() => setIsPaused(!isPaused)} 
          style={{ 
            padding: '8px 16px', cursor: 'pointer', borderRadius: '5px', border: 'none',
            backgroundColor: isPaused ? '#2ecc71' : '#e74c3c', color: 'white', fontWeight: 'bold'
          }}
        >
          {isPaused ? '▶ 경기 시작' : '⏸ 일시 정지'}
        </button>
      </div>

      {/* 컨트롤 패널 (축구 vs 농구) */}
      <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '10px', backgroundColor: '#f9f9f9' }}>
        {sportType === 'soccer' ? (
          // === 축구 컨트롤 ===
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <button onClick={() => handleSoccerGoal('home')} style={btnStyle}>Home 골 (+1)</button>
            <button onClick={() => handleSoccerGoal('away')} style={btnStyle}>Away 골 (+1)</button>
            <button onClick={() => setHalf(h => h === 1 ? 2 : 1)} style={{ ...btnStyle, gridColumn: 'span 2', background: '#6c757d' }}>
              🔄 전/후반 교체
            </button>
          </div>
        ) : (
          // === 농구 컨트롤 ===
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '15px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <strong>Home Team</strong>
                <button onClick={() => handleBasketScore('home', 1)} style={btnStyle}>+1점</button>
                <button onClick={() => handleBasketScore('home', 2)} style={btnStyle}>+2점</button>
                <button onClick={() => handleBasketScore('home', 3)} style={btnStyle}>+3점</button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <strong>Away Team</strong>
                <button onClick={() => handleBasketScore('away', 1)} style={btnStyle}>+1점</button>
                <button onClick={() => handleBasketScore('away', 2)} style={btnStyle}>+2점</button>
                <button onClick={() => handleBasketScore('away', 3)} style={btnStyle}>+3점</button>
              </div>
            </div>
            <button onClick={() => setQuarter(q => q < 4 ? q + 1 : 1)} style={{ ...btnStyle, width: '100%', background: '#6c757d' }}>
              🔄 쿼터 변경 (다음 쿼터로)
            </button>
          </div>
        )}
      </div>

      {/* 초기화 버튼 */}
      <button 
        onClick={() => {
          setSoccerScore({ home: 0, away: 0 });
          setBasketScore({ home: 0, away: 0 });
          setGameTime(0);
          setIsPaused(true);
          setHalf(1);
          setQuarter(1);
        }}
        style={{ marginTop: '20px', background: 'transparent', border: '1px solid #ccc', padding: '5px 10px', cursor: 'pointer', color: '#999' }}
      >
        모든 기록 초기화
      </button>

    </div>
  );
};

// 버튼 스타일 객체 (중복 코드 줄이기용)
const btnStyle = {
  padding: '10px',
  cursor: 'pointer',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold'
};

export default App;
