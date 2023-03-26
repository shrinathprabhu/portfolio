<script setup lang="ts">
type TooltipProps = {
  text: string;
  direction?: "top" | "bottom" | "left" | "right";
};

const props = withDefaults(defineProps<TooltipProps>(), {
  direction: "bottom",
});
</script>

<template>
  <div class="tooltip-wrapper" aria-haspopup="listbox">
    <slot />
    <div class="tooltip" :class="props.direction">{{ props.text }}</div>
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
  width: max-content;
  max-width: 300px;
  z-index: 10000;
  background-color: var(--color-tooltip-bg);
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  font-size: var(--fs-sm);
}

.tooltip.top {
  bottom: 100%;
}

.tooltip.left {
  top: 0;
  right: 100%;
}

.tooltip.bottom {
  top: 100%;
}

.tooltip.right {
  top: 0;
  left: 100%;
}

.tooltip-wrapper:where(:hover, :focus-visible) .tooltip {
  display: block;
}
</style>
