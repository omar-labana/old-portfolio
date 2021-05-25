<template>
  <section>
    <h2 class="text-4xl font-bold">Projects</h2>
    <!-- Cards -->
    <div class="flex flex-col justify-items-center items-center">
      <Project
        v-for="project in projects"
        :key="project.name"
        :projectData="project"
      >
      </Project>
    </div>
  </section>
</template>

<script>
import Project from "./Project.vue";

const projects = [
  {
    name: "100H Sketch",
    URLs: {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-98d5b.appspot.com/o/100H.png?alt=media&token=51d670be-292b-43e7-ae28-5ec48ae15daa",
      liveVersion: "#",
      sourceCode: "#",
    },
    tags: {
      projectType: "Personal",
      projectDev: "Full Stack",
      projectDate: "2020",
    },
    miniDescription:
      "Shared sketch between players, one player can draw while others guess the drawing.",
    builtWith: ["HTML5", "CSS3", "P5.js", "Node.js", "Express.js", "Socket.io"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
  },
  {
    name: "100H Lamo",
    URLs: {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-98d5b.appspot.com/o/100H.png?alt=media&token=51d670be-292b-43e7-ae28-5ec48ae15daa",
      liveVersion: "#",
      sourceCode: "#",
    },
    tags: {
      projectType: "Personal",
      projectDev: "Full Stack",
      projectDate: "2020",
    },
    miniDescription:
      "Shared sketch between players, one player can draw while others guess the drawing.",
    builtWith: ["HTML5", "CSS3", "P5.js", "Node.js", "Express.js", "Socket.io"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!",
  },
];
export default {
  components: {
    Project,
  },
  setup() {
    return {
      projects,
    };
  },
};
</script>
