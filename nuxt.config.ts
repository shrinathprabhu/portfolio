export default defineNuxtConfig({
  modules: ["@morev/vue-transitions/nuxt"],
  app: {
    head: {
      title: "Web Developer - Shrinath Prabhu",
      link: [
        {
          rel: "stylesheet",
          href: "/css/styles.css",
        },
        {
          rel: "icon",
          href: "/favicon.svg",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Russo+One&family=Noto+Sans:wght@300;400;500;600&display=swap",
        },
      ],
    },
  },
});
