<template>
  <nav class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">
      <span class="flex items-center">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-pink-800 hover:text-white hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        </button>
        <span class="font-black text-xl text-pink-800 ml-1 md:ml-0">OL</span>
      </span>
      <ul class="hidden md:flex text-lg">
        <li><a href="#" class="px-2 py-5 hover:bg-gray-100">About</a></li>
        <li><a href="#" class="px-2 py-5 hover:bg-gray-100">Projects</a></li>
        <li><a href="#" class="px-2 py-5 hover:bg-gray-100">Contact</a></li>
      </ul>
      <!-- Mbile Menu -->
      <div class="md:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-pink-800 hover:text-white hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="block h-8 w-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>