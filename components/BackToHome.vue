<script setup lang="ts">
type BackToHomeProps = {
  previousPage?: string;
};

const props = defineProps<BackToHomeProps>();
</script>

<template>
  <div class="back-to-home">
    <NuxtLink v-if="props.previousPage" class="link" :to="props.previousPage"
      >Previous page</NuxtLink
    >
    <NuxtLink class="link" to="/">Back to home</NuxtLink>
  </div>
</template>

<style scoped>
.back-to-home {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
}

.link {
  text-transform: uppercase;
  font-size: var(--fs-xbase);
}
</style>
