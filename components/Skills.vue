<template>
  <div class="h-screen md:h-auto">
    <div class="px-10 md:px-5 h-screen md:h-full md:py-10 py-28 w-full">
      <div class="w-full">
        <div
          v-motion-slide-visible-right
          id="skills"
          class="section w-full flex items-center gap-4"
        >
          <span class="text-green-500 font-semibold text-lg">02.</span>
          <span class="font-semibold text-white text-xl truncate"
            >My skills</span
          >
          <span class="w-1/3 bg-gray-700 h-[1px]"></span>
        </div>
        <div v-motion-slide-visible-left class="my-10">
          <div class="flex items-center flex-wrap gap-6">
            <div
              class="px-5 tag hover:border-0 flex items-center gap-3 py-3 relative border-gray-700 cursor-pointer text-gray-200 rounded-[3px] hover:bg-gray-800 bg-opacity-50 border bogr"
              v-for="skill in skills"
            >
              <div class="gradient-border gradient-border-dark block"></div>
              <img class="h-5 w-5" v-if="skill.icon" :src="skill.icon" alt="" />
              <span>{{ skill.title }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const skills = [
  {
    title: "UI / UX Design",
    icon: "/skills/gui-palette-svgrepo-com.svg",
  },
  {
    title: "Frontend development",
    icon: "/skills/computer-device-hardware-svgrepo-com.svg",
  },
  {
    title: "Backend development",
    icon: "/skills/server-storage-database-svgrepo-com.svg",
  },
  {
    title: "Full stack",
    icon: "/skills/website-seo-and-web-svgrepo-com.svg",
  },
  {
    title: "Prototyping",
    icon: "/skills/prototype-svgrepo-com.svg",
  },
  {
    title: "Agile metedology",
    icon: "/skills/agile-development-svgrepo-com.svg",
  },
  {
    title: "Team development",
    icon: "/skills/team-sales-svgrepo-com.svg",
  },
  {
    title: "CI/CD pipelines",
    icon: "/skills/os-patch-management-svgrepo-com.svg",
  },
  {
    title: "Mobile development",
    icon: "/skills/communication-device-interaction-mobile-phone-smartphone-svgrepo-com.svg",
  },
  {
    title: "Scram",
    icon: "/skills/scrum-svgrepo-com.svg",
  },
  {
    title: "Jira development",
    icon: "/skills/jira-svgrepo-com.svg",
  },
  {
    title: "Mentoring",
    icon: "/skills/blackboard-chalkboard-svgrepo-com.svg",
  },
  {
    title: "DevOps",
    icon: "/skills/azurepipelines-svgrepo-com.svg",
  },
  {
    title: "Microsercices",
    icon: "/skills/droplet-svgrepo-com.svg",
  },
  {
    title: "Project management",
    icon: "/skills/os-patch-management-svgrepo-com.svg",
  },
  {
    title: "Team leading",
    icon: "/skills/businessman-svgrepo-com.svg",
  },
  {
    title: "Git workfow",
    icon: "/skills/git-svgrepo-com.svg",
  },
];
</script>
