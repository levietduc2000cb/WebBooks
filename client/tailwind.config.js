module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        opacityImg: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        transformTop: {
          "0%": {
            opacity: "0",
            transform: "translateY(-100vh)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        opacityImg: "opacityImg 1s ease-in-out",
        transformTop: "transformTop 0.7s ease-in-out",
      },
      backgroundImage: {
        "background-auth": "url(./assets/background-img-auth.jpg)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
