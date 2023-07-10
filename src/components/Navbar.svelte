<script lang="ts">
  import { getThemeStore } from "../lib/theme/context";
  const theme: any = getThemeStore();

  $: currentTheme = $theme;
</script>

<nav>
  <div class="max-w-3xl mx-auto px-2 py-4 flex items-center justify-between">
    <a
      href=""
      class="border-[2px] border-indigo-500 rounded-full overflow-hidden"
    >
      <img
        height="38"
        width="38"
        class="p-[2px] object-cover rounded-full"
        src="/images/profile.jpg"
        alt=""
      />
    </a>

    <ul class="flex items-center gap-6">
      {#each ["about", "experience", "projects", "contact"] as link}
        <li>
          <a
            class="font-medium py-3 sm:hidden flex dark:text-slate-200 text-slate-800 text-base capitalize"
            href={`#${link}`}
          >
            {link}
          </a>
        </li>
      {/each}
      <li class="md:pr-1">
        <!-- svelte-ignore missing-declaration -->
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-missing-attribute -->
        <a
          class="cursor-pointer"
          on:click={() => {
            theme.setTheme(currentTheme === "dark" ? "light" : "dark");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            class="dark:fill-white transition-all {currentTheme === 'dark'
              ? 'rotate-180'
              : 'rotate-0'}"
            viewBox="0 0 24 24"
            ><path
              d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.514 4.486-10 10-10v20c-5.514 0-10-4.486-10-10z"
            /></svg
          >
        </a>
      </li>
    </ul>
  </div>
</nav>
