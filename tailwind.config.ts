import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "var(--color-primary)",
        "primary-dark": "var(--color-primary-dark)",
        "primary-light": "var(--color-primary-light)",
        secondary: "var(--color-secondary)",
        "secondary-dark": "var(--color-secondary-dark)",
        "secondary-light": "var(--color-secondary-light)",
        text: "var(--color-text)",
        "text-muted": "var(--color-text-muted)",
        "text-light": "var(--color-text-light)",
        "text-inverse": "var(--color-text-inverse)",
        "accent-saffron": "var(--color-accent-saffron)",
        "accent-orange": "var(--color-accent-orange)",
        "accent-green": "var(--color-accent-green)",
        "bg-muted": "var(--color-bg-muted)",
        "bg-warm": "var(--color-bg-warm)",
        "bg-cool": "var(--color-bg-cool)",
        border: "var(--color-border)",
        "border-muted": "var(--color-border-muted)",
        "border-dark": "var(--color-border-dark)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
        white: "#ffffff",
        black: "#000000",
      },
      backgroundImage: {
        "gradient-saffron-orange": "var(--gradient-saffron-orange)",
        "gradient-saffron-white": "var(--gradient-saffron-white)",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        accent: ["var(--font-accent)", "serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          sm: "1.5rem",
          lg: "2rem",
          xl: "2.5rem",
        },
        screens: {
          "2xl": "1200px",
        },
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
    },
  },
  plugins: [],
};

export default config;
