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
        gunMetalHover: "#2F343A",
        gunMetalActive: "#20252B",
        portfolioWhite: "#F9F8F1",
        portfolioBlack: "#242423",
        portfolioRed: "#D16666",
        portfolioGrey: "#999AC6",
        portfolioGreen: "#798071",
        portfolioBlue: "#3E92CC",
        portfolioYellow: "#EE964B",
        portfolioMoss: "#898952",
        portfolioBlood: "#A71D31",
        portfolioBlackHover: "#343432",
        portfolioBlackActive: "#191918",
      },
      fontSize: {
        portfolioDisplay: "72px",
        display: "48px",
        displayMobile: "24px",
        navbar: "14px",
        header: "36px",
        input: "16px",
        informational: "16px",
        howToUse: "18px",
        button: "14px",
        breadCrumb: "12px",
        copy: "24px",
        endorsement: "24px",
        mobileEndorsement: "16px",
      },
      height: {
        button: "40px",
        headerBanner: "40px",
        loginForm: "352px",
        smallTextarea: "96px",
        largeTextarea: "270px",
        projectTextarea: "260px",
        endorsementTextarea: "160px",
        iconHeight: "24px",
        testimonials: "250vh",
      },
      width: {
        halfWithGap: "47.5%",
        iconWidth: "24px",
      },
      padding: {
        inputX: "16px",
        inputY: "12px",
      },
      margin: {
        inputLabel: "8px",
        checkbox: "8px",
        titleHeader: "32px",
        formInput: "24px",
        textarea: "16px",
        informational: "16px",
        buttons: "12px",
        breadcrumbs: "8px",
        nextButton: "16px",
        projectForm: "12px",
        separateProjectForms: "36px",
        "nextButton-y": "24px",
        testimonials: "36px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
