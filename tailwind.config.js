/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ss: "26.7rem",
      },
      colors: {
        main: "#ed7f00",
        main_hover: "#e3005d",
      },
      spacing: {
        bnt: "0.3rem",
        bnb: "0.7rem",
        ss: "0.9rem",
        sm: "3rem",
        s3: "1.7rem",
        s4: "2.2rem",
        s5: "2.8rem",
        s10: "5.6rem",
        s15: "8.3rem",
        logomax: "18.9rem",
      },
      fontSize: {
        h1: ["2.7rem", "3.6rem"],
        h2: ["2.2rem", "3.1rem"],
        h3: ["1.7rem", "2.5rem"],
        footer: ["0.9rem", "1.3rem"],
        teaser: ["1.3rem", "2rem"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "10rem",
      },
      translate: {
        left: "-100%",
      },
      animation: {
        fade: "fadeOut 0.5s ease-in-out",
      },
      keyframes: () => ({
        fadeOut: {
          "0%": { backgroundColor: "rgba(0,0,0,0)" },
          "100%": { backgroundColor: "rgba(0,0,0,0.5)" },
        },
      }),
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".mask1": {
          "-webkit-mask-image": "url('/src/assets/images/d_image_frame.svg')",
          "mask-image": "url('/src/assets/images/d_image_frame.svg')",
          "-webkit-mask-size": "70%",
          "mask-size": "70%",
          "-webkit-mask-repeat": "no-repeat",
          "mask-repeat": "no-repeat",
        },
      });
    },
  ],
};
