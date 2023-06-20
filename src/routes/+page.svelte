<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import Hero from "../components/Hero.svelte";
  import Footer from "../components/Footer.svelte";
  import Contact from "../components/Contact.svelte";
  import About from "../components/About.svelte";
  import Experience from "../components/Experience.svelte";
  import Projects from "../components/Projects.svelte";
  import Techs from "../components/Techs.svelte";
</script>

<div class="relative w-full h-screen">
  <div
    class="fixed top-0 -z-10 inset-x-0 h-screen bg-grid-slate-900/[0.04] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:bg-grid-slate-100/[0.03] dark:bg-[center_top_-1px] dark:border-t dark:border-slate-100/5"
  />
  <Navbar />
  <Hero />
  <Techs />
  <About />
  <Experience />
  <Projects />
  <Contact />
  <Footer />
</div>
