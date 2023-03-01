<script setup lang="ts">
type TooltipProps = {
  text: string;
};

const props = defineProps<TooltipProps>();
</script>

<template>
  <div class="tooltip-wrapper" aria-haspopup="listbox">
    <slot />
    <div class="tooltip">{{ props.text }}</div>
  </div>
</template>

<style scoped>
.tooltip-wrapper {
  position: relative;
  width: max-content;
}

.tooltip {
  display: none;
  position: absolute;
  top: 100%;
  width: max-content;
  max-width: 300px;
  z-index: 10000;
  background-color: var(--color-tooltip-bg);
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  font-size: var(--fs-sm);
}

:is(.tooltip-wrapper:hover, .tooltip-wrapper:focus-visible) .tooltip {
  display: block;
}
</style>
