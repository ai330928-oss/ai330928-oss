# Vercel 배포 URL 확인 가이드

## 배포 URL 위치

### 1. 배포 완료 화면
배포가 완료되면 화면 상단에 URL이 표시됩니다:
- **Production URL**: `https://multisports-app.vercel.app`
- **Preview URL**: 각 커밋마다 생성되는 임시 URL

### 2. 프로젝트 대시보드
1. Vercel 대시보드 (https://vercel.com/dashboard)
2. `multisports-app` 프로젝트 클릭
3. 상단에 **Production** 섹션에 URL 표시
   - 예: `https://multisports-app.vercel.app`

### 3. 배포 목록
1. 프로젝트 내부 → **Deployments** 탭
2. 각 배포 항목 옆에 URL 표시
3. 클릭하면 해당 배포의 상세 정보 확인

## URL 종류

### Production URL (프로덕션)
- **형식**: `https://multisports-app.vercel.app`
- **용도**: 메인 배포 URL
- **특징**: 
  - 항상 동일한 URL
  - 커스텀 도메인 연결 가능
  - PWA 설치 가능

### Preview URL (프리뷰)
- **형식**: `https://multisports-app-[hash].vercel.app`
- **용도**: 각 커밋/PR마다 생성되는 임시 URL
- **특징**:
  - 각 배포마다 고유한 URL
  - PR 테스트용

## URL 공유 방법

### 1. 프로젝트 설정에서 확인
1. 프로젝트 → **Settings** → **General**
2. **Domains** 섹션에서 URL 확인

### 2. 브라우저 북마크
- Production URL을 북마크에 저장

### 3. 모바일에서 접속
- 모바일 브라우저에서 URL 입력
- PWA 설치 가능

## 커스텀 도메인 추가 (선택사항)

1. 프로젝트 → **Settings** → **Domains**
2. **Add Domain** 클릭
3. 도메인 입력 (예: `multisports.example.com`)
4. DNS 설정 안내 따르기

## 빠른 확인 방법

### 방법 1: 대시보드에서
```
Vercel 대시보드 → multisports-app 프로젝트 → 상단 Production URL
```

### 방법 2: 배포 완료 알림
- 배포 완료 시 이메일/알림에 URL 포함

### 방법 3: 브라우저 주소창
- 배포 중인 페이지의 주소창 확인

## 예상 URL

프로젝트 이름이 `multisports-app`이면:
- **Production**: `https://multisports-app.vercel.app`
- **Preview**: `https://multisports-app-[랜덤문자].vercel.app`

## 문제 해결

### URL이 보이지 않으면
1. 배포가 완료되었는지 확인 (녹색 체크 표시)
2. 프로젝트 목록에서 프로젝트 클릭
3. 상단 Production 섹션 확인

### 404 오류가 나면
1. 배포 로그 확인
2. 빌드가 성공했는지 확인
3. `vercel.json` 설정 확인

