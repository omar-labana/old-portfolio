<template>
  <section>
    <h2 class="text-4xl font-semibold">Projects</h2>
    <!-- Cards -->
    <div class="flex flex-col justify-items-center items-center">
      <div
        class="my-10 bg-indigo-50 border rounded-xl p-5 max-w-xs md:max-w-2xl md:flex md:justify-center lg:max-w-4xl"
      >
        <!-- Image -->
        <div
          class="px-5 py-7 rounded-xl bg-indigo-400 md:w-1/2 md:mx-1 md:p-0 md:py-20 md:px-6 md:self-center"
        >
          <img src="../assets/100H.png" alt=""/>
        </div>
        <!-- Description -->
        <div class="md:w-1/2 md:m-3 md:place-self-start">
          <h3 class="text-3xl md:text-4xl font-bold my-2">100H Sketch</h3>
          <ul class="flex font-semibold text-gray-500 mb-1 text-base md:text-lg">
            <li class="mr-3 text-gray-800">Personal</li>
            <li class="mr-2">•</li>
            <li class="mr-3">Full Stack</li>
            <li class="mr-2">•</li>
            <li>2020</li>
          </ul>
          <div >
            <p class="text-base md:text-lg">
              Shared sketch between players, one player can draw while others
              guess the drawing.
            </p>
            <ul class="flex flex-wrap text-indigo-900 items-center text-sm md:text-base">
              <li class="mr-2 bg-indigo-200 px-2 py-1 my-1 rounded">
                HTML5/CSS3
              </li>
              <li class="mr-2 bg-indigo-200 px-2 py-1 my-1 rounded">Node.js</li>
              <li class="mr-2 bg-indigo-200 px-2 py-1 my-1 rounded">
                Express.js
              </li>
              <li class="mr-2 bg-indigo-200 px-2 py-1 my-1 rounded">
                Socket.io
              </li>
              <li class="mr-2 bg-indigo-200 px-2 py-1 my-1 rounded">p5.js</li>
            </ul>
          </div>
          <ProjectModal />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectModal from "./ProjectModal.vue";

const projects = [];
export default {
  components:{
    ProjectModal
  }
};
</script>
