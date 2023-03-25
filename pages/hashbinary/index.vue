<script setup lang="ts">
const hashbinaryWorks = [
  {
    name: "8SQM",
    tagline: "Booking made easy",
  },
];
</script>

<template>
  <div class="projects-container">
    <h2>
      <a
        href="https://hashbinary.com/"
        target="_blank"
        class="link"
        rel="noopener"
        >Hashbinary Services LLP</a
      >
    </h2>
    <p>Web Developer</p>
    <p>April 2018 - January 2021</p>
    <div class="projects">
      <div class="project">
        <NuxtLink to="/hashbinary/8sqm">
          <h4 class="project-title">8SQM</h4>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects-container {
  padding: 2rem;
}

h2 {
  margin: 0;
}

.project-title {
  font-size: var(--fs-lg);
  margin: 0;
  padding: 0;
}

.link {
  font-size: var(--fs-xl);
}
</style>
