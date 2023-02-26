<script setup lang="ts">
type ModalProps = {
  show?: boolean;
};

const props = withDefaults(defineProps<ModalProps>(), {
  show: false,
});
const emit = defineEmits(["close"]);
</script>

<template>
  <TransitionScale>
    <div v-if="props.show" class="modal-container flex center">
      <div
        class="modal"
        role="dialog"
        @click.stop="void 0"
        @keyup.esc="emit('close')"
      >
        <button class="close-button" @click.stop="emit('close')">
          <IconsClose style="width: 1.75rem" />
        </button>
        <slot />
      </div>
    </div>
  </TransitionScale>
</template>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100dvh;
  width: 100%;
  z-index: 999999;
  isolation: isolate;
}

.modal-container::before {
  position: absolute;
  content: "";
  inset: 0;
  background-color: var(--color-text-translucent);
  backdrop-filter: blur(8px);
  z-index: -1;
}

.modal {
  position: relative;
  background-color: var(--color-bg);
  z-index: 1;
  padding: 2rem 2.5rem;
  margin: 2.5rem;
  border-radius: 1rem;
  width: calc(100% - 5rem);
  max-width: 360px;
}

.close-button {
  position: absolute;
  right: 1rem;
  top: 1rem;
  padding: 0.125rem;
  background-color: transparent;
  color: var(--color-text);
  cursor: pointer;
}

.close-button:hover {
  box-shadow: none;
}
</style>
