// PlayerData.js

// ---------------- [SOCCER CONFIG] ----------------

export const TEAMS_SOCCER = [
  "토트넘", "바이에른 뮌헨", "PSG", "페예노르트", "울버햄튼", "마인츠",
  "맨시티", "아스날", "리버풀", "맨유", "첼시", "아스톤 빌라", "뉴캐슬",
  "레알 마드리드", "바르셀로나", "아틀레티코", "지로나", "세비야", "발렌시아", "소시에다드",
  "인테르", "AC 밀란", "유벤투스", "나폴리", "AS 로마", "아탈란타",
  "도르트문트", "레버쿠젠", "라이프치히", "프랑크푸르트",
  "아약스", "PSV", "본머스",
  "알 나스르", "인터 마이애미", "알 힐랄", "알 이티하드"
];

export const SOCCER_FORMATIONS = {
  '4-4-2': { name: '4-4-2 플랫', slots: ['GK', 'DF', 'DF', 'DF', 'DF', 'MF', 'MF', 'MF', 'MF', 'FW', 'FW'], atk: 0 },
  '4-3-3': { name: '4-3-3 공격', slots: ['GK', 'DF', 'DF', 'DF', 'DF', 'MF', 'MF', 'MF', 'FW', 'FW', 'FW'], atk: 5 },
  '3-5-2': { name: '3-5-2 윙백', slots: ['GK', 'DF', 'DF', 'DF', 'MF', 'MF', 'MF', 'MF', 'MF', 'FW', 'FW'], atk: 3 },
  '5-4-1': { name: '5-4-1 수비', slots: ['GK', 'DF', 'DF', 'DF', 'DF', 'DF', 'MF', 'MF', 'MF', 'MF', 'FW'], atk: -5 },
};

export const SOCCER_DATA = [
  // --- 한국 선수 (KOREAN) ---
  { id: 101, name: "손흥민", team: ["토트넘", "레버쿠젠"], ovr: 89, pos: "FW", img: "https://placehold.co/100?text=SON" },
  { id: 102, name: "김민재", team: ["바이에른 뮌헨", "나폴리"], ovr: 87, pos: "DF", img: "https://placehold.co/100?text=KIM" },
  { id: 103, name: "이강인", team: ["PSG", "마요르카"], ovr: 85, pos: "MF", img: "https://placehold.co/100?text=LEE" },
  { id: 104, name: "황희찬", team: ["울버햄튼", "라이프치히"], ovr: 82, pos: "FW", img: "https://placehold.co/100?text=HWANG" },
  { id: 105, name: "황인범", team: "페예노르트", ovr: 81, pos: "MF", img: "https://placehold.co/100?text=InBeom" },
  { id: 106, name: "이재성", team: "마인츠", ovr: 79, pos: "MF", img: "https://placehold.co/100?text=JaeSung" },

  // --- 공격수 (FW) ---
  { id: 1, name: "홀란드", team: ["맨시티", "도르트문트"], ovr: 92, pos: "FW", img: "https://placehold.co/100?text=Haaland" },
  { id: 2, name: "음바페", team: ["레알 마드리드", "PSG"], ovr: 92, pos: "FW", img: "https://placehold.co/100?text=Mbappe" },
  { id: 3, name: "해리 케인", team: ["바이에른 뮌헨", "토트넘"], ovr: 90, pos: "FW", img: "https://placehold.co/100?text=Kane" },
  { id: 4, name: "모하메드 살라", team: ["리버풀", "첼시", "AS 로마"], ovr: 90, pos: "FW", img: "https://placehold.co/100?text=Salah" },
  { id: 5, name: "비니시우스", team: "레알 마드리드", ovr: 90, pos: "FW", img: "https://placehold.co/100?text=Vini" },
  { id: 6, name: "라민 야말", team: "바르셀로나", ovr: 86, pos: "FW", img: "https://placehold.co/100?text=Yamal" },
  { id: 7, name: "콜 파머", team: ["첼시", "맨시티"], ovr: 86, pos: "FW", img: "https://placehold.co/100?text=Palmer" },
  { id: 8, name: "부카요 사카", team: "아스날", ovr: 87, pos: "FW", img: "https://placehold.co/100?text=Saka" },
  { id: 9, name: "필 포든", team: "맨시티", ovr: 87, pos: "FW", img: "https://placehold.co/100?text=Foden" },
  { id: 10, name: "라우타로", team: "인테르", ovr: 87, pos: "FW", img: "https://placehold.co/100?text=Lautaro" },
  { id: 11, name: "오시멘", team: "나폴리", ovr: 86, pos: "FW", img: "https://placehold.co/100?text=Osimhen" },
  { id: 12, name: "레반도프스키", team: ["바르셀로나", "바이에른 뮌헨", "도르트문트"], ovr: 88, pos: "FW", img: "https://placehold.co/100?text=Lewy" },
  { id: 13, name: "그리즈만", team: ["아틀레티코", "바르셀로나"], ovr: 86, pos: "FW", img: "https://placehold.co/100?text=Grizu" },
  { id: 14, name: "요케레스", team: "토트넘", ovr: 85, pos: "FW", img: "https://placehold.co/100?text=Gyokeres" },
  { id: 15, name: "니코 윌리엄스", team: "바르셀로나", ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Nico" },
  { id: 16, name: "올리 왓킨스", team: "아스톤 빌라", ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Watkins" },
  { id: 17, name: "루이스 디아스", team: ["리버풀", "FC 포르투"], ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Diaz" },
  { id: 18, name: "하파엘 레앙", team: "AC 밀란", ovr: 85, pos: "FW", img: "https://placehold.co/100?text=Leao" },
  { id: 19, name: "리오넬 메시", team: ["인터 마이애미", "바르셀로나", "PSG"], ovr: 90, pos: "FW", img: "https://placehold.co/100?text=Messi" },
  { id: 20, name: "호날두", team: ["알 나스르", "레알 마드리드", "맨유", "유벤투스"], ovr: 88, pos: "FW", img: "https://placehold.co/100?text=CR7" },
  { id: 21, name: "네이마르", team: ["알 힐랄", "PSG", "바르셀로나"], ovr: 88, pos: "FW", img: "https://placehold.co/100?text=Neymar" },
  { id: 22, name: "카림 벤제마", team: ["알 이티하드", "레알 마드리드"], ovr: 87, pos: "FW", img: "https://placehold.co/100?text=Benzema" },
  { id: 23, name: "사디오 마네", team: ["알 나스르", "리버풀", "바이에른 뮌헨"], ovr: 85, pos: "FW", img: "https://placehold.co/100?text=Mane" },
  { id: 24, name: "마커스 래시포드", team: "맨유", ovr: 83, pos: "FW", img: "https://placehold.co/100?text=Rashford" },
  { id: 25, name: "카이 하베르츠", team: ["아스날", "첼시", "레버쿠젠"], ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Havertz" },
  { id: 26, name: "호드리구", team: "레알 마드리드", ovr: 85, pos: "FW", img: "https://placehold.co/100?text=Rodrygo" },
  { id: 27, name: "훌리안 알바레스", team: ["아틀레티코", "맨시티"], ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Alvarez" },
  { id: 80, name: "알렉산더 이삭", team: ["뉴캐슬", "소시에다드", "도르트문트"], ovr: 85, pos: "FW", img: "https://placehold.co/100?text=Isak" },
  { id: 81, name: "코디 각포", team: ["리버풀", "PSV"], ovr: 84, pos: "FW", img: "https://placehold.co/100?text=Gakpo" },
  { id: 82, name: "에키티케", team: ["프랑크푸르트", "PSG"], ovr: 81, pos: "FW", img: "https://placehold.co/100?text=Ekitike" },
  { id: 83, name: "리오 은구모하", team: ["리버풀", "첼시"], ovr: 72, pos: "FW", img: "https://placehold.co/100?text=Ngumoha" }, // 유망주

  // --- 미드필더 (MF) ---
  { id: 30, name: "케빈 더브라위너", team: ["맨시티", "첼시", "울버햄튼"], ovr: 91, pos: "MF", img: "https://placehold.co/100?text=KDB" },
  { id: 31, name: "로드리", team: ["맨시티", "아틀레티코"], ovr: 91, pos: "MF", img: "https://placehold.co/100?text=Rodri" },
  { id: 32, name: "주드 벨링엄", team: ["레알 마드리드", "도르트문트"], ovr: 90, pos: "MF", img: "https://placehold.co/100?text=Jude" },
  { id: 33, name: "외데고르", team: ["아스날", "레알 마드리드"], ovr: 88, pos: "MF", img: "https://placehold.co/100?text=Odegaard" },
  { id: 34, name: "비르츠", team: "레버쿠젠", ovr: 88, pos: "MF", img: "https://placehold.co/100?text=Wirtz" },
  { id: 35, name: "무시알라", team: "바이에른 뮌헨", ovr: 87, pos: "MF", img: "https://placehold.co/100?text=Musiala" },
  { id: 36, name: "발베르데", team: "레알 마드리드", ovr: 87, pos: "MF", img: "https://placehold.co/100?text=Valverde" },
  { id: 37, name: "데클란 라이스", team: "아스날", ovr: 86, pos: "MF", img: "https://placehold.co/100?text=Rice" },
  { id: 38, name: "페드리", team: "바르셀로나", ovr: 85, pos: "MF", img: "https://placehold.co/100?text=Pedri" },
  { id: 39, name: "B.페르난데스", team: "맨유", ovr: 86, pos: "MF", img: "https://placehold.co/100?text=Bruno" },
  { id: 40, name: "바렐라", team: "인테르", ovr: 86, pos: "MF", img: "https://placehold.co/100?text=Barella" },
  { id: 41, name: "맥 알리스터", team: ["리버풀", "브라이튼"], ovr: 85, pos: "MF", img: "https://placehold.co/100?text=Mac" },
  { id: 42, name: "카마빙가", team: "레알 마드리드", ovr: 84, pos: "MF", img: "https://placehold.co/100?text=Cama" },
  { id: 43, name: "브루노 기마랑이스", team: ["뉴캐슬", "올랭피크 리옹"], ovr: 84, pos: "MF", img: "https://placehold.co/100?text=BrunoG" },
  { id: 44, name: "코비 마이누", team: "맨유", ovr: 80, pos: "MF", img: "https://placehold.co/100?text=Mainoo" },
  { id: 130, name: "루카 모드리치", team: ["레알 마드리드", "토트넘"], ovr: 88, pos: "MF", img: "https://placehold.co/100?text=Modric" },
  { id: 131, name: "베르나르두 실바", team: ["맨시티", "AS 모나코"], ovr: 87, pos: "MF", img: "https://placehold.co/100?text=B.Silva" },
  { id: 132, name: "요슈아 키미히", team: ["바이에른 뮌헨", "라이프치히"], ovr: 86, pos: "MF", img: "https://placehold.co/100?text=Kimmich" },
  { id: 133, name: "프랭키 더용", team: ["바르셀로나", "아약스"], ovr: 86, pos: "MF", img: "https://placehold.co/100?text=DeJong" },
  { id: 134, name: "제임스 매디슨", team: ["토트넘", "레스터 시티"], ovr: 84, pos: "MF", img: "https://placehold.co/100?text=Maddison" },
  { id: 135, name: "엔조 페르난데스", team: ["첼시", "벤피카"], ovr: 83, pos: "MF", img: "https://placehold.co/100?text=Enzo" },
  { id: 136, name: "모이세스 카이세도", team: ["첼시", "브라이튼"], ovr: 84, pos: "MF", img: "https://placehold.co/100?text=Caicedo" },
  { id: 140, name: "소보슬라이", team: ["리버풀", "라이프치히", "잘츠부르크"], ovr: 84, pos: "MF", img: "https://placehold.co/100?text=Szobo" },
  { id: 141, name: "흐라벤베르흐", team: ["리버풀", "바이에른 뮌헨", "아약스"], ovr: 83, pos: "MF", img: "https://placehold.co/100?text=Graven" },
  { id: 142, name: "커티스 존스", team: "리버풀", ovr: 82, pos: "MF", img: "https://placehold.co/100?text=Jones" },

  // --- 수비수 (DF) ---
  { id: 50, name: "반 다이크", team: ["리버풀", "사우샘프턴", "셀틱"], ovr: 90, pos: "DF", img: "https://placehold.co/100?text=VVD" },
  { id: 51, name: "후벵 디아스", team: "맨시티", ovr: 88, pos: "DF", img: "https://placehold.co/100?text=Dias" },
  { id: 52, name: "뤼디거", team: ["레알 마드리드", "첼시", "AS 로마"], ovr: 87, pos: "DF", img: "https://placehold.co/100?text=Rudiger" },
  { id: 53, name: "살리바", team: "아스날", ovr: 87, pos: "DF", img: "https://placehold.co/100?text=Saliba" },
  { id: 54, name: "아놀드", team: "리버풀", ovr: 86, pos: "DF", img: "https://placehold.co/100?text=TAA" },
  { id: 55, name: "카일 워커", team: ["맨시티", "토트넘"], ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Walker" },
  { id: 56, name: "그바르디올", team: ["맨시티", "라이프치히"], ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Gvardiol" },
  { id: 57, name: "바스토니", team: "인테르", ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Bastoni" },
  { id: 58, name: "더 리흐트", team: ["맨유", "바이에른 뮌헨", "유벤투스", "아약스"], ovr: 84, pos: "DF", img: "https://placehold.co/100?text=DeLigt" },
  { id: 59, name: "로메로", team: ["토트넘", "아탈란타"], ovr: 84, pos: "DF", img: "https://placehold.co/100?text=Romero" },
  { id: 150, name: "아라우호", team: "바르셀로나", ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Araujo" },
  { id: 151, name: "아슈라프 하키미", team: ["PSG", "인테르", "도르트문트", "레알 마드리드"], ovr: 86, pos: "DF", img: "https://placehold.co/100?text=Hakimi" },
  { id: 152, name: "알폰소 데이비스", team: "바이에른 뮌헨", ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Davies" },
  { id: 153, name: "미키 판더펜", team: ["토트넘", "볼프스부르크"], ovr: 83, pos: "DF", img: "https://placehold.co/100?text=VdV" },
  { id: 154, name: "리스 제임스", team: "첼시", ovr: 84, pos: "DF", img: "https://placehold.co/100?text=James" },
  { id: 155, name: "우파메카노", team: ["바이에른 뮌헨", "라이프치히"], ovr: 83, pos: "DF", img: "https://placehold.co/100?text=Upamecano" },
  { id: 170, name: "코나테", team: ["리버풀", "라이프치히"], ovr: 84, pos: "DF", img: "https://placehold.co/100?text=Konate" },
  { id: 171, name: "로버트슨", team: ["리버풀", "헐시티"], ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Robbo" },
  { id: 172, name: "프림퐁", team: ["레버쿠젠", "셀틱"], ovr: 85, pos: "DF", img: "https://placehold.co/100?text=Frimpong" },
  { id: 173, name: "조 고메즈", team: "리버풀", ovr: 81, pos: "DF", img: "https://placehold.co/100?text=Gomez" },
  { id: 174, name: "코너 브래들리", team: "리버풀", ovr: 79, pos: "DF", img: "https://placehold.co/100?text=Bradley" },
  { id: 175, name: "밀로스 케르케즈", team: "본머스", ovr: 79, pos: "DF", img: "https://placehold.co/100?text=Kerkez" },

  // --- 골키퍼 (GK) ---
  { id: 60, name: "알리송", team: ["리버풀", "AS 로마"], ovr: 90, pos: "GK", img: "https://placehold.co/100?text=Alisson" },
  { id: 61, name: "쿠르투아", team: ["레알 마드리드", "첼시", "아틀레티코"], ovr: 89, pos: "GK", img: "https://placehold.co/100?text=Courtois" },
  { id: 62, name: "에데르송", team: ["맨시티", "벤피카"], ovr: 88, pos: "GK", img: "https://placehold.co/100?text=Ederson" },
  { id: 63, name: "에밀리아노", team: ["아스톤 빌라", "아스날"], ovr: 87, pos: "GK", img: "https://placehold.co/100?text=Dibu" },
  { id: 64, name: "비카리오", team: "토트넘", ovr: 85, pos: "GK", img: "https://placehold.co/100?text=Vicario" },
  { id: 160, name: "마누엘 노이어", team: ["바이에른 뮌헨", "샬케"], ovr: 86, pos: "GK", img: "https://placehold.co/100?text=Neuer" },
  { id: 161, name: "오블락", team: ["아틀레티코", "벤피카"], ovr: 87, pos: "GK", img: "https://placehold.co/100?text=Oblak" },
  { id: 162, name: "테어 슈테겐", team: ["바르셀로나", "묀헨글라트바흐"], ovr: 88, pos: "GK", img: "https://placehold.co/100?text=MATS" },
  { id: 163, name: "돈나룸마", team: ["PSG", "AC 밀란"], ovr: 87, pos: "GK", img: "https://placehold.co/100?text=Donna" },
  { id: 164, name: "오나나", team: ["맨유", "인테르", "아약스"], ovr: 84, pos: "GK", img: "https://placehold.co/100?text=Onana" },
  { id: 165, name: "마르다슈빌리", team: ["발렌시아", "리버풀"], ovr: 83, pos: "GK", img: "https://placehold.co/100?text=Mamarda" },
];


// ---------------- [NBA CONFIG] ----------------

export const TEAMS_NBA = [
  "레이커스", "워리어스", "너게츠", "선즈", "벅스",
  "셀틱스", "식서스", "매버릭스", "클리퍼스", "히트",
  "썬더", "울브스", "닉스", "스퍼스", "페이서스",
  "킹스", "그리즐리스", "캐벌리어스", "매직", "펠리컨스",
  "불스", "로켓츠", "호크스", "랩터스", "재즈", "위저즈"
];

export const NBA_FORMATIONS = {
  'Balanced': { name: '밸런스 (기본)', slots: ['G', 'G', 'F', 'F', 'C'], atk: 0 },
  'Small Ball': { name: '스몰 볼 (런앤건)', slots: ['G', 'G', 'G', 'F', 'F'], atk: 3 },
  'Twin Tower': { name: '트윈 타워 (높이)', slots: ['G', 'G', 'F', 'C', 'C'], atk: -2 },
  'Defense': { name: '질식 수비', slots: ['G', 'F', 'F', 'F', 'C'], atk: -5 },
};

export const NBA_DATA = [
  // --- 슈퍼스타 (Superstars) ---
  { id: 201, name: "니콜라 요키치", team: "너게츠", ovr: 98, pos: "C", img: "https://placehold.co/100?text=Jokic" },
  { id: 202, name: "루카 돈치치", team: "매버릭스", ovr: 97, pos: "G", img: "https://placehold.co/100?text=Luka" },
  { id: 203, name: "야니스 아데토쿤보", team: "벅스", ovr: 96, pos: "F", img: "https://placehold.co/100?text=Giannis" },
  { id: 204, name: "샤이 길저스-알렉산더", team: ["썬더", "클리퍼스"], ovr: 96, pos: "G", img: "https://placehold.co/100?text=SGA" },
  { id: 205, name: "조엘 엠비드", team: "식서스", ovr: 96, pos: "C", img: "https://placehold.co/100?text=Embiid" },
  { id: 206, name: "제이슨 테이텀", team: "셀틱스", ovr: 95, pos: "F", img: "https://placehold.co/100?text=Tatum" },
  { id: 207, name: "스테판 커리", team: "워리어스", ovr: 95, pos: "G", img: "https://placehold.co/100?text=Curry" },
  { id: 208, name: "르브론 제임스", team: ["레이커스", "히트", "캐벌리어스"], ovr: 95, pos: "F", img: "https://placehold.co/100?text=LeBron" },
  { id: 209, name: "케빈 듀란트", team: ["선즈", "워리어스", "썬더", "네츠"], ovr: 95, pos: "F", img: "https://placehold.co/100?text=KD" },
  { id: 210, name: "앤서니 데이비스", team: ["레이커스", "펠리컨스"], ovr: 94, pos: "C", img: "https://placehold.co/100?text=AD" },

  // --- 가드 (Guards) ---
  { id: 211, name: "앤서니 에드워즈", team: "울브스", ovr: 92, pos: "G", img: "https://placehold.co/100?text=Ant" },
  { id: 212, name: "제일런 브런슨", team: ["닉스", "매버릭스"], ovr: 91, pos: "G", img: "https://placehold.co/100?text=Brunson" },
  { id: 213, name: "데빈 부커", team: "선즈", ovr: 91, pos: "G", img: "https://placehold.co/100?text=Booker" },
  { id: 214, name: "카이리 어빙", team: ["매버릭스", "캐벌리어스", "셀틱스", "네츠"], ovr: 90, pos: "G", img: "https://placehold.co/100?text=Kyrie" },
  { id: 215, name: "도노반 미첼", team: ["캐벌리어스", "재즈"], ovr: 90, pos: "G", img: "https://placehold.co/100?text=Spida" },
  { id: 216, name: "타이리스 할리버튼", team: ["페이서스", "킹스"], ovr: 90, pos: "G", img: "https://placehold.co/100?text=Hali" },
  { id: 217, name: "자 모란트", team: "그리즐리스", ovr: 89, pos: "G", img: "https://placehold.co/100?text=Ja" },
  { id: 218, name: "데미안 릴라드", team: ["벅스", "블레이저스"], ovr: 89, pos: "G", img: "https://placehold.co/100?text=Dame" },
  { id: 219, name: "타이리스 맥시", team: "식서스", ovr: 88, pos: "G", img: "https://placehold.co/100?text=Maxey" },
  { id: 220, name: "디애런 팍스", team: "킹스", ovr: 88, pos: "G", img: "https://placehold.co/100?text=Fox" },
  { id: 221, name: "트레이 영", team: "호크스", ovr: 87, pos: "G", img: "https://placehold.co/100?text=Trae" },
  { id: 222, name: "제임스 하든", team: ["클리퍼스", "로켓츠", "식서스", "네츠", "썬더"], ovr: 86, pos: "G", img: "https://placehold.co/100?text=Harden" },
  { id: 223, name: "자말 머레이", team: "너게츠", ovr: 86, pos: "G", img: "https://placehold.co/100?text=Murray" },
  { id: 224, name: "라멜로 볼", team: "호네츠", ovr: 85, pos: "G", img: "https://placehold.co/100?text=LaMelo" },
  { id: 225, name: "케이드 커닝햄", team: "피스톤즈", ovr: 84, pos: "G", img: "https://placehold.co/100?text=Cade" },
  { id: 270, name: "러셀 웨스트브룩", team: ["너게츠", "클리퍼스", "레이커스", "썬더", "위저즈", "로켓츠"], ovr: 83, pos: "G", img: "https://placehold.co/100?text=Westbrook" },
  { id: 271, name: "클레이 탐슨", team: ["매버릭스", "워리어스"], ovr: 84, pos: "G", img: "https://placehold.co/100?text=Klay" },
  { id: 272, name: "크리스 폴", team: ["스퍼스", "워리어스", "선즈", "로켓츠", "클리퍼스"], ovr: 83, pos: "G", img: "https://placehold.co/100?text=CP3" },
  { id: 273, name: "즈루 홀리데이", team: ["셀틱스", "벅스", "펠리컨스"], ovr: 87, pos: "G", img: "https://placehold.co/100?text=Jrue" },
  { id: 274, name: "데릭 화이트", team: ["셀틱스", "스퍼스"], ovr: 86, pos: "G", img: "https://placehold.co/100?text=White" },
  { id: 275, name: "디존테 머레이", team: ["펠리컨스", "호크스", "스퍼스"], ovr: 85, pos: "G", img: "https://placehold.co/100?text=Dejounte" },
  { id: 276, name: "잭 라빈", team: ["불스", "울브스"], ovr: 85, pos: "G", img: "https://placehold.co/100?text=LaVine" },

  // --- 포워드 (Forwards) ---
  { id: 230, name: "제일런 브라운", team: "셀틱스", ovr: 91, pos: "F", img: "https://placehold.co/100?text=Brown" },
  { id: 231, name: "카와이 레너드", team: ["클리퍼스", "스퍼스", "랩터스"], ovr: 91, pos: "F", img: "https://placehold.co/100?text=Kawhi" },
  { id: 232, name: "폴 조지", team: ["식서스", "클리퍼스", "썬더", "페이서스"], ovr: 89, pos: "F", img: "https://placehold.co/100?text=PG13" },
  { id: 233, name: "지미 버틀러", team: ["히트", "식서스", "울브스", "불스"], ovr: 89, pos: "F", img: "https://placehold.co/100?text=Jimmy" },
  { id: 234, name: "자이언 윌리엄슨", team: "펠리컨스", ovr: 88, pos: "F", img: "https://placehold.co/100?text=Zion" },
  { id: 235, name: "파올로 반케로", team: "매직", ovr: 88, pos: "F", img: "https://placehold.co/100?text=Paolo" },
  { id: 236, name: "파스칼 시아캄", team: ["페이서스", "랩터스"], ovr: 87, pos: "F", img: "https://placehold.co/100?text=Siakam" },
  { id: 237, name: "라우리 마카넨", team: ["재즈", "캐벌리어스", "불스"], ovr: 87, pos: "F", img: "https://placehold.co/100?text=Lauri" },
  { id: 238, name: "스카티 반스", team: "랩터스", ovr: 86, pos: "F", img: "https://placehold.co/100?text=Scottie" },
  { id: 239, name: "칼 앤서니 타운스", team: ["닉스", "울브스"], ovr: 88, pos: "F", img: "https://placehold.co/100?text=KAT" },
  { id: 240, name: "제일런 윌리엄스", team: "썬더", ovr: 86, pos: "F", img: "https://placehold.co/100?text=JDub" },
  { id: 241, name: "프란츠 바그너", team: "매직", ovr: 85, pos: "F", img: "https://placehold.co/100?text=Franz" },
  { id: 242, name: "더마 드로잔", team: ["킹스", "불스", "스퍼스", "랩터스"], ovr: 85, pos: "F", img: "https://placehold.co/100?text=DeRozan" },
  { id: 243, name: "쳇 홈그렌", team: "썬더", ovr: 87, pos: "F", img: "https://placehold.co/100?text=Chet" },
  { id: 244, name: "쿠퍼 플래그", team: "듀크대", ovr: 82, pos: "F", img: "https://placehold.co/100?text=Flagg" },
  { id: 280, name: "브랜든 잉그램", team: ["펠리컨스", "레이커스"], ovr: 85, pos: "F", img: "https://placehold.co/100?text=Ingram" },
  { id: 281, name: "카일 쿠즈마", team: ["위저즈", "레이커스"], ovr: 84, pos: "F", img: "https://placehold.co/100?text=Kuzma" },
  { id: 282, name: "미칼 브리지스", team: ["닉스", "네츠", "선즈"], ovr: 85, pos: "F", img: "https://placehold.co/100?text=Bridges" },
  { id: 283, name: "드레이먼드 그린", team: "워리어스", ovr: 84, pos: "F", img: "https://placehold.co/100?text=Green" },
  { id: 284, name: "애런 고든", team: ["너게츠", "매직"], ovr: 84, pos: "F", img: "https://placehold.co/100?text=Gordon" },

  // --- 센터 (Centers) ---
  { id: 250, name: "빅터 웸반야마", team: "스퍼스", ovr: 91, pos: "C", img: "https://placehold.co/100?text=Wemby" },
  { id: 251, name: "뱀 아데바요", team: "히트", ovr: 89, pos: "C", img: "https://placehold.co/100?text=Bam" },
  { id: 252, name: "도만타스 사보니스", team: ["킹스", "페이서스"], ovr: 89, pos: "C", img: "https://placehold.co/100?text=Sabonis" },
  { id: 253, name: "루디 고베어", team: ["울브스", "재즈"], ovr: 86, pos: "C", img: "https://placehold.co/100?text=Gobert" },
  { id: 254, name: "알페렌 센군", team: "로켓츠", ovr: 86, pos: "C", img: "https://placehold.co/100?text=Sengun" },
  { id: 255, name: "자렛 알렌", team: ["캐벌리어스", "네츠"], ovr: 85, pos: "C", img: "https://placehold.co/100?text=Allen" },
  { id: 256, name: "마일스 터너", team: "페이서스", ovr: 84, pos: "C", img: "https://placehold.co/100?text=Turner" },
  { id: 257, name: "크리스탑스 포르징기스", team: ["셀틱스", "매버릭스", "닉스", "위저즈"], ovr: 86, pos: "C", img: "https://placehold.co/100?text=Tingus" },
  { id: 259, name: "디안드레 에이튼", team: ["블레이저스", "선즈"], ovr: 83, pos: "C", img: "https://placehold.co/100?text=Ayton" },
  { id: 260, name: "브룩 로페즈", team: ["벅스", "네츠", "레이커스"], ovr: 82, pos: "C", img: "https://placehold.co/100?text=Lopez" },
  { id: 290, name: "니콜라 부세비치", team: ["불스", "매직"], ovr: 83, pos: "C", img: "https://placehold.co/100?text=Vucevic" },
  { id: 291, name: "요나스 발렌슈나스", team: ["위저즈", "펠리컨스", "그리즐리스", "랩터스"], ovr: 83, pos: "C", img: "https://placehold.co/100?text=Valan" },
];

// ---------------- [COMMON] ----------------
// 🔥 [수정됨] 난이도 밸런스 조정 - 공정한 경기 밸런스
export const DIFFICULTIES = {
  '초급': { bonus: -15, description: '입문자용 (승리 확률 높음)' },
  '중급': { bonus: 0, description: '일반적인 난이도' },
  '고급': { bonus: 15, description: '도전적인 난이도 (승리 어려움)' }
};

// 🔥 [완전 개편] 강화 확률 테이블 (1~13강)
// 1~5강: 매우 높은 확률, 6강부터 급격히 하락
export const ENHANCE_RATES = {
  1: { success: 100, downgrade: false },  // 1→2: 100%
  2: { success: 95, downgrade: false },   // 2→3: 95%
  3: { success: 90, downgrade: false },   // 3→4: 90%
  4: { success: 80, downgrade: false },   // 4→5: 80% (여기까지 혜자)
  5: { success: 50, downgrade: false },   // 5→6: 50% (확률 반토막)
  6: { success: 30, downgrade: false },   // 6→7: 30% (어려워짐)
  7: { success: 25, downgrade: true },    // 7→8: 25%, 실패시 하락 시작
  8: { success: 20, downgrade: true },    // 8→9: 20%
  9: { success: 15, downgrade: true },    // 9→10: 15%
  10: { success: 10, downgrade: true },   // 10→11: 10%
  11: { success: 7, downgrade: true },    // 11→12: 7%
  12: { success: 5, downgrade: true },    // 12→13: 5% (극악)
  13: { success: 0, downgrade: false }    // 13강 = 만렙
};
