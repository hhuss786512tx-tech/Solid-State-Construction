// Canonical Tailwind Play CDN config — include on every page, immediately after the
// https://cdn.tailwindcss.com <script> tag and before assets/styles.css.
// Do not fork or duplicate this config inline in a page; edit only this file.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070A",
          900: "#0B0E13",
          800: "#12161D",
          700: "#1B212B",
          600: "#2A313D",
        },
        brand: {
          50: "#EFF5FF",
          100: "#DCE9FF",
          200: "#B9D2FF",
          300: "#8FB6FF",
          400: "#5A93FF",
          500: "#2E72F5",
          600: "#1F57D6",
          700: "#1842A8",
          800: "#12317F",
          900: "#0C2259",
          950: "#071433",
        },
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      boxShadow: {
        "brand-sm": "0 2px 8px -2px rgba(11,14,19,0.25), 0 1px 3px -1px rgba(46,114,245,0.15)",
        "brand-md": "0 8px 24px -6px rgba(11,14,19,0.35), 0 4px 10px -4px rgba(46,114,245,0.25)",
        "brand-lg": "0 20px 50px -12px rgba(5,7,10,0.55), 0 8px 20px -8px rgba(46,114,245,0.3)",
        "brand-glow": "0 0 0 1px rgba(46,114,245,0.4), 0 8px 30px -6px rgba(46,114,245,0.45)",
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
};
