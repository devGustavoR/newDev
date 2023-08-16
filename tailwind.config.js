/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "#eaeaea",
          100: "#bebebf",
          200: "#9e9ea0",
          300: "#727275",
          400: "#56565a",
          500: "#2c2c31",
          600: "#28282d",
          700: "#1f1f23",
          800: "#18181b",
          900: "#121215",
        },
        purple: {
          50: "#f3eefc",
          100: "#d8cbf7",
          200: "#c6b2f3",
          300: "#ab8eee",
          400: "#9b79ea",
          500: "#8257e5",
          600: "#764fd0",
          700: "#5c3ea3",
          800: "#48307e",
          900: "#372560",
        },
        orange: {
          50: "#ffefeb",
          100: "#ffccc2",
          200: "#ffb4a4",
          300: "#ff927b",
          400: "#ff7d61",
          500: "#ff5c3a",
          600: "#e85435",
          700: "#b54129",
          800: "#8c3320",
          900: "#6b2718",
        },
        yellow: {
          50: "#fff9ec",
          100: "#ffebc4",
          200: "#ffe2a7",
          300: "#ffd47f",
          400: "#ffcc66",
          500: "#ffbf40",
          600: "#e8ae3a",
          700: "#b5882d",
          800: "#8c6923",
          900: "#6b501b",
        },
        green: {
          50: "#e6fbef",
          100: "#b1f1ce",
          200: "#8cebb6",
          300: "#57e295",
          400: "#36dc81",
          500: "#04d361",
          600: "#04c058",
          700: "#039645",
          800: "#027435",
          900: "#025929",
        },
        brown: {
          50: "#f6f4ef",
          100: "#f2eee7",
          200: "#e3dcce",
          300: "#a58f60",
          400: "#958156",
          500: "#84724d",
          600: "#7c6b48",
          700: "#63563a",
          800: "#4a402b",
          900: "#3a3222",
        },

        fontFamily: {
          sans: "var(--font-roboto)",
          alt: "var(--font-bai-Jamjuree)",
          mono: "var(--font-poppins)",
        },

        zIndex: {
          100: "100",
        },

        maxWidth: {
          5: "20px",
        },

        boxShadow: {
          "3xl": "0 -1px 4px rgba(0,0,0, 0.15)",
        },

        borderRadius: {
          large: "1.5rem 1.5rem 0 0",
        },

        screens: {
          tablet: "350px",
          laptop: "768px",
        },

        keyframes: {
          bounce: {
            "0%,100%": { transform: "translateY(-25%)" },
            "50%": { transform: "translateY(0)" },
          },
        },

        animation: {
          bounce: "bounce 2.2s ease infinite alternate",
        },

        //         animation: bounce 1s infinite;

        // @keyframes bounce {
        //   0%, 100% {
        //     transform: translateY(-25%);
        //     animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
        //   }
        //   50% {
        //     transform: translateY(0);
        //     animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
        //   }
        // }
      },
    },
  },
  plugins: [],
};
