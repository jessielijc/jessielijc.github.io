module.exports = {
  content: ["./components/**/*.tsx", "./frontend/**/*.tsx"],
  important: "#about-spline",
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        card: { DEFAULT: "var(--global-card-bg-color)", foreground: "var(--global-text-color)" },
        muted: { foreground: "var(--global-text-color-light)" },
      },
    },
  },
  plugins: [],
};
