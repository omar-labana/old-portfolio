<template>
  <nav class="fixed top-0 left-0 right-0 bg-white border-b">
    <div class="flex items-center justify-between h-16 layout">
      <div class="flex items-center">
        <CodeIcon class="w-7 mr-2" />
        <div class="font-black text-xl text-indigo-600 ml-1 md:ml-0">OL</div>
      </div>
      <ul class="hidden md:flex text-lg">
        <li v-for="item in navigation" :key="item.name">
          <a
            :href="item.href"
            :class="[
              ' px-3 py-5 text-xl font-medium  opacity-100 hover:text-gray-500 hover:bg-gray-100',
            ]"
            >{{ item.name }}</a
          >
        </li>
      </ul>
      <!-- Mbile Menu -->
      <Disclosure v-slot="{ open }">
        <DisclosureButton
          class="inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10 md:hidden"
        >
          <MenuIcon v-if="!open" class="w-7 h-7" />
          <XIcon v-else class="w-7 h-7" />
        </DisclosureButton>
        <DisclosurePanel
          v-show="open"
          class="sm:hidden w-screen h-screen absolute top-0 left-0 opacity-95 bg-indigo-900"
        >
          <DisclosureButton as="div">
            <div class="px-2 mt-16 pb-3 space-y-1">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  'block px-3 py-2 rounded-md text-5xl font-medium text-white',
                ]"
                >{{ item.name }}
              </a>
            </div>
          </DisclosureButton>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import { CodeIcon, MenuIcon, XIcon } from "@heroicons/vue/solid";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default {
  components: {
    CodeIcon,
    MenuIcon,
    XIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  setup() {
    const open = ref(false);

    return {
      open,
      navigation,
      close() {
        open.value = false;
        console.log(open.value);
      },
    };
  },
};
</script>