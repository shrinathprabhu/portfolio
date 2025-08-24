<script setup lang="ts">
import gsap from "gsap";

const showModal = ref(false);

const works = [
  {
    tooltip: "Outline Analytics | Side Project",
    logo: {
      alt: "Outline Analytics @ https://useoutline.xyz",
      src: "/images/useoutline.svg",
      width: "220",
      height: "220",
    },
    link: "https://useoutline.xyz",
  },
  {
    tooltip:
      "Avail Project | Frontend Engineer | 2025-present | Building Nexus",
    logo: {
      alt: "Avail Project @ https://availproject.org",
      src: "/images/avail.svg",
      width: "220",
      height: "220",
    },
    link: "https://availproject.org",
  },
  {
    tooltip:
      "Arcana Network | Lead Frontend Engineer | 2021-2025 | Built SendIt, Chain Abstraction Wallet and Dashboards",
    logo: {
      alt: "Arcana Network @ https://arcana.network",
      src: "/images/arcana.svg",
      width: "220",
      height: "220",
    },
    link: "https://arcana.network",
  },
  {
    tooltip:
      "Hashbinary Services | Fullstack Engineer | 2018-2021 | Built Pricinger, QBuild, GoTappit and various client projects",
    logo: {
      alt: "Hashbinary Services LLP",
      src: "/images/hashbinary.png",
      webp: "/images/webp/hashbinary.webp",
      width: "426",
      height: "426",
    },
    link: "https://hashbinary.com",
  },
  {
    tooltip:
      "Agrostar | Fullstack Engineer | 2020-2021 | Built initial version of Saathi App, worked as a part of Hashbinary's outsourced employee",
    logo: {
      alt: "Agrostar",
      src: "/images/agrostar.png",
      width: "128",
      height: "128",
    },
    link: "https://agrostar.in",
  },
];

const skills = [
  {
    logo: "/images/vue.svg",
    name: "Vue",
  },
  {
    logo: "/images/nuxt-dot-js.svg",
    name: "Nuxt",
  },
  {
    logo: "/images/node-js.svg",
    name: "Node.js",
  },
  {
    logo: "/images/javascript.svg",
    name: "Javascript",
  },
  {
    logo: "/images/typescript.svg",
    name: "Typescript",
  },
  {
    logo: "/images/express.svg",
    name: "Express",
  },
  {
    logo: "/images/mongodb.svg",
    name: "MongoDB",
  },
  {
    logo: "/images/html.svg",
    name: "HTML 5",
  },
  {
    logo: "/images/css3.svg",
    name: "CSS 3",
  },
  {
    logo: "/images/tailwind-css.svg",
    name: "Tailwind",
  },
  {
    logo: "/images/wordpress.svg",
    name: "Wordpress",
  },
];

function animateSkills(
  animatedSkillLogos: NodeListOf<Element>,
  animatedSkillTexts: NodeListOf<Element>,
  index: number
) {
  gsap
    .timeline({ delay: 0.3 })
    .fromTo(
      animatedSkillLogos[index],
      { x: 65 },
      {
        scale: 1,
        x: 0,
        opacity: 1,
        duration: 0.3,
      }
    )
    .to(animatedSkillTexts[index], { opacity: 1, duration: 0.3 })
    .to(
      animatedSkillLogos[index],
      {
        scale: 0,
        opacity: 0,
        x: -65,
        duration: 0.3,
        delay: 1,
        onComplete: animateSkills,
        onCompleteParams: [
          animatedSkillLogos,
          animatedSkillTexts,
          index + 1 === animatedSkillLogos.length ? 0 : index + 1,
        ],
      },
      "-=0.1"
    )
    .to(animatedSkillTexts[index], { opacity: 0, duration: 0.3 }, "-=0.3");
}

onMounted(() => {
  const gsapStartDelay = window.innerWidth < 768 ? 10000 : 8000;
  const animatedSkillLogos = document.querySelectorAll(
    ".animated-skill-logo-container"
  );
  const animatedSkillTexts = document.querySelectorAll(".animated-skill-text");
  setTimeout(
    () => animateSkills(animatedSkillLogos, animatedSkillTexts, 0),
    gsapStartDelay
  );
});
</script>

<template>
  <main>
    <Html lang="en"></Html>
    <Body class="home-page-body"></Body>
    <div class="home-page-main">
      <section aria-label="details" class="flex-col" style="gap: 2rem">
        <div class="flex-col" style="gap: 0.25rem">
          <div class="fade-in-up">
            <h1 class="text-shadow dev-designation">Web Developer</h1>
          </div>
          <span
            class="fade-in-up"
            style="
              font-size: var(--fs-xbase);
              animation-delay: var(--duration-fade-in);
            "
          >
            who can help create websites, web apps, and APIs for your business.
          </span>
        </div>
        <div>
          <span
            class="section-heading text-shadow fade-in"
            style="animation-delay: calc(1.5 * var(--duration-fade-in))"
            >Why you'll need me</span
          >
          <ul class="flex-col">
            <li
              class="fade-in-right"
              style="animation-delay: calc(1.8 * var(--duration-fade-in))"
            >
              You have a design and want to convert it into a fully functional
              website or a web app.
            </li>
            <li
              class="fade-in-right"
              style="animation-delay: calc(2.1 * var(--duration-fade-in))"
            >
              You want to create API endpoints for your project in Node.js.
            </li>
            <li
              class="fade-in-right"
              style="animation-delay: calc(2.4 * var(--duration-fade-in))"
            >
              You want someone who can help you with both the frontend and the
              backend.
            </li>
          </ul>
        </div>
        <div class="flex-col" style="gap: 0.5rem">
          <span
            class="section-heading text-shadow fade-in"
            style="animation-delay: calc(3 * var(--duration-fade-in))"
            >Worked for
          </span>
          <div class="flex" style="gap: 0.75rem">
            <VTooltip
              v-for="(work, index) in works"
              :key="work.tooltip"
              :text="work.tooltip"
            >
              <NuxtLink
                class="flex work-link fade-in"
                :to="work.link"
                target="_blank"
                :style="`animation-delay: calc(${
                  3 + (index + 1) * 0.35
                } * var(--duration-fade-in))`"
              >
                <picture>
                  <source
                    type="image/webp"
                    :srcset="work.logo.webp || work.logo.src"
                    :width="work.logo.width"
                    :height="work.logo.height"
                  />
                  <img
                    class="work-logo"
                    :src="work.logo.src"
                    :alt="work.logo.alt"
                    :width="work.logo.width"
                    :height="work.logo.height"
                  />
                </picture>
              </NuxtLink>
            </VTooltip>
          </div>
        </div>
        <div class="flex-col" style="gap: 0.75rem; align-items: start">
          <div class="flex-col" style="gap: 0.5rem">
            <span
              class="section-heading text-shadow fade-in"
              style="animation-delay: calc(3 * var(--duration-fade-in))"
              >Let's Connect
            </span>
            <div class="flex icons" style="gap: 1.125rem">
              <VTooltip text="See Shrinath's code on Github">
                <a
                  class="fade-in"
                  href="https://github.com/shrinathprabhu"
                  target="_blank"
                  rel="noopener"
                  aria-label="See Shrinath's code on Github"
                  style="animation-delay: calc(4 * var(--duration-fade-in))"
                >
                  <IconsGithub class="social-icon" />
                </a>
              </VTooltip>
              <VTooltip text="Find Shrinath on Linkedin">
                <a
                  class="fade-in"
                  href="https://www.linkedin.com/in/shrinath-prabhu"
                  target="_blank"
                  rel="noopener"
                  aria-label="Find Shrinath on Linkedin"
                  style="animation-delay: calc(4.25 * var(--duration-fade-in))"
                >
                  <IconsLinkedin class="social-icon" />
                </a>
              </VTooltip>
              <VTooltip text="Find Shrinath on Twitter">
                <a
                  class="fade-in"
                  href="https://twitter.com/shrinath_prabhu"
                  target="_blank"
                  rel="noopener"
                  aria-label="Find Shrinath on Twitter"
                  style="animation-delay: calc(4.5 * var(--duration-fade-in))"
                >
                  <IconsTwitter class="social-icon" />
                </a>
              </VTooltip>
            </div>
          </div>
          <div class="flex" style="margin-top: 1rem">
            <VTooltip
              text="Btw, this blog ranks top in Google Search for various keywords related to Vue 3 Composition API 😎"
              direction="top"
            >
              <a
                id="read-my-blog"
                href="https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d"
                target="_blank"
                rel="noopener"
                class="link-button fade-in-right"
                style="animation-delay: calc(3.85 * var(--duration-fade-in))"
                >Read my blog</a
              >
            </VTooltip>
          </div>
        </div>
      </section>
      <section aria-label="illustration" class="flex center">
        <div class="hero-image-container fade-in-zoom">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="animated-skill-logo-container"
          >
            <img
              class="animated-skill-logo"
              :src="skill.logo"
              :alt="`Can also code in ${skill.name}`"
              loading="lazy"
            />
            <span class="animated-skill-text">{{ skill.name }}</span>
          </div>
          <picture class="illustration">
            <IllustrationWebDev aria-label="Web Developer Illustration" />
          </picture>
        </div>
      </section>
    </div>
    <VModal :show="showModal" @close="showModal = false">
      <ContactForm />
    </VModal>
  </main>
</template>

<style scoped>
main {
  display: flex;
  height: calc(100% - 4rem);
  align-items: flex-start;
  justify-content: center;
  padding-block: 2rem;
}

.home-page-main {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  overflow-x: hidden;
  padding-inline: 2rem;
}

.dev-designation {
  background: linear-gradient(
    to right,
    var(--color-accent),
    var(--color-accent-light),
    var(--color-text),
    var(--color-accent-light),
    var(--color-accent),
    var(--color-accent-light),
    var(--color-text),
    var(--color-accent-light),
    var(--color-accent)
  );
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 800% 100%;
  animation: textGradientMotion 30s ease infinite;
}

@keyframes textGradientMotion {
  0% {
    background-position: 0% 100%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 100%;
  }
}

.section-heading {
  font-size: var(--fs-lg);
  font-weight: 600;
}

li {
  margin-top: 0.5rem;
}

.work-link {
  width: 2rem;
  aspect-ratio: 1/1;
  padding: 0.25rem;
  transition: transform var(--duration-base);
}

.work-logo,
.social-icon {
  object-fit: contain;
  width: 100%;
}

.icons a {
  display: flex;
  width: 1.5rem;
  cursor: pointer;
  transition: all var(--duration-base);
}

.work-link:where(:hover, :focus-visible),
.icons :where(a:hover, a:focus-visible) {
  transform: scale(1.5);
}

.social-icon:where(:hover, :focus-visible) {
  color: var(--color-accent-light);
  filter: drop-shadow(1px 2px 10px var(--color-accent-light));
}

.hero-image-container {
  position: relative;
  animation-delay: calc(4.6 * var(--duration-fade-in));
}

.animated-skill-logo-container {
  position: absolute;
  width: 10%;
  aspect-ratio: 1/1;
  top: 40%;
  left: 24%;
  transform: scale(0);
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;
}

.animated-skill-logo {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
}

.animated-skill-text {
  position: relative;
  font-size: var(--fs-sm);
  color: var(--color-tooltip-bg);
  font-weight: 600;
  opacity: 0;
}

@media screen and (min-width: 768px) {
  main {
    align-items: center;
    padding-inline: 2rem;
  }
  .home-page-main {
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    isolation: isolate;
    gap: 0.5rem;
    backdrop-filter: blur(12px);
  }

  .home-page-main::before {
    position: absolute;
    content: "";
    inset: 0;
    background-color: var(--color-text);
    opacity: 0.15;
    border-radius: 2rem;
    z-index: -1;
  }

  ul {
    max-width: 480px;
  }

  .hero-image-container {
    animation-delay: var(--duration-base);
  }
}
</style>
