<template>
  <footer class="px-3 max-w-sm md:max-w-md lg:max-w-xl mx-auto pt-10 pb-8">
    <form action="#" method="post" class="flex flex-col text-center text-lg">
      <h2 class="text-4xl font-bold">Contact me</h2>
      <p class="text-xl mt-4">
        If you have an application you are interested in developing, a feature
        that you need built or a project that needs coding. I’d love to help
        with it.
      </p>
      <input
        class="border-2 p-2 mt-4 rounded-lg"
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
      />
      <input
        class="border-2 p-2 mt-4 rounded-lg"
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
      />
      <textarea
        class="border-2 p-2 mt-4 rounded-lg"
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Write your message here"
        required
      ></textarea>
      <button class="border-2 p-2 mt-4 rounded-lg max-w-max mx-auto" type="submit">
        Get in Touch
      </button>
    </form>
  </footer>
</template>

<script>
export default {};
</script>
