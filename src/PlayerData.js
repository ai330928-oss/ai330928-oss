// src/PlayerData.js

// ==============================================================================
// 1. [상수] 팀 목록 (검색 필터용)
// ==============================================================================
export const TEAMS_SOCCER = [
  // EPL
  '맨체스터 City', '아스날', '리버풀', '아스톤 빌라', '토트넘', '첼시', '뉴캐슬', '맨체스터 Utd', 
  '웨스트햄', '크리스탈 팰리스', '브라이튼', '본머스', '풀럼', '울버햄튼', '에버튼', '브렌트포드', '노팅엄', '레스터 시티', '입스위치', '사우스햄튼',
  // La Liga
  '레알 Madrid', 'FC 바르셀로나', '아틀레티코', '지로나', '소시에다드', '빌바오', '비야레알', '베티스',
  // Bundesliga
  '바이에른 Munchen', '레버쿠젠', '도르트문트', '라이프치히', '슈투트가르트', '프랑크푸르트',
  // Serie A
  '인터밀란', 'AC 밀란', '유벤투스', '나폴리', 'AS 로마', '아탈란타', '라치오', '볼로냐',
  // Ligue 1
  '파리 SG', 'AS 모나코', '리옹', '마르세유', '릴 OSC', '니스',
  // K League
  '울산 HD', '포항 스틸러스', '광주 FC', '전북 현대', 'FC 서울', '강원 FC', '대전 하나', '수원 FC', '김천 상무', '대구 FC', '제주 유나이티드', '인천 유나이티드'
];

export const TEAMS_NBA = [
  // Atlantic
  'Celtics', 'Knicks', '76ers', 'Nets', 'Raptors',
  // Central
  'Bucks', 'Cavaliers', 'Pacers', 'Bulls', 'Pistons',
  // Southeast
  'Heat', 'Magic', 'Hawks', 'Hornets', 'Wizards',
  // Northwest
  'Thunder', 'Nuggets', 'Timberwolves', 'Blazers', 'Jazz',
  // Pacific
  'Suns', 'Clippers', 'Lakers', 'Kings', 'Warriors',
  // Southwest
  'Mavericks', 'Pelicans', 'Grizzlies', 'Rockets', 'Spurs'
];

export const DIFFICULTIES = {
  '초급': { bonus: -10, label: '아마추어' },
  '중급': { bonus: 5, label: '프로' },
  '고급': { bonus: 20, label: '월드클래스' },
};

export const SOCCER_FORMATIONS = {
  '4-4-2': { name: '4-4-2', slots: ['FW','FW', 'MF','MF','MF','MF', 'DF','DF','DF','DF', 'GK'], atk: 0 },
  '4-3-3': { name: '4-3-3', slots: ['FW','FW','FW', 'MF','MF','MF', 'DF','DF','DF','DF', 'GK'], atk: 5 },
  '3-5-2': { name: '3-5-2', slots: ['FW','FW', 'MF','MF','MF','MF','MF', 'DF','DF','DF', 'GK'], atk: 3 },
  '5-2-3': { name: '5-2-3', slots: ['FW','FW','FW', 'MF','MF', 'DF','DF','DF','DF','DF', 'GK'], atk: -3 },
  '5-4-1': { name: '5-4-1', slots: ['FW', 'MF','MF','MF','MF', 'DF','DF','DF','DF','DF', 'GK'], atk: -5 },
};

export const NBA_FORMATIONS = {
  'Balanced': { name: '밸런스 (2G-2F-1C)', slots: ['G','G', 'F','F', 'C'], atk: 0 },
  'Small Ball': { name: '스몰볼 (3G-2F)', slots: ['G','G','G', 'F','F'], atk: 8 },
  'Twin Towers': { name: '트윈타워 (2G-1F-2C)', slots: ['G','G', 'F', 'C','C'], atk: -3 },
};

// ==============================================================================
// 2. [축구 데이터] - 25/26 현역 로스터 (450명+)
// ==============================================================================
export const SOCCER_DATA = [
  // --- KOREAN STARS ---
  { id: 1, name: '손흥민', team: ['토트넘', '레버쿠젠', '함부르크'], pos: 'FW', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Son_Heung-min_2024.jpg' },
  { id: 201, name: '이강인', team: ['파리 SG', '마요르카', '발렌시아'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Lee_Kang-in_2023.jpg' },
  { id: 202, name: '김민재', team: ['바이에른 Munchen', '나폴리', '베이징', '전북 현대'], pos: 'DF', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Kim_Min-jae_2023.jpg' },
  { id: 203, name: '황희찬', team: ['울버햄튼', '라이프치히', '잘츠부르크'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Hwang_Hee-chan_2022.jpg' },
  { id: 251, name: '이재성', team: ['마인츠', '홀슈타인 킬', '전북 현대'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Lee_Jae-sung_2022.jpg' },
  { id: 252, name: '황인범', team: ['페예노르트', '즈베즈다', '올림피아코스', '대전 하나'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Hwang_In-beom_2022.jpg' },
  { id: 801, name: '제시 린가드', team: ['FC 서울', '맨체스터 Utd', '웨스트햄', '노팅엄'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Jesse_Lingard_West_Ham.jpg' },
  { id: 810, name: '조현우', team: ['울산 HD', '대구 FC'], pos: 'GK', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Cho_Hyun-woo_2018.jpg' },
  { id: 834, name: '양민혁', team: ['토트넘', '강원 FC'], pos: 'FW', ovr: 108, img: '' },
  { id: 836, name: '세징야', team: ['대구 FC'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Cesinha_2019.jpg' },
  { id: 837, name: '설영우', team: ['즈베즈다', '울산 HD'], pos: 'DF', ovr: 107, img: '' },
  { id: 838, name: '배준호', team: ['스토크 시티', '대전 하나'], pos: 'MF', ovr: 107, img: '' },

  // --- MANCHESTER CITY ---
  { id: 31, name: 'E. 홀란', team: ['맨체스터 City', '도르트문트'], pos: 'FW', ovr: 115, img: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Erling_Haaland_2023_%28cropped%29.jpg' },
  { id: 4, name: 'K. 더브라위너', team: ['맨체스터 City', '첼시', '볼프스부르크'], pos: 'MF', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/4/40/Kevin_De_Bruyne_201807061.jpg' },
  { id: 37, name: '로드리', team: ['맨체스터 City', '아틀레티코'], pos: 'MF', ovr: 114, img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Rodri_2024.jpg' },
  { id: 54, name: '필 포든', team: ['맨체스터 City'], pos: 'FW', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Phil_Foden_2022_%28cropped%29.jpeg' },
  { id: 39, name: '후벵 디아스', team: ['맨체스터 City', '벤피카'], pos: 'DF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Ruben_Dias_2021.jpg' },
  { id: 55, name: '베르나르두 실바', team: ['맨체스터 City', 'AS 모나코'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Bernardo_Silva_2018.jpg' },
  { id: 87, name: '요슈코 그바르디올', team: ['맨체스터 City', '라이프치히'], pos: 'DF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Jo%C5%A1ko_Gvardiol_2021.jpg' },
  { id: 88, name: '에데르송', team: ['맨체스터 City', '벤피카'], pos: 'GK', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Ederson_Moraes_2018.jpg' },
  { id: 128, name: '카일 워커', team: ['맨체스터 City', '토트넘'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Kyle_Walker_2022.jpg' },
  { id: 301, name: '제레미 도쿠', team: ['맨체스터 City', '렌'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/J%C3%A9r%C3%A9my_Doku_2022.jpg' },
  { id: 501, name: '사비뉴', team: ['맨체스터 City', '지로나'], pos: 'FW', ovr: 109, img: '' },
  { id: 104, name: '일카이 귄도안', team: ['맨체스터 City', 'FC 바르셀로나', '도르트문트'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Ilkay_G%C3%BCndogan_2022.jpg' },
  { id: 401, name: '잭 그릴리쉬', team: ['맨체스터 City', '아스톤 빌라'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b0/Jack_Grealish_2021.jpg' },
  { id: 402, name: '마누엘 아칸지', team: ['맨체스터 City', '도르트문트'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Manuel_Akanji_2018.jpg' },
  { id: 2001, name: '존 스톤스', team: ['맨체스터 City', '에버튼'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/6/66/John_Stones_2018.jpg' },
  { id: 2002, name: '마테오 코바치치', team: ['맨체스터 City', '첼시', '레알 Madrid', '인터밀란'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Mateo_Kova%C4%8Di%C4%87_2018.jpg' },
  { id: 2201, name: '리코 루이스', team: ['맨체스터 City'], pos: 'DF', ovr: 107, img: '' },

  // --- ARSENAL ---
  { id: 71, name: '부카요 사카', team: ['아스날'], pos: 'FW', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/e/db/Bukayo_Saka_vs_Man_Utd_%28cropped%29.jpg' },
  { id: 72, name: '마르틴 외데고르', team: ['아스날', '레알 Madrid', '소시에다드'], pos: 'MF', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Martin_%C3%98degaard_2019.jpg' },
  { id: 73, name: '데클런 라이스', team: ['아스날', '웨스트햄'], pos: 'MF', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Declan_Rice_Euro_2020.jpg' },
  { id: 74, name: '윌리엄 살리바', team: ['아스날', '마르세유'], pos: 'DF', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/8/83/William_Saliba_2020.jpg' },
  { id: 211, name: '가브리엘 마갈량이스', team: ['아스날', '릴 OSC'], pos: 'DF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Gabriel_Magalh%C3%A3es_2022.jpg' },
  { id: 213, name: '벤 화이트', team: ['아스날', '브라이튼'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/7/73/Ben_White_2022.jpg' },
  { id: 240, name: '다비드 라야', team: ['아스날', '브렌트포드'], pos: 'GK', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/David_Raya_2023.jpg' },
  { id: 254, name: '카이 하베르츠', team: ['아스날', '첼시', '레버쿠젠'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Kai_Havertz_2019.jpg' },
  { id: 252, name: '마르틴 마르티넬리', team: ['아스날'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Gabriel_Martinelli_2022.jpg' },
  { id: 503, name: '리카르도 칼라피오리', team: ['아스날', '볼로냐', 'AS 로마'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Riccardo_Calafiori_2022.jpg' },
  { id: 502, name: '미켈 메리노', team: ['아스날', '소시에다드', '도르트문트', '뉴캐슬'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5b/Mikel_Merino_2019.jpg' },
  { id: 253, name: '가브리엘 제주스', team: ['아스날', '맨체스터 City'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Gabriel_Jesus_2018.jpg' },
  { id: 403, name: '라힘 스털링', team: ['아스날', '첼시', '맨체스터 City', '리버풀'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Raheem_Sterling_2022.jpg' },
  { id: 4031, name: '레안드로 트로사르', team: ['아스날', '브라이튼'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Leandro_Trossard_2022.jpg' },
  { id: 2003, name: '율리안 팀버', team: ['아스날', '아약스'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Jurrien_Timber_2021.jpg' },

  // --- LIVERPOOL ---
  { id: 35, name: 'M. 살라', team: ['리버풀', 'AS 로마', '첼시', '바젤'], pos: 'FW', ovr: 112, img: 'https://upload.wikimedia.org/wikipedia/commons/c/c1/Mohamed_Salah_2018.jpg' },
  { id: 38, name: '버질 반다이크', team: ['리버풀', '사우스햄튼', '셀틱'], pos: 'DF', ovr: 112, img: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Virgil_van_Dijk_2023.jpg' },
  { id: 58, name: '아놀드', team: ['리버풀'], pos: 'DF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Trent_Alexander_Arnold_2022_%282%29_%28cropped%29.jpg' },
  { id: 40, name: '알리송', team: ['리버풀', 'AS 로마'], pos: 'GK', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Alisson_Becker_2018.jpg' },
  { id: 217, name: '맥 알리스터', team: ['리버풀', '브라이튼'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Alexis_Mac_Allister_2022.jpg' },
  { id: 216, name: '소보슬라이', team: ['리버풀', '라이프치히'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Dominik_Szoboszlai_2022.jpg' },
  { id: 214, name: '루이스 디아스', team: ['리버풀', '포르투'], pos: 'FW', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Luis_D%C3%ADaz_2022.jpg' },
  { id: 420, name: '페데리코 키에사', team: ['리버풀', '유벤투스', '피오렌티나'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Federico_Chiesa_2021.jpg' },
  { id: 126, name: '앤디 로버트슨', team: ['리버풀', '헐 시티'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Andrew_Robertson_2022.jpg' },
  { id: 404, name: '이브라히마 코나테', team: ['리버풀', '라이프치히'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ibrahima_Konat%C3%A9_2022.jpg' },
  { id: 405, name: '디오고 조타', team: ['리버풀', '울버햄튼'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Diogo_Jota_2021.jpg' },
  { id: 215, name: '다르윈 누녜스', team: ['리버풀', '벤피카'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Darwin_N%C3%BA%C3%B1ez_2022.jpg' },
  { id: 2004, name: '라이언 흐라번베르흐', team: ['리버풀', '바이에른 Munchen', '아약스'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Ryan_Gravenberch_2019.jpg' },
  { id: 2202, name: '코디 각포', team: ['리버풀', '에인트호번'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Cody_Gakpo_2022.jpg' },

  // --- MANCHESTER UTD ---
  { id: 107, name: '브루노 페르난데스', team: ['맨체스터 Utd', '스포르팅'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Bruno_Fernandes_2019.jpg' },
  { id: 206, name: '라스무스 호일룬', team: ['맨체스터 Utd', '아탈란타'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Rasmus_H%C3%B8jlund_2023.jpg' },
  { id: 205, name: '알레한드로 가르나초', team: ['맨체스터 Utd', '아틀레티코'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Alejandro_Garnacho_2023.jpg' },
  { id: 95, name: '마커스 래시포드', team: ['맨체스터 Utd'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Marcus_Rashford_2023.jpg' },
  { id: 110, name: '카세미루', team: ['맨체스터 Utd', '레알 Madrid', '포르투'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Casemiro_2022.jpg' },
  { id: 232, name: '마타이스 더리흐트', team: ['맨체스터 Utd', '바이에른 Munchen', '유벤투스', '아약스'], pos: 'DF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Matthijs_de_Ligt_2022.jpg' },
  { id: 305, name: '리산드로 마르티네스', team: ['맨체스터 Utd', '아약스'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Lisandro_Mart%C3%ADnez_2022.jpg' },
  { id: 238, name: '안드레 오나나', team: ['맨체스터 Utd', '인터밀란', '아약스'], pos: 'GK', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Andr%C3%A9_Onana_2022.jpg' },
  { id: 421, name: '마누엘 우가르테', team: ['맨체스터 Utd', '파리 SG'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Manuel_Ugarte.jpg' },
  { id: 601, name: '누사이르 마즈라위', team: ['맨체스터 Utd', '바이에른 Munchen'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Noussair_Mazraoui_2022.jpg' },
  { id: 504, name: '조슈아 지르크지', team: ['맨체스터 Utd', '볼로냐', '바이에른 Munchen'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Joshua_Zirkzee_2019.jpg' },
  { id: 505, name: '레니 요로', team: ['맨체스터 Utd', '릴 OSC'], pos: 'DF', ovr: 108, img: '' },
  { id: 406, name: '코비 마이누', team: ['맨체스터 Utd'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Kobbie_Mainoo_2023.jpg' },
  { id: 2028, name: '디오고 달롯', team: ['맨체스터 Utd', 'AC 밀란'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Diogo_Dalot_2022.jpg' },

  // --- CHELSEA ---
  { id: 204, name: '콜 팔머', team: ['첼시', '맨체스터 City'], pos: 'MF', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Cole_Palmer_2023.jpg' },
  { id: 207, name: '엔조 페르난데스', team: ['첼시', '벤피카'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Enzo_Fern%C3%A1ndez_2022.jpg' },
  { id: 208, name: '모이세스 카이세도', team: ['첼시', '브라이튼'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Moises_Caicedo_2022.jpg' },
  { id: 256, name: '크리스토퍼 은쿤쿠', team: ['첼시', '라이프치히', '파리 SG'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Christopher_Nkunku_2019.jpg' },
  { id: 408, name: '페드로 네투', team: ['첼시', '울버햄튼', '라치오'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Pedro_Neto_2021.jpg' },
  { id: 422, name: '주앙 펠릭스', team: ['첼시', 'FC 바르셀로나', '아틀레티코', '벤피카'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Jo%C3%A3o_F%C3%A9lix_2019.jpg' },
  { id: 423, name: '제이든 산초', team: ['첼시', '도르트문트', '맨체스터 Utd'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Jadon_Sancho_2024.jpg' },
  { id: 407, name: '니콜라 잭슨', team: ['첼시', '비야레알'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Nicolas_Jackson_2023.jpg' },
  { id: 257, name: '리스 제임스', team: ['첼시'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Reece_James_2021.jpg' },
  { id: 2015, name: '리바이 콜윌', team: ['첼시', '브라이튼'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Levi_Colwill_2023.jpg' },
  { id: 2016, name: '로베르트 산체스', team: ['첼시', '브라이튼'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Robert_S%C3%A1nchez_2022.jpg' },
  { id: 2019, name: '마르크 쿠쿠렐라', team: ['첼시', '브라이튼'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Marc_Cucurella_2022.jpg' },

  // --- TOTTENHAM ---
  { id: 209, name: '제임스 매디슨', team: ['토트넘', '레스터 시티'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/9/97/James_Maddison_2023.jpg' },
  { id: 210, name: '크리스티안 로메로', team: ['토트넘', '아탈란타', '유벤투스'], pos: 'DF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Cristian_Romero_2022.jpg' },
  { id: 239, name: '굴리엘모 비카리오', team: ['토트넘', '엠폴리'], pos: 'GK', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Guglielmo_Vicario_2023.jpg' },
  { id: 306, name: '미키 판더펜', team: ['토트넘', '볼프스부르크'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Micky_van_de_Ven_2023.jpg' },
  { id: 307, name: '데스티니 우도기', team: ['토트넘', '우디네세'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Destiny_Udogie_2023.jpg' },
  { id: 308, name: '데얀 쿨루셉스키', team: ['토트넘', '유벤투스', '파르마'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Dejan_Kulusevski_2022.jpg' },
  { id: 409, name: '도미닉 솔란케', team: ['토트넘', '본머스', '리버풀'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Dominic_Solanke_2018.jpg' },
  { id: 602, name: '브레넌 존슨', team: ['토트넘', '노팅엄'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Brennan_Johnson_2022.jpg' },
  { id: 506, name: '아치 그레이', team: ['토트넘', '리즈'], pos: 'MF', ovr: 107, img: '' },
  { id: 2012, name: '페드로 포로', team: ['토트넘', '스포르팅'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Pedro_Porro_2022.jpg' },
  { id: 2013, name: '파페 사르', team: ['토트넘', '메스'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Pape_Matar_Sarr_2022.jpg' },
  { id: 2014, name: '이브 비수마', team: ['토트넘', '브라이튼'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Yves_Bissouma_2021.jpg' },

  // --- ASTON VILLA ---
  { id: 260, name: '올리 왓킨스', team: ['아스톤 빌라', '브렌트포드'], pos: 'FW', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Ollie_Watkins_2021.jpg' },
  { id: 410, name: '에밀리아노 마르티네스', team: ['아스톤 빌라', '아스날'], pos: 'GK', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Emiliano_Mart%C3%ADnez_2022.jpg' },
  { id: 603, name: '아마두 오나나', team: ['아스톤 빌라', '에버튼', '릴 OSC'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Amadou_Onana_2022.jpg' },
  { id: 2005, name: '유리 틸레만스', team: ['아스톤 빌라', '레스터 시티', 'AS 모나코'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Youri_Tielemans_2018.jpg' },
  { id: 2006, name: '존 맥긴', team: ['아스톤 빌라'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/John_McGinn_2019.jpg' },
  { id: 2007, name: '레온 베일리', team: ['아스톤 빌라', '레버쿠젠'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Leon_Bailey_2019.jpg' },
  { id: 2008, name: '파우 토레스', team: ['아스톤 빌라', '비야레알'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Pau_Torres_2021.jpg' },
  { id: 2009, name: '에즈리 콘사', team: ['아스톤 빌라'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Ezri_Konsa_2022.jpg' },
  { id: 2010, name: '이안 마트센', team: ['아스톤 빌라', '도르트문트', '첼시'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Ian_Maatsen_2019.jpg' },
  { id: 2011, name: '모건 로저스', team: ['아스톤 빌라'], pos: 'FW', ovr: 107, img: '' },

  // --- NEWCASTLE UNITED ---
  { id: 219, name: '알렉산더 이삭', team: ['뉴캐슬', '소시에다드'], pos: 'FW', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Alexander_Isak_2021.jpg' },
  { id: 218, name: '브루노 기마랑이스', team: ['뉴캐슬', '리옹'], pos: 'MF', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/6/6b/Bruno_Guimar%C3%A3es_2022.jpg' },
  { id: 411, name: '앤서니 고든', team: ['뉴캐슬', '에버튼'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Anthony_Gordon_2023.jpg' },
  { id: 424, name: '산드로 토날리', team: ['뉴캐슬', 'AC 밀란'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Sandro_Tonali_2021.jpg' },
  { id: 2020, name: '조엘린톤', team: ['뉴캐슬', '호펜하임'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Joelinton_2022.jpg' },
  { id: 2021, name: '닉 포프', team: ['뉴캐슬', '번리'], pos: 'GK', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Nick_Pope_2018.jpg' },
  { id: 2022, name: '키어런 트리피어', team: ['뉴캐슬', '아틀레티코', '토트넘'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Kieran_Trippier_2018.jpg' },
  { id: 2023, name: '파비안 셰어', team: ['뉴캐슬', '호펜하임'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Fabian_Sch%C3%A4r_2018.jpg' },
  { id: 2024, name: '하비 반스', team: ['뉴캐슬', '레스터 시티'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Harvey_Barnes_2022.jpg' },
  { id: 2025, name: '티노 리브라멘토', team: ['뉴캐슬', '사우스햄튼'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Tino_Livramento_2022.jpg' },

  // --- WEST HAM ---
  { id: 259, name: '재러드 보웬', team: ['웨스트햄', '헐 시티'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Jarrod_Bowen_2022.jpg' },
  { id: 258, name: '루카스 파케타', team: ['웨스트햄', '리옹', 'AC 밀란'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Lucas_Paquet%C3%A1_2019.jpg' },
  { id: 605, name: '모하메드 쿠두스', team: ['웨스트햄', '아약스'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mohammed_Kudus_2022.jpg' },
  { id: 507, name: '니클라스 퓔크루크', team: ['웨스트햄', '도르트문트', '베르더 브레멘'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e9/Niclas_F%C3%BCllkrug_2018.jpg' },
  { id: 604, name: '크리센시오 서머빌', team: ['웨스트햄', '리즈'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Crysencio_Summerville_2022.jpg' },
  { id: 2029, name: '장클레르 토디보', team: ['웨스트햄', '니스', 'FC 바르셀로나'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jean-Clair_Todibo_2019.jpg' },
  { id: 2030, name: '아론 완비사카', team: ['웨스트햄', '맨체스터 Utd', '크리스탈 팰리스'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Aaron_Wan-Bissaka_2022.jpg' },
  { id: 2031, name: '막시밀리언 킬먼', team: ['웨스트햄', '울버햄튼'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Max_Kilman_2022.jpg' },
  { id: 2032, name: '알퐁스 아레올라', team: ['웨스트햄', '파리 SG', '레알 Madrid', '풀럼'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Alphonse_Areola_2022.jpg' },
  { id: 2033, name: '에드손 알바레스', team: ['웨스트햄', '아약스'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Edson_%C3%81lvarez_2022.jpg' },
  { id: 2034, name: '토마스 수첵', team: ['웨스트햄'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Tomas_Soucek_2022.jpg' },

  // --- CRYSTAL PALACE ---
  { id: 2035, name: '에베레치 에제', team: ['크리스탈 팰리스', 'QPR'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Eberechi_Eze_2022.jpg' },
  { id: 2036, name: '장필립 마테타', team: ['크리스탈 팰리스', '마인츠'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jean-Philippe_Mateta_2022.jpg' },
  { id: 2037, name: '아담 워튼', team: ['크리스탈 팰리스', '블랙번'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Adam_Wharton_2023.jpg' },
  { id: 2038, name: '마크 게히', team: ['크리스탈 팰리스', '첼시', '스완지'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Marc_Gu%C3%A9hi_2022.jpg' },
  { id: 2039, name: '다이치 카마다', team: ['크리스탈 팰리스', '라치오', '프랑크푸르트'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Daichi_Kamada_2022.jpg' },
  { id: 2040, name: '에디 은케티아', team: ['크리스탈 팰리스', '아스날', '리즈'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Eddie_Nketiah_2022.jpg' },
  { id: 2041, name: '딘 헨더슨', team: ['크리스탈 팰리스', '맨체스터 Utd', '노팅엄'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Dean_Henderson_2022.jpg' },
  { id: 2042, name: '다니엘 무뇨스', team: ['크리스탈 팰리스', '헹크'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Daniel_Mu%C3%B1oz_2022.jpg' },
  { id: 2043, name: '막스랑스 라크루아', team: ['크리스탈 팰리스', '볼프스부르크'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Maxence_Lacroix_2022.jpg' },

  // --- BOURNEMOUTH ---
  { id: 2052, name: '앙투안 세멘요', team: ['본머스'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Antoine_Semenyo_2022.jpg' },
  { id: 2053, name: '저스틴 클라위베르트', team: ['본머스', '발렌시아', 'AS 로마', '라이프치히'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Justin_Kluivert_2022.jpg' },
  { id: 2054, name: '에바니우손', team: ['본머스', '포르투'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Evanilson_2022.jpg' },
  { id: 2055, name: '밀로스 케르케즈', team: ['본머스', '알크마르'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Milos_Kerkez_2022.jpg' },
  { id: 2056, name: '일리아 자바르니', team: ['본머스', '디나모 키이우'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Illia_Zabarnyi_2022.jpg' },
  { id: 2057, name: '마르코스 세네시', team: ['본머스', '페예노르트'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Marcos_Senesi_2022.jpg' },
  { id: 2058, name: '루이스 쿡', team: ['본머스', '리즈'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Lewis_Cook_2022.jpg' },
  { id: 2059, name: '케파 아리사발라가', team: ['본머스', '첼시', '레알 Madrid'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Kepa_Arrizabalaga_2022.jpg' },
  { id: 2060, name: '라이언 크리스티', team: ['본머스', '셀틱'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ryan_Christie_2022.jpg' },

  // --- FULHAM ---
  { id: 2061, name: '안토니 로빈슨', team: ['풀럼', '위건'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Antonee_Robinson_2022.jpg' },
  { id: 2062, name: '알렉스 이워비', team: ['풀럼', '에버튼', '아스날'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Alex_Iwobi_2022.jpg' },
  { id: 2063, name: '에밀 스미스 로우', team: ['풀럼', '아스날'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Emile_Smith_Rowe_2022.jpg' },
  { id: 2064, name: '아다마 트라오레', team: ['풀럼', '울버햄튼', 'FC 바르셀로나'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Adama_Traor%C3%A9_2022.jpg' },
  { id: 2065, name: '안드레아스 페레이라', team: ['풀럼', '맨체스터 Utd'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Andreas_Pereira_2022.jpg' },
  { id: 2066, name: '베른트 레노', team: ['풀럼', '아스날', '레버쿠젠'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Bernd_Leno_2022.jpg' },
  { id: 2067, name: '캘빈 배시', team: ['풀럼', '아약스', '레인저스'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Calvin_Bassey_2022.jpg' },
  { id: 2068, name: '요아킴 안데르센', team: ['풀럼', '크리스탈 팰리스', '리옹'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Joachim_Andersen_2022.jpg' },
  { id: 2069, name: '호드리고 무니즈', team: ['풀럼', '미들즈브러'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Rodrigo_Muniz_2022.jpg' },
  { id: 2070, name: '산데르 베르게', team: ['풀럼', '번리', '셰필드'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sander_Berge_2022.jpg' },

  // --- WOLVES ---
  { id: 2071, name: '마테우스 쿠냐', team: ['울버햄튼', '아틀레티코', '헤르타 베를린'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Matheus_Cunha_2022.jpg' },
  { id: 2072, name: '마리오 르미나', team: ['울버햄튼', '니스', '사우스햄튼', '유벤투스'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mario_Lemina_2022.jpg' },
  { id: 2073, name: '주앙 고메스', team: ['울버햄튼', '플라멩구'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jo%C3%A3o_Gomes_2022.jpg' },
  { id: 2074, name: '라얀 아이트 누리', team: ['울버햄튼', '앙제'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Rayan_A%C3%AFt-Nouri_2022.jpg' },
  { id: 2075, name: '넬송 세메두', team: ['울버햄튼', 'FC 바르셀로나', '벤피카'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/N%C3%A9lson_Semedo_2022.jpg' },
  { id: 2076, name: '조세 사', team: ['울버햄튼', '올림피아코스', '포르투'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jos%C3%A9_S%C3%A1_2022.jpg' },
  { id: 2077, name: '샘 존스톤', team: ['울버햄튼', '크리스탈 팰리스', '웨스트브롬'], pos: 'GK', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sam_Johnstone_2022.jpg' },
  { id: 2078, name: '예르겐 스트란드 라르센', team: ['울버햄튼', '셀타 비고'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/J%C3%B8rgen_Strand_Larsen_2022.jpg' },
  { id: 2079, name: '크레이그 도슨', team: ['울버햄튼', '웨스트햄'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Craig_Dawson_2022.jpg' },

  // --- EVERTON ---
  { id: 2080, name: '조던 픽포드', team: ['에버튼', '선덜랜드'], pos: 'GK', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jordan_Pickford_2022.jpg' },
  { id: 2081, name: '제임스 타코우스키', team: ['에버튼', '번리'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/James_Tarkowski_2022.jpg' },
  { id: 2082, name: '재러드 브랜스웨이트', team: ['에버튼', 'PSV'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jarrad_Branthwaite_2022.jpg' },
  { id: 2083, name: '비탈리 미콜렌코', team: ['에버튼', '디나모 키이우'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Vitaliy_Mykolenko_2022.jpg' },
  { id: 2084, name: '드와이트 맥닐', team: ['에버튼', '번리'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Dwight_McNeil_2022.jpg' },
  { id: 2085, name: '도미닉 칼버트-르윈', team: ['에버튼', '셰필드'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Dominic_Calvert-Lewin_2022.jpg' },
  { id: 2086, name: '일림만 은디아예', team: ['에버튼', '마르세유', '셰필드'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Iliman_Ndiaye_2022.jpg' },
  { id: 2087, name: '이드리사 게예', team: ['에버튼', '파리 SG', '아스톤 빌라'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Idrissa_Gueye_2022.jpg' },
  { id: 2088, name: '압둘라예 두쿠레', team: ['에버튼', '왓포드'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Abdoulaye_Doucour%C3%A9_2022.jpg' },
  { id: 2089, name: '제스퍼 린드스트롬', team: ['에버튼', '나폴리', '프랑크푸르트'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jesper_Lindstr%C3%B8m_2022.jpg' },

  // --- BRENTFORD ---
  { id: 2090, name: '브라이언 음뵈모', team: ['브렌트포드'], pos: 'FW', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Bryan_Mbeumo_2022.jpg' },
  { id: 2091, name: '요안 위사', team: ['브렌트포드', '로리앙'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Yoane_Wissa_2022.jpg' },
  { id: 2092, name: '크리스티안 뇌르고르', team: ['브렌트포드', '피오렌티나'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Christian_N%C3%B8rgaard_2022.jpg' },
  { id: 2093, name: '에단 피노크', team: ['브렌트포드', '반슬리'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ethan_Pinnock_2022.jpg' },
  { id: 2094, name: '나단 콜린스', team: ['브렌트포드', '울버햄튼', '번리'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Nathan_Collins_2022.jpg' },
  { id: 2095, name: '마크 플레켄', team: ['브렌트포드', '프라이부르크'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mark_Flekken_2022.jpg' },
  { id: 2096, name: '비탈리 야넬트', team: ['브렌트포드', '보훔'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Vitaly_Janelt_2022.jpg' },
  { id: 2097, name: '미켈 담스고르', team: ['브렌트포드', '삼프도리아'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mikkel_Damsgaard_2022.jpg' },
  { id: 2098, name: '케빈 샤데', team: ['브렌트포드', '프라이부르크'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Kevin_Schade_2022.jpg' },
  { id: 2099, name: '벤 미', team: ['브렌트포드', '번리'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ben_Mee_2022.jpg' },

  // --- NOTTINGHAM FOREST ---
  { id: 2100, name: '모건 깁스-화이트', team: ['노팅엄', '울버햄튼', '셰필드'], pos: 'MF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Morgan_Gibbs-White_2022.jpg' },
  { id: 2101, name: '무릴로', team: ['노팅엄', '코린치안스'], pos: 'DF', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Murillo_Santiago_Costa_dos_Santos.jpg' },
  { id: 2102, name: '칼럼 허드슨-오도이', team: ['노팅엄', '첼시', '레버쿠젠'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Callum_Hudson-Odoi_2022.jpg' },
  { id: 2103, name: '앤서니 엘랑가', team: ['노팅엄', '맨체스터 Utd'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Anthony_Elanga_2022.jpg' },
  { id: 2104, name: '크리스 우드', team: ['노팅엄', '뉴캐슬', '번리'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Chris_Wood_2022.jpg' },
  { id: 2105, name: '니콜라 밀렌코비치', team: ['노팅엄', '피오렌티나'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Nikola_Milenkovi%C4%87_2022.jpg' },
  { id: 2106, name: '마츠 셀스', team: ['노팅엄', '스트라스부르'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Matz_Sels_2022.jpg' },
  { id: 2107, name: '타이워 아워니이', team: ['노팅엄', '우니온 베를린'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Taiwo_Awoniyi_2022.jpg' },
  { id: 2108, name: '엘리엇 앤더슨', team: ['노팅엄', '뉴캐슬'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Elliot_Anderson_2022.jpg' },
  { id: 2109, name: '올라 아이나', team: ['노팅엄', '토리노', '풀럼', '첼시'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ola_Aina_2022.jpg' },

  // --- LEICESTER CITY ---
  { id: 2110, name: '제이미 바디', team: ['레스터 시티'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jamie_Vardy_2022.jpg' },
  { id: 2111, name: '해리 윙크스', team: ['레스터 시티', '토트넘', '삼프도리아'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Harry_Winks_2022.jpg' },
  { id: 2112, name: '스테피 마비디디', team: ['레스터 시티', '몽펠리에', '유벤투스'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Stephy_Mavididi_2022.jpg' },
  { id: 2113, name: '매즈 헤르만센', team: ['레스터 시티', '브뢴뷔'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mads_Hermansen_2022.jpg' },
  { id: 2114, name: '바우트 파스', team: ['레스터 시티', '랭스'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Wout_Faes_2022.jpg' },
  { id: 2115, name: '윌프레드 은디디', team: ['레스터 시티', '헹크'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Wilfred_Ndidi_2022.jpg' },
  { id: 2116, name: '파쿤도 부오나노테', team: ['레스터 시티', '브라이튼'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Facundo_Buonanotte_2022.jpg' },
  { id: 2117, name: '올리버 스킵', team: ['레스터 시티', '토트넘', '노리치'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Oliver_Skipp_2022.jpg' },
  { id: 2118, name: '제임스 저스틴', team: ['레스터 시티', '루턴'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/James_Justin_2022.jpg' },
  { id: 2119, name: '조르던 아예우', team: ['레스터 시티', '크리스탈 팰리스', '스완지', '아스톤 빌라'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jordan_Ayew_2022.jpg' },

  // --- IPSWICH TOWN ---
  { id: 2120, name: '리암 델랍', team: ['입스위치', '맨체스터 City', '헐 시티'], pos: 'FW', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Liam_Delap_2022.jpg' },
  { id: 2121, name: '레이프 데이비스', team: ['입스위치', '리즈', '본머스'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Leif_Davis_2022.jpg' },
  { id: 2122, name: '오마리 허친슨', team: ['입스위치', '첼시', '아스날'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Omari_Hutchinson_2022.jpg' },
  { id: 2123, name: '샘 모르시', team: ['입스위치', '미들즈브러', '위건'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sam_Morsy_2022.jpg' },
  { id: 2124, name: '아리야넷 무리치', team: ['입스위치', '번리', '맨체스터 City'], pos: 'GK', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Arijanet_Muric_2022.jpg' },
  { id: 2125, name: '제이콥 그리브스', team: ['입스위치', '헐 시티'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jacob_Greaves_2022.jpg' },
  { id: 2126, name: '벤 존슨', team: ['입스위치', '웨스트햄'], pos: 'DF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ben_Johnson_2022.jpg' },
  { id: 2127, name: '코너 채플린', team: ['입스위치', '반슬리', '포츠머스'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Conor_Chaplin_2022.jpg' },
  { id: 2128, name: '칼빈 필립스', team: ['입스위치', '맨체스터 City', '리즈', '웨스트햄'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Kalvin_Phillips_2022.jpg' },
  { id: 2129, name: '사미 스모딕스', team: ['입스위치', '블랙번', '피터버러'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sammie_Szmodics_2022.jpg' },

  // --- SOUTHAMPTON ---
  { id: 2130, name: '아론 램스데일', team: ['사우스햄튼', '아스날', '셰필드'], pos: 'GK', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Aaron_Ramsdale_2022.jpg' },
  { id: 2131, name: '카일 워커-피터스', team: ['사우스햄튼', '토트넘'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Kyle_Walker-Peters_2022.jpg' },
  { id: 2132, name: '플린 다운스', team: ['사우스햄튼', '웨스트햄', '스완지'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Flynn_Downes_2022.jpg' },
  { id: 2133, name: '마테우스 페르난데스', team: ['사우스햄튼', '스포르팅'], pos: 'MF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mateus_Fernandes_2022.jpg' },
  { id: 2134, name: '카메론 아처', team: ['사우스햄튼', '아스톤 빌라', '셰필드'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Cameron_Archer_2022.jpg' },
  { id: 2135, name: '아담 암스트롱', team: ['사우스햄튼', '블랙번', '뉴캐슬'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Adam_Armstrong_2022.jpg' },
  { id: 2136, name: '얀 베드나렉', team: ['사우스햄튼', '아스톤 빌라'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Jan_Bednarek_2022.jpg' },
  { id: 2137, name: '테일러 하우드-벨리스', team: ['사우스햄튼', '맨체스터 City', '번리'], pos: 'DF', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Taylor_Harwood-Bellis_2022.jpg' },
  { id: 2138, name: '조 아리보', team: ['사우스햄튼', '레인저스'], pos: 'MF', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Joe_Aribo_2022.jpg' },
  { id: 2139, name: '벤 브레레톤 디아스', team: ['사우스햄튼', '비야레알', '셰필드', '블랙번'], pos: 'FW', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Ben_Brereton_D%C3%ADaz_2022.jpg' },
];

// ==============================================================================
// 3. [NBA 데이터] - NBA 현역 로스터 + 레전드
// ==============================================================================
export const NBA_DATA = [
  // 1. Boston Celtics
  { id: 1016, name: '제이슨 테이텀', team: ['Celtics'], pos: 'F', ovr: 112, img: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Jayson_Tatum_2022.jpg' },
  { id: 1040, name: '제일런 브라운', team: ['Celtics'], pos: 'F', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Jaylen_Brown_2022.jpg' },
  { id: 3001, name: '즈루 홀리데이', team: ['Celtics', 'Bucks', 'Pelicans'], pos: 'G', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Jrue_Holiday_2022.jpg' },
  { id: 3002, name: '크리스탑스 포르징기스', team: ['Celtics', 'Wizards', 'Mavericks', 'Knicks'], pos: 'C', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Kristaps_Porzi%C5%86%C4%A3is_2022.jpg' },
  { id: 3003, name: '데릭 화이트', team: ['Celtics', 'Spurs'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Derrick_White_2022.jpg' },

  // 2. NY Knicks
  { id: 1067, name: '제이런 브런슨', team: ['Knicks', 'Mavericks'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jalen_Brunson_2022.jpg' },
  { id: 5001, name: '칼 앤서니 타운스', team: ['Knicks', 'Timberwolves'], pos: 'C', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/6/67/Karl-Anthony_Towns_2021.jpg' },
  { id: 1061, name: '미칼 브리지스', team: ['Knicks', 'Nets', 'Suns'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Mikal_Bridges_2022.jpg' },
  { id: 3004, name: 'OG 아누노비', team: ['Knicks', 'Raptors'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/52/OG_Anunoby_2022.jpg' },
  { id: 3005, name: '조쉬 하트', team: ['Knicks', 'Blazers', 'Pelicans', 'Lakers'], pos: 'G', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Josh_Hart_2022.jpg' },

  // 3. Philadelphia 76ers
  { id: 1015, name: '조엘 엠비드', team: ['76ers'], pos: 'C', ovr: 112, img: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Joel_Embiid_2022.jpg' },
  { id: 1032, name: '폴 조지', team: ['76ers', 'Clippers', 'Thunder', 'Pacers'], pos: 'F', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Paul_George_2022.jpg' },
  { id: 5002, name: '타이리스 맥시', team: ['76ers'], pos: 'G', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Tyrese_Maxey_2022.jpg' },
  { id: 3006, name: '켈리 우브레 Jr', team: ['76ers', 'Hornets', 'Warriors', 'Suns'], pos: 'F', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Kelly_Oubre_Jr_2022.jpg' },

  // 4. Milwaukee Bucks
  { id: 1007, name: '야니스 아데토쿤보', team: ['Bucks'], pos: 'F', ovr: 113, img: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Giannis_Antetokounmpo_2022.jpg' },
  { id: 1033, name: '데미안 릴라드', team: ['Bucks', 'Blazers'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Damian_Lillard_2022.jpg' },
  { id: 3007, name: '크리스 미들턴', team: ['Bucks', 'Pistons'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Khris_Middleton_2022.jpg' },
  { id: 3008, name: '브룩 로페즈', team: ['Bucks', 'Lakers', 'Nets'], pos: 'C', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Brook_Lopez_2022.jpg' },

  // 5. Dallas Mavericks
  { id: 1009, name: '루카 돈치치', team: ['Mavericks'], pos: 'G', ovr: 113, img: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Luka_Don%C4%8Di%C4%87_2022.jpg' },
  { id: 1034, name: '카이리 어빙', team: ['Mavericks', 'Nets', 'Celtics', 'Cavaliers'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/8/86/Kyrie_Irving_2022.jpg' },
  { id: 5005, name: '클레이 탐슨', team: ['Mavericks', 'Warriors'], pos: 'G', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Klay_Thompson_2019.jpg' },
  { id: 3017, name: '데릭 라이블리 2세', team: ['Mavericks'], pos: 'C', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dereck_Lively_II_2022.jpg' },

  // 6. Phoenix Suns
  { id: 1008, name: '케빈 듀란트', team: ['Suns', 'Nets', 'Warriors', 'Thunder'], pos: 'F', ovr: 113, img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Kevin_Durant_2018.jpg' },
  { id: 1020, name: '데빈 부커', team: ['Suns'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Devin_Booker_2022.jpg' },
  { id: 3018, name: '브래들리 빌', team: ['Suns', 'Wizards'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Bradley_Beal_2022.jpg' },

  // 7. LA Lakers
  { id: 1002, name: '르브론 제임스', team: ['Lakers', 'Cavaliers', 'Heat'], pos: 'F', ovr: 118, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/LeBron_James_Lakers.jpg' },
  { id: 1030, name: '앤서니 데이비스', team: ['Lakers', 'Pelicans'], pos: 'C', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Anthony_Davis_2022.jpg' },
  { id: 3019, name: '오스틴 리브스', team: ['Lakers'], pos: 'G', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Austin_Reaves_2022.jpg' },

  // 8. Golden State Warriors
  { id: 1005, name: '스테픈 커리', team: ['Warriors'], pos: 'G', ovr: 115, img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg' },
  { id: 1082, name: '드레이먼드 그린', team: ['Warriors'], pos: 'F', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/7/77/Draymond_Green_2016.jpg' },
  { id: 3021, name: '조나단 쿠밍가', team: ['Warriors'], pos: 'F', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jonathan_Kuminga_2022.jpg' },
  { id: 3022, name: '버디 힐드', team: ['Warriors', '76ers', 'Pacers', 'Kings', 'Pelicans'], pos: 'G', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Buddy_Hield_2022.jpg' },

  // 9. Oklahoma City Thunder
  { id: 1017, name: 'S. 길저스-알렉산더', team: ['Thunder', 'Clippers'], pos: 'G', ovr: 112, img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Shai_Gilgeous-Alexander_2022.jpg' },
  { id: 1077, name: '쳇 홈그렌', team: ['Thunder'], pos: 'C', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Chet_Holmgren_2022.jpg' },
  { id: 1078, name: '제이런 윌리엄스', team: ['Thunder'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jalen_Williams_2022.jpg' },
  { id: 3010, name: '아이재아 하텐슈타인', team: ['Thunder', 'Knicks', 'Clippers', 'Nuggets'], pos: 'C', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Isaiah_Hartenstein_2022.jpg' },
  { id: 3011, name: '알렉스 카루소', team: ['Thunder', 'Bulls', 'Lakers'], pos: 'G', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Alex_Caruso_2022.jpg' },

  // 10. Denver Nuggets
  { id: 1006, name: '니콜라 요키치', team: ['Nuggets'], pos: 'C', ovr: 114, img: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Nikola_Joki%C4%87_free_throw.jpg' },
  { id: 1057, name: '자말 머레이', team: ['Nuggets'], pos: 'G', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Jamal_Murray_2022.jpg' },
  { id: 3012, name: '애런 고든', team: ['Nuggets', 'Magic'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Aaron_Gordon_2022.jpg' },
  { id: 3013, name: '마이클 포터 Jr', team: ['Nuggets'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Michael_Porter_Jr_2022.jpg' },
  { id: 3014, name: '러셀 웨스트브룩', team: ['Nuggets', 'Clippers', 'Lakers', 'Wizards', 'Rockets', 'Thunder'], pos: 'G', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Russell_Westbrook_2022.jpg' },

  // 11. Minnesota Timberwolves
  { id: 1018, name: '앤서니 에드워즈', team: ['Timberwolves'], pos: 'G', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Anthony_Edwards_2022.jpg' },
  { id: 1084, name: '루디 고베어', team: ['Timberwolves', 'Jazz'], pos: 'C', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Rudy_Gobert_2021.jpg' },
  { id: 1066, name: '줄리어스 랜들', team: ['Timberwolves', 'Knicks', 'Pelicans', 'Lakers'], pos: 'F', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Julius_Randle_2022.jpg' },
  { id: 3015, name: '돈테 디빈첸조', team: ['Timberwolves', 'Knicks', 'Warriors', 'Kings', 'Bucks'], pos: 'G', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Donte_DiVincenzo_2022.jpg' },
  { id: 3016, name: '나즈 리드', team: ['Timberwolves'], pos: 'C', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Naz_Reid_2022.jpg' },

  // 12. San Antonio Spurs
  { id: 1019, name: '빅터 웸반야마', team: ['Spurs'], pos: 'C', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/8/8b/Victor_Wembanyama_2023.jpg' },
  { id: 5006, name: '크리스 폴', team: ['Spurs', 'Warriors', 'Suns', 'Thunder', 'Rockets', 'Clippers', 'Hornets'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chris_Paul_2014.jpg' },
  { id: 3024, name: '해리슨 반즈', team: ['Spurs', 'Kings', 'Mavericks', 'Warriors'], pos: 'F', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Harrison_Barnes_2022.jpg' },

  // 13. Sacramento Kings
  { id: 1055, name: '디애런 팍스', team: ['Kings'], pos: 'G', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/9/99/De%27Aaron_Fox_2022.jpg' },
  { id: 1039, name: '도만타스 사보니스', team: ['Kings', 'Pacers', 'Thunder'], pos: 'C', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Domantas_Sabonis_2022.jpg' },
  { id: 1059, name: '더마 드로잔', team: ['Kings', 'Bulls', 'Spurs', 'Raptors'], pos: 'F', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/DeMar_DeRozan_2022.jpg' },

  // 14. Indiana Pacers
  { id: 1037, name: '타이리스 할리버튼', team: ['Pacers', 'Kings'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/Tyrese_Haliburton_2022.jpg' },
  { id: 1071, name: '파스칼 시아캄', team: ['Pacers', 'Raptors'], pos: 'F', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Pascal_Siakam_2022.jpg' },
  { id: 3009, name: '마일스 터너', team: ['Pacers'], pos: 'C', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Myles_Turner_2022.jpg' },

  // 15. Cleveland Cavaliers
  { id: 1035, name: '도노반 미첼', team: ['Cavaliers', 'Jazz'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Donovan_Mitchell_2022.jpg' },
  { id: 1068, name: '다리우스 갈랜드', team: ['Cavaliers'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Darius_Garland_2022.jpg' },
  { id: 1069, name: '에반 모블리', team: ['Cavaliers'], pos: 'F', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Evan_Mobley_2022.jpg' },
  { id: 1070, name: '재럿 알렌', team: ['Cavaliers', 'Nets'], pos: 'C', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jarrett_Allen_2022.jpg' },

  // 16. Miami Heat
  { id: 1031, name: '지미 버틀러', team: ['Heat', '76ers', 'Timberwolves', 'Bulls'], pos: 'F', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Jimmy_Butler_2022.jpg' },
  { id: 1038, name: '뱀 아데바요', team: ['Heat'], pos: 'C', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Bam_Adebayo_2022.jpg' },
  { id: 1065, name: '타일러 히로', team: ['Heat'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Tyler_Herro_2022.jpg' },

  // 17. Orlando Magic
  { id: 1074, name: '파올로 반케로', team: ['Magic'], pos: 'F', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Paolo_Banchero_2022.jpg' },
  { id: 1075, name: '프란츠 바그너', team: ['Magic'], pos: 'F', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Franz_Wagner_2022.jpg' },

  // 18. New Orleans Pelicans
  { id: 1079, name: '자이언 윌리엄슨', team: ['Pelicans'], pos: 'F', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Zion_Williamson_2022.jpg' },
  { id: 1080, name: '브랜든 잉그램', team: ['Pelicans', 'Lakers'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Brandon_Ingram_2022.jpg' },
  { id: 3027, name: 'CJ 맥컬럼', team: ['Pelicans', 'Blazers'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/CJ_McCollum_2022.jpg' },
  { id: 3028, name: '디욘테 머레이', team: ['Pelicans', 'Hawks', 'Spurs'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Dejounte_Murray_2022.jpg' },

  // 19. Houston Rockets
  { id: 1076, name: '알페렌 센군', team: ['Rockets'], pos: 'C', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Alperen_%C5%9Eeng%C3%BCn_2022.jpg' },
  { id: 3029, name: '제일런 그린', team: ['Rockets'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jalen_Green_2022.jpg' },
  { id: 3030, name: '프레드 밴블릿', team: ['Rockets', 'Raptors'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Fred_VanVleet_2022.jpg' },

  // 20. Memphis Grizzlies
  { id: 1036, name: '자 모란트', team: ['Grizzlies'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Ja_Morant_2022.jpg' },
  { id: 3025, name: '자렌 잭슨 Jr', team: ['Grizzlies'], pos: 'C', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Jaren_Jackson_Jr_2022.jpg' },
  { id: 3026, name: '데스몬드 베인', team: ['Grizzlies'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Desmond_Bane_2022.jpg' },

  // 21. LA Clippers
  { id: 1029, name: '카와이 레너드', team: ['Clippers', 'Raptors', 'Spurs'], pos: 'F', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Kawhi_Leonard_2021.jpg' },
  { id: 1028, name: '제임스 하든', team: ['Clippers', '76ers', 'Nets', 'Rockets', 'Thunder'], pos: 'G', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/0/08/James_Harden_2018.jpg' },
  { id: 3023, name: '이비카 주바치', team: ['Clippers', 'Lakers'], pos: 'C', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Ivica_Zubac_2022.jpg' },

  // 22. Atlanta Hawks
  { id: 1056, name: '트레이 영', team: ['Hawks'], pos: 'G', ovr: 109, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/Trae_Young_2022.jpg' },

  // 23. Charlotte Hornets
  { id: 1060, name: '라멜로 볼', team: ['Hornets'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/LaMelo_Ball_2022.jpg' },

  // 24. Detroit Pistons
  { id: 1073, name: '케이드 커닝햄', team: ['Pistons'], pos: 'G', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Cade_Cunningham_2022.jpg' },

  // 25. Utah Jazz
  { id: 1024, name: '라우리 마카넨', team: ['Jazz', 'Cavaliers', 'Bulls'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Lauri_Markkanen_2022.jpg' },

  // 26. Washington Wizards
  { id: 3031, name: '카일 쿠즈마', team: ['Wizards', 'Lakers'], pos: 'F', ovr: 107, img: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Kyle_Kuzma_2022.jpg' },

  // 27. Brooklyn Nets
  { id: 5004, name: '캠 토마스', team: ['Nets'], pos: 'G', ovr: 107, img: '' },
  { id: 3032, name: '벤 시몬스', team: ['Nets', '76ers'], pos: 'G', ovr: 106, img: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/Ben_Simmons_2022.jpg' },

  // 28. Toronto Raptors
  { id: 5003, name: '스카티 반스', team: ['Raptors'], pos: 'F', ovr: 108, img: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Scottie_Barnes_2022.jpg' },

  // 29. Portland Trail Blazers
  // (Adding key player)
  { id: 3033, name: '제라미 그랜트', team: ['Blazers', 'Pistons', 'Nuggets'], pos: 'F', ovr: 107, img: '' },

  // --- LEGENDS ---
  { id: 1001, name: '마이클 조던', team: ['Bulls', 'Wizards'], pos: 'G', ovr: 119, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Jordan_Lipofsky.jpg' },
  { id: 1025, name: '스카티 피펜', team: ['Bulls', 'Rockets', 'Blazers'], pos: 'F', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Scottie_Pippen_2011.jpg' },
  { id: 1011, name: '매직 존슨', team: ['Lakers'], pos: 'G', ovr: 116, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/Magic_Johnson_1987.jpg' },
  { id: 1010, name: '카림 압둘자바', team: ['Lakers', 'Bucks'], pos: 'C', ovr: 116, img: 'https://upload.wikimedia.org/wikipedia/commons/a/aa/Kareem_Abdul-Jabbar_Lipofsky.jpg' },
  { id: 1004, name: '샤킬 오닐', team: ['Lakers', 'Magic', 'Heat', 'Suns', 'Cavaliers', 'Celtics'], pos: 'C', ovr: 115, img: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Shaquille_O%27Neal_KT.jpg' },
  { id: 1012, name: '래리 버드', team: ['Celtics'], pos: 'F', ovr: 114, img: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Larry_Bird_Lipofsky.jpg' },
  { id: 1022, name: '케빈 가넷', team: ['Celtics', 'Timberwolves', 'Nets'], pos: 'F', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Kevin_Garnett_2008.jpg' },
  { id: 1013, name: '팀 던컨', team: ['Spurs'], pos: 'F', ovr: 114, img: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Tim_Duncan_2010.jpg' },
  { id: 1043, name: '데이비드 로빈슨', team: ['Spurs'], pos: 'C', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/9/9b/David_Robinson_Lipofsky.jpg' },
  { id: 1014, name: '윌트 체임벌린', team: ['Warriors', '76ers', 'Lakers'], pos: 'C', ovr: 117, img: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Wilt_Chamberlain3.jpg' },
  { id: 1021, name: '하킴 올라주원', team: ['Rockets', 'Raptors'], pos: 'C', ovr: 113, img: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Hakeem_Olajuwon_Lipofsky.jpg' },
  { id: 1023, name: '더크 노비츠키', team: ['Mavericks'], pos: 'F', ovr: 112, img: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Dirk_Nowitzki_2010.jpg' },
  { id: 1026, name: '앨런 아이버슨', team: ['76ers', 'Nuggets', 'Pistons', 'Grizzlies'], pos: 'G', ovr: 111, img: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Allen_Iverson_Lipofsky.jpg' },
  { id: 1027, name: '드웨인 웨이드', team: ['Heat', 'Bulls', 'Cavaliers'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Dwyane_Wade_2011.jpg' },
  { id: 1045, name: '스티브 내쉬', team: ['Suns', 'Mavericks', 'Lakers'], pos: 'G', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Steve_Nash_2008.jpg' },
  { id: 1024, name: '찰스 바클리', team: ['Suns', '76ers', 'Rockets'], pos: 'F', ovr: 110, img: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Charles_Barkley_2018.jpg' },
];
