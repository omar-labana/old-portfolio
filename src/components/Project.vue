<template>
  <div
    class="my-10 bg-indigo-50 border rounded-xl p-5 max-w-xs md:max-w-2xl md:flex md:justify-center lg:max-w-4xl"
  >
    <!-- Image -->
    <div
      class="px-5 py-7 rounded-xl bg-indigo-400 md:w-1/2 md:mx-1 md:p-0 md:py-20 md:px-6 md:self-center"
      :class="projectData.id % 2 === 0? 'order-2' : ''"
    >
      <img :src="projectData.URLs.img" alt="" />
    </div>
    <!-- Description -->
    <div class="md:w-1/2 md:m-3 md:place-self-start">
      <h3 class="text-3xl md:text-4xl font-bold my-2">
        {{ projectData.name }}
      </h3>
      <ul class="flex font-semibold text-gray-600 mb-1 text-base md:text-lg">
        <li class="mr-2 text-gray-800">{{ projectData.tags.projectType }}</li>
        <li class="mr-2">•</li>
        <li class="mr-3">{{ projectData.tags.projectDev }}</li>
        <li class="mr-2">•</li>
        <li>{{ projectData.tags.projectDate }}</li>
      </ul>
      <div>
        <p class="text-base md:text-lg">
          {{ projectData.miniDescription }}
        </p>
        <h4 class="font-semibold text-lg">Built with:</h4>
        <ul
          class="flex flex-wrap text-indigo-900 items-center text-sm md:text-base"
        >
          <li
            v-for="lang in projectData.builtWith"
            :key="lang"
            class="m-2 flex flex-col items-center text-sm"
          >
            <Icon :name="lang" class="w-7 h-7"></Icon>
            <span>{{ lang }}</span>
          </li>
        </ul>
      </div>
      <ProjectModal :modalData="projectData" />
    </div>
  </div>
</template>

<script>
import ProjectModal from "./ProjectModal.vue";

export default {
  components: {
    ProjectModal,
  },
  props: ["projectData"],
};
</script>

<style>
</style>