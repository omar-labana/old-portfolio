<template>
  <div class="layout">
    <Header />
    <Hero />
    <Projects />
    <div class="h-24"></div>
    <About />
    <div class="h-24"></div>
    <Contact />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Hero from "./components/Hero.vue";
import Projects from "./components/Projects.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
</script>

<style>
.layout {
  @apply max-w-7xl font-main mx-auto px-2 sm:px-6 lg:px-8;
}
.anchor {
  position: absolute;
  transform: translateY(-100px);
}
</style>
