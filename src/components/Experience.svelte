<script lang="ts">
  const exps = [
    {
      company: "Ape unit",
      role: "Software developer",
      location: "Gemany, Berlin",
    },
    {
      company: "The Gym Rwanda",
      role: "Trainne",
      location: "Kigali rwanda",
    },
  ];
</script>

<section id="experience" class="text-slate-600">
  <div class="container max-w-3xl px-4 py-8 mx-auto">
    <div class="grid md:grid-cols-1 gap-4 sm:mx-0 mx-4 grid-cols-12">
      <div class="col-span-3">
        <div
          class="text-center sm:text-left sm:mb-6 mb-14 before:block before:w-24 before:h-1 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-indigo-400"
        >
          <h3 class="text-lg dark:text-slate-100 font-semibold">Experience</h3>
          <span
            class="text-[12px] font-semibold mt-3 block uppercase dark:text-slate-400 text-slate-400"
            >Where i worked.</span
          >
        </div>
      </div>
      <div class="relative px-4 w-full space-y-6 col-span-9">
        <div
          class="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 dark:before:dark:bg-slate-800 before:bg-slate-200"
        >
          {#each exps as ex}
            <div
              class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-3 sm:before:h-3 sm:before:rounded-full sm:before:left-[-33px] sm:before:z-[1] before:bg-indigo-400"
            >
              <div class="flex items-center gap-3">
                <h3 class="text-[14.5px] gap-3 font-semibold">
                  <a
                    target="_blank"
                    class="hover:text-indigo-500 text-slate-900 dark:text-white gap-2 flex items-center"
                    href="https://apeunit.com/"
                  >
                    <span> {ex.company}</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      class="-mt-[2px]"
                      stroke-width="3"
                      stroke="currentColor"
                      ><path
                        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                      /><polyline points="15 3 21 3 21 9" /><line
                        x1="10"
                        y1="14"
                        x2="21"
                        y2="3"
                      /></svg
                    >
                  </a>
                </h3>
                -
                <span
                  class="text-[13.5px] capitalize mt-0 dark:text-slate-400 text-slate-500"
                  >{ex.location}</span
                >
              </div>
              <time
                class="text-[13.5px] capitalize mt-2 dark:text-slate-400 text-slate-500"
                >{ex.role} - 2023 - present</time
              >
              <ul
                class="text-[14px] mt-4 dark:text-slate-400 text-slate-500 font-medium list-disc pl-4 flex flex-col gap-3 leading-8"
              >
                <li>
                  Our team specializes in delivering cutting-edge solutions for
                  blockchain, Javascript And Solidity
                </li>
                <li>
                  We have extensive experience working with European companies,
                  including Ape Unit.
                </li>
                <li>
                  Our expertise in Node.js, Javascript and ReactJS technology
                  enables us to create seamless.
                </li>
              </ul>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>
