<script setup lang="ts">
type TooltipProps = {
  text: string;
  direction?: "top" | "bottom" | "left" | "right";
  variant?: "dark" | "light";
};

const props = withDefaults(defineProps<TooltipProps>(), {
  direction: "bottom",
  variant: "light",
});

type TooltipClasses = {
  [key: string]: boolean;
};

const tooltipClasses = computed(() => {
  const classes: TooltipClasses = {};
  classes[props.direction] = true;
  classes[props.variant] = true;
  return classes;
});
</script>

<template>
  <div class="tooltip-wrapper" aria-haspopup="listbox">
    <slot />
    <div class="tooltip" :class="tooltipClasses">{{ props.text }}</div>
  </div>
</template>

<style scoped>
.tooltip-wrapper {
  position: relative;
  width: max-content;
  max-width: 100%;
}

.tooltip {
  display: none;
  position: absolute;
  width: max-content;
  max-width: 352px;
  z-index: 10000;
  background-color: var(--color-tooltip-bg);
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: var(--shadow-sm);
  font-size: var(--fs-sm);
}

.tooltip.light {
  background-color: var(--color-text);
  color: var(--color-tooltip-bg);
}

.tooltip.top {
  bottom: calc(100% + 0.25rem);
}

.tooltip.left {
  top: 0;
  right: calc(100% + 0.25rem);
}

.tooltip.bottom {
  top: calc(100% + 0.25rem);
}

.tooltip.right {
  top: 0;
  left: calc(100% + 0.25rem);
}

.tooltip-wrapper:where(:hover, :focus-visible) .tooltip {
  display: block;
}
</style>
