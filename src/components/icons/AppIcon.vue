<script setup>
// Single icon-set component: pass `name` to render a consistent SVG icon.
// Avoids emoji, keeps stroke-based Heroicons-style paths, inherits currentColor.
const props = defineProps({
  name: { type: String, required: true },
  class: { type: String, default: 'w-5 h-5' }
})

const paths = {
  plus: 'M12 4.5v15m7.5-7.5h-15',
  search: 'M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16Z',
  edit: 'M16.862 4.487a2.06 2.06 0 112.913 2.914L7.5 19.674 3 21l1.326-4.5L16.862 4.487Z',
  trash: 'M6 7h12M9.5 7V5a1.5 1.5 0 011.5-1.5h2A1.5 1.5 0 0114.5 5v2m2.5 0-.62 12.4A2 2 0 0114.39 21H9.61a2 2 0 01-1.99-1.6L7 7h10Z',
  check: 'M4.5 12.75l6 6 9-13.5',
  'check-circle': 'M9 12.75l2.25 2.25L15 9m6 3a9 9 0 11-18 0 9 9 0 0118 0Z',
  'x-circle': 'M9.75 9.75l4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0Z',
  'exclamation-circle': 'M12 9v3.75m0 3.75h.008v.008H12V16.5Zm9-4.5a9 9 0 11-18 0 9 9 0 0118 0Z',
  'exclamation-triangle': 'M12 9v3.75m-9.303 3.376C1.83 17.65 2.79 19.5 4.42 19.5h15.16c1.63 0 2.59-1.85 1.723-3.374L13.723 4.126a2 2 0 00-3.446 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z',
  clipboard: 'M9 5.25h6a1.5 1.5 0 011.5 1.5v1.5h-9v-1.5a1.5 1.5 0 011.5-1.5Zm-3 3h12a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V9.75A1.5 1.5 0 016 8.25Z',
  'clipboard-list': 'M9 5.25h6a1.5 1.5 0 011.5 1.5v1.5h-9v-1.5a1.5 1.5 0 011.5-1.5Zm-3 3h12a1.5 1.5 0 011.5 1.5v10.5a1.5 1.5 0 01-1.5 1.5H6a1.5 1.5 0 01-1.5-1.5V9.75A1.5 1.5 0 016 8.25ZM8.25 12.75h7.5m-7.5 3h4.5',
  calendar: 'M6.75 3v2.25M17.25 3v2.25M3.75 8.25h16.5M5.25 5.25h13.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-12a1.5 1.5 0 011.5-1.5Z',
  close: 'M6 18L18 6M6 6l12 12',
  inbox: 'M3.75 9.75h4.06a1.5 1.5 0 011.342.83l.696 1.34a1.5 1.5 0 001.342.83h1.62a1.5 1.5 0 001.342-.83l.696-1.34a1.5 1.5 0 011.342-.83h4.06M3.75 9.75l1.148-5.163A1.5 1.5 0 016.363 3.375h11.274a1.5 1.5 0 011.465 1.212l1.148 5.163M3.75 9.75v8.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V9.75',
  bolt: 'M13.5 3 4.5 14.25h6.75L10.5 21l9-11.25h-6.75L13.5 3Z',
  flag: 'M4.5 3v18M4.5 4.5h11.24a.75.75 0 01.6 1.2l-2.4 3.2 2.4 3.2a.75.75 0 01-.6 1.2H4.5',
  restore: 'M4.5 12a7.5 7.5 0 1 1 2.25 5.356M4.5 12V7.5M4.5 12H9'
}
</script>

<template>
  <svg
    :class="props.class"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.8"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path :d="paths[name] || paths.bolt" />
  </svg>
</template>
