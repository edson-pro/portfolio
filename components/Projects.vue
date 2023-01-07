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
            <span class="font-semibold text-white text-xl truncate"
              >Take a look at the latest projects I’ve done</span
            >
            <span class="w-1/3 bg-gray-700 h-[1px]"></span>
          </div>
        </div>
        <div
          v-for="(project, index) in [1, 2, 3, 4, 5, 6]"
          class="my-16 md:my-10"
          :key="index"
        >
          <div :class="['grid md:grid-cols-1 grid-cols-2 gap-2']">
            <div
              v-motion-slide-visible-right
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
                src="https://cdn.dribbble.com/userupload/3005044/file/original-9624a42c3e1f8d9868c412db4fc78269.png?compress=1&resize=1200x900"
              />
            </div>
            <div
              v-motion-slide-visible-left
              :class="[
                index % 2 === 0
                  ? 'order-2 text-right md:text-left md:items-start items-end '
                  : 'order-1 md:order-2 text-left items-start md:w-full w-[120%] ',
                'flex md:mt-4 flex-col relative z-30 gap-4 justify-center ',
              ]"
            >
              <p class="text-base font-medium text-green-500">
                Featured Project
              </p>
              <h4 class="text-2xl md:text-xl font-bold text-white">
                Halcyon Theme
              </h4>
              <div
                class="text-gray-400 hover:shadow-2xl font-medium bg-gray-800 shadow-lg p-5 rounded-[3px]"
              >
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
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
</template>
