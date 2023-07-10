<script lang="ts">
  import "@/app.css";
  import { createThemeSwitcher } from "../lib/theme";
  import Theme from "../lib/theme/Theme.svelte";
  import { onMount } from "svelte";

  createThemeSwitcher();

  onMount(() => {
    console.log(`
███╗░░██╗████████╗░██╗░░░░░░░██╗░█████╗░██╗░░░░░██╗  ███████╗██████╗░░██████╗░█████╗░███╗░░██╗
████╗░██║╚══██╔══╝░██║░░██╗░░██║██╔══██╗██║░░░░░██║  ██╔════╝██╔══██╗██╔════╝██╔══██╗████╗░██║
██╔██╗██║░░░██║░░░░╚██╗████╗██╔╝███████║██║░░░░░██║  █████╗░░██║░░██║╚█████╗░██║░░██║██╔██╗██║
██║╚████║░░░██║░░░░░████╔═████║░██╔══██║██║░░░░░██║  ██╔══╝░░██║░░██║░╚═══██╗██║░░██║██║╚████║
██║░╚███║░░░██║░░░░░╚██╔╝░╚██╔╝░██║░░██║███████╗██║  ███████╗██████╔╝██████╔╝╚█████╔╝██║░╚███║
╚═╝░░╚══╝░░░╚═╝░░░░░░╚═╝░░░╚═╝░░╚═╝░░╚═╝╚══════╝╚═╝  ╚══════╝╚═════╝░╚═════╝░░╚════╝░╚═╝░░╚══╝`);
  });
</script>

<svelte:head>
  <title>Ntwali Edson - Full stack developer.</title>
  <link
    rel="icon"
    href="https://avatars.githubusercontent.com/u/78101497?v=4"
    type="image/x-icon"
  />
</svelte:head>

<Theme />

<slot />
