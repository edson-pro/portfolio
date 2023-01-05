<template>
  <div class="w-full flex">
    <div class="h-screen">
      <div class="bg-gray-900 h-full w-[600px] border-r border-gray-800">
        <div
          class="py-10 px-10 h-full flex flex-col justify-between items-start"
        >
          <div>
            <h1 data-text="I'm Ntwali Edson" class="intro__text text-white">
              <mark class="mark">I'm Ntwali Edson</mark>
            </h1>
            <h2
              class="mt-5 text-lg text-gray-200 font-medium leading-tight text-sunrise"
            >
              Full stack software engineer
            </h2>
            <div class="leading-loose text-gray-400">
              <p class="mt-5">
                I build open-source front-end libraries at
                <a
                  class="underline bg-gray-800 px-2 py-1 rounded-[3px] text-zenith text-white"
                  >Algolia</a
                >
                and host two tech podcasts:
                <a
                  class="underline bg-gray-800 px-2 py-1 rounded-[3px] text-zenith text-white"
                  >Developer Experience</a
                >
                and
                <a
                  class="underline bg-gray-800 px-2 py-1 rounded-[3px] text-zenith text-white"
                  >Entre Devs</a
                >.
              </p>
              <p class="mt-4">
                On my spare time, I share what I learn on my
                <a
                  class="underline bg-gray-800 px-2 py-1 rounded-[3px] text-zenith text-white"
                  >blog</a
                >
                and speak at
                <a
                  class="underline bg-gray-800 px-2 py-1 rounded-[3px] text-zenith text-white"
                  href="#talks"
                  >tech conferences</a
                >
                around the world.
              </p>
            </div>
            <div class="pt-12">
              <div
                class="py-3 cursor-pointer group flex items-center gap-4 text-white"
                v-for="(link, index) in [
                  'Home',
                  'projects',
                  'skills',
                  'others',
                ]"
                :key="index"
              >
                <span
                  class="text-[12px] bg-gray-800 px-2 py-1 rounded-[3px] duration-500 transition-all text-gray-400 group-hover:text-white font-medium"
                  >0{{ index + 1 }}</span
                >
                <span
                  class="w-7 h-[1px] group-hover:w-14 group-hover:bg-white duration-500 transition-all bg-gray-500 block"
                ></span>
                <span
                  class="text-[13px] duration-500 transition-all group-hover:text-white tracking-[0.2rem] text-gray-400 font-semibold uppercase"
                  >{{ link }}</span
                >
              </div>
            </div>
          </div>
          <div>
            <div class="flex items-center w-full pt-32">
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
                    href=""
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
                    href=""
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
    <div class="h-screen w-full overflow-y-auto">
      <div class="px-10 h-screen py-28 w-full">
        <div class="w-full">
          <div class="w-full flex items-center gap-4">
            <span class="text-green-500 font-semibold text-lg">01.</span>
            <span class="font-semibold text-white text-xl truncate"
              >About me</span
            >
            <span class="w-1/3 bg-gray-700 h-[1px]"></span>
          </div>
          <div
            class="space-y-12 text-lg max-w-3xl font-medium text-gray-400 leading-8 my-6"
          >
            <p class="mb-3">
              Hello! My name is Brittany and I enjoy creating things that live
              on the internet. My interest in web development started back in
              2012 when I decided to try editing custom Tumblr themes — turns
              out hacking together a custom reblog button taught me a lot about
              HTML & CSS!
            </p>
            <span
              >I also recently launched a course that covers everything you need
              to build a web app with the Spotify API using Node & React.</span
            >
          </div>
          <div class="mt-10">
            <h4 class="font-semibold text-white text-xl truncate">
              Personal Info
            </h4>
            <div class="grid max-w-xl my-6 grid-cols-2 gap-4">
              <div
                class="flex items-center gap-3"
                v-for="info in [
                  { key: 'First Name', value: 'Ntwali' },
                  { key: 'Last Name', value: 'Edson' },
                  { key: 'Age', value: '22' },
                  { key: 'Phone', value: '(+25) 0788 209 629' },
                  { key: 'Email', value: 'ntwaliedson9@gmai.com' },
                ]"
              >
                <span class="text-base font-semibold text-white"
                  >{{ info.key }}:</span
                >
                <span class="text-gray-400 text-base font-medium">{{
                  info.value
                }}</span>
              </div>
            </div>
          </div>
          <div class="my-12">
            <a
              class="flex items-center font-medium gap-4 text-white"
              aria-label="See More About Me"
              href="/about"
              ><span> See More About Me</span
              ><svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                class="fill-current bounce-svg"
              >
                <path
                  d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                ></path></svg
            ></a>
          </div>
        </div>
      </div>
      <div class="h-screen">
        <div class="px-10 h-screen py-28 w-full">
          <div class="w-full">
            <div class="w-full flex items-center gap-4">
              <span class="text-green-500 font-semibold text-lg">01.</span>
              <span class="font-semibold text-white text-xl truncate"
                >My skills</span
              >
              <span class="w-1/3 bg-gray-700 h-[1px]"></span>
            </div>
            <div class="my-10">
              <div class="flex items-center flex-wrap gap-6">
                <div
                  class="px-5 py-3 border-gray-700 cursor-pointer text-gray-200 rounded-[3px] hover:bg-gray-800 bg-opacity-50 border bogr"
                  v-for="skill in [
                    'UI Design',
                    'UX Design',
                    'High Fidelity Wireframing',
                    'Low Fidelity Wireframing',
                    'Figma',
                    'Prototyping',
                    'Adobe Photoshop',
                    'Adobe Illustrator',
                    'Adobe After Effects',
                    'Motion Design',
                    'Brand Design',
                    'Adobe XD',
                    'Sketch',
                    'Web Site Design',
                    'Leadership',
                    'User Interviews',
                  ]"
                >
                  <span>{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-auto">
        <div class="px-10 h-full py-28 w-full">
          <div class="w-full">
            <div class="flex items-center justify-between w-full">
              <div class="w-full flex items-center gap-4">
                <span class="text-green-500 font-semibold text-lg">01.</span>
                <span class="font-semibold text-white text-xl truncate"
                  >Take a look at the latest projects I’ve done</span
                >
                <span class="w-1/3 bg-gray-700 h-[1px]"></span>
              </div>
              <div class="flex items-center w-[20%]">
                <a
                  class="text-white justify-end gap-3 w-full text-lg flex items-center font-semibold"
                >
                  <span class="truncate">See All</span>
                  <svg
                    viewBox="0 0 25 25"
                    fill="none"
                    stroke-width="2"
                    class="stroke-current h-7 w-7 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M9 8.5H16.5V16"></path>
                      <path d="M16.5 8.5L7 18"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
            <div class="my-10">
              <div class="grid grid-cols-2 gap-2">
                <div
                  class="w-[120%] p-4 group relative flex items-center justify-center rounded-[4px] bg-gray-800"
                >
                  <div
                    class="bg-gray-800 duration-500 group-hover:bg-opacity-10 transition-all cursor-pointer bg-opacity-60 absolute top-0 h-full w-full"
                  ></div>
                  <img
                    class="rounded-[3px]"
                    src="https://cdn.dribbble.com/userupload/3005044/file/original-9624a42c3e1f8d9868c412db4fc78269.png?compress=1&resize=1200x900"
                  />
                </div>
                <div
                  class="flex flex-col relative z-30 gap-4 justify-center items-end text-right"
                >
                  <p class="text-base font-medium text-green-500">
                    Featured Project
                  </p>
                  <h4 class="text-2xl font-bold text-white">Halcyon Theme</h4>
                  <div
                    class="text-gray-400 hover:shadow-2xl font-medium bg-gray-800 shadow-lg p-5 rounded-[3px]"
                  >
                    A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                    iTerm, and more. Available on Visual Studio Marketplace,
                    Package Control, Atom Package Manager, and npm.
                  </div>
                  <div
                    class="text-base font-medium text-gray-400 gap-4 items-center flex"
                  >
                    <span
                      v-for="stack in [
                        'VS Code',
                        'Sublime Text',
                        'Atom',
                        'iTerm2',
                        'Hyper',
                      ]"
                    >
                      {{ stack }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="h-screen">
        <div
          class="px-10 flex flex-col justify-between h-full pt-28 pb-10 w-full"
        >
          <div class="w-full">
            <div
              class="flex items-center max-w-xl mx-auto justify-between w-full"
            >
              <div
                class="flex flex-col justify-center items-center gap-4 text-center"
              >
                <div class="w-full flex justify-center items-center gap-4">
                  <span class="text-green-500 font-semibold text-lg">05.</span>
                  <span class="font-semibold text-green-500 text-lg truncate"
                    >What’s Next?</span
                  >
                </div>
                <h4 class="text-4xl mt-6 text-white font-semibold">
                  Get In Touch
                </h4>
                <p class="text-lg text-gray-400 leading-8">
                  Although I’m not currently looking for any new opportunities,
                  my inbox is always open. Whether you have a question or just
                  want to say hi, I’ll try my best to get back to you!
                </p>
                <button
                  class="px-6 my-4 py-3 border-green-500 text-green-500 cursor-pointer font-medium rounded-[3px] hover:bg-gray-800 bg-opacity-50 border bogr"
                >
                  Say hello to me
                </button>
              </div>
            </div>
            <div class="my-10"></div>
          </div>
          <div>
            <div
              class="flex items-center justify-center gap-2 text-gray-300 font-medium text-[17px]"
            >
              Designed & built by Edson<span class="icon has-white-text"
                ><svg
                  class="h-4 w-4 stroke-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464zM255.1 176C255.1 176 255.1 176 255.1 176c21.06 0 40.92 8.312 55.83 23.38c9.375 9.344 24.53 9.5 33.97 .1562c9.406-9.344 9.469-24.53 .1562-33.97c-24-24.22-55.95-37.56-89.95-37.56c0 0 .0313 0 0 0c-33.97 0-65.95 13.34-89.95 37.56c-49.44 49.88-49.44 131 0 180.9c24 24.22 55.98 37.56 89.95 37.56c.0313 0 0 0 0 0c34 0 65.95-13.34 89.95-37.56c9.312-9.438 9.25-24.62-.1562-33.97c-9.438-9.312-24.59-9.219-33.97 .1562c-14.91 15.06-34.77 23.38-55.83 23.38c0 0 .0313 0 0 0c-21.09 0-40.95-8.312-55.89-23.38c-30.94-31.22-30.94-82.03 0-113.3C214.2 184.3 234 176 255.1 176z"
                  ></path></svg></span
              >2023
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
