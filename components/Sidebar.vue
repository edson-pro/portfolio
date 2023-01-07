<template>
  <div id="sidebar" class="h-screen md:h-fit">
    <div
      v-motion-slide-left
      class="bg-gray-900 h-full md:w-full md:border-none w-[600px] border-r border-gray-800"
    >
      <div
        class="py-10 md:px-5 md:py-6 px-10 h-full flex flex-col justify-between items-start"
      >
        <div>
          <h1
            v-motion-slide-bottom
            data-text="I'm Ntwali Edson"
            class="intro__text text-white"
          >
            <mark class="mark">I'm Ntwali Edson</mark>
          </h1>
          <h2
            class="mt-5 text-lg text-gray-200 font-medium leading-tight text-sunrise"
          >
            Full stack software engineer
          </h2>

          <div class="leading-loose text-gray-400">
            <p class="mt-5">
              Hi There! 👋, I' am
              <a href="#" class="tagline">Edson Ntwali</a>. a passionate
              software engineer based in

              <a class="tagline">Rwanda</a>
              focused in innovating special software to solve a problem while we
              work.
            </p>
            <p class="mt-3">
              I am experienced in developing
              <a href="#" class="tagline">Websites</a>
              &
              <a href="#" class="tagline">Mobile</a>
              applications and the <a>Backend</a> using some of the popular tech
              stack out there.
            </p>
          </div>
          <div v-motion-slide-visible-once-left class="pt-12">
            <div
              @click="emits('scrollTo', link)"
              class="py-3 cursor-pointer group flex items-center gap-4 text-white"
              v-for="(link, index) in [
                'about',
                'skills',
                'techs',
                'projects',
                'contact',
              ]"
              :key="index"
            >
              <span
                class="text-[12px] bg-gray-800 px-2 py-1 rounded-[3px] duration-500 transition-all text-gray-400 group-hover:text-white font-medium"
                >0{{ index + 1 }}</span
              >

              <span
                :class="[
                  currentDiv === link
                    ? 'w-20 bg-gray-100  group-hover:w-20'
                    : 'w-7 bg-gray-500  group-hover:w-9 ',
                  'h-[1px] group-hover:bg-white duration-500 transition-all  block',
                ]"
              ></span>
              <span
                :class="[
                  currentDiv === link ? 'text-white' : 'text-gray-400',
                  'text-[13px] duration-500 transition-all group-hover:text-white tracking-[0.2rem]  font-semibold uppercase',
                ]"
                >{{ link }}</span
              >
            </div>
          </div>
        </div>
        <div>
          <div
            v-motion-slide-visible-once-bottom
            class="flex items-center w-full md:pt-10 pt-32"
          >
            <div class="">
              <img
                alt="Ntwali edson 's headshot"
                class="w-12 h-12 bg-gray-700 mr-8 rounded-full bg-dusk"
                src="https://avatars.githubusercontent.com/u/78101497?v=4"
              />
            </div>
            <ul class="flex gap-10 items-center text-zenith">
              <li class="w-full">
                <a
                  class="flex text-white gap-3 items-center font-medium"
                  href="https://www.linkedin.com/in/edson-ntwali/"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 48 48"
                    version="1.1"
                    id="Shopicons"
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6 fill-current"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_iconCarrier">
                      <g
                        id="linkedin_00000107549391358224351290000015646826172178843065_"
                      >
                        <path d="M0 .019h48v48H0v-48z" fill="none"></path>
                        <path
                          d="M34.019 44H13.981C8.478 44 4 39.522 4 34.019V13.981C4 8.478 8.478 4 13.981 4h20.037C39.522 4 44 8.478 44 13.981v20.037C44 39.522 39.522 44 34.019 44zM13.981 8A5.989 5.989 0 0 0 8 13.981v20.037A5.99 5.99 0 0 0 13.981 40h20.037A5.99 5.99 0 0 0 40 34.019V13.981A5.989 5.989 0 0 0 34.019 8H13.981z"
                        ></path>
                        <circle cx="15" cy="15" r="2"></circle>
                        <path
                          d="M13 20h4v15h-4zM35 35h-4v-7.471c0-2.487-.953-3.646-3-3.646l-4 .078V35h-4V20.039l7.961-.156h.001c3.423 0 7.038 2.009 7.038 7.646V35z"
                        ></path>
                      </g>
                    </g>
                  </svg>
                  <span> LinkedIn </span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    class="flex-none h-3 w-3 stroke-current"
                  >
                    <path
                      d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"
                    ></path>
                    <path
                      d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"
                    ></path>
                  </svg>
                </a>
              </li>
              <li class="w-full">
                <a
                  class="flex text-white gap-3 items-center font-medium"
                  href="https://github.com/edson-pro"
                  target="_blank"
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    class="w-4 h-4 fill-current"
                  >
                    <path
                      d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                    ></path>
                  </svg>
                  <span> Github </span>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    class="flex-none h-3 w-3 stroke-current"
                  >
                    <path
                      d="M10.976 1.193A.314.314 0 0010.687 1H6.312a.313.313 0 000 .625h3.62L5.467 6.091a.313.313 0 00.443.442l4.466-4.466v3.62a.313.313 0 00.625 0V1.313a.328.328 0 00-.024-.119z"
                    ></path>
                    <path
                      d="M3.5 1v.625H2.25a.625.625 0 00-.625.625v7.5c0 .345.28.625.625.625h7.5c.345 0 .625-.28.625-.625V8.5H11v1.875c0 .345-.28.625-.625.625h-8.75A.625.625 0 011 10.375v-8.75C1 1.28 1.28 1 1.625 1H3.5z"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emits = defineEmits(["scrollTo"]);

const props = defineProps<{
  currentDiv?: string;
}>();

const { currentDiv } = toRefs(props);
</script>
