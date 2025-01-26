/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        allura: ["'Allura'", "cursive"], // Tambahkan font Allura
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#E382D3",
      },

      boxShadow: {
        pink: "0px 4px 100px rgba(255, 105, 180, 0.5)", // Shadow pink dengan opacity
      },
    },
  },
  plugins: [],
};
