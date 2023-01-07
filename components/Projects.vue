<template>
  <div class="h-fit">
    <div class="px-10 md:px-5 h-full md:py-10 py-28 w-full">
      <div class="w-full">
        <div class="flex items-center justify-between w-full">
          <div
            v-motion-slide-visible-left
            id="projects"
            class="section w-full flex items-center gap-4"
          >
            <span class="text-green-500 font-semibold text-lg">04.</span>
            <span class="font-semibold text-white text-xl md:text-base truncate"
              >Take a look at the latest projects I’ve done</span
            >
            <span class="w-1/3 bg-gray-700 h-[1px] md:hidden"></span>
          </div>
        </div>
        <div
          v-for="(project, index) in projects"
          class="my-16 md:my-10"
          :key="index"
        >
          <div :class="['grid md:grid-cols-1 grid-cols-2 gap-2']">
            <a
              :href="project.link"
              target="_blank"
              v-motion-slide-visible-left
              :class="[
                index % 2 === 0
                  ? 'order-1 w-[120%] md:w-full'
                  : 'md:order-1 order-2',
                ' order-2 p-4 group relative flex items-center justify-center rounded-[4px] bg-gray-800',
              ]"
            >
              <div
                class="bg-gray-800 duration-500 group-hover:bg-opacity-10 transition-all cursor-pointer bg-opacity-60 absolute top-0 h-full w-full"
              ></div>
              <img
                class="rounded-[3px]"
                :alt="project.name"
                :src="project.image"
              />
            </a>
            <div
              v-motion-slide-visible-left
              :class="[
                index % 2 === 0
                  ? 'order-2 text-right md:text-left md:items-start items-end '
                  : 'order-1 md:order-2 text-left items-start md:w-full w-[120%] ',
                'flex md:mt-4 flex-col relative z-30 gap-4 justify-center ',
              ]"
            >
              <p class="text-base font-medium capitalize text-green-500">
                {{ project.category }}
              </p>
              <h4 class="text-2xl md:text-xl font-bold text-white">
                {{ project.name }}
              </h4>
              <a
                target="_blank"
                :href="project.link"
                class="text-gray-400 hover:shadow-2xl font-medium bg-gray-800 shadow-lg p-5 rounded-[3px]"
              >
                {{ project.description }}
              </a>
              <div
                class="text-base capitalize font-medium text-gray-400 gap-4 items-center flex"
              >
                <span v-for="(stack, index) in project.stack" :key="index">
                  {{ stack }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    link: "https://exclsv.vercel.app/",
    category: "ecomerce",
    stack: ["nextjs", "nodejs", "postgress", "prisma", "aws"],
    name: "Exclsv ",
    image: "/projects/exclsv.png",
    description: `exclsv is full feature and battery included ecomerce platform with al features ready to be sold to any one who wants to start an online business without hassles.`,
  },
  {
    link: "http://nockira.com/",
    category: "E-learning",
    stack: ["nextjs", "firebase", "tailwind", "react", "GCP"],
    name: "Nockira ",
    image: "/projects/nockira.png",
    description: `nockira is an e-learnign platform that provides students with resouses which will help them learn traffic rules and get licences soon and faster than ever`,
  },
  {
    link: "https://johnliquors.com/",
    category: "ecomerce",
    stack: ["nextjs", "nodejs", "firebase", "tailwind", "algolia"],
    name: "Johnliquors ",
    image: "/projects/johnliquors.png",
    description: `Johnliquors is an online liquor store that provides and delivers liquors to your doorstep within a less a mout of time with many flavour and types of beverages available to you`,
  },
  {
    link: "https://www.johnbroker.rw/",
    category: "real estate",
    stack: ["nextjs", "tailwind", "supabase", "react"],
    name: "JohbBroker",
    image: "/projects/johnbroker.png",
    description: `JOHN BROKER makes finding real estate simple: you can filter properties by type, size, price, beds, baths, location and more.`,
  },
  {
    link: "https://www.libra.rw/",
    category: "movie streaming",
    stack: ["nextjs", "tailwind", "firebase", "react"],
    name: "Libra ",
    image: "/projects/libra.png",
    description: `Libra is a movie streaming platform aiming to provide the best translated movies out there with a less subcription per month and deliver them on time.`,
  },
];
</script>
