// 앱 주소 — 도메인 전환 전에는 Vercel 환경변수 PUBLIC_APP_URL 로 바꿔 쓴다
export const APP = (import.meta.env.PUBLIC_APP_URL as string | undefined)?.replace(/\/$/, '') || 'https://app.leada.team';
export const SIGNUP = `${APP}/login?mode=signup`;
export const LOGIN = `${APP}/login`;
