module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "300px auto",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
