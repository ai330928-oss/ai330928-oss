# Vercel 배포 가이드

이 프로젝트를 Vercel에 무료로 배포하고 PWA로 사용하는 방법입니다.

## 🚀 배포 단계

### 1. GitHub에 코드 푸시

```bash
# Git 초기화 (아직 안 했다면)
git init
git add .
git commit -m "Initial commit"

# GitHub 저장소 생성 후
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### 2. Vercel에 배포

1. [Vercel](https://vercel.com)에 가입/로그인
2. "Add New Project" 클릭
3. GitHub 저장소 선택
4. 프로젝트 설정:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. "Deploy" 클릭

### 3. 환경 변수 설정 (선택사항)

Vercel 대시보드에서:
- Settings → Environment Variables
- 필요시 `VITE_API_URL` 추가 (기본값: 자동 감지)

## 📱 PWA 설정

PWA는 이미 설정되어 있습니다:
- `vite.config.js`에 PWA 플러그인 포함
- `manifest.webmanifest` 자동 생성
- Service Worker 자동 등록

### PWA 테스트

1. 배포된 사이트 접속
2. 모바일 브라우저에서 "홈 화면에 추가" 옵션 사용
3. 데스크톱 Chrome에서 "설치" 버튼 확인

## 🔧 API 엔드포인트

Vercel Serverless Functions로 자동 배포됩니다:

- `GET /api/save?userId=xxx&sport=soccer` - 저장 데이터 로드
- `POST /api/save?userId=xxx&sport=soccer` - 저장 데이터 저장
- `GET /api/market?sport=soccer` - 마켓 선수 목록
- `POST /api/player` - 선수 추가
- `DELETE /api/player?uid=xxx&userId=xxx&sport=soccer` - 선수 삭제
- `PUT /api/player?uid=xxx` - 선수 업데이트

## ⚠️ 중요 사항

### 데이터 저장소

현재는 **인메모리 저장소**를 사용합니다:
- 서버 재시작 시 데이터가 사라집니다
- 실제 프로덕션에서는 다음 중 하나를 사용하세요:
  - **Vercel KV** (무료 티어 있음) - 키-값 저장소
  - **Vercel Postgres** (무료 티어 있음) - PostgreSQL
  - **Supabase** (무료) - PostgreSQL + 인증
  - **MongoDB Atlas** (무료) - NoSQL

### Vercel KV 사용 예시

```bash
# Vercel CLI 설치
npm i -g vercel

# KV 스토어 생성
vercel kv create

# 환경 변수 설정
vercel env add KV_REST_API_URL
vercel env add KV_REST_API_TOKEN
```

## 📝 로컬 개발

```bash
# 프론트엔드 개발 서버
npm run dev

# 백엔드 서버 (로컬)
npm run server
```

## 🔄 업데이트 배포

코드를 수정한 후:

```bash
git add .
git commit -m "Update"
git push
```

Vercel이 자동으로 재배포합니다.

## 🌐 커스텀 도메인

1. Vercel 대시보드 → Settings → Domains
2. 도메인 추가
3. DNS 설정 안내 따르기

## 📊 모니터링

- Vercel 대시보드에서 트래픽, 에러 모니터링
- Analytics 탭에서 사용자 통계 확인

## 🆘 문제 해결

### 빌드 실패
- `package.json`의 빌드 스크립트 확인
- Vercel 로그 확인

### API 작동 안 함
- `/api` 폴더의 파일들이 올바른지 확인
- CORS 설정 확인

### PWA 설치 안 됨
- HTTPS 사용 확인 (Vercel은 자동)
- `manifest.webmanifest` 파일 확인
- Service Worker 등록 확인

## 💡 팁

1. **무료 플랜 제한**:
   - 월 100GB 대역폭
   - Serverless Functions 실행 시간 제한
   - 충분히 개인 프로젝트용으로 사용 가능

2. **성능 최적화**:
   - 이미지 최적화
   - 코드 스플리팅 (이미 Vite가 처리)
   - CDN 캐싱 (Vercel이 자동 처리)

3. **보안**:
   - 환경 변수는 절대 커밋하지 않기
   - API 키는 Vercel 환경 변수로 관리

