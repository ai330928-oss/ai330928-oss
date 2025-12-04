// PlayerData.js

// ---------------- [SOCCER CONFIG] ----------------

export const TEAMS_SOCCER = [
  "토트넘", "바이에른 뮌헨", "PSG", "페예노르트", "울버햄튼", "마인츠",
  "맨시티", "아스날", "리버풀", "맨유", "첼시", "아스톤 빌라", "뉴캐슬",
  "레알 마드리드", "바르셀로나", "아틀레티코", "지로나",
  "인테르", "AC 밀란", "유벤투스", "나폴리", "AS 로마",
  "도르트문트", "레버쿠젠", "라이프치히",
  "알 나스르", "인터 마이애미"
];

export const SOCCER_FORMATIONS = {
  '4-4-2': { name: '4-4-2 플랫', slots: ['GK','DF','DF','DF','DF','MF','MF','MF','MF','FW','FW'], atk: 0 },
  '4-3-3': { name: '4-3-3 공격', slots: ['GK','DF','DF','DF','DF','MF','MF','MF','FW','FW','FW'], atk: 5 },
  '3-5-2': { name: '3-5-2 윙백', slots: ['GK','DF','DF','DF','MF','MF','MF','MF','MF','FW','FW'], atk: 3 },
  '5-4-1': { name: '5-4-1 수비', slots: ['GK','DF','DF','DF','DF','DF','MF','MF','MF','MF','FW'], atk: -5 },
};

export const SOCCER_DATA = [
  // --- 한국 선수 (KOREAN) ---
  { id: 101, name: "손흥민", team: "토트넘", ovr: 89, pos: "FW", img: "https://placehold.co/100?text=SON" },
  { id: 102, name: "김민재", team: "바이에른 뮌헨", ovr: 87, pos: "DF", img: "https://placehold.co/100?text=KIM" },
  { id: 103, name: "이강인", team: "PSG", ovr: 85, pos: "MF", img: "https://placehold.co/100?text=LEE" },
  { id: 104, name: "황희찬", team: "울버햄튼", ovr: 82, pos: "FW", img: "https://placehold.co/100?text=HWANG" },
  { id: 105, name: "황인범", team: "페예노르트", ovr: 81, pos: "MF", img: "https://placehold.co/100?text=InBeom" },
  { id: 106, name: "이재성", team: "마인츠", ovr: 79, pos: "MF", img: "https://placehold.co/100?text=JaeSung" },

  // --- 공격수 (FW) ---
  { id: 1, name: "홀란드", team: "맨시티", ovr: 92, pos: "FW", img: "https://placehold.co/100?text=Haaland" },
  { id: 2, name: "음바페", team: "레알 마드리드", ovr: 92, pos: "FW", img: "https://placehold.co/100?text=Mbappe" },
  { id: 3, name: "해리 케인", team: "바이에른 뮌헨", ovr: 90, pos: "FW", img: "https://placehold.co/100?text=Kane" },
  { id: 4, name: "모하메드 살라", team: "리버풀", ovr: 89, pos: "FW", img: "https://placehold.co/100?text=Salah" },
  { id: 5, name: "비니시우스", team: "레알 마드리드", ovr: 90, pos: "FW", img: "https://placehold.co/100?text=Vini" },
  { id: 6, name: "라민 야말", team: "바르셀로나", ovr: 86, pos: "FW", img: "https://placehold.co/100?text=Yamal" },
  { id: 7, name: "콜 파머", team: "첼시", ovr: 86, pos: "FW", img: "https://placehold.co/100?text=Palmer" },
  { id: 8, name: "부카요 사카", team: "아스날", ovr: 87, pos: "FW", img: "https://placehold.co/100?text=Saka" },
  { id: 9, name: "필 포든", team: "맨시티", ovr: 87, pos: "FW", img: "https://placehold.co/100?text=Foden" },
  { id: 10, name: "라우타로", team: "인테르", ovr: 87, pos: "FW", img: "https://placehold.co/100?text=Lautaro" },
  { id: 11, name: "오시멘", team: "나폴리", ovr: 86, pos: "FW", img: "https://placehold.co/100?text=Osimhen" },
  { id: 12, name: "레반도프스키", team: "바르셀로나", ovr: 88, pos: "FW", img: "https://placehold.co/100?text=Lewy" },
  { id: 13, name: "그리즈만", team: "아틀레티코", ovr: 86, pos: "FW", img: "https://placehold.co/100?text=Grizu" },
  { id: 14, name: "요케레스", team: "토트넘", ovr: 85, pos: "FW", img: "https://placehold.co/100?text=Gyokeres" },
  { id: 15, name: "니코 윌리엄스", team: "바르셀로나", ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Nico" },
  { id: 16, name: "올리 왓킨스", team: "아스톤 빌라", ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Watkins" },
  { id: 17, name: "루이스 디아스", team: "리버풀", ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Diaz" },
  { id: 18, name: "하파엘 레앙", team: "AC 밀란", ovr: 85, pos: "FW", img: "https://placehold.co/100?text=Leao" },
  { id: 19, name: "리오넬 메시", team: "인터 마이애미", ovr: 90, pos: "FW", img: "https://placehold.co/100?text=Messi" },
  { id: 20, name: "호날두", team: "알 나스르", ovr: 88, pos: "FW", img: "https://placehold.co/100?text=CR7" },

  // --- 미드필더 (MF) ---
  { id: 30, name: "케빈 더브라위너", team: "맨시티", ovr: 91, pos: "MF", img: "https://placehold.co/100?text=KDB" },
  { id: 31, name: "로드리", team: "맨시티", ovr: 91, pos: "MF", img: "https://placehold.co/100?text=Rodri" },
  { id: 32, name: "주드 벨링엄", team: "레알 마드리드", ovr: 90, pos: "MF", img: "https://placehold.co/100?text=Jude" },
  { id: 33, name: "외데고르", team: "아스날", ovr: 88, pos: "MF", img: "https://placehold.co/100?text=Odegaard" },
  { id: 34, name: "비르츠", team: "레버쿠젠", ovr: 87, pos: "MF", img: "https://placehold.co/100?text=Wirtz" },
  { id: 35, name: "무시알라", team: "바이에른 뮌헨", ovr: 87, pos: "MF", img: "https://placehold.co/100?text=Musiala" },
  { id: 36, name: "발베르데", team: "레알 마드리드", ovr: 87, pos: "MF", img: "https://placehold.co/100?text=Valverde" },
  { id: 37, name: "데클란 라이스", team: "아스날", ovr: 86, pos: "MF", img: "https://placehold.co/100?text=Rice" },
  { id: 38, name: "페드리", team: "바르셀로나", ovr: 85, pos: "MF", img: "https://placehold.co/100?text=Pedri" },
  { id: 39, name: "B.페르난데스", team: "맨유", ovr: 86, pos: "MF", img: "https://placehold.co/100?text=Bruno" },
  { id: 40, name: "바렐라", team: "인테르", ovr: 86, pos: "MF", img: "https://placehold.co/100?text=Barella" },
  { id: 41, name: "맥 알리스터", team: "리버풀", ovr: 84, pos: "MF", img: "https://placehold.co/100?text=Mac" },
  { id: 42, name: "카마빙가", team: "레알 마드리드", ovr: 84, pos: "MF", img: "https://placehold.co/100?text=Cama" },
  { id: 43, name: "브루노 기마랑이스", team: "뉴캐슬", ovr: 84, pos: "MF", img: "https://placehold.co/100?text=BrunoG" },
  { id: 44, name: "코비 마이누", team: "맨유", ovr: 80, pos: "MF", img: "https://placehold.co/100?text=Mainoo" },

  // --- 수비수 (DF) ---
  { id: 50, name: "반 다이크", team: "리버풀", ovr: 89, pos: "DF", img: "https://placehold.co/100?text=VVD" },
  { id: 51, name: "후벵 디아스", team: "맨시티", ovr: 88, pos: "DF", img: "https://placehold.co/100?text=Dias" },
  { id: 52, name: "뤼디거", team: "레알 마드리드", ovr: 87, pos: "DF", img: "https://placehold.co/100?text=Rudiger" },
  { id: 53, name: "살리바", team: "아스날", ovr: 87, pos: "DF", img: "https://placehold.co/100?text=Saliba" },
  { id: 54, name: "아놀드", team: "리버풀", ovr: 86, pos: "DF", img: "https://placehold.co/100?text=TAA" },
  { id: 55, name: "카일 워커", team: "맨시티", ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Walker" },
  { id: 56, name: "그바르디올", team: "맨시티", ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Gvardiol" },
  { id: 57, name: "바스토니", team: "인테르", ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Bastoni" },
  { id: 58, name: "더 리흐트", team: "맨유", ovr: 84, pos: "DF", img: "https://placehold.co/100?text=DeLigt" },
  { id: 59, name: "로메로", team: "토트넘", ovr: 84, pos: "DF", img: "https://placehold.co/100?text=Romero" },

  // --- 골키퍼 (GK) ---
  { id: 60, name: "알리송", team: "리버풀", ovr: 89, pos: "GK", img: "https://placehold.co/100?text=Alisson" },
  { id: 61, name: "쿠르투아", team: "레알 마드리드", ovr: 89, pos: "GK", img: "https://placehold.co/100?text=Courtois" },
  { id: 62, name: "에데르송", team: "맨시티", ovr: 88, pos: "GK", img: "https://placehold.co/100?text=Ederson" },
  { id: 63, name: "에밀리아노", team: "아스톤 빌라", ovr: 87, pos: "GK", img: "https://placehold.co/100?text=Dibu" },
  { id: 64, name: "비카리오", team: "토트넘", ovr: 85, pos: "GK", img: "https://placehold.co/100?text=Vicario" },
];


// ---------------- [NBA CONFIG] ----------------

export const TEAMS_NBA = [
  "레이커스", "워리어스", "너게츠", "선즈", "벅스", 
  "셀틱스", "식서스", "매버릭스", "클리퍼스", "히트",
  "썬더", "울브스", "닉스", "스퍼스", "페이서스",
  "킹스", "그리즐리스", "캐벌리어스", "매직", "펠리컨스"
];

export const NBA_FORMATIONS = {
  'Balanced': { name: '밸런스 (기본)', slots: ['G','G','F','F','C'], atk: 0 },
  'Small Ball': { name: '스몰 볼 (런앤건)', slots: ['G','G','G','F','F'], atk: 3 },
  'Twin Tower': { name: '트윈 타워 (높이)', slots: ['G','G','F','C','C'], atk: -2 },
  'Defense': { name: '질식 수비', slots: ['G','F','F','F','C'], atk: -5 },
};

export const NBA_DATA = [
  // --- 슈퍼스타 (Superstars) ---
  { id: 201, name: "니콜라 요키치", team: "너게츠", ovr: 98, pos: "C", img: "https://placehold.co/100?text=Jokic" },
  { id: 202, name: "루카 돈치치", team: "매버릭스", ovr: 97, pos: "G", img: "https://placehold.co/100?text=Luka" },
  { id: 203, name: "야니스 아데토쿤보", team: "벅스", ovr: 96, pos: "F", img: "https://placehold.co/100?text=Giannis" },
  { id: 204, name: "샤이 길저스-알렉산더", team: "썬더", ovr: 96, pos: "G", img: "https://placehold.co/100?text=SGA" },
  { id: 205, name: "조엘 엠비드", team: "식서스", ovr: 96, pos: "C", img: "https://placehold.co/100?text=Embiid" },
  { id: 206, name: "제이슨 테이텀", team: "셀틱스", ovr: 95, pos: "F", img: "https://placehold.co/100?text=Tatum" },
  { id: 207, name: "스테판 커리", team: "워리어스", ovr: 95, pos: "G", img: "https://placehold.co/100?text=Curry" },
  { id: 208, name: "르브론 제임스", team: "레이커스", ovr: 95, pos: "F", img: "https://placehold.co/100?text=LeBron" },
  { id: 209, name: "케빈 듀란트", team: "선즈", ovr: 95, pos: "F", img: "https://placehold.co/100?text=KD" },
  { id: 210, name: "앤서니 데이비스", team: "레이커스", ovr: 94, pos: "C", img: "https://placehold.co/100?text=AD" },

  // --- 가드 (Guards) ---
  { id: 211, name: "앤서니 에드워즈", team: "울브스", ovr: 92, pos: "G", img: "https://placehold.co/100?text=Ant" },
  { id: 212, name: "제일런 브런슨", team: "닉스", ovr: 91, pos: "G", img: "https://placehold.co/100?text=Brunson" },
  { id: 213, name: "데빈 부커", team: "선즈", ovr: 91, pos: "G", img: "https://placehold.co/100?text=Booker" },
  { id: 214, name: "카이리 어빙", team: "매버릭스", ovr: 90, pos: "G", img: "https://placehold.co/100?text=Kyrie" },
  { id: 215, name: "도노반 미첼", team: "캐벌리어스", ovr: 90, pos: "G", img: "https://placehold.co/100?text=Spida" },
  { id: 216, name: "타이리스 할리버튼", team: "페이서스", ovr: 90, pos: "G", img: "https://placehold.co/100?text=Hali" },
  { id: 217, name: "자 모란트", team: "그리즐리스", ovr: 89, pos: "G", img: "https://placehold.co/100?text=Ja" },
  { id: 218, name: "데미안 릴라드", team: "벅스", ovr: 89, pos: "G", img: "https://placehold.co/100?text=Dame" },
  { id: 219, name: "타이리스 맥시", team: "식서스", ovr: 88, pos: "G", img: "https://placehold.co/100?text=Maxey" },
  { id: 220, name: "디애런 팍스", team: "킹스", ovr: 88, pos: "G", img: "https://placehold.co/100?text=Fox" },
  { id: 221, name: "트레이 영", team: "호크스", ovr: 87, pos: "G", img: "https://placehold.co/100?text=Trae" },
  { id: 222, name: "제임스 하든", team: "클리퍼스", ovr: 86, pos: "G", img: "https://placehold.co/100?text=Harden" },
  { id: 223, name: "자말 머레이", team: "너게츠", ovr: 86, pos: "G", img: "https://placehold.co/100?text=Murray" },
  { id: 224, name: "라멜로 볼", team: "호네츠", ovr: 85, pos: "G", img: "https://placehold.co/100?text=LaMelo" },
  { id: 225, name: "케이드 커닝햄", team: "피스톤즈", ovr: 84, pos: "G", img: "https://placehold.co/100?text=Cade" },

  // --- 포워드 (Forwards) ---
  { id: 230, name: "제일런 브라운", team: "셀틱스", ovr: 91, pos: "F", img: "https://placehold.co/100?text=Brown" },
  { id: 231, name: "카와이 레너드", team: "클리퍼스", ovr: 91, pos: "F", img: "https://placehold.co/100?text=Kawhi" },
  { id: 232, name: "폴 조지", team: "식서스", ovr: 89, pos: "F", img: "https://placehold.co/100?text=PG13" },
  { id: 233, name: "지미 버틀러", team: "히트", ovr: 89, pos: "F", img: "https://placehold.co/100?text=Jimmy" },
  { id: 234, name: "자이언 윌리엄슨", team: "펠리컨스", ovr: 88, pos: "F", img: "https://placehold.co/100?text=Zion" },
  { id: 235, name: "파올로 반케로", team: "매직", ovr: 88, pos: "F", img: "https://placehold.co/100?text=Paolo" },
  { id: 236, name: "파스칼 시아캄", team: "페이서스", ovr: 87, pos: "F", img: "https://placehold.co/100?text=Siakam" },
  { id: 237, name: "라우리 마카넨", team: "재즈", ovr: 87, pos: "F", img: "https://placehold.co/100?text=Lauri" },
  { id: 238, name: "스카티 반스", team: "랩터스", ovr: 86, pos: "F", img: "https://placehold.co/100?text=Scottie" },
  { id: 239, name: "칼 앤서니 타운스", team: "닉스", ovr: 88, pos: "F", img: "https://placehold.co/100?text=KAT" },
  { id: 240, name: "제일런 윌리엄스", team: "썬더", ovr: 86, pos: "F", img: "https://placehold.co/100?text=JDub" },
  { id: 241, name: "프란츠 바그너", team: "매직", ovr: 85, pos: "F", img: "https://placehold.co/100?text=Franz" },
  { id: 242, name: "더마 드로잔", team: "킹스", ovr: 85, pos: "F", img: "https://placehold.co/100?text=DeRozan" },
  { id: 243, name: "쳇 홈그렌", team: "썬더", ovr: 87, pos: "F", img: "https://placehold.co/100?text=Chet" },
  { id: 244, name: "쿠퍼 플래그", team: "듀크대", ovr: 82, pos: "F", img: "https://placehold.co/100?text=Flagg" },

  // --- 센터 (Centers) ---
  { id: 250, name: "빅터 웸반야마", team: "스퍼스", ovr: 91, pos: "C", img: "https://placehold.co/100?text=Wemby" },
  { id: 251, name: "뱀 아데바요", team: "히트", ovr: 89, pos: "C", img: "https://placehold.co/100?text=Bam" },
  { id: 252, name: "도만타스 사보니스", team: "킹스", ovr: 89, pos: "C", img: "https://placehold.co/100?text=Sabonis" },
  { id: 253, name: "루디 고베어", team: "울브스", ovr: 86, pos: "C", img: "https://placehold.co/100?text=Gobert" },
  { id: 254, name: "알페렌 센군", team: "로켓츠", ovr: 86, pos: "C", img: "https://placehold.co/100?text=Sengun" },
  { id: 255, name: "자렛 알렌", team: "캐벌리어스", ovr: 85, pos: "C", img: "https://placehold.co/100?text=Allen" },
  { id: 256, name: "마일스 터너", team: "페이서스", ovr: 84, pos: "C", img: "https://placehold.co/100?text=Turner" },
  { id: 257, name: "크리스탑스 포르징기스", team: "셀틱스", ovr: 86, pos: "C", img: "https://placehold.co/100?text=Tingus" },
  { id: 259, name: "디안드레 에이튼", team: "블레이저스", ovr: 83, pos: "C", img: "https://placehold.co/100?text=Ayton" },
  { id: 260, name: "브룩 로페즈", team: "벅스", ovr: 82, pos: "C", img: "https://placehold.co/100?text=Lopez" }
];

// ---------------- [COMMON] ----------------
export const DIFFICULTIES = {
  '초급': { bonus: 0 },
  '중급': { bonus: 20 },
  '고급': { bonus: 40 },
  '월드클래스': { bonus: 60 }
};
