<script setup lang="ts"></script>

<template>
  <section>
    <h3 style="margin-bottom: 1rem">Connect with Me</h3>
    <a
      class="link-button"
      href="https://calendly.com/shrinathprabhu/meeting"
      target="_blank"
      rel="noopener"
      id="schedule-call"
      >Schedule a call</a
    >
    <div style="margin-block: 1rem">
      <span class="separator flex">OR</span>
    </div>
    <div>
      <span
        >Drop me a mail at
        <a id="drop-a-mail" href="mailto:hello@shrinath.me" class="link"
          >hello@shrinath.me</a
        ></span
      >
    </div>
  </section>
</template>

<style scoped>
.link-button {
  padding: 0.625rem 1rem;
}

.separator {
  position: relative;
  gap: 0.75rem;
  font-weight: 500;
  font-size: var(--fs-md);
}

.separator::before,
.separator::after {
  position: relative;
  content: "";
  border-top: 1px solid var(--color-text);
  display: flex;
  flex-grow: 1;
  margin-top: 0.625rem;
}
</style>
