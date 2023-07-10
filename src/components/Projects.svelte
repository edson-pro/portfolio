<script lang="ts">
</script>

<section id="projects" class="max-w-3xl mx-auto px-4">
  {#each [1, 2, 3] as project, i}
    <div class="grid my-12 md:grid-cols-1 grid-cols-2 gap-2">
      <a
        href="https://johnliquors.com/"
        target="_blank"
        class=" {i % 2 === 0
          ? 'order-1 w-[120%] md:w-full'
          : 'md:order-1 order-2'} p-4 group relative flex items-center justify-center rounded-[4px] dark:bg-slate-800 bg-gray-50 border dark:border-slate-700 border-slate-200"
      >
        <img
          class="rounded-[3px] hover:scale-105 transition-all border dark:border-slate-700 border-slate-200"
          alt="Johnliquors "
          src="/projects/exclsv.png"
        /></a
      >
      <div
        class="{i % 2 === 0
          ? 'order-2 text-right md:text-left md:items-start items-end '
          : 'order-1 md:order-2 text-left items-start md:w-full w-[120%] '} flex flex-col relative z-30 gap-4 justify-center"
      >
        <p class="text-[14px] font-medium capitalize text-indigo-500">
          ecomerce
        </p>
        <h4
          class="text-[15px] capitalize font-bold dark:text-slate-300 text-slate-700"
        >
          Johnliquors
        </h4>
        <p
          class="text-gray-600 dark:text-slate-300 md:w-full w-[120%] shadow-sm dark:bg-opacity-60 bg-opacity-60 line-clamp-2- backdrop-blur-md leading-7 text-[14px] font-medium border dark:border-slate-700 dark:bg-slate-800 border-slate-200 bg-slate-50 p-5 rounded-[3px]"
        >
          Johnliquors is an online liquor store that provides and delivers
          liquors to your doorstep within a less a mout of time.
        </p>
        <div
          class="text-[14px] capitalize font-medium dark:text-slate-300 text-slate-600 gap-4 items-center flex"
        >
          {#each ["nextjs", "nodejs", "firebase", "tailwind", "algolia"] as tech}
            <a href="#" class="hover:text-indigo-500">{tech}</a>
          {/each}
        </div>
      </div>
    </div>
  {/each}
</section>
