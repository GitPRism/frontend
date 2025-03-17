/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#020408", // 깊은 블랙
        charcoal: "#0E1116", // 차콜 그레이
        shadow: "#272C32", // 블루 톤의 어두운 회색
        ocean: "#385E6F", // 어두운 청록색
        sky: "#3FA1CC", // 밝은 하늘색
        royal: "#3C83F0", // 선명한 블루
        navy: "#233155", // 남색 계열 블루
      },
    },
  },
  plugins: [],
};
