<script setup lang="ts">
type WorkProjectProps = {
  projects: {
    name: string;
    tagline?: string;
    work: string;
    techUsed: string;
    link?: string;
    externalLink?: boolean;
    tooltip: string;
  }[];
};

const props = defineProps<WorkProjectProps>();
</script>

<template>
  <div class="projects">
    <VTooltip
      v-for="project in props.projects"
      :key="project.name"
      :text="project.tooltip"
      class="project"
    >
      <NuxtLink
        v-if="project.link"
        :to="project.link"
        :target="project.externalLink ? '_blank' : '_self'"
        class="work-link"
      >
        <div class="project-card">
          <h4 class="project-title">{{ project.name }}</h4>
          <span v-if="project.tagline" class="project-tagline">{{
            project.tagline
          }}</span>
          <span>{{ project.work }}</span>
          <span
            ><span style="font-weight: 600">Tech used: </span
            >{{ project.techUsed }}</span
          >
        </div>
      </NuxtLink>
      <div v-else class="project-card">
        <h4 class="project-title">{{ project.name }}</h4>
        <span v-if="project.tagline" class="project-tagline">{{
          project.tagline
        }}</span>
        <span>{{ project.work }}</span>
        <span
          ><span style="font-weight: 600">Tech used: </span
          >{{ project.techUsed }}</span
        >
      </div>
    </VTooltip>
  </div>
</template>

<style scoped>
.projects {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.project-title {
  margin: 0;
  padding: 0;
  font-size: var(--fs-lg);
  font-weight: 600;
}

span {
  font-size: var(--fs-md);
}

.project {
  position: relative;
  outline: 1px solid white;
  border-radius: 2rem;
  width: calc(100%);
}

.project::before {
  position: absolute;
  content: "";
  inset: 0;
  background-color: var(--color-text);
  opacity: 0.15;
  border-radius: 2rem;
  z-index: -1;
}

.project-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 0.5rem;
}

.work-link,
.work-link:where(:hover, :focus-visible, :visited, :active) {
  font-size: var(--fs-base);
}

@media screen and (min-width: 768px) {
  .projects {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
