const title = "Web Developer - Shrinath Prabhu";
const description =
  "Web developer with over 4 years of experience, who can code for both frontend and backend using Javascript. Mostly works with modern frontend frameworks and Node.js.";

export default defineNuxtConfig({
  modules: ["@morev/vue-transitions/nuxt"],
  app: {
    head: {
      title,
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
      meta: [
        {
          name: "description",
          content: description,
        },
        {
          name: "title",
          content: title,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://shrinath.me",
        },
        {
          name: "og:description",
          content: description,
        },
        {
          name: "og:title",
          content: title,
        },
        {
          name: "og:image",
          content: "https://shrinath.me/images/frontend-dev-2.png",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:url",
          content: "https://shrinath.me",
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:image",
          content: "https://shrinath.me/images/frontend-dev-2.png",
        },
      ],
    },
  },
});
