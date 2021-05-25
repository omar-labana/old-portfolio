<template>
  <button
    class="px-2 py-1 mt-2 border-2 border-blue-900 rounded-md text-blue-900 font-semibold"
    type="button"
    @click="openModal"
  >
    See Project
  </button>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" :open="isOpen">
      <div
        class="fixed inset-0 z-10 overflow-y-auto md:max-w-screen-md lg:max-w-screen-lg md:mx-auto"
      >
        <div class="min-h-screen px-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-10"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay class="fixed inset-0 bg-blue-900 opacity-90" />
          </TransitionChild>

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              class="inline-block w-full max-w-full max-h-full py-6 px-3 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
            >
              <DialogTitle>
                <div>
                  <div class="flex justify-between items-start">
                    <h3 class="text-3xl md:text-4xl font-bold mb-2">
                      {{ modalData.name }}
                    </h3>
                    <button @click="closeModal" class="flex-shrink">
                      <XIcon class="w-7 h-7"></XIcon>
                    </button>
                  </div>
                  <ul
                    class="flex font-semibold text-gray-500 mb-1 text-base md:text-lg"
                  >
                    <li class="mr-3 text-gray-800">
                      {{ modalData.tags.projectType }}
                    </li>
                    <li class="mr-2">•</li>
                    <li class="mr-3">{{ modalData.tags.projectDev }}</li>
                    <li class="mr-2">•</li>
                    <li>{{ modalData.tags.projectDate }}</li>
                  </ul>
                </div>
              </DialogTitle>
              <!-- Content -->
              <div class="mt-2">
                <div
                  class="px-5 py-7 rounded-xl bg-indigo-400 md:mx-1 md:p-0 md:py-20 md:px-6 md:self-center"
                >
                  <img :src="modalData.URLs.img" alt="" />
                </div>
                <!-- Descreption -->
                <div class="md:flex md:mx-1 md:my-4">
                  <p class="my-3 md:my-0 md:w-3/5 md:mr-10">
                    {{ modalData.description }}
                  </p>
                  <div class="md:w-2/5">
                    <ul
                      class="flex flex-wrap text-indigo-900 items-center text-sm md:text-base"
                    >
                      <li
                        v-for="lang in modalData.builtWith"
                        :key="lang"
                        class="mr-2 bg-indigo-200 px-2 py-1 my-1 rounded"
                      >
                        {{ lang }}
                      </li>
                    </ul>
                    <hr class="my-2" />
                    <div class="flex justify-around">
                      <a :href="modalData.URLs.liveVersion">
                        <button
                          class="px-2 py-1 mt-2 border-2 border-blue-900 rounded-md text-blue-900 font-semibold flex justify-around items-center"
                          type="button"
                        >
                          See Live
                          <ExternalLinkIcon class="w-7 h-7" />
                        </button>
                      </a>
                      <a :href="modalData.URLs.sourceCode">
                        <button
                          class="px-2 py-1 mt-2 border-2 border-blue-900 rounded-md text-blue-900 font-semibold flex justify-around items-center"
                          type="button"
                        >
                          See Source
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            focusable="false"
                            class="w-7 h-7 ml-1"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 256 250"
                          >
                            <path
                              d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46c6.397 1.185 8.746-2.777 8.746-6.158c0-3.052-.12-13.135-.174-23.83c-35.61 7.742-43.124-15.103-43.124-15.103c-5.823-14.795-14.213-18.73-14.213-18.73c-11.613-7.944.876-7.78.876-7.78c12.853.902 19.621 13.19 19.621 13.19c11.417 19.568 29.945 13.911 37.249 10.64c1.149-8.272 4.466-13.92 8.127-17.116c-28.431-3.236-58.318-14.212-58.318-63.258c0-13.975 5-25.394 13.188-34.358c-1.329-3.224-5.71-16.242 1.24-33.874c0 0 10.749-3.44 35.21 13.121c10.21-2.836 21.16-4.258 32.038-4.307c10.878.049 21.837 1.47 32.066 4.307c24.431-16.56 35.165-13.12 35.165-13.12c6.967 17.63 2.584 30.65 1.255 33.873c8.207 8.964 13.173 20.383 13.173 34.358c0 49.163-29.944 59.988-58.447 63.157c4.591 3.972 8.682 11.762 8.682 23.704c0 17.126-.148 30.91-.148 35.126c0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002C256 57.307 198.691 0 128.001 0zm-80.06 182.34c-.282.636-1.283.827-2.194.39c-.929-.417-1.45-1.284-1.15-1.922c.276-.655 1.279-.838 2.205-.399c.93.418 1.46 1.293 1.139 1.931zm6.296 5.618c-.61.566-1.804.303-2.614-.591c-.837-.892-.994-2.086-.375-2.66c.63-.566 1.787-.301 2.626.591c.838.903 1 2.088.363 2.66zm4.32 7.188c-.785.545-2.067.034-2.86-1.104c-.784-1.138-.784-2.503.017-3.05c.795-.547 2.058-.055 2.861 1.075c.782 1.157.782 2.522-.019 3.08zm7.304 8.325c-.701.774-2.196.566-3.29-.49c-1.119-1.032-1.43-2.496-.726-3.27c.71-.776 2.213-.558 3.315.49c1.11 1.03 1.45 2.505.701 3.27zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033c-1.448-.439-2.395-1.613-2.103-2.626c.301-1.01 1.747-1.484 3.207-1.028c1.446.436 2.396 1.602 2.095 2.622zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95c-1.53.034-2.769-.82-2.786-1.86c0-1.065 1.202-1.932 2.733-1.958c1.522-.03 2.768.818 2.768 1.868zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37c-1.485.271-2.861-.365-3.05-1.386c-.184-1.056.893-2.114 2.376-2.387c1.514-.263 2.868.356 3.061 1.403z"
                              fill="rgba(30, 58, 138, var(--tw-text-opacity))"
                            />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";
import { XIcon, ExternalLinkIcon } from "@heroicons/vue/solid";

export default {
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
    XIcon,
    ExternalLinkIcon,
  },
  props: ["modalData"],
  setup() {
    let isOpen = ref(false);

    return {
      isOpen,
      setIsOpen(value) {
        isOpen.value = value;
      },
      closeModal() {
        isOpen.value = false;
      },
      openModal() {
        isOpen.value = true;
      },
    };
  },
};
</script>

<style>
</style>