# Vercel 프로젝트 이름 설정 가이드

## ✅ 올바른 프로젝트 이름

Vercel에서 프로젝트를 생성할 때 다음 이름을 사용하세요:

```
multisports-manager
```

## ❌ 잘못된 이름 (사용하지 마세요)

- `MultiSports Manager` (대문자, 공백 포함)
- `multisports manager` (공백 포함)
- `MultiSports-Manager` (대문자 포함)

## 📋 Vercel 프로젝트 이름 규칙

- ✅ 소문자만 사용
- ✅ 최대 100자
- ✅ 문자, 숫자, `.`, `_`, `-` 사용 가능
- ❌ 대문자 사용 불가
- ❌ 공백 사용 불가
- ❌ `---` 시퀀스 불가

## 🚀 Vercel 배포 시

1. Vercel 대시보드에서 "Add New Project" 클릭
2. GitHub 저장소 선택: `ai330928-oss/ai330928-oss`
3. **Project Name** 입력: `multisports-manager` (소문자로!)
4. Framework Preset: Vite (자동 감지)
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Deploy 클릭

## 📝 참고

- 프로젝트 이름은 URL에 사용됩니다: `multisports-manager.vercel.app`
- 나중에 Settings에서 변경 가능하지만, URL은 변경되지 않습니다
- PWA 앱 이름은 별도로 설정됩니다 (vite.config.js의 manifest)

