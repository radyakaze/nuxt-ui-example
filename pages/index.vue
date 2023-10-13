<script setup lang="ts">
const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']
const selected = ref(people[0])
</script>

<template>
  <UCard class="mt-10" title="Button">
    <div class="flex gap-3">
      <UButton icon="i-heroicons-book-open">
        Open Nuxt UI Documentation
      </UButton>
      <UButton disabled>
        Open Nuxt UI Documentation
      </UButton>
      <UButton variant="outline">
        Open Nuxt UI Documentation
      </UButton>
      <UButton variant="outline" disabled>
        Open Nuxt UI Documentation
      </UButton>
    </div>
  </UCard>

  <div class="mt-10" title="Input">
    <div class="flex gap-3">
      <UInput placeholder="Type here" />
      <UInput placeholder="Type here" loading />
      <UInput icon="i-mdi-magnify" color="white" :trailing="false" />

      <USelectMenu v-model="selected" searchable :options="people" />
    </div>
  </div>
</template>
