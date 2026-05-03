import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Craftsman/specialist palette — warm, restrained, editorial
        bone:      "#F8F5F0", // page background — warm off-white
        boneDeep:  "#F1ECE3", // soft surface — slightly deeper
        parchment: "#EAE2D3", // tertiary surface for cards
        ink:       "#1F1D1B", // deepest text — display headings
        graphite:  "#2A2A2A", // body text — deep slate/charcoal
        slate:     "#4A4744", // secondary body
        ash:       "#7A7570", // muted captions
        rule:      "#D8CFBF", // hairline rule on bone
        brass:     "#9A7B4F", // craftsman accent — for decorative bars & icons
        umber:     "#7B5A2E", // darker brass — for caps eyebrows & body text (≥4.5:1 on bone)
        copper:    "#B8895C", // brighter copper — used very sparingly
        dust:      "#3A4858", // optional secondary — deep dust-blue
      },
      fontFamily: {
        // Display: modern serif — Fraunces (variable, optical sized)
        display: ['"Fraunces"', '"Cormorant Garamond"', "Georgia", "serif"],
        // Secondary serif for editorial captions and pull-quotes
        serif:   ['"Cormorant Garamond"', "Georgia", "serif"],
        // Body: clean readable sans
        sans:    ['"DM Sans"', '"Inter"', "system-ui", "-apple-system", "sans-serif"],
      },
      letterSpacing: {
        wide:    "0.04em",
        wider:   "0.10em",
        widest:  "0.20em",
        ultra:   "0.32em",
      },
      maxWidth: {
        prose: "62ch",
      },
    },
  },
  plugins: [],
};
export default config;
