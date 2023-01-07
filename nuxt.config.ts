// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1.0",
      title: "Ntwali Edson -  Full stack software engineer",
      meta: [
        {
          hid: "og:image",
          property: "og:image",
          content: "/og.PNG",
        },
        {
          name: "description",
          content:
            "Hi There! 👋, I' am Edson Ntwali, a passionate  software engineer based in Rwanda focused in innovating special software to solve a problem while i work.",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt"],
});
``;
