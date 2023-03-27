<script setup lang="ts">
const arcanaProjects = [
  {
    name: "Skizzle",
    tagline:
      "End-to-end encrypted attachments in Gmail, powered by blockchain.",
    work: "Worked as frontend developer for Skizzle.",
    techUsed: "Chrome extension, Vue, InboxSDK",
    link: "https://www.youtube.com/watch?v=y1r9orwuW7k",
    externalLink: true,
    tooltip:
      "Animated walkthrough of this project is COMING SOON. Meanwhile you can click this card to view the video demo.",
  },
  {
    name: "Arcana's Developer Dashboard",
    work: "Developed a dashboard that developers can use to configure Arcana.",
    techUsed: "Vue, Ethers, Arcana Auth SDK",
    link: "https://dashboard.arcana.network/",
    externalLink: true,
    tooltip: "Click to use the app.",
  },
  {
    name: "Arcana's web wallet",
    work: "Developed a web wallet to manage user's keys, and handle blockchain transactions.",
    techUsed: "Vue, Ethers, Penpal, Tailwind",
    link: "https://www.youtube.com/watch?v=avsNILNA9pk",
    externalLink: true,
    tooltip: "Click to watch the demo video.",
  },
  {
    name: "Wrote a blog",
    tagline: "A basic blog about Vue 3 Composition API.",
    techUsed: "None",
    link: "https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d",
    externalLink: true,
    work: "This blog ranks on top in google search for various keywords related to Vue 3 Composition API.",
    tooltip: "Click to read the blog",
  },
  {
    name: "Arcana's website v2",
    tagline:
      "A landing page where users can know more about Arcana (DEPRECATED). New website is live at https://arcana.network",
    techUsed: "Nuxt 2, GTM, Mailchimp",
    link: "https://github.com/arcana-network/website",
    externalLink: true,
    work: "Created a landing page for Arcana's v2 website.",
    tooltip: "Click to view the code in Github",
  },
  {
    name: "Arcana's website v1",
    tagline:
      "A landing page where users can know more about Arcana (DEPRECATED). New website is live at https://arcana.network",
    techUsed: "Wordpress, Divi, Nitropack, GTM",
    work: "Created a landing page for Arcana's v1 website.",
    tooltip: "Deprecated website, nothing to see",
  },
  {
    name: "Misc",
    techUsed: "Javascript, CSS, Nuxt, Vue",
    work: "Worked on various other things like creating email templates, auth verifification page, microsites etc.",
    tooltip: "Nothing to see",
  },
];
</script>

<template>
  <div class="projects-container">
    <h2>
      <a
        href="https://arcana.network/"
        target="_blank"
        class="link"
        rel="noopener"
        >Arcana Network</a
      >
    </h2>
    <p class="designation">Frontend Developer (January 2021 onwards)</p>
    <WorkProjects :projects="arcanaProjects" style="margin-top: 2rem" />
  </div>
</template>

<style scoped>
.projects-container {
  padding: 2rem;
}

h2 {
  margin: 0;
}

.link {
  font-size: var(--fs-xl);
}

.designation {
  font-size: var(--fs-lg);
}
</style>
