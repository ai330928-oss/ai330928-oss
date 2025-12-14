# Vercel 배포 최종 가이드

## 프로젝트 이름
**multisports-app**

## 배포 URL
배포 후: `https://multisports-app.vercel.app`

## 배포 단계

### 1. GitHub에 최신 코드 푸시 (이미 완료)
```bash
git push origin main
```

### 2. Vercel에서 배포

1. **Vercel 접속**: https://vercel.com
2. **"Add New Project"** 클릭
3. **GitHub 저장소 선택**: `ai330928-oss/ai330928-oss`
4. **프로젝트 설정**:
   - **Project Name**: `multisports-app` (소문자, 하이픈 사용)
   - **Framework Preset**: Vite (자동 감지)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 감지)
   - **Output Directory**: `dist` (자동 감지)
   - **Install Command**: `npm install` (자동 감지)
5. **Environment Variables**: 필요 없음 (현재는 없음)
6. **"Deploy"** 클릭

### 3. 배포 완료 후

- ✅ 자동으로 HTTPS URL 생성
- ✅ PWA 설치 가능
- ✅ API 엔드포인트 자동 설정

## API 엔드포인트

배포 후 다음 URL로 접근:
- `https://multisports-app.vercel.app/api/save/[userId]/[sport]`
- `https://multisports-app.vercel.app/api/market/[sport]`
- `https://multisports-app.vercel.app/api/player`

## PWA 설치

1. 모바일: 브라우저에서 "홈 화면에 추가"
2. 데스크톱: Chrome 주소창의 설치 아이콘 클릭
3. 앱 이름: **MultiSports Manager** (vite.config.js에서 설정)

## 커스텀 도메인 (선택사항)

나중에 Settings → Domains에서 도메인 추가 가능

## 문제 해결

### 빌드 실패
- Vercel 로그 확인
- `package.json`의 빌드 스크립트 확인

### API 작동 안 함
- `/api` 폴더 구조 확인
- CORS 설정 확인

### PWA 설치 안 됨
- HTTPS 확인 (자동)
- manifest.webmanifest 확인

## 현재 설정 상태

✅ `vercel.json` - 올바르게 설정됨
✅ `package.json` - 빌드 스크립트 준비됨
✅ API 라우트 - `/api` 폴더에 준비됨
✅ PWA 설정 - `vite.config.js`에 설정됨

이제 Vercel에서 배포만 하면 됩니다!

