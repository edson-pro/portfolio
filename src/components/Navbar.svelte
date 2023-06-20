<script lang="ts">
  import { getThemeStore } from "../lib/theme/context";
  const theme: any = getThemeStore();

  $: currentTheme = $theme;
</script>

<nav>
  <div class="max-w-3xl mx-auto px-2 py-2 flex items-center justify-between">
    <a href="">
      <span class="font-bold text-xl text-indigo-500">E.D</span>
    </a>

    <ul class="flex items-center gap-6">
      {#each ["about", "experience", "projects", "contact"] as link}
        <li>
          <a
            class="font-medium py-3 flex dark:text-slate-200 text-slate-800 text-sm capitalize"
            href={`#${link}`}
          >
            {link}
          </a>
        </li>
      {/each}
      <li>
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
            width="16"
            height="16"
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
