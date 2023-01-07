<template>
  <div class="px-10 md:px-5 h-screen md:h-auto md:py-10 py-28 w-full">
    <div v-motion-slide-visible-bottom class="w-full">
      <div id="about" class="section w-full flex items-center gap-4">
        <span class="text-green-500 font-semibold text-lg">01.</span>
        <span class="font-semibold text-white text-xl truncate">About me</span>
        <span class="w-1/3 bg-gray-700 h-[1px]"></span>
      </div>
      <div
        class="space-y-12 text-lg max-w-3xl font-medium text-gray-400 leading-9 my-6"
      >
        <p class="mb-3">
          Hello again! My name is Edson Ntwali and I am curiosity-driven full
          stack developer based in <a class="tagline">Rwanda</a>. <br />i enjoy
          developing things that will be used by others. My interest in software
          development started back in 2018 when I decided to join software
          development colledge. Then after i joined
          <a class="tagline">The Gym</a> trainings and gave me the right skills
          to grow my career.
        </p>
        <span
          >I've been building staff for the <a href="#" class="tagline">Web</a>
          &
          <a href="#" class="tagline">Mobile</a> for
          <a href="#" class="tagline">4+</a> years and i have worked with
          various clients and contributted to some
          <a href="#" class="tagline">open source</a> projects.
        </span>
      </div>
      <div class="mt-10">
        <h4 class="font-semibold text-white text-xl truncate">Personal Info</h4>
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
          ><span>Download my resume.</span
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
</template>
