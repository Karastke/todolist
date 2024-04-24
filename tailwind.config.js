/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // React 컴포넌트 파일 포함
    "./public/index.html"          // HTML 파일 포함
  ],
  theme: {
    extend: {},
    fontFamily: {
      primary: ['Montserrat', 'sans-serif']  // 폰트 스택 추가 권장
    }
  },
  plugins: [],
}
