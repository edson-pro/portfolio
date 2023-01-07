// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
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
