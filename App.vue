<script setup lang="ts">
const showModal = ref(false);

const works = [
  {
    tooltip: "Arcana Network - since 2021",
    logo: {
      alt: "Arcana Network",
      src: "/images/arcana.png",
      webp: "/images/webp/arcana.webp",
      avif: "/images/avif/arcana.avif",
      width: "160",
      height: "127",
    },
    link: {
      src: "https://www.arcana.network/",
      rel: "noopener",
    },
  },
  {
    tooltip: "Hashbinary Services - 2018-2021",
    logo: {
      alt: "Hashbinary Services LLP",
      src: "/images/hashbinary.png",
      webp: "/images/webp/hashbinary.webp",
      avif: "/images/avif/hashbinary.avif",
      width: "426",
      height: "400",
    },
    link: {
      src: "https://hashbinary.com/",
      rel: "noopener",
    },
  },
];

useHead({
  script: [
    {
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.defer=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-PLJ5D24');`,
    },
  ],
});
</script>

<template>
  <main>
    <Html lang="en"></Html>
    <div class="home-page-main">
      <section aria-label="details" class="flex-col" style="gap: 2rem">
        <div class="flex-col" style="gap: 0.25rem">
          <h1 class="text-shadow">Web Developer</h1>
          <span style="font-size: var(--fs-xbase)">
            who can help create websites, web apps, and APIs for your business.
          </span>
        </div>
        <div>
          <span class="section-heading text-shadow">Why you'll need me</span>
          <ul class="flex-col">
            <li>
              You have a design and want to convert it into a fully functional
              website or a web app.
            </li>
            <li>
              You want to create API endpoints for your project in Node.js.
            </li>
            <li>
              You want someone who can help you with both the frontend and the
              backend.
            </li>
          </ul>
        </div>
        <div class="flex-col" style="gap: 0.5rem">
          <span class="section-heading text-shadow">Worked for </span>
          <div class="flex" style="gap: 0.75rem">
            <VTooltip
              v-for="work in works"
              :key="work.tooltip"
              :text="work.tooltip"
            >
              <a
                class="flex work-link"
                :href="work.link.src"
                target="_blank"
                :rel="work.link.rel"
              >
                <picture>
                  <source
                    type="image/webp"
                    :srcset="work.logo.webp"
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
              </a>
            </VTooltip>
          </div>
        </div>
        <div class="flex-col" style="gap: 0.75rem; align-items: start">
          <div class="flex" style="gap: 1.5rem">
            <button
              id="lets-connect"
              class="cta-button"
              aria-haspopup="dialog"
              @click.stop="showModal = true"
            >
              Let's Connect
            </button>
            <div class="flex icons" style="gap: 1.125rem">
              <VTooltip text="See Shrinath's code on Github">
                <a
                  href="https://github.com/shrinathprabhu"
                  target="_blank"
                  rel="noopener"
                  aria-label="See Shrinath's code on Github"
                >
                  <IconsGithub class="social-icon" />
                </a>
              </VTooltip>
              <VTooltip text="Find Shrinath on Linkedin">
                <a
                  href="https://www.linkedin.com/in/shrinath-prabhu"
                  target="_blank"
                  rel="noopener"
                  aria-label="Find Shrinath on Linkedin"
                >
                  <IconsLinkedin class="social-icon" />
                </a>
              </VTooltip>
              <VTooltip text="Find Shrinath on Twitter">
                <a
                  href="https://twitter.com/shrinath_prabhu"
                  target="_blank"
                  rel="noopener"
                  aria-label="Find Shrinath on Twitter"
                >
                  <IconsTwitter class="social-icon" />
                </a>
              </VTooltip>
            </div>
          </div>
          <div class="flex" style="margin-top: 1rem">
            <a
              id="read-my-blog"
              href="https://medium.com/arcana-network-blog/vue-3-composition-api-basics-and-patterns-44813f2c785d"
              target="_blank"
              rel="noopener"
              class="link-button"
              >Read my blog</a
            >
          </div>
        </div>
      </section>
      <section aria-label="illustration" class="flex center">
        <picture>
          <source
            type="image/webp"
            srcset="/images/webp/web-dev-1.webp"
            width="577"
            height="433"
          />
          <img
            src="/images/web-dev-1.png"
            width="577"
            height="433"
            alt="Web Developer Illustration"
          />
        </picture>
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
  gap: 0.5rem;
}

.section-heading {
  font-size: var(--fs-lg);
  font-weight: 600;
}

li {
  margin-top: 0.5rem;
}

.work-link {
  width: 1.75rem;
  aspect-ratio: 1/1;
  padding: 0.25rem;
  transition: transform var(--duration-base);
}

.work-logo,
.social-icon {
  object-fit: contain;
  width: 100%;
}

.icons {
  padding-top: 0.5rem;
}

.icons a {
  display: flex;
  width: 1.25rem;
  cursor: pointer;
  transition: transform var(--duration-base);
}

.work-link:hover,
.work-link:focus-visible,
.icons :is(a:hover, a:focus-visible) {
  transform: scale(1.5);
}

@media screen and (min-width: 768px) {
  main {
    align-items: center;
  }
  .home-page-main {
    grid-template-columns: 1fr 1fr;
    padding: 2rem;
    isolation: isolate;
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
}
</style>
