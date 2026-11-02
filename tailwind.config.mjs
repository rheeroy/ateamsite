/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', '"Apple SD Gothic Neo"', '"Malgun Gothic"', 'sans-serif'],
      },
      colors: { ink: '#0B0F1E', panel: '#151A30', line: '#232946' },
    },
  },
  plugins: [],
};
