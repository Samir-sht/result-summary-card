/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    colors: {
      Lightred: "hsl(0, 100%, 67%)",
      Orangeyyellow: "hsl(39, 100%, 56%)",
      Greenteal: "hsl(166, 100%, 37%)",
      Cobaltblue: "hsl(234, 85%, 45%)",

      /* neutrals */
      White: "hsl(0, 0%, 100%)",
      Paleblue: "hsl(221, 100%, 96%)",
      Lightlavender: "hsl(241, 100%, 89%)",
      Darkgrayblue: "hsl(224, 30%, 27%)",

      /*background */
      Lightslateblue: "hsl(252, 100%, 67%)",
      Lightroyalblue: "hsl(241, 81%, 54%)",
      Violetblue: "hsla(256, 72%, 46%, 1)",
      Persianblue: "hsla(241, 72%, 46%, 0)",

      //accents
      accentlightred: "hsla(0, 100%, 67%,0.1)",
      accentorangeyyellow: "hsla(39, 100%, 56%,0.1)",
      accentgreenteal: "hsla(166, 100%, 37%,0.1)",
      accentcobaltblue: "hsla(234, 85%, 45%,0.1)",
    },

    fontFamily: {
      Hanken: ["Hanken Grotesk", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
