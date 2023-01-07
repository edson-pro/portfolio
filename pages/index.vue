<template>
  <div class="w-full md:flex-col flex">
    <Sidebar :currentDiv="currentDiv" @scrollTo="handelScroll" />
    <div
      ref="scrollDiv"
      id="scroll"
      class="h-screen w-full md:h-fit md:overflow-hidden overflow-y-auto overflow-x-hidden"
    >
      <About />
      <Skills />
      <Techs />
      <Projects />
      <Contact />
    </div>
  </div>
</template>

<script lang="ts" setup>
const currentDiv = ref();

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        currentDiv.value = entry.target.getAttribute("id");
      }
    });
  });
  document.querySelectorAll(".section").forEach((section) => {
    observer.observe(section);
  });
});
const scrollDiv: any = ref(null);
const handelScroll = (link: string) => {
  const scrollTop: any = document?.getElementById(link)?.offsetTop;

  scrollDiv.value.scrollTo({ top: scrollTop - 100, behavior: "smooth" });
};
</script>
