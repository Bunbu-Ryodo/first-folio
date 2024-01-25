import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        monokaiGreen: "#A9DC76",
        monokaiBlack: "#2C292D",
        monokaiPink: "#FF6188",
        monokaiOrange: "#FC9867",
        monokaiBlue: "#78DCE8",
        monokaiPurple: "#AB9DF2",
        monokaiYellow: "#FFD866",
        gunMetal: "#292F36",
        indianRed: "#D16666",
        buttonPinkHover: "#FF809F",
        buttonPinkActive: "#FF4472",
        buttonGreenHover: "#B2D094",
        buttonGreenActive: "#95D654",
        buttonOrangeHover: "#FFAF88",
        buttonOrangeActive: "#FE864B",
        gunMetalHover: "#2F343A",
        gunMetalActive: "#20252B",
        portfolioPrimary: "#E4BB97",
        portfolioSecondary: "#584B53",
        portfolioAccent2: "#9D5C63",
        portfolioNeutral: "#FEF5EF",
        portfolioAccent1: "#D6E3F8",
        portfolioButtonHover: "#70636B",
        portfolioButtonActive: "#3F353B",
        glass: "rgba(17, 25, 40, 0.75)",
      },
      fontSize: {
        display: "48px",
        displayMobile: "24px",
        navbar: "14px",
        header: "36px",
        input: "16px",
        informational: "16px",
        button: "14px",
        breadCrumb: "12px",
      },
      height: {
        button: "40px",
        loginForm: "352px",
        icon: "24px",
        portfolioSection: "250vh",
      },
      width: {
        icon: "24px",
      },
      padding: {
        inputX: "16px",
        inputY: "12px",
      },
      margin: {
        inputLabel: "8px",
        checkbox: "8px",
        title: "32px",
        formInput: "24px",
        formEnd: "24px",
        informational: "16px",
        buttons: "12px",
        breadcrumbs: "8px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
