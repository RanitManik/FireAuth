/** @type {import("tailwindcss").Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {},
      fontFamily: {
        body: ["\"Open Sans\"", "sans-serif"]
      },
      fontSize: {
        body: "1rem"
      }
    }
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("tailwindcss-animate")
  ]
};

