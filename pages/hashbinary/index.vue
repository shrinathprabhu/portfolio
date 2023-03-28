<script setup lang="ts">
const hashbinaryProjects = [
  {
    name: "8SQM",
    tagline: "Booking car wash services made easy.",
    work: "Worked as backend developer for 8SQM.",
    techUsed: "Node.js, MongoDB, Express, Twilio, Stripe, GeoJSON",
    link: "/hashbinary/8sqm",
    tooltip: "Click to view the animated demo of 8SQM.",
  },
  {
    name: "Pricinger",
    tagline: "Get best possible prices while booking and shopping online.",
    work: "Worked as fullstack web developer for 8SQM.",
    techUsed: "Node.js, MongoDB, Express, Chrome extension, Maxmind, Stripe",
    link: "/hashbinary/pricinger",
    tooltip: "Click to view the animated demo of Pricinger.",
  },
  {
    name: "Agrostar",
    tagline: "Helping farmers win.",
    work: "Worked as fullstack developer for Agrostar to help build their edtech app for farmers.",
    techUsed: "Node.js, MongoDB, Nest.js, React, Video.js",
    link: "https://agrostar.in/",
    externalLink: true,
    tooltip:
      "Animated demo of this project is COMING SOON. Meanwhile you can click this card to view more about what Agrostar does.",
  },
  {
    name: "Jagran's Campaign Management Tool",
    tagline:
      "An internal tool for Jagran that digitizes all their offline campaigns and reduces manual work.",
    techUsed: "Node.js, MongoDB, Express, RBAC, Angular, Chart.js",
    work: "Worked as fullstack web developer for Jagran's campaign managment tool.",
    tooltip: "Animated walkthrough of this project is COMING SOON.",
  },
  {
    name: "Fastbuild",
    tagline:
      "A project management tool for the construction industry where you can manage your plans, team, projects, financials digitally.",
    work: "Worked as backend developer for Fastbuild.",
    techUsed: "Node.js, MongoDB, Express, ImageMagick",
    link: "https://www.youtube.com/watch?v=ocH2B2cepiQ",
    externalLink: true,
    tooltip:
      "Animated walkthrough of this project is COMING SOON. Meanwhile you can click this card to view the demo video.",
  },
  {
    name: "GoTappit",
    tagline: "Your digital business card.",
    techUsed: "Node.js, MongoDB, Express, Vue",
    work: "Worked as fullstack web developer for GoTappit.",
    link: "https://www.youtube.com/watch?v=sLRXf8-I_94",
    externalLink: true,
    tooltip:
      "Animated walkthrough of this project is COMING SOON. Meanwhile you can click this card to view the demo video.",
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
    <p class="designation">Web Developer (April 2018 - January 2021)</p>
    <WorkProjects :projects="hashbinaryProjects" style="margin-top: 2rem" />
    <BackToHome style="margin-block: 2.5rem" />
  </div>
</template>

<style scoped>
.projects-container {
  padding: 2rem;
}

h2 {
  margin: 0;
}

h2 .link {
  font-size: var(--fs-xl);
}

.designation {
  font-size: var(--fs-lg);
}
</style>
