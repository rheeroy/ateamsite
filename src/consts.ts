// 앱 주소 — 도메인 전환 전에는 Vercel 환경변수 PUBLIC_APP_URL 로 바꿔 쓴다
export const APP = (import.meta.env.PUBLIC_APP_URL as string | undefined)?.replace(/\/$/, '') || 'https://app.leada.team';
export const SIGNUP = `${APP}/login?mode=signup`;
export const LOGIN = `${APP}/login`;
export const DEMO = `${APP}/demo`;

// 사업자 정보 — 사업자등록증과 글자까지 똑같이 (푸터 · 약관 · 환불정책 · 개인정보처리방침이 같이 쓴다)
export const BIZ = {
  name: '갓생맵', nameEn: 'STARTHALF', ceo: '이경훈', regNo: '553-65-00667', mailOrderNo: '2024-서울광진-1339',
  address: '서울특별시 광진구 면목로 57 (중곡동)', phone: '010-9329-2523', email: 'steve@starthalf.com',
};
export const EFFECTIVE = '2026년 11월 7일';

// 요금 (VAT 포함 최종 결제금액) — 앱의 plans 표와 같게 (supabase/migrations/…_plans_price.sql)
export const PLANS = [
  { id: 'starter', name: 'Starter', month: 29000, year: 290000, members: '팀원 4명까지', points: ['목표 · 성과입력 · 1on1', 'AI 조기 경고 · 분기 전망', '팀원 업무플랫폼 · Sim.Box', '월 프리미엄 AI 크레딧 30'] },
  { id: 'pro', name: 'Pro', month: 49000, year: 490000, members: '팀원 10명까지', points: ['Starter의 모든 기능', '평가 초안 · 과제 히스토리', '컨설팅 노하우 카드', '월 프리미엄 AI 크레딧 100'], best: true },
  { id: 'pro_plus', name: 'Pro+', month: 79000, year: 790000, members: '팀원 20명까지', points: ['Pro의 모든 기능', '큰 팀을 위한 넉넉한 AI 사용량', '월 프리미엄 AI 크레딧 200'] },
];
export const TOPUPS = [{ credits: 100, price: 6900 }, { credits: 300, price: 19900 }];
export const won = (n: number) => n.toLocaleString('ko-KR');
/** VAT 포함 금액의 공급가 */
export const supply = (n: number) => Math.round(n / 1.1);

// 가이드북 신청 — Supabase 함수 guide-request 주소 (Vercel 환경변수 PUBLIC_GUIDE_API = https://<프로젝트>.supabase.co/functions/v1/guide-request)
export const GUIDE_API = (import.meta.env.PUBLIC_GUIDE_API as string | undefined) ?? '';
