# Vercel 프로젝트 이름 문제 해결

## 문제
`multisports-app` 이름이 이미 사용 중입니다.

## 해결 방법

### 방법 1: 완전히 다른 이름 사용 (권장)

다음 이름 중 하나를 선택하세요:

1. **multisports-game**
   - URL: `https://multisports-game.vercel.app`

2. **sports-manager-app**
   - URL: `https://sports-manager-app.vercel.app`

3. **team-manager-sim**
   - URL: `https://team-manager-sim.vercel.app`

4. **squad-manager-app**
   - URL: `https://squad-manager-app.vercel.app`

5. **multisports-2024**
   - URL: `https://multisports-2024.vercel.app`

6. **sports-sim-manager**
   - URL: `https://sports-sim-manager.vercel.app`

7. **multisports-oss** (GitHub 저장소와 유사)
   - URL: `https://multisports-oss.vercel.app`

8. **ai330928-multisports** (GitHub 계정명 포함)
   - URL: `https://ai330928-multisports.vercel.app`

### 방법 2: 기존 프로젝트 확인 및 삭제

1. **Vercel 대시보드 접속**: https://vercel.com/dashboard
2. **프로젝트 목록 확인**
   - `multisports-app` 또는 유사한 이름의 프로젝트가 있는지 확인
3. **기존 프로젝트 삭제** (필요시):
   - 프로젝트 클릭 → Settings → 맨 아래 "Delete Project"
4. **새로 프로젝트 생성**

### 방법 3: 기존 프로젝트 재사용

만약 `multisports-app`이 본인의 기존 프로젝트라면:
1. 기존 프로젝트 클릭
2. Settings → Git → Connect Git Repository
3. `ai330928-oss/ai330928-oss` 저장소 연결
4. 자동으로 재배포됨

## 추천 이름

**multisports-game** 또는 **sports-manager-app**을 추천합니다.

## 주의사항

- 프로젝트 이름은 나중에 변경 가능하지만, URL은 변경되지 않습니다
- URL은 `[프로젝트이름].vercel.app` 형식입니다
- PWA 앱 이름은 별도로 설정됩니다 (vite.config.js)

## 다음 단계

1. 위 이름 중 하나 선택
2. Vercel에서 새 프로젝트 생성 시 선택한 이름 입력
3. 배포 완료

