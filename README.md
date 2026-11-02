# ATEAM 소개 사이트 (leada.team)

랜딩 + 팀장 아티클. Astro 정적 사이트 → Vercel.

## 글 추가
`src/content/articles/<영문-주소>.md` 파일 하나를 추가하고 push 하면 끝.
맨 위 머리말: title · description · category · date(YYYY-MM-DD) · sources(참고 목록, 선택).
본문에는 ATEAM 홍보를 넣지 않는다 — 글 끝 홍보 상자는 자동으로 붙는다.

## Vercel 설정 (새 프로젝트)
- 같은 GitHub 저장소로 새 프로젝트를 만들고 Root Directory = `site`
- Framework Preset = Astro (자동 인식), Build Command `npm run build`, Output `dist`
- 환경변수 `PUBLIC_APP_URL` (선택): 앱 주소. 기본값 https://app.leada.team
  도메인 전환 전에 미리 띄워 보려면 지금 앱 주소(예: https://leada.team)를 넣는다
- 도메인: leada.team (앱은 app.leada.team 으로 옮긴 뒤)

## 로컬
npm install · npm run dev
