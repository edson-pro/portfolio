<template>
  <div class="h-screen md:h-fit">
    <div
      class="px-10 md:px-5 h-screen md:h-full md:py-10 py-28 md:pb-10 w-full"
    >
      <div class="w-full">
        <div
          v-motion-slide-visible-left
          id="techs"
          class="w-full section flex items-center gap-4"
        >
          <span class="text-green-500 font-semibold text-lg">03.</span>
          <span class="font-semibold md:text-base text-white text-xl truncate"
            >My Toolbox & Things I Can Do.</span
          >
          <span class="w-1/3 md:hidden bg-gray-700 h-[1px]"></span>
        </div>
        <p
          v-motion-slide-visible-right
          class="text-lg text-gray-400 md:text-sm my-4 font-medium"
        >
          The skills, tools and technologies I use to bring your products to
          life:
        </p>
        <div class="my-6">
          <div class="overflow-hidden">
            <div
              v-motion-slide-visible-bottom
              class="grid px-1 sm:grid-cols-5 md:grid-cols-9 my-8 grid-cols-9 gap-5"
            >
              <div
                v-for="tech in frontends"
                class="tag relative z-30 flex items-center justify-center md:h-[56px] md:w-[56px] h-[86px] w-[86px] ring-1 ring-gray-200 hover:ring-0 dark:ring-0 mt-1"
              >
                <div class="gradient-border gradient-border-dark"></div>

                <div
                  class="h-full rounded-md w-full bg-gray-800 relative flex items-center justify-center"
                >
                  <img
                    :src="tech.icon"
                    :alt="tech.name"
                    class="max-w-14 md:h-7 h-12 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div
              v-motion-slide-visible-bottom
              class="grid px-1 sm:grid-cols-5 my-8 grid-cols-8 gap-5"
            >
              <div
                v-for="tech in backends"
                class="tag relative z-30 flex md:h-[56px] md:w-[56px] items-center justify-center h-[86px] w-[86px] ring-1 ring-gray-200 hover:ring-0 dark:ring-0 mt-1"
              >
                <div class="gradient-border gradient-border-dark"></div>

                <div
                  class="h-full rounded-md w-full bg-gray-800 relative flex items-center justify-center"
                >
                  <img
                    :src="tech.icon"
                    :alt="tech.name"
                    class="max-w-14 md:h-7 h-12 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div
              v-motion-slide-visible-bottom
              class="grid my-8 sm:grid-cols-5 grid-cols-9 px-1 gap-5"
            >
              <div
                v-for="tech in apis"
                class="tag relative z-30 flex md:h-[56px] md:w-[56px] items-center justify-center h-[86px] w-[86px] ring-1 ring-gray-200 hover:ring-0 dark:ring-0 mt-1"
              >
                <div class="gradient-border gradient-border-dark"></div>

                <div
                  class="h-full rounded-md w-full bg-gray-800 relative flex items-center justify-center"
                >
                  <img
                    :src="tech.icon"
                    :alt="tech.name"
                    class="max-w-14 md:h-7 h-12 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const frontends = [
  {
    name: "react",
    icon: "/techs/frontend/react-svgrepo-com.svg",
  },
  {
    name: "figma",
    icon: "/techs/frontend/figma-svgrepo-com.svg",
  },
  {
    name: "vue",
    icon: "/techs/frontend/vue-svgrepo-com.svg",
  },
  {
    name: "tailwind",
    icon: "/techs/frontend/tailwind-svgrepo-com.svg",
  },

  {
    name: "redux",
    icon: "/techs/frontend/redux-svgrepo-com.svg",
  },
  {
    name: "typescript",
    icon: "/techs/frontend/typescript-official-svgrepo-com.svg",
  },
  {
    name: "nextjs",
    icon: "/techs/frontend/nextjs_logo.png",
  },
  {
    name: "nuxtjs",
    icon: "/techs/frontend/nuxt-svgrepo-com.svg",
  },
  {
    name: "flutter",
    icon: "/techs/frontend/flutter-svgrepo-com.svg",
  },
];

const backends = [
  {
    name: "postgres",
    icon: "/techs/backend/postgresql-svgrepo-com.svg",
  },
  {
    name: "nodejs",
    icon: "/techs/backend/nodejs-icon-svgrepo-com.svg",
  },
  {
    name: "prisma",
    icon: "/techs/backend/prisma-svgrepo-com.svg",
  },
  {
    name: "firebase",
    icon: "/techs/backend/firebase-svgrepo-com.svg",
  },
  {
    name: "django",
    icon: "/techs/backend/django-svgrepo-com.svg",
  },
  {
    name: "express",
    icon: "/techs/backend/express.png",
  },

  {
    name: "mongodb",
    icon: "/techs/backend/mongodb-svgrepo-com.svg",
  },
  {
    name: "nestjs",
    icon: "/techs/backend/nestjs-svgrepo-com.svg",
  },
];

const apis = [
  {
    name: "Aws",
    icon: "/techs/apis/aws.png",
  },
  {
    name: "azure",
    icon: "/techs/apis/azure-svgrepo-com.svg",
  },
  {
    name: "docker",
    icon: "/techs/apis/docker-svgrepo-com.svg",
  },
  {
    name: "Gcp",
    icon: "/techs/apis/gcp-svgrepo-com.svg",
  },
  {
    name: "github",
    icon: "/techs/apis/github-icon-white-6.jpg",
  },
  {
    name: "graphql",
    icon: "/techs/apis/graphql-svgrepo-com.svg",
  },

  {
    name: "jira",
    icon: "/techs/apis/jira-svgrepo-com.svg",
  },
  {
    name: "kubernetes",
    icon: "/techs/apis/kubernetes-svgrepo-com.svg",
  },
  {
    name: "trello",
    icon: "/techs/apis/trello-svgrepo-com.svg",
  },
];
</script>
