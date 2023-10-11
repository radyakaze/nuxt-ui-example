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

  <UCard class="mt-10" title="Input">
    <div class="flex gap-3">
      <UInput placeholder="Type here" />
      <UInput placeholder="Type here" loading />
      <UInput icon="i-mdi-magnify" color="white" :trailing="false" />
    </div>
  </UCard>
</template>
