<template>
  <span id="projects" class="anchor"></span>
  <section id="projects">
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
    id: 1,
    name: "100H Sketch",
    URLs: {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-98d5b.appspot.com/o/100H.png?alt=media&token=51d670be-292b-43e7-ae28-5ec48ae15daa",
      liveVersion: "http://this-is-100-hostage.herokuapp.com/",
      sourceCode: "https://github.com/omar-labana/100H-proto-1",
    },
    tags: {
      projectType: "Personal",
      projectDev: "Full Stack",
      projectDate: "2020",
    },
    miniDescription:
      "Shared sketch between players, one player can draw while others guess the drawing.",
    builtWith: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "P5.js",
      "Node.js",
      "Express.js",
      "Socket.io",
    ],
    description:
      "100H Sketch is a multiplayer game where a chosen player can use the canvas brushed and colors to draw an object on it, other players can start guessing the drawing by typing the word in the chat interface. This was originally an adaption to a game I used to play with friends and family where we pick a random letter from the alphabet and try to think of names and objects that start with that letter.",
  },
  {
    id: 2,
    name: "Kai | Zen",
    URLs: {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-98d5b.appspot.com/o/kaizenpng.png?alt=media&token=0f500b3e-4aaa-4dff-b463-1cdb67557c88",
      liveVersion: "#",
      sourceCode: "https://github.com/omar-labana/kaizen",
    },
    tags: {
      projectType: "Personal",
      projectDev: "Front-end",
      projectDate: "2020",
    },
    miniDescription:
      "A print/create on demand platform to create any available product you want.",
    builtWith: ["Vue.js", "Vuetify", "Node.js"],
    description:
      "Kai | Zen  is an apparel/mech/accessory design tool. Users can select an available object and start customizing its size, color, material, and look. Users can also request a print on their own chosen object or previously chosen products. [WIP] Kai | Zen also offers laser cuttung and engraving services with wood router engravers, creating your paper notebook with any desirable shapes or colors, and printing on glass with laser technologies.",
  },
  {
    id: 3,
    name: "Textfaces",
    URLs: {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-98d5b.appspot.com/o/app_screenshot.png?alt=media&token=586a960f-f342-48d8-9bf5-aeceb5151e44",
      liveVersion: "https://textfac.es/",
      sourceCode: "https://github.com/omar-labana/textface-scrapper",
    },
    tags: {
      projectType: "Personal",
      projectDev: "Scripting",
      projectDate: "2021",
    },
    miniDescription:
      "Scraping any text-based content such as text faces to be used anywhere. (ღ˘⌣˘ღ)",
    builtWith: ["Ruby", "Nokogiri"],
    description:
      "Terminal-based web scraper that can be used to scrapping text faces (づ｡◕‿‿◕｡)づ that target HTML/XML markup and extract any meaningful content from them. emoticon aka text faces are an a typographic display of a facial representation, used to convey emotion in a text only medium, they can be used in expressing some emotion or face expressions.",
  },
  {
    id: 4,
    name: "Genesis Shop",
    URLs: {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-98d5b.appspot.com/o/genesis-shop.png?alt=media&token=9c7fedbe-f289-490b-91a2-f37566211e74",
      liveVersion: "https://omar-labana.github.io/genesis-shop/",
      sourceCode: "https://github.com/omar-labana/genesis-shop",
    },
    tags: {
      projectType: "Personal",
      projectDev: "Front-end",
      projectDate: "2021",
    },
    miniDescription:
      "An e-commerce website interface. Users can trade different apparel.",
    builtWith: ["HTML5", "CSS3", "Tailwind CSS"],
    description:
      "The capstone project of the HTML/CSS module at Microverse. We were asked to implement a design of an e-commerce website interface and customize it as we need to show mastery of what we learned so far by following the Odin project curriculum. This project started my addiction to Atomic CSS and customizable utility frameworks such as Tailwind CSS.",
  },

  {
    id: 5,
    name: "Senet Games",
    URLs: {
      img:
        "https://firebasestorage.googleapis.com/v0/b/portfolio-98d5b.appspot.com/o/Senet%20Games.png?alt=media&token=7e1a567f-6dd6-4e71-8185-b1d3ca5da8b4",
      liveVersion: "#",
      sourceCode: "https://github.com/omar-labana/senet-front",
    },
    tags: {
      projectType: "Personal",
      projectDev: "Full Stack",
      projectDate: "2020",
    },
    miniDescription: "Games built with web technologies.",
    builtWith: ["Vue.js", "Vuetify", "Node.js", "Express.js", "Socket.io"],
    description:
      "[WIP] Senet Games is my practice arena whenever I need to try something I learned. In this project, I build basic browser-based games such as tic-tac-toe, rock paper scissors, etc. I started this project to practice my knowledge in state management and real-time connection using web sockets. Currently, I am learning TypeScript and I will rebuild this project using React and NestJS.",
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
