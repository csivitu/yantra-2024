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
          'hero-background':'url("/hero/hero.svg")',
          'herohack-background':'url("/backgrounds/HeroPattern.svg")',
          'imgYantra':`url('/yantra/img.svg')`,
          
      },
      fontFamily:{
        aeonik:["aeonikFont","sans-serif"],
        concreteMono:['concreteMono',"sans-serif"],
        schabo:["schabo"],
        ptMono:["ptmono"]
      },
      screens:{
        mobile:'320px',
        tab:'728px',
        laptop:'1024px'
      }
    },
  },
  plugins: [],
};
export default config;
