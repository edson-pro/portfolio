<template>
  <div class="h-screen">
    <div class="px-10 flex flex-col justify-between h-full pt-28 pb-10 w-full">
      <div class="w-full">
        <div class="flex items-center max-w-xl mx-auto justify-between w-full">
          <div
            class="flex flex-col justify-center items-center gap-4 text-center"
          >
            <div
              v-motion-slide-visible-bottom
              class="w-full flex justify-center items-center gap-4"
            >
              <span class="text-green-500 font-semibold text-lg">06.</span>
              <span class="font-semibold text-green-500 text-lg truncate"
                >What’s Next?</span
              >
            </div>
            <h4
              id="contact"
              v-motion-slide-visible-bottom
              class="text-4xl mt-6 section text-white font-semibold"
            >
              Get In Touch
            </h4>
            <p
              v-motion-slide-visible-bottom
              class="text-lg text-gray-400 leading-8"
            >
              Although I’m not currently looking for any new opportunities, my
              inbox is always open. Whether you have a question or just want to
              say hi, I’ll try my best to get back to you!
            </p>
            <button
              v-motion-slide-visible-bottom
              class="px-6 my-4 py-3 border-green-500 text-green-500 cursor-pointer font-medium rounded-[3px] hover:bg-gray-800 bg-opacity-50 border bogr"
            >
              Say hello to me
            </button>
          </div>
        </div>
        <div class="my-10"></div>
      </div>
      <div v-motion-slide-visible-bottom class="my-12">
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
</template>
