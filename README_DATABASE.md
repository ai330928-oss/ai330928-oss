# 데이터베이스 통합 가이드

이 프로젝트는 SQLite 데이터베이스를 사용하여 선수 데이터를 관리합니다.

## 설치 및 실행

### 1. 의존성 설치
```bash
npm install
```

### 2. 백엔드 서버 실행
```bash
npm run server
# 또는
npm start
```

서버는 기본적으로 `http://localhost:3001`에서 실행됩니다.

### 3. 프론트엔드 실행
새 터미널에서:
```bash
npm run dev
```

## 데이터베이스 구조

### user_saves 테이블
사용자의 게임 저장 데이터를 저장합니다.
- `id`: 기본 키
- `user_id`: 사용자 고유 ID
- `sport`: 종목 ('soccer' | 'nba')
- `money`: 보유 금액
- `formation`: 현재 포메이션
- `created_at`, `updated_at`: 타임스탬프

### players 테이블
사용자가 보유한 선수 데이터를 저장합니다.
- `id`: 기본 키
- `save_id`: user_saves 테이블 외래 키
- `player_id`: 원본 선수 ID
- `name`: 선수 이름
- `team`: 소속 팀 (JSON 문자열 또는 단일 문자열)
- `ovr`: 종합 능력치
- `pos`: 포지션
- `img`: 이미지 URL
- `level`: 강화 레벨
- `uid`: 고유 식별자

### market_players 테이블
전체 선수 풀(마켓 데이터)을 저장합니다.
- `id`: 선수 ID (기본 키)
- `name`: 선수 이름
- `team`: 소속 팀
- `ovr`: 종합 능력치
- `pos`: 포지션
- `img`: 이미지 URL
- `sport`: 종목

## API 엔드포인트

### GET /api/save/:userId/:sport
사용자 저장 데이터 로드

### POST /api/save/:userId/:sport
사용자 저장 데이터 저장
```json
{
  "money": 50000000000,
  "mySquad": [...],
  "formation": "4-4-2"
}
```

### GET /api/market/:sport
마켓 선수 목록 조회

### POST /api/player
선수 추가 (구매)
```json
{
  "userId": "user_xxx",
  "sport": "soccer",
  "player": {...}
}
```

### DELETE /api/player/:uid
선수 삭제 (판매)

### PUT /api/player/:uid
선수 업데이트 (강화 등)
```json
{
  "level": 5
}
```

## 환경 변수

프론트엔드에서 API URL을 설정하려면 `.env` 파일을 생성하세요:
```
VITE_API_URL=http://localhost:3001/api
```

## 오프라인 모드

API 서버에 연결할 수 없는 경우, 자동으로 localStorage를 사용하는 폴백 모드로 전환됩니다.

## 데이터베이스 파일

`database.sqlite` 파일이 프로젝트 루트에 생성됩니다. 이 파일은 `.gitignore`에 포함되어 있습니다.

