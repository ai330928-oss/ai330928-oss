# GitHub 저장소 연동 가이드

## 현재 상태
- ✅ Git 저장소 초기화 완료
- ✅ 원격 저장소 설정 완료: `https://github.com/ai330928-oss/ai330928-oss.git`
- ✅ 커밋 완료 (41개 파일)
- ⚠️ GitHub 인증 필요

## GitHub 푸시 방법

### 방법 1: Personal Access Token 사용 (권장)

1. **GitHub에서 Personal Access Token 생성**
   - GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - "Generate new token (classic)" 클릭
   - Note: "B-and-Csim project"
   - Expiration: 원하는 기간 선택
   - Scopes: `repo` 체크
   - "Generate token" 클릭
   - **토큰을 복사해두세요** (다시 볼 수 없습니다)

2. **터미널에서 푸시**
   ```bash
   cd /Users/taewoonglee/Desktop/B-and-Csim
   git push -u origin main
   ```
   - Username: `ai330928-oss`
   - Password: **복사한 Personal Access Token** 입력

### 방법 2: SSH 키 사용

1. **SSH 키 생성 (이미 있다면 생략)**
   ```bash
   ssh-keygen -t ed25519 -C "your_email@example.com"
   ```

2. **SSH 키를 GitHub에 추가**
   ```bash
   cat ~/.ssh/id_ed25519.pub
   ```
   - 출력된 키를 복사
   - GitHub → Settings → SSH and GPG keys → New SSH key
   - 키 붙여넣기 후 저장

3. **원격 저장소를 SSH로 변경**
   ```bash
   cd /Users/taewoonglee/Desktop/B-and-Csim
   git remote set-url origin git@github.com:ai330928-oss/ai330928-oss.git
   git push -u origin main
   ```

### 방법 3: GitHub CLI 사용

```bash
# GitHub CLI 설치 (Homebrew 사용)
brew install gh

# GitHub 로그인
gh auth login

# 푸시
git push -u origin main
```

## 현재 커밋된 내용

- ✅ Vercel 배포 설정 (vercel.json, API 라우트)
- ✅ 데이터베이스 통합 (api-service.js)
- ✅ 난이도 밸런스 조정
- ✅ AI 어시스턴트 제거
- ✅ PWA 설정

## 다음 단계

1. **GitHub에 푸시 완료 후**
2. **Vercel 배포**
   - [vercel.com](https://vercel.com) 접속
   - "Add New Project" 클릭
   - GitHub 저장소 `ai330928-oss/ai330928-oss` 선택
   - 자동 감지된 설정 확인 후 "Deploy" 클릭

## 문제 해결

### 인증 오류
- Personal Access Token이 만료되었는지 확인
- 토큰에 `repo` 권한이 있는지 확인

### 푸시 거부
- 저장소가 비어있는지 확인
- `git pull origin main --allow-unrelated-histories` 후 다시 푸시

### 권한 오류
- 저장소 소유권 확인
- Collaborator로 추가되어 있는지 확인

