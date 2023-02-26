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
        <a id="drop-a-mail" href="mailto:hello@shrinath.me" class="mail"
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

.mail {
  position: relative;
  font-size: var(--fs-base);
  font-weight: 600;
  color: var(--color-accent);
}

.mail::after {
  position: absolute;
  content: "";
  bottom: -0.125rem;
  left: 50%;
  transform: translateX(-50%);
  width: 0%;
  border-top: 2px solid var(--color-accent);
  transition: width 0.25s;
}

.mail:hover,
.mail:focus-visible {
  filter: drop-shadow(2px 2px 16px var(--color-accent-light));
}

:is(.mail:hover, .mail:focus-visible)::after {
  width: 100%;
}
</style>
