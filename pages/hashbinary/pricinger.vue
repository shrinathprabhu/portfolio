<script setup lang="ts">
import gsap from "gsap";
import { useTimelineRestart } from "@/composables/useTimelineRestart";
import { getSvgPathLength } from "@/utils/getSvgPathLength";

const timeline = gsap.timeline({ delay: 0.2 });
const timelineRestart = useTimelineRestart(timeline);
const hotelListPrice = ref(["AUD 582", "AUD 347"]);
const pricingerSwitchStateTooltip = ref("Switch ON");
const selectedConfig = reactive({
  os: "Select an operating system",
  browser: "Select a browser",
  proxy: "Select a proxy location",
});

useHead({
  title:
    "Worked on Pricinger chrome extension | Shrinath Prabhu | Web Developer",
  meta: [
    {
      name: "description",
      content: "Pricinger - Get the best prices on bookings",
    },
  ],
  link: [
    {
      rel: "preload",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@400;500;600;700&family=Pacifico&family=Roboto&display=swap",
      as: "style",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@400;500;600;700&family=Pacifico&family=Roboto&display=swap",
    },
  ],
});

function optimizeSettings() {
  selectedConfig.proxy = "Krujë, Albania (Free)";
  selectedConfig.os = "Ubuntu 22.04";
  selectedConfig.browser = "Brave Browser";
}

function startCirclePathAnimation(
  timeline: gsap.core.Timeline,
  element: string,
  pathLength: number,
  endDelay = 0
) {
  timeline
    .to(element, {
      strokeDasharray: pathLength,
      strokeDashoffset: -pathLength + 1,
    })
    .to(element, { opacity: 1, duration: 0.1 })
    .to(element, {
      strokeDashoffset: 0,
      duration: 0.5,
    })
    .to(element, { opacity: 0, delay: endDelay || 0.5 });

  return timeline;
}

function moveCursorToPricingerExtensionIcon(timeline: gsap.core.Timeline) {
  timeline
    .to("#mouse-cursor", {
      y: -1030,
      duration: 0.45,
      delay: 0.4,
    })
    .to(
      "#mouse-cursor",
      {
        x: -30,
        duration: 0.2,
      },
      "<"
    );

  return timeline;
}

function showTooltip(timeline: gsap.core.Timeline, element: string) {
  timeline.fromTo(
    element,
    {
      y: -4,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.3,
    }
  );

  return timeline;
}

function showPricingerPopup(timeline: gsap.core.Timeline) {
  timeline
    .to(
      "#pricinger-icon-hover",
      {
        opacity: 1,
        duration: 0.2,
      },
      "-=0.1"
    )
    .fromTo(
      "#pricinger-extension-popup",
      {
        y: -100,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.3,
      }
    )
    .to(
      "#pricinger-icon-hover",
      {
        opacity: 0,
      },
      "<"
    );

  return timeline;
}

function hideTooltip(timeline: gsap.core.Timeline, element: string) {
  timeline.to(element, {
    opacity: 0,
    duration: 0.1,
  });

  return timeline;
}

function updateHotelListPrices(hotelListPrices: string[]) {
  hotelListPrice.value = hotelListPrices;
  return timeline;
}

function moveCursorToPricingerPowerButton(timeline: gsap.core.Timeline) {
  timeline
    .to("#mouse-cursor", {
      x: -100,
      duration: 0.2,
      delay: 0.3,
    })
    .to(
      "#mouse-cursor",
      {
        y: -850,
        duration: 0.4,
      },
      "<"
    )
    .add(showTooltip(timeline, "#switch-on-off-tooltip"));

  return timeline;
}

onMounted(() => {
  setTimeout(startAnimation, 500);
});

function startAnimation() {
  const pricingerHighlightPathLength = getSvgPathLength(
    "#pricinger-icon-highlight"
  );
  const hotelListHighlightPathLength = getSvgPathLength(
    ".hotel-list-highlight"
  );

  timeline
    .to("#mouse-cursor", {
      opacity: 1,
      duration: 0.15,
    })
    .add(moveCursorToPricingerExtensionIcon(timeline))
    .add(
      startCirclePathAnimation(
        timeline,
        "#pricinger-icon-highlight",
        pricingerHighlightPathLength
      )
    )
    .to(
      "#mouse-cursor",
      {
        x: -1210,
        duration: 0.6,
      },
      "<"
    )
    .to("#google-domain-select", {
      fill: "#00A3FF",
      delay: 0.3,
    })
    .to("#google-domain", { display: "none", delay: 0.3 })
    .to("#booking-domain", { opacity: 1 })
    .to(".booking-domain-domain-text", {
      opacity: 1,
      duration: 0.2,
      stagger: 0.2,
    })
    .to("#google-page", { opacity: 0 })
    .to("#booking-home, #booking-domain-search-country", {
      opacity: 1,
      duration: 0.2,
      delay: 0.3,
    })
    .add(moveCursorToPricingerExtensionIcon(timeline))
    .add(
      startCirclePathAnimation(
        timeline,
        "#pricinger-icon-highlight",
        pricingerHighlightPathLength
      ),
      "-=1"
    )
    .to("#pricinger-icon", { filter: "none", duration: 0.2 }, "<")
    .to("#mouse-cursor", {
      y: -630,
      duration: 0.2,
      delay: 1,
    })
    .to(
      "#mouse-cursor",
      {
        x: -950,
        duration: 0.4,
      },
      "<"
    )
    .to("#booking-home", { opacity: 0, delay: 0.3 })
    .to(
      "#booking-domain-search-location, #booking-domain-search-date, #hotel-list",
      {
        opacity: 1,
      }
    )
    .add(moveCursorToPricingerExtensionIcon(timeline))
    .add(showPricingerPopup(timeline))
    .add(moveCursorToPricingerPowerButton(timeline))
    .to("#mouse-cursor", {
      y: -720,
      duration: 0.2,
      delay: 0.5,
    })
    .add(hideTooltip(timeline, "#switch-on-off-tooltip"), "-=0.2")
    .fromTo(
      "#tab-two-frame",
      {
        x: -40,
      },
      {
        x: -24,
        opacity: 1,
        duration: 0.3,
        delay: 0.2,
      }
    )
    .to(
      "#add-tab-plus-icon",
      {
        x: -24,
        duration: 0.3,
      },
      "<"
    )
    .to(
      "#tab-one-frame",
      {
        opacity: 0.65,
        duration: 0.3,
      },
      "<"
    )
    .to(
      "#hotel-list",
      {
        opacity: 0,
        duration: 0.2,
      },
      "<"
    )
    .to("#booking-domain", { opacity: 0, duration: 0.1 }, "<")
    .to(
      "#pricinger-extension-domain",
      { opacity: 1, duration: 0.1, delay: 0.1 },
      "<"
    )
    .to(
      "#pricinger-window",
      {
        opacity: 1,
        duration: 0.1,
        delay: 0.2,
      },
      "<"
    )
    .to("#pricinger-extension-popup", { opacity: 0 }, "<")
    .to("#mouse-cursor", {
      x: -360,
      duration: 0.6,
      delay: 0.2,
    })
    .to(
      "#mouse-cursor",
      {
        y: -490,
        duration: 0.3,
      },
      "<"
    )
    .to(
      "#clear-local-storage-checkbox .checkbox-fill, #clear-local-storage-text",
      {
        fill: "#2B5071",
        opacity: 1,
        duration: 0.1,
        delay: 0.1,
      }
    )
    .to("#mouse-cursor", {
      y: -450,
      duration: 0.3,
      delay: 0.1,
    })
    .to(
      "#clear-session-storage-checkbox .checkbox-fill, #clear-session-storage-text",
      {
        fill: "#2B5071",
        opacity: 1,
        duration: 0.1,
        delay: 0.1,
      }
    )
    .to("#mouse-cursor", {
      y: -370,
      duration: 0.3,
      delay: 0.1,
    })
    .to("#clear-cookies-checkbox .checkbox-fill, #clear-cookies-text", {
      fill: "#2B5071",
      opacity: 1,
      duration: 0.1,
      delay: 0.1,
    })
    .to("#mouse-cursor", {
      x: -820,
      duration: 0.4,
      delay: 0.1,
    })
    .to(
      "#mouse-cursor",
      {
        y: -450,
        duration: 0.2,
      },
      "<"
    )
    .to("#block-location-checkbox .checkbox-fill, #block-location-text", {
      fill: "#2B5071",
      opacity: 1,
      duration: 0.1,
      delay: 0.1,
    })
    .to("#mouse-cursor", {
      x: -600,
      duration: 0.4,
      delay: 0.1,
    })
    .to(
      "#mouse-cursor",
      {
        y: -140,
        duration: 0.2,
      },
      "<"
    )
    .fromTo(
      "#browser-dropdown-options-container",
      { y: -10 },
      {
        y: 0,
        opacity: 1,
        duration: 0.15,
        delay: 0.1,
      }
    )
    .to("#mouse-cursor", {
      x: -800,
      duration: 0.4,
      delay: 0.1,
    })
    .to(
      "#mouse-cursor",
      {
        y: 20,
        duration: 0.2,
      },
      "<"
    )
    .add(() => {
      selectedConfig.browser = "Brave Browser";
    })
    .to("#selected-browser-dropdown-value", {
      fontWeight: "500",
      fontSize: "18",
    })
    .to("#browser-dropdown-options-container", {
      opacity: 0,
      y: -10,
      duration: 0.2,
    })
    .to("#mouse-cursor", {
      x: -1050,
      duration: 0.4,
      delay: 0.1,
    })
    .to(
      "#mouse-cursor",
      {
        y: -140,
        duration: 0.2,
      },
      "<"
    )
    .fromTo(
      "#proxy-dropdown-options-container",
      { y: -10 },
      {
        y: 0,
        opacity: 1,
        duration: 0.15,
        delay: 0.1,
      }
    )
    .to("#mouse-cursor", {
      x: -1100,
      duration: 0.4,
      delay: 0.1,
    })
    .to(
      "#mouse-cursor",
      {
        y: -100,
        duration: 0.2,
      },
      "<"
    )
    .add(() => {
      selectedConfig.proxy = "Ljubljana, Slovenia (Free)";
    })
    .to("#selected-proxy-dropdown-value", {
      fontWeight: "500",
      fontSize: "18",
    })
    .to("#proxy-dropdown-options-container", {
      opacity: 0,
      y: -10,
      duration: 0.2,
    })
    .to("#mouse-cursor", {
      x: -1200,
      duration: 0.2,
      delay: 0.1,
    })
    .to(
      "#mouse-cursor",
      {
        y: -1070,
        duration: 0.6,
      },
      "<"
    )
    .to("#tab-one-frame", {
      opacity: 1,
      duration: 0.2,
      delay: 0.1,
    })
    .to(
      "#tab-two-frame",
      {
        opacity: 0.65,
        duration: 0.2,
      },
      "<"
    )
    .to(
      "#pricinger-window",
      {
        opacity: 0,
        duration: 0.2,
      },
      "<"
    )
    .to("#pricinger-extension-domain", { opacity: 0, duration: 0.1 }, "<")
    .to("#booking-domain", { opacity: 1, duration: 0.1 }, "<")
    .to(
      "#hotel-list",
      {
        opacity: 1,
        duration: 0.1,
        delay: 0.2,
      },
      "<"
    )
    .add(
      startCirclePathAnimation(
        timeline,
        ".hotel-list-highlight",
        hotelListHighlightPathLength,
        1
      )
    )
    .add(moveCursorToPricingerExtensionIcon(timeline))
    .add(showPricingerPopup(timeline))
    .add(moveCursorToPricingerPowerButton(timeline))
    .to("#pricinger-switch-on-off-button, #pricinger-optimize-button", {
      opacity: 1,
      duration: 0.1,
      delay: 0.2,
    })
    .to(
      "#switch-on-off-tooltip",
      {
        opacity: 0,
        y: -10,
        duration: 0.1,
      },
      "<"
    )
    .to(
      "#hotel-list",
      {
        opacity: 0,
        duration: 0.1,
      },
      "<"
    )
    .add(updateHotelListPrices(["AUD 565", "AUD 343"]))
    .to(
      "#hotel-list",
      {
        opacity: 1,
        duration: 0.1,
        delay: 0.5,
      },
      "<"
    )
    .to("#mouse-cursor", {
      y: -650,
      duration: 0.3,
      delay: 0.1,
    })
    .to("#pricinger-extension-popup", {
      opacity: 0,
      duration: 0.2,
    })
    .add(
      startCirclePathAnimation(
        timeline,
        ".hotel-list-highlight",
        hotelListHighlightPathLength,
        1
      )
    )
    .add(moveCursorToPricingerExtensionIcon(timeline))
    .add(showPricingerPopup(timeline))
    .to("#mouse-cursor", {
      y: -780,
      duration: 0.4,
      delay: 0.1,
    })
    .to(
      "#mouse-cursor",
      {
        x: -60,
        duration: 0.2,
      },
      "<"
    )
    .fromTo(
      "#optimize-settings-tooltip",
      {
        y: -10,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.2,
      }
    )
    .fromTo(
      "#pricinger-optimize-button",
      { filter: "brightness(1)" },
      {
        filter: "brightness(1.25)",
        duration: 0.1,
      },
      "<"
    )
    .to("#optimize-settings-tooltip", {
      opacity: 0,
      y: -10,
      duration: 0.1,
      delay: 2,
    })
    .to(
      "#pricinger-optimize-button",
      {
        filter: "brightness(1)",
        duration: 0.1,
      },
      "<"
    )
    .to(
      "#hotel-list",
      {
        opacity: 0,
        duration: 0.1,
      },
      "<"
    )
    .add(updateHotelListPrices(["AUD 510", "AUD 253"]))
    .to(
      "#hotel-list",
      {
        opacity: 1,
        duration: 0.1,
        delay: 0.5,
      },
      "<"
    )
    .to("#mouse-cursor", {
      y: -650,
      duration: 0.3,
      delay: 0.1,
    })
    .to("#pricinger-extension-popup", {
      opacity: 0,
      duration: 0.2,
    })
    .add(
      startCirclePathAnimation(
        timeline,
        ".hotel-list-highlight",
        hotelListHighlightPathLength,
        1
      )
    )
    .to(".optimize-on-cb, .optimize-on-text", {
      fill: "#2B5071",
      opacity: 1,
    })
    .add(optimizeSettings)
    .to(
      "#selected-proxy-dropdown-value, #selected-os-dropdown-value, #selected-browser-dropdown-value",
      {
        fontWeight: "500",
        fontSize: "18",
      }
    )
    .to("#mouse-cursor", {
      x: -1050,
      duration: 0.2,
      delay: 1,
    })
    .to(
      "#mouse-cursor",
      {
        y: -1070,
        duration: 0.6,
      },
      "<"
    )
    .to("#tab-two-frame", {
      opacity: 1,
      duration: 0.2,
      delay: 0.1,
    })
    .to(
      "#tab-one-frame",
      {
        opacity: 0.65,
        duration: 0.2,
      },
      "<"
    )
    .to(
      "#pricinger-window",
      {
        opacity: 1,
        duration: 0.2,
      },
      "<"
    )
    .to(
      "#booking-domain",
      {
        opacity: 0,
      },
      "<"
    )
    .to(
      "#pricinger-extension-domain",
      {
        opacity: 1,
      },
      "<"
    );
}
</script>

<template>
  <div class="animated-svg-container">
    <svg
      width="1440"
      height="1160"
      viewBox="0 0 1440 1160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <rect width="1440" height="1160" fill="#F5F5F5" />
      <g id="chrome-browser" clip-path="url(#clip0_0_1)">
        <g id="browser-browsing-window" clip-path="url(#clip1_0_1)">
          <rect
            id="blank-page"
            y="81"
            width="1440"
            height="1080"
            fill="white"
          />
          <g id="google-page">
            <g id="google-page-page">
              <path
                d="M0 81H1440V1153C1440 1157.42 1436.42 1161 1432 1161H8.00002C3.58174 1161 0 1157.42 0 1153V81Z"
                fill="white"
              />
              <path
                d="M0 81H1440V1153C1440 1157.42 1436.42 1161 1432 1161H8.00002C3.58174 1161 0 1157.42 0 1153V81Z"
                fill="url(#pattern0)"
              />
            </g>
            <rect
              id="7ecec434137d1fcbe023db38e06c1260 1"
              x="1379"
              y="96"
              width="32"
              height="32"
              rx="16"
              fill="url(#pattern1)"
            />
          </g>
          <g id="booking-home">
            <g id="Desktop - 1">
              <rect
                width="1440"
                height="1024"
                transform="translate(0 81)"
                fill="white"
              />
              <rect
                id="Rectangle 1"
                y="81"
                width="1440"
                height="176"
                fill="#163890"
              />
              <text
                id="Hotel Booking"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="24"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="287" y="132.227">Hotel Booking</tspan>
              </text>
              <g id="Group 1">
                <rect
                  id="Rectangle 2"
                  x="980"
                  y="103"
                  width="104.543"
                  height="42.358"
                  fill="white"
                />
                <text
                  id="Register"
                  fill="#163890"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="18"
                  letter-spacing="0em"
                >
                  <tspan x="997.564" y="131.36">Register</tspan>
                </text>
              </g>
              <g id="Group 2">
                <rect
                  id="Rectangle 2_2"
                  x="1094.46"
                  y="103"
                  width="104.543"
                  height="42.358"
                  fill="white"
                />
                <text
                  id="Sign in"
                  fill="#163890"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="18"
                  letter-spacing="0em"
                >
                  <tspan x="1118.53" y="131.36">Sign in</tspan>
                </text>
              </g>
              <g id="Group 4">
                <rect
                  id="Rectangle 3"
                  x="286"
                  y="196"
                  width="579"
                  height="49"
                  fill="white"
                />
                <text
                  id="Apollo"
                  fill="#939393"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="304" y="225.318">Where are you going</tspan>
                </text>
              </g>
              <g id="Group 3">
                <rect
                  id="Rectangle 4"
                  x="870"
                  y="196"
                  width="210"
                  height="49"
                  fill="white"
                />
                <line
                  id="Line 1"
                  x1="973.5"
                  y1="200"
                  x2="973.5"
                  y2="241"
                  stroke="#C7C7C7"
                />
              </g>
              <text
                id="Location"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                letter-spacing="0em"
              >
                <tspan x="287" y="187.318">Location</tspan>
              </text>
              <text
                id="Dates"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                letter-spacing="0em"
              >
                <tspan x="870" y="188.318">Dates</tspan>
              </text>
              <rect
                id="Rectangle 5"
                x="1085"
                y="196"
                width="114"
                height="49"
                fill="#2B73FF"
              />
              <text
                id="Search"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="1114" y="226.318">Search</tspan>
              </text>
            </g>
            <text
              id="These popular destinations have a lot to offer"
              fill="#939393"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              letter-spacing="0em"
            >
              <tspan x="288" y="356.318">
                These popular destinations have a lot to offer
              </tspan>
            </text>
            <text
              id="Apollo_2"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="288" y="644.318">Apollo</tspan>
            </text>
            <text
              id="Port Campbell"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="517" y="644.318">Port Campbell</tspan>
            </text>
            <text
              id="Torquay"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="746" y="644.318">Torquay</tspan>
            </text>
            <text
              id="Philip Island"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="975" y="644.318">Philip Island</tspan>
            </text>
            <text
              id="Anglesea"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="288" y="947.318">Anglesea</tspan>
            </text>
            <text
              id="Victoria"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="517" y="947.318">Victoria</tspan>
            </text>
            <text
              id="Tasmania"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="746" y="947.318">Tasmania</tspan>
            </text>
            <text
              id="Sydney"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="975" y="947.318">Sydney</tspan>
            </text>
            <text
              id="Check-in"
              fill="#939393"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              letter-spacing="0em"
            >
              <tspan x="889" y="227.318">Check-in</tspan>
            </text>
            <text
              id="Check-out"
              fill="#939393"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              letter-spacing="0em"
            >
              <tspan x="985" y="227.318">Check-out</tspan>
            </text>
            <text
              id="Explore Australia"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="25"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="288" y="324.091">Explore Australia</tspan>
            </text>
            <g id="Frame 54" clip-path="url(#clip2_0_1)">
              <rect
                id="pexels-thorsten-technoman-338504 2"
                x="57"
                y="392"
                width="450"
                height="300"
                fill="url(#pattern2)"
              />
            </g>
            <g id="Frame 53" clip-path="url(#clip3_0_1)">
              <rect
                id="pexels-donald-tong-189296 2"
                x="517"
                y="318"
                width="449.945"
                height="300"
                fill="url(#pattern3)"
              />
            </g>
            <g id="Frame 52" clip-path="url(#clip4_0_1)">
              <rect
                id="pexels-pixabay-261102 3"
                x="550"
                y="335"
                width="449.451"
                height="300"
                fill="url(#pattern4)"
              />
            </g>
            <g id="Frame 51" clip-path="url(#clip5_0_1)">
              <rect
                id="pexels-pixabay-258154 2"
                x="977"
                y="351"
                width="600"
                height="300"
                fill="url(#pattern5)"
              />
            </g>
            <g id="Frame 50" clip-path="url(#clip6_0_1)">
              <rect
                id="pexels-pixabay-261102 2"
                x="177"
                y="666"
                width="449.451"
                height="300"
                fill="url(#pattern6)"
              />
            </g>
            <g id="Frame 49" clip-path="url(#clip7_0_1)">
              <rect
                id="the-apollo-stock-image"
                x="397"
                y="649"
                width="450"
                height="300"
                fill="url(#pattern7)"
              />
            </g>
            <g id="Frame 48" clip-path="url(#clip8_0_1)">
              <rect
                id="pexels-pixabay-258154 2_2"
                x="565"
                y="666"
                width="600"
                height="300"
                fill="url(#pattern8)"
              />
            </g>
            <g id="Frame 47" clip-path="url(#clip9_0_1)">
              <rect
                id="pexels-donald-tong-189296 2_2"
                x="856"
                y="666"
                width="449.945"
                height="300"
                fill="url(#pattern9)"
              />
            </g>
          </g>
          <g id="hotel-list">
            <g id="Desktop - 1_2">
              <rect
                width="1440"
                height="1024"
                transform="translate(0 81)"
                fill="white"
              />
              <rect
                id="Rectangle 1_2"
                y="81"
                width="1440"
                height="176"
                fill="#163890"
              />
              <text
                id="Hotel Booking_2"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="24"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="287" y="132.227">Hotel Booking</tspan>
              </text>
              <g id="Group 1_2">
                <rect
                  id="Rectangle 2_3"
                  x="980"
                  y="103"
                  width="104.543"
                  height="42.358"
                  fill="white"
                />
                <text
                  id="Register_2"
                  fill="#163890"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="18"
                  letter-spacing="0em"
                >
                  <tspan x="997.564" y="131.36">Register</tspan>
                </text>
              </g>
              <g id="Group 2_2">
                <rect
                  id="Rectangle 2_4"
                  x="1094.46"
                  y="103"
                  width="104.543"
                  height="42.358"
                  fill="white"
                />
                <text
                  id="Sign in_2"
                  fill="#163890"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="18"
                  letter-spacing="0em"
                >
                  <tspan x="1118.53" y="131.36">Sign in</tspan>
                </text>
              </g>
              <rect
                id="Rectangle 3_2"
                x="286"
                y="196"
                width="579"
                height="49"
                fill="white"
              />
              <text
                id="Apollo_3"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                letter-spacing="0em"
              >
                <tspan x="304" y="225.318">Apollo</tspan>
              </text>
              <g id="Group 3_2">
                <rect
                  id="Rectangle 4_2"
                  x="870"
                  y="196"
                  width="210"
                  height="49"
                  fill="white"
                />
                <line
                  id="Line 1_2"
                  x1="973.5"
                  y1="200"
                  x2="973.5"
                  y2="241"
                  stroke="#C7C7C7"
                />
                <text
                  id="Fri, 12 Sept"
                  fill="black"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="12"
                  letter-spacing="0em"
                >
                  <tspan x="892.725" y="225.864">Fri, 12 Sept</tspan>
                </text>
                <text
                  id="Sun, 14 Sept"
                  fill="black"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="12"
                  letter-spacing="0em"
                >
                  <tspan x="990.828" y="225.864">Sun, 14 Sept</tspan>
                </text>
              </g>
              <text
                id="Location_2"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                letter-spacing="0em"
              >
                <tspan x="287" y="187.318">Location</tspan>
              </text>
              <text
                id="Dates_2"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                letter-spacing="0em"
              >
                <tspan x="870" y="188.318">Dates</tspan>
              </text>
              <rect
                id="Rectangle 5_2"
                x="1085"
                y="196"
                width="114"
                height="49"
                fill="#2B73FF"
              />
              <text
                id="Search_2"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="1114" y="226.318">Search</tspan>
              </text>
              <g id="List item">
                <rect
                  id="Rectangle 6"
                  x="286.5"
                  y="281.5"
                  width="912"
                  height="197"
                  fill="white"
                  stroke="#CBCBCB"
                />
                <text
                  id="169 Great Ocean Road, 3233 Apollo Bay, Australia"
                  fill="#8D8D8D"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="340.318">
                    169 Great Ocean Road, 3233 Apollo Bay, Australia
                  </tspan>
                </text>
                <text
                  id="1 king bed, 1 single bed"
                  fill="#8D8D8D"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="387.318">1 king bed, 1 single bed</tspan>
                </text>
                <text
                  id="4 nights"
                  fill="#8D8D8D"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="1124.86" y="389.318">2 nights</tspan>
                </text>
                <g id="Frame 46" clip-path="url(#clip10_0_1)">
                  <rect
                    id="the-apollo-stock-image_2"
                    x="183"
                    y="208"
                    width="450"
                    height="300"
                    fill="url(#pattern10)"
                  />
                </g>
                <text
                  id="The Apollo"
                  fill="black"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="22"
                  font-weight="bold"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="312.5">The Apollo</tspan>
                </text>
                <g id="Group 24">
                  <text
                    id="the-apollo-price"
                    fill="black"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Inter"
                    font-size="22"
                    font-weight="bold"
                    letter-spacing="0em"
                  >
                    <tspan x="1090" y="416.5">AUD 582</tspan>
                  </text>
                  <path
                    id="the-apollo-price-highlight"
                    class="hotel-list-highlight"
                    d="M1222.5 392.5C1222.5 404.036 1214.5 414.755 1200.98 422.672C1187.5 430.568 1168.77 435.5 1148 435.5C1127.23 435.5 1108.5 430.568 1095.02 422.672C1081.5 414.755 1073.5 404.036 1073.5 392.5C1073.5 380.964 1081.5 370.245 1095.02 362.328C1108.5 354.432 1127.23 349.5 1148 349.5C1168.77 349.5 1187.5 354.432 1200.98 362.328C1214.5 370.245 1222.5 380.964 1222.5 392.5Z"
                    stroke="#FF0000"
                    stroke-width="3"
                  />
                </g>
                <text
                  id="Room"
                  fill="black"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="367.318">Room</tspan>
                </text>
                <text
                  id="12 rooms available at this hotel"
                  fill="#009906"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  font-weight="bold"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="466.318">
                    12 rooms available at this hotel
                  </tspan>
                </text>
                <g id="Group 4_2">
                  <rect
                    id="Rectangle 8"
                    x="1000"
                    y="432"
                    width="187"
                    height="37"
                    fill="#163890"
                  />
                  <text
                    id="Check Availability"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Inter"
                    font-size="16"
                    letter-spacing="0em"
                  >
                    <tspan x="1027.21" y="456.318">Check Availability</tspan>
                  </text>
                </g>
              </g>
              <g id="List item_2">
                <rect
                  id="Rectangle 6_2"
                  x="286.5"
                  y="494.5"
                  width="912"
                  height="197"
                  fill="white"
                  stroke="#CBCBCB"
                />
                <text
                  id="2 Tuxion Road, 3233 Apollo Bay, Australia"
                  fill="#8D8D8D"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="553.318">
                    2 Tuxion Road, 3233 Apollo Bay, Australia
                  </tspan>
                </text>
                <text
                  id="1 queen bed"
                  fill="#8D8D8D"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="600.318">1 queen bed</tspan>
                </text>
                <text
                  id="4 nights_2"
                  fill="#8D8D8D"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="1124.86" y="602.318">2 nights</tspan>
                </text>
                <g id="Frame 45" clip-path="url(#clip11_0_1)">
                  <rect
                    id="apollo-panaroma-gh-stock-image"
                    x="163"
                    y="445"
                    width="449.945"
                    height="300"
                    fill="url(#pattern11)"
                  />
                </g>
                <text
                  id="Apollo Panorama Guesthouse"
                  fill="black"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="22"
                  font-weight="bold"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="525.5">Apollo Panorama Guesthouse</tspan>
                </text>
                <g id="Group 23">
                  <text
                    id="apollo-panaroma-guesthouse-price"
                    fill="black"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Inter"
                    font-size="22"
                    font-weight="bold"
                    letter-spacing="0em"
                  >
                    <tspan x="1090" y="629.5">{{ hotelListPrice[1] }}</tspan>
                  </text>
                  <path
                    id="apollo-panaroma-guesthouse-price-highlight"
                    class="hotel-list-highlight"
                    d="M1212.5 606C1212.5 618.559 1204.44 630.148 1190.94 638.673C1177.46 647.186 1158.75 652.5 1138 652.5C1117.25 652.5 1098.54 647.186 1085.06 638.673C1071.56 630.148 1063.5 618.559 1063.5 606C1063.5 593.441 1071.56 581.852 1085.06 573.327C1098.54 564.814 1117.25 559.5 1138 559.5C1158.75 559.5 1177.46 564.814 1190.94 573.327C1204.44 581.852 1212.5 593.441 1212.5 606Z"
                    stroke="#FF0000"
                    stroke-width="3"
                  />
                </g>
                <text
                  id="Room_2"
                  fill="black"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="580.318">Room</tspan>
                </text>
                <text
                  id="Only 5 rooms left at this hotel"
                  fill="#C40000"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="16"
                  font-weight="bold"
                  letter-spacing="0em"
                >
                  <tspan x="492" y="679.318">
                    Only 5 rooms left at this hotel
                  </tspan>
                </text>
                <g id="Group 4_3">
                  <rect
                    id="Rectangle 8_2"
                    x="1000"
                    y="645"
                    width="187"
                    height="37"
                    fill="#163890"
                  />
                  <text
                    id="Check Availability_2"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Inter"
                    font-size="16"
                    letter-spacing="0em"
                  >
                    <tspan x="1027.21" y="669.318">Check Availability</tspan>
                  </text>
                </g>
              </g>
            </g>
          </g>
          <g id="hotel-details-page">
            <g id="Desktop - 1_3">
              <rect
                width="1440"
                height="1310"
                transform="translate(0 81)"
                fill="white"
              />
              <rect
                id="Rectangle 1_3"
                y="81"
                width="1440"
                height="176"
                fill="#163890"
              />
              <text
                id="Hotel Booking_3"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="24"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="287" y="132.227">Hotel Booking</tspan>
              </text>
              <g id="Group 1_3">
                <rect
                  id="Rectangle 2_5"
                  x="980"
                  y="103"
                  width="104.543"
                  height="42.358"
                  fill="white"
                />
                <text
                  id="Register_3"
                  fill="#163890"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="18"
                  letter-spacing="0em"
                >
                  <tspan x="997.564" y="131.36">Register</tspan>
                </text>
              </g>
              <g id="Group 2_3">
                <rect
                  id="Rectangle 2_6"
                  x="1094.46"
                  y="103"
                  width="104.543"
                  height="42.358"
                  fill="white"
                />
                <text
                  id="Sign in_3"
                  fill="#163890"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="18"
                  letter-spacing="0em"
                >
                  <tspan x="1118.53" y="131.36">Sign in</tspan>
                </text>
              </g>
              <rect
                id="Rectangle 3_3"
                x="286"
                y="196"
                width="579"
                height="49"
                fill="white"
              />
              <text
                id="Apollo_4"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                letter-spacing="0em"
              >
                <tspan x="304" y="225.318">Apollo</tspan>
              </text>
              <g id="Group 3_3">
                <rect
                  id="Rectangle 4_3"
                  x="870"
                  y="196"
                  width="210"
                  height="49"
                  fill="white"
                />
                <line
                  id="Line 1_3"
                  x1="973.5"
                  y1="200"
                  x2="973.5"
                  y2="241"
                  stroke="#C7C7C7"
                />
                <text
                  id="Mon, 12 Sept"
                  fill="black"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="12"
                  letter-spacing="0em"
                >
                  <tspan x="887.439" y="225.864">Mon, 12 Sept</tspan>
                </text>
                <text
                  id="Fri, 14 Sept"
                  fill="black"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Inter"
                  font-size="12"
                  letter-spacing="0em"
                >
                  <tspan x="994.508" y="225.864">Fri, 14 Sept</tspan>
                </text>
              </g>
              <text
                id="Location_3"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                letter-spacing="0em"
              >
                <tspan x="287" y="187.318">Location</tspan>
              </text>
              <text
                id="Dates_3"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                letter-spacing="0em"
              >
                <tspan x="870" y="188.318">Dates</tspan>
              </text>
              <rect
                id="Rectangle 5_3"
                x="1085"
                y="196"
                width="114"
                height="49"
                fill="#2B73FF"
              />
              <text
                id="Search_3"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="16"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="1114" y="226.318">Search</tspan>
              </text>
            </g>
            <text
              id="Date"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="309.17" y="844.864">Date</tspan>
            </text>
            <text
              id="Adults"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="12"
              letter-spacing="0em"
            >
              <tspan x="536.053" y="830.864">Adults</tspan>
            </text>
            <g id="Group 5">
              <rect
                id="Rectangle 4_4"
                x="309.5"
                y="853.5"
                width="209"
                height="48"
                fill="white"
                stroke="#D3D3D3"
              />
              <line
                id="Line 1_4"
                x1="412.5"
                y1="857"
                x2="412.5"
                y2="898"
                stroke="#C7C7C7"
              />
              <text
                id="Mon, 12 Sept_2"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="12"
                letter-spacing="0em"
              >
                <tspan x="326.439" y="882.864">Mon, 12 Sept</tspan>
              </text>
              <text
                id="Fri, 14 Sept_2"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="12"
                letter-spacing="0em"
              >
                <tspan x="433.508" y="882.864">Fri, 14 Sept</tspan>
              </text>
            </g>
            <text
              id="Apollo Panorama Guesthouse_2"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="25"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="309" y="305.091">Apollo Panorama Guesthouse</tspan>
            </text>
            <text
              id="Availability"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="25"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="309" y="804.091">Availability</tspan>
            </text>
            <text
              id="2 Tuxion Road, 3233 Apollo Bay, Australia_2"
              fill="#8D8D8D"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              letter-spacing="0em"
            >
              <tspan x="309" y="334.318">
                2 Tuxion Road, 3233 Apollo Bay, Australia
              </tspan>
            </text>
            <g id="Frame 58" clip-path="url(#clip12_0_1)">
              <rect
                id="pexels-thorsten-technoman-338504 2_2"
                x="95"
                y="279"
                width="450"
                height="300"
                fill="url(#pattern12)"
              />
            </g>
            <g id="Frame 57" clip-path="url(#clip13_0_1)">
              <rect
                id="pexels-donald-tong-189296 2_3"
                x="408"
                y="292"
                width="449.945"
                height="300"
                fill="url(#pattern13)"
              />
            </g>
            <g id="Frame 56" clip-path="url(#clip14_0_1)">
              <rect
                id="pexels-pixabay-258154 2_3"
                x="519"
                y="307"
                width="600"
                height="300"
                fill="url(#pattern14)"
              />
            </g>
            <g id="Frame 55" clip-path="url(#clip15_0_1)">
              <rect
                id="pexels-pixabay-261102 2_2"
                x="911"
                y="321"
                width="449.451"
                height="300"
                fill="url(#pattern15)"
              />
            </g>
            <g id="Group 7">
              <rect
                id="Rectangle 17"
                x="522.5"
                y="853.5"
                width="50"
                height="48"
                fill="white"
                stroke="#DEDEDE"
              />
              <text
                id="2"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="12"
                letter-spacing="0em"
              >
                <tspan x="544.367" y="882.864">2</tspan>
              </text>
            </g>
            <g id="Group 6">
              <rect
                id="Rectangle 18"
                x="576"
                y="853"
                width="109"
                height="48"
                fill="#163890"
              />
              <text
                id="Apply"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="12"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="613.268" y="882.864">Apply</tspan>
              </text>
            </g>
            <rect
              id="Rectangle 20"
              x="822.5"
              y="968.5"
              width="92"
              height="121"
              fill="white"
              stroke="#C8C8C8"
            />
            <rect
              id="Rectangle 21"
              x="915.5"
              y="968.5"
              width="142"
              height="121"
              fill="white"
              stroke="#C8C8C8"
            />
            <rect
              id="Rectangle 22"
              x="1058.5"
              y="968.5"
              width="154"
              height="121"
              fill="white"
              stroke="#C8C8C8"
            />
            <rect
              id="Rectangle 23"
              x="309"
              y="935"
              width="904"
              height="33"
              fill="#383838"
            />
            <g id="Group 20">
              <text
                id="room-details-budget-double-room-price"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="18"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="947.151" y="1037.55">{{ hotelListPrice[0] }}</tspan>
              </text>
              <path
                id="room-details-budget-double-room-price-highlight"
                class="hotel-details-highlight"
                d="M1059.5 1033C1059.5 1042.36 1052.08 1051.22 1039.23 1057.83C1026.45 1064.39 1008.69 1068.5 989 1068.5C969.306 1068.5 951.551 1064.39 938.774 1057.83C925.919 1051.22 918.5 1042.36 918.5 1033C918.5 1023.64 925.919 1014.78 938.774 1008.17C951.551 1001.61 969.306 997.5 989 997.5C1008.69 997.5 1026.45 1001.61 1039.23 1008.17C1052.08 1014.78 1059.5 1023.64 1059.5 1033Z"
                stroke="#FF0000"
                stroke-width="3"
              />
            </g>
            <rect
              id="Rectangle 19"
              x="309.5"
              y="968.5"
              width="512"
              height="121"
              fill="white"
              stroke="#C8C8C8"
            />
            <text
              id="1 queen bed_2"
              fill="#9F9F9F"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              letter-spacing="0em"
            >
              <tspan x="324.172" y="1022.32">1 queen bed</tspan>
            </text>
            <text
              id="Private Bathroom &#226;&#128;&#162; Air conditioning"
              fill="#9F9F9F"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              letter-spacing="0em"
            >
              <tspan x="324" y="1067.32">
                Private Bathroom &#x2022; Air conditioning
              </tspan>
            </text>
            <text
              id="Offering a sun terrace and views of the sea, Apollo Panorama is located 0.6 mi from Apollo Bay center and 22 mi from Lorne. This stunning open plan cedar style home, features exposed Otway timber beams with extensive balconies. There is an open plan kitchen dining and lounge area with uninterupted views of the ocean, harbor and Apollo bay township. Apollo Panorama features free WiFi and free parking. There is a shared kitchen at the property. Couples in particular like the location &#226;&#128;&#147; they rated it 9.0 for a two-person trip."
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              letter-spacing="0em"
            >
              <tspan x="309" y="607.318">
                Offering a sun terrace and views of the sea, Apollo Panorama is
                located 0.6 mi from Apollo Bay center and 22 mi from
              </tspan>
              <tspan x="309" y="626.318">Lorne.&#13;&#10;</tspan>
              <tspan x="309" y="645.318">&#13;&#10;</tspan>
              <tspan x="309" y="664.318">
                This stunning open plan cedar style home, features exposed Otway
                timber beams with extensive balconies. There is an
              </tspan>
              <tspan x="309" y="683.318">
                open plan kitchen dining and lounge area with uninterupted views
                of the ocean, harbor and Apollo bay township.&#13;&#10;
              </tspan>
              <tspan x="309" y="702.318">&#13;&#10;</tspan>
              <tspan x="309" y="721.318">
                Apollo Panorama features free WiFi and free parking. There is a
                shared kitchen at the property.&#13;&#10;
              </tspan>
              <tspan x="309" y="740.318">&#13;&#10;</tspan>
              <tspan x="309" y="759.318">
                Couples in particular like the location &#x2013; they rated it
                9.0 for a two-person trip.
              </tspan>
            </text>
            <text
              id="Room Type"
              fill="white"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="320" y="957.318">Room Type</tspan>
            </text>
            <text
              id="Adults_2"
              fill="white"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="822" y="957.318">Adults</tspan>
            </text>
            <text
              id="Price"
              fill="white"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="915" y="957.318">Price</tspan>
            </text>
            <text
              id="Select amount"
              fill="white"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="1058" y="957.318">Select amount</tspan>
            </text>
            <text
              id="Budget Double Room"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="18"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="322" y="997.545">Budget Double Room</tspan>
            </text>
            <text
              id="2_2"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="18"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="863.331" y="1037.55">2</tspan>
            </text>
            <rect
              id="Rectangle 27"
              x="822.5"
              y="1087.5"
              width="92"
              height="143"
              fill="white"
              stroke="#C8C8C8"
            />
            <rect
              id="Rectangle 28"
              x="915.5"
              y="1087.5"
              width="142"
              height="143"
              fill="white"
              stroke="#C8C8C8"
            />
            <rect
              id="Rectangle 29"
              x="1058.5"
              y="1087.5"
              width="154"
              height="143"
              fill="white"
              stroke="#C8C8C8"
            />
            <g id="Group 21">
              <text
                id="room-details-deluxe-room-sea-view-price"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="18"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="947.222" y="1166.55">AUD 670</tspan>
              </text>
              <path
                id="room-details-deluxe-room-sea-view-price-highlight"
                class="hotel-details-highlight"
                d="M1057.5 1158C1057.5 1167.36 1050.08 1176.22 1037.23 1182.83C1024.45 1189.39 1006.69 1193.5 987 1193.5C967.306 1193.5 949.551 1189.39 936.774 1182.83C923.919 1176.22 916.5 1167.36 916.5 1158C916.5 1148.64 923.919 1139.78 936.774 1133.17C949.551 1126.61 967.306 1122.5 987 1122.5C1006.69 1122.5 1024.45 1126.61 1037.23 1133.17C1050.08 1139.78 1057.5 1148.64 1057.5 1158Z"
                stroke="#FF0000"
                stroke-width="3"
              />
            </g>
            <text
              id="3"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="18"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="863.067" y="1166.55">3</tspan>
            </text>
            <g id="Group 9">
              <rect
                id="Rectangle 26"
                x="1077.5"
                y="1015.1"
                width="116"
                height="27.8056"
                fill="white"
                stroke="#D9D9D9"
              />
              <text
                id="1"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="18"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="1089.1" y="1037.23">1</tspan>
              </text>
              <path
                id="Arrow 1"
                d="M1172.94 1035.99C1173.53 1036.58 1174.47 1036.58 1175.06 1035.99L1184.61 1026.45C1185.19 1025.86 1185.19 1024.91 1184.61 1024.32C1184.02 1023.74 1183.07 1023.74 1182.49 1024.32L1174 1032.81L1165.51 1024.32C1164.93 1023.74 1163.98 1023.74 1163.39 1024.32C1162.81 1024.91 1162.81 1025.86 1163.39 1026.45L1172.94 1035.99ZM1172.5 1032.81V1034.93H1175.5V1032.81H1172.5Z"
                fill="#6E6E6E"
              />
            </g>
            <g id="Group 10">
              <rect
                id="Rectangle 30"
                x="1077.5"
                y="1142.5"
                width="116"
                height="33"
                fill="white"
                stroke="#D9D9D9"
              />
              <text
                id="0"
                fill="black"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Inter"
                font-size="18"
                font-weight="bold"
                letter-spacing="0em"
              >
                <tspan x="1085.3" y="1166.55">0</tspan>
              </text>
              <path
                id="Arrow 2"
                d="M1172.94 1167.56C1173.53 1168.15 1174.47 1168.15 1175.06 1167.56L1184.61 1158.01C1185.19 1157.43 1185.19 1156.48 1184.61 1155.89C1184.02 1155.31 1183.07 1155.31 1182.49 1155.89L1174 1164.38L1165.51 1155.89C1164.93 1155.31 1163.98 1155.31 1163.39 1155.89C1162.81 1156.48 1162.81 1157.43 1163.39 1158.01L1172.94 1167.56ZM1172.5 1164V1166.5H1175.5V1164H1172.5Z"
                fill="#6E6E6E"
              />
            </g>
            <line
              id="Line 2"
              x1="320"
              y1="1040.5"
              x2="808"
              y2="1040.5"
              stroke="#DDDDDD"
            />
            <rect
              id="Rectangle 31"
              x="309.5"
              y="1087.5"
              width="512"
              height="143"
              fill="white"
              stroke="#C8C8C8"
            />
            <text
              id="1 queen bed, 1 single bed"
              fill="#9F9F9F"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="16"
              letter-spacing="0em"
            >
              <tspan x="321" y="1141.32">1 queen bed, 1 single bed</tspan>
            </text>
            <text
              id="Deluxe Room with Sea View"
              fill="black"
              xml:space="preserve"
              style="white-space: pre"
              font-family="Inter"
              font-size="18"
              font-weight="bold"
              letter-spacing="0em"
            >
              <tspan x="322" y="1116.55">Deluxe Room with Sea View</tspan>
            </text>
          </g>
          <g id="pricinger-extension-popup" filter="url(#filter0_d_0_1)">
            <rect
              x="1155"
              y="81"
              width="224"
              height="334"
              rx="5"
              fill="white"
              shape-rendering="crispEdges"
            />
            <g id="Group 12">
              <text
                id="pricinger"
                fill="#2B5071"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Pacifico"
                font-size="32"
                letter-spacing="0.2px"
              >
                <tspan x="1236.15" y="134.6">pricinger</tspan>
              </text>
              <rect
                id="output-onlinepngtools 1"
                x="1179"
                y="105"
                width="44"
                height="44"
                fill="url(#pattern16)"
              />
            </g>
            <g id="pricinger-switch-on-off-button">
              <path
                d="M1286.66 189.23C1286.15 188.945 1285.54 188.78 1284.88 188.78C1282.81 188.78 1281.13 190.46 1281.13 192.53C1281.13 193.943 1281.92 195.176 1283.07 195.812L1283.09 195.821C1293.69 201.653 1300.75 212.747 1300.75 225.491C1300.75 244.13 1285.64 259.241 1267 259.241C1248.36 259.241 1233.25 244.13 1233.25 225.491C1233.25 212.792 1240.26 201.731 1250.63 195.971L1250.8 195.884C1251.97 195.233 1252.74 194.006 1252.74 192.596C1252.74 190.526 1251.07 188.846 1249 188.846C1248.34 188.846 1247.72 189.017 1247.18 189.317L1247.19 189.308C1234.32 196.457 1225.75 209.972 1225.75 225.488C1225.75 248.267 1244.22 266.735 1267 266.735C1289.78 266.735 1308.25 248.267 1308.25 225.488C1308.25 209.912 1299.62 196.355 1286.87 189.335L1286.66 189.227L1286.66 189.23ZM1266.85 218.837C1268.92 218.837 1270.6 217.157 1270.6 215.087V179C1270.6 176.93 1268.92 175.25 1266.85 175.25C1264.78 175.25 1263.1 176.93 1263.1 179V215.087C1263.1 217.157 1264.78 218.837 1266.85 218.837Z"
                fill="#2B5071"
              />
            </g>
            <g id="pricinger-optimize-button">
              <rect
                x="1197"
                y="293"
                width="140"
                height="42"
                rx="5"
                fill="#2B5071"
              />
              <text
                id="h3"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Montserrat"
                font-size="16"
                font-weight="bold"
                letter-spacing="0.1px"
              >
                <tspan x="1225.7" y="319.736">OPTIMIZE</tspan>
              </text>
            </g>
            <g id="pricinger-settings-button">
              <text
                id="Settings"
                fill="#2B5071"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Montserrat"
                font-size="16"
                font-weight="bold"
                letter-spacing="0.1px"
              >
                <tspan x="1242.74" y="380.736">SETTINGS</tspan>
              </text>
              <g id="pricinger-settings-button-icon">
                <path
                  id="Vector"
                  d="M1221.44 365.667V363.333C1220.15 363.333 1219.11 364.378 1219.11 365.667H1221.44ZM1221.44 367.573V365.667H1219.11V367.573H1221.44ZM1219.37 370.15C1219.58 370.008 1219.8 369.879 1220.03 369.765L1219 367.672C1218.68 367.832 1218.37 368.012 1218.07 368.212L1219.37 370.15ZM1215.11 369.323L1216.76 370.277L1217.93 368.256L1216.28 367.302L1215.11 369.323ZM1215.11 369.323L1216.28 367.302C1215.16 366.658 1213.73 367.04 1213.09 368.156L1215.11 369.323ZM1213.94 371.344L1215.11 369.323L1213.09 368.156L1211.92 370.177L1213.94 371.344ZM1213.94 371.344L1211.92 370.177C1211.28 371.293 1211.66 372.72 1212.78 373.364L1213.94 371.344ZM1215.6 372.298L1213.94 371.344L1212.78 373.364L1214.43 374.319L1215.6 372.298ZM1216.78 375C1216.78 374.87 1216.78 374.741 1216.79 374.613L1214.46 374.462C1214.45 374.64 1214.44 374.819 1214.44 375H1216.78ZM1216.79 375.387C1216.78 375.259 1216.78 375.13 1216.78 375H1214.44C1214.44 375.181 1214.45 375.36 1214.46 375.538L1216.79 375.387ZM1213.94 378.656L1215.6 377.702L1214.43 375.681L1212.78 376.636L1213.94 378.656ZM1213.94 378.656L1212.78 376.636C1211.66 377.28 1211.28 378.707 1211.92 379.823L1213.94 378.656ZM1215.11 380.677L1213.94 378.656L1211.92 379.823L1213.09 381.844L1215.11 380.677ZM1215.11 380.677L1213.09 381.844C1213.73 382.96 1215.16 383.342 1216.28 382.698L1215.11 380.677ZM1216.76 379.723L1215.11 380.677L1216.28 382.698L1217.93 381.744L1216.76 379.723ZM1220.03 380.235C1219.8 380.121 1219.58 379.993 1219.37 379.85L1218.07 381.788C1218.37 381.988 1218.68 382.168 1219 382.328L1220.03 380.235ZM1221.44 384.333V382.427H1219.11V384.333H1221.44ZM1221.44 384.333H1219.11C1219.11 385.622 1220.15 386.667 1221.44 386.667V384.333ZM1223.78 384.333H1221.44V386.667H1223.78V384.333ZM1223.78 384.333V386.667C1225.06 386.667 1226.11 385.622 1226.11 384.333H1223.78ZM1223.78 382.427V384.333H1226.11V382.427H1223.78ZM1225.85 379.85C1225.64 379.993 1225.42 380.121 1225.19 380.235L1226.22 382.328C1226.54 382.168 1226.85 381.988 1227.15 381.788L1225.85 379.85ZM1230.11 380.677L1228.46 379.723L1227.29 381.744L1228.94 382.698L1230.11 380.677ZM1230.11 380.677L1228.94 382.698C1230.06 383.342 1231.49 382.96 1232.13 381.844L1230.11 380.677ZM1231.28 378.656L1230.11 380.677L1232.13 381.844L1233.3 379.823L1231.28 378.656ZM1231.28 378.656L1233.3 379.823C1233.94 378.707 1233.56 377.28 1232.44 376.636L1231.28 378.656ZM1229.62 377.702L1231.28 378.656L1232.44 376.636L1230.79 375.681L1229.62 377.702ZM1228.44 375C1228.44 375.13 1228.44 375.259 1228.43 375.387L1230.76 375.538C1230.77 375.36 1230.78 375.181 1230.78 375H1228.44ZM1228.43 374.613C1228.44 374.741 1228.44 374.87 1228.44 375H1230.78C1230.78 374.819 1230.77 374.64 1230.76 374.462L1228.43 374.613ZM1231.28 371.344L1229.62 372.298L1230.79 374.319L1232.44 373.364L1231.28 371.344ZM1231.28 371.344L1232.44 373.364C1233.56 372.72 1233.94 371.293 1233.3 370.177L1231.28 371.344ZM1230.11 369.323L1231.28 371.344L1233.3 370.177L1232.13 368.156L1230.11 369.323ZM1230.11 369.323L1232.13 368.156C1231.49 367.04 1230.06 366.658 1228.94 367.302L1230.11 369.323ZM1228.46 370.277L1230.11 369.323L1228.94 367.302L1227.29 368.256L1228.46 370.277ZM1225.19 369.765C1225.42 369.879 1225.64 370.008 1225.85 370.15L1227.15 368.212C1226.85 368.012 1226.54 367.832 1226.22 367.672L1225.19 369.765ZM1223.78 365.667V367.573H1226.11V365.667H1223.78ZM1223.78 365.667H1226.11C1226.11 364.378 1225.06 363.333 1223.78 363.333V365.667ZM1221.44 365.667H1223.78V363.333H1221.44V365.667ZM1226.22 367.672C1226.17 367.648 1226.14 367.616 1226.12 367.592C1226.11 367.571 1226.11 367.566 1226.11 367.573H1223.78C1223.78 368.587 1224.42 369.385 1225.19 369.765L1226.22 367.672ZM1227.29 368.256C1227.3 368.253 1227.29 368.258 1227.27 368.256C1227.24 368.254 1227.2 368.242 1227.15 368.212L1225.85 370.15C1226.57 370.629 1227.58 370.784 1228.46 370.277L1227.29 368.256ZM1230.76 374.462C1230.76 374.407 1230.77 374.363 1230.78 374.337C1230.79 374.315 1230.8 374.315 1230.79 374.319L1229.62 372.298C1228.75 372.804 1228.37 373.757 1228.43 374.613L1230.76 374.462ZM1227.15 381.788C1227.2 381.758 1227.24 381.746 1227.27 381.744C1227.29 381.742 1227.3 381.747 1227.29 381.744L1228.46 379.723C1227.58 379.216 1226.57 379.371 1225.85 379.85L1227.15 381.788ZM1230.79 375.681C1230.8 375.685 1230.79 375.685 1230.78 375.663C1230.77 375.637 1230.76 375.593 1230.76 375.538L1228.43 375.387C1228.37 376.243 1228.75 377.196 1229.62 377.702L1230.79 375.681ZM1219 382.328C1219.05 382.352 1219.08 382.384 1219.1 382.408C1219.11 382.429 1219.11 382.434 1219.11 382.427H1221.44C1221.44 381.413 1220.8 380.615 1220.03 380.235L1219 382.328ZM1217.93 381.744C1217.92 381.747 1217.93 381.742 1217.95 381.744C1217.98 381.746 1218.02 381.758 1218.07 381.788L1219.37 379.85C1218.65 379.371 1217.64 379.216 1216.76 379.723L1217.93 381.744ZM1226.11 382.427C1226.11 382.434 1226.11 382.429 1226.12 382.408C1226.14 382.384 1226.17 382.352 1226.22 382.328L1225.19 380.235C1224.42 380.615 1223.78 381.413 1223.78 382.427H1226.11ZM1214.46 375.538C1214.46 375.593 1214.45 375.637 1214.44 375.663C1214.43 375.685 1214.42 375.685 1214.43 375.681L1215.6 377.702C1216.47 377.196 1216.84 376.243 1216.79 375.387L1214.46 375.538ZM1214.43 374.319C1214.42 374.315 1214.43 374.315 1214.44 374.337C1214.45 374.363 1214.46 374.407 1214.46 374.462L1216.79 374.613C1216.84 373.757 1216.47 372.804 1215.6 372.298L1214.43 374.319ZM1218.07 368.212C1218.02 368.242 1217.98 368.254 1217.95 368.256C1217.93 368.258 1217.92 368.253 1217.93 368.256L1216.76 370.277C1217.64 370.784 1218.65 370.629 1219.37 370.15L1218.07 368.212ZM1219.11 367.573C1219.11 367.566 1219.11 367.571 1219.1 367.592C1219.08 367.616 1219.05 367.648 1219 367.672L1220.03 369.765C1220.8 369.385 1221.44 368.587 1221.44 367.573H1219.11Z"
                  fill="#2B5071"
                />
                <path
                  id="Vector_2"
                  d="M1222.61 378.5C1224.54 378.5 1226.11 376.933 1226.11 375C1226.11 373.067 1224.54 371.5 1222.61 371.5C1220.68 371.5 1219.11 373.067 1219.11 375C1219.11 376.933 1220.68 378.5 1222.61 378.5Z"
                  stroke="#2B5071"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </g>
          <g id="optimize-settings-tooltip">
            <g id="Tooltip - Master (Auto Layout)">
              <g id="tooltip wrapper">
                <rect
                  x="1155.5"
                  y="343.5"
                  width="223"
                  height="131.001"
                  rx="3.5"
                  fill="#2B5071"
                />
                <g id="beak - top">
                  <g id="beak container - top">
                    <path
                      id="beak - top border"
                      d="M1259 343L1275 343L1267 335L1259 343Z"
                      fill="#2B5071"
                    />
                    <path
                      id="beak - top_2"
                      d="M1259 344.5L1275 344.5L1267 336.5L1259 344.5Z"
                      fill="#2B5071"
                    />
                  </g>
                </g>
                <g id="beak + bubble + beak">
                  <g id="bubble">
                    <g id="tooltip content">
                      <text
                        id="Optimizes settings"
                        transform="translate(1159 351.001)"
                        fill="white"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="14"
                        font-weight="500"
                        letter-spacing="0em"
                      >
                        <tspan x="45.8154" y="13.019">Optimizes settings</tspan>
                      </text>
                      <text
                        id="Provides settings from our cloud that provide you with the best possible rates for this website by crawling this page in real time using different locations and browsers."
                        transform="translate(1159 371.001)"
                        fill="white"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="13"
                        letter-spacing="0em"
                      >
                        <tspan x="1.39404" y="12.6605">
                          Provides settings from our cloud
                        </tspan>
                        <tspan x="9.01758" y="28.6605">
                          that provide you with the best
                        </tspan>
                        <tspan x="2.16846" y="44.6605">
                          possible rates for this website by
                        </tspan>
                        <tspan x="8.89062" y="60.6605">
                          crawling this page in real time
                        </tspan>
                        <tspan x="13.8735" y="76.6605">
                          using different locations and
                        </tspan>
                        <tspan x="76.1694" y="92.6605">browsers.</tspan>
                      </text>
                    </g>
                  </g>
                </g>
                <rect
                  x="1155.5"
                  y="343.5"
                  width="223"
                  height="131.001"
                  rx="3.5"
                  stroke="#2B5071"
                />
              </g>
            </g>
          </g>
          <g id="switch-on-off-tooltip">
            <g id="Tooltip - Master (Auto Layout)_2">
              <g id="tooltip wrapper_2">
                <rect
                  x="1196.5"
                  y="274.5"
                  width="142"
                  height="31.001"
                  rx="3.5"
                  fill="#2B5071"
                />
                <g id="beak - top_3">
                  <g id="beak container - top_2">
                    <path
                      id="beak - top border_2"
                      d="M1259.5 274L1275.5 274L1267.5 266L1259.5 274Z"
                      fill="#2B5071"
                    />
                    <path
                      id="beak - top_4"
                      d="M1259.5 275.5L1275.5 275.5L1267.5 267.5L1259.5 275.5Z"
                      fill="#2B5071"
                    />
                  </g>
                </g>
                <g id="beak + bubble + beak_2">
                  <g id="bubble_2">
                    <g id="tooltip content_2">
                      <text
                        id="Switch on"
                        transform="translate(1200 282.001)"
                        fill="white"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="14"
                        font-weight="500"
                        letter-spacing="0em"
                      >
                        <tspan x="32.3906" y="13.019">
                          {{ pricingerSwitchStateTooltip }}
                        </tspan>
                      </text>
                    </g>
                  </g>
                </g>
                <rect
                  x="1196.5"
                  y="274.5"
                  width="142"
                  height="31.001"
                  rx="3.5"
                  stroke="#2B5071"
                />
              </g>
            </g>
          </g>
          <g id="pricinger-window">
            <rect
              width="1440"
              height="1080"
              transform="translate(0 81)"
              fill="#F5F5F5"
            />
            <g id="Frame 14">
              <g id="Group 14">
                <text
                  id="pricinger_2"
                  fill="#2B5071"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Pacifico"
                  font-size="48"
                  letter-spacing="0.2px"
                >
                  <tspan x="164.88" y="170.4">pricinger</tspan>
                </text>
                <rect
                  id="output-onlinepngtools 1_2"
                  x="62"
                  y="121"
                  width="80"
                  height="80"
                  fill="url(#pattern17)"
                />
              </g>
            </g>
            <g id="Frame 44">
              <g id="Frame 43">
                <g id="menu widget" filter="url(#filter1_d_0_1)">
                  <rect
                    x="62"
                    y="827"
                    width="400"
                    height="270"
                    rx="5"
                    fill="white"
                  />
                  <g id="list-title">
                    <text
                      id="h5"
                      fill="#2B5071"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="24"
                      font-weight="bold"
                      letter-spacing="0.1px"
                    >
                      <tspan x="86" y="871.604">IP address config</tspan>
                    </text>
                  </g>
                  <g id="Frame 32">
                    <text
                      id="h6"
                      fill="#2B5071"
                      fill-opacity="0.95"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="18"
                      font-weight="600"
                      letter-spacing="0.2px"
                    >
                      <tspan x="86" y="917.453">Set proxy location</tspan>
                    </text>
                    <g id="option">
                      <rect
                        x="86"
                        y="928"
                        width="352"
                        height="48"
                        rx="5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="selected-proxy-dropdown-value"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        letter-spacing="0.2px"
                      >
                        <tspan x="104" y="957.736">
                          <tspan>{{ selectedConfig.proxy }}</tspan>
                        </tspan>
                      </text>
                      <path
                        id="selected-proxy-dropdown-arrow"
                        d="M396.992 948L401.992 953L406.992 948L408.992 949L401.992 956L394.992 949L396.992 948Z"
                        fill="#737373"
                      />
                      <rect
                        x="86.5"
                        y="928.5"
                        width="351"
                        height="47"
                        rx="4.5"
                        stroke="#2B5071"
                        stroke-opacity="0.25"
                      />
                    </g>
                  </g>
                  <rect
                    x="62.5"
                    y="827.5"
                    width="399"
                    height="269"
                    rx="4.5"
                    stroke="#E8E8E8"
                  />
                </g>
                <g id="menu widget_2" filter="url(#filter2_d_0_1)">
                  <rect
                    x="520"
                    y="827"
                    width="400"
                    height="270"
                    rx="5"
                    fill="white"
                  />
                  <g id="list-title_2">
                    <text
                      id="h5_2"
                      fill="#2B5071"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="24"
                      font-weight="bold"
                      letter-spacing="0.1px"
                    >
                      <tspan x="544" y="871.604">User agent config</tspan>
                    </text>
                  </g>
                  <g id="Frame 32_2">
                    <text
                      id="h6_2"
                      fill="#2B5071"
                      fill-opacity="0.95"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="18"
                      font-weight="600"
                      letter-spacing="0.2px"
                    >
                      <tspan x="544" y="917.453">Switch browser</tspan>
                    </text>
                    <g id="option_2">
                      <rect
                        x="544"
                        y="928"
                        width="352"
                        height="48"
                        rx="5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="selected-browser-dropdown-value"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        letter-spacing="0.2px"
                      >
                        <tspan x="562" y="957.736">
                          {{ selectedConfig.browser }}
                        </tspan>
                      </text>
                      <path
                        id="select-browser-dropdown-arrow"
                        d="M854.992 948L859.992 953L864.992 948L866.992 949L859.992 956L852.992 949L854.992 948Z"
                        fill="#737373"
                      />
                      <rect
                        x="544.5"
                        y="928.5"
                        width="351"
                        height="47"
                        rx="4.5"
                        stroke="#2B5071"
                        stroke-opacity="0.25"
                      />
                    </g>
                  </g>
                  <g id="Frame 33">
                    <text
                      id="h6_3"
                      fill="#2B5071"
                      fill-opacity="0.95"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="18"
                      font-weight="600"
                      letter-spacing="0.2px"
                    >
                      <tspan x="544" y="1014.45">Switch OS</tspan>
                    </text>
                    <g id="option_3">
                      <rect
                        x="544"
                        y="1025"
                        width="352"
                        height="48"
                        rx="5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="selected-os-dropdown-value"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        letter-spacing="0.2px"
                      >
                        <tspan x="562" y="1054.74">
                          <tspan>{{ selectedConfig.os }}</tspan>
                        </tspan>
                      </text>
                      <path
                        id="selected-os-dropdown-arrow"
                        d="M854.992 1045L859.992 1050L864.992 1045L866.992 1046L859.992 1053L852.992 1046L854.992 1045Z"
                        fill="#737373"
                      />
                      <rect
                        x="544.5"
                        y="1025.5"
                        width="351"
                        height="47"
                        rx="4.5"
                        stroke="#2B5071"
                        stroke-opacity="0.25"
                      />
                    </g>
                  </g>
                  <rect
                    x="520.5"
                    y="827.5"
                    width="399"
                    height="269"
                    rx="4.5"
                    stroke="#E8E8E8"
                  />
                </g>
              </g>
              <g id="Frame 15">
                <g id="menu widget_3" filter="url(#filter3_d_0_1)">
                  <rect
                    x="978"
                    y="517"
                    width="400"
                    height="294"
                    rx="5"
                    fill="white"
                  />
                  <g id="list-title_3">
                    <text
                      id="h5_3"
                      fill="#2B5071"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="24"
                      font-weight="bold"
                      letter-spacing="0.1px"
                    >
                      <tspan x="1002" y="561.604">Storage settings</tspan>
                    </text>
                  </g>
                  <g id="List">
                    <g id="list-item">
                      <g id="custom-checkbox">
                        <text
                          id="clear-local-storage-text"
                          class="storage-text optimize-on-text"
                          fill="#737373"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                        >
                          <tspan x="1042" y="608.453">
                            <tspan>Clear local storage</tspan>
                          </tspan>
                        </text>
                        <g id="clear-local-storage-checkbox" class="checkbox">
                          <rect
                            x="1003"
                            y="591"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill checkbox-storage optimize-on-cb"
                          />
                          <g id="bi:check" clip-path="url(#clip16_0_1)">
                            <g id="Group">
                              <path
                                id="Vector_3"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1019.85 598.646C1019.9 598.692 1019.94 598.748 1019.96 598.808C1019.99 598.869 1020 598.934 1020 599C1020 599.066 1019.99 599.131 1019.96 599.192C1019.94 599.252 1019.9 599.308 1019.85 599.354L1012.85 606.354C1012.81 606.401 1012.75 606.438 1012.69 606.463C1012.63 606.488 1012.57 606.501 1012.5 606.501C1012.43 606.501 1012.37 606.488 1012.31 606.463C1012.25 606.438 1012.19 606.401 1012.15 606.354L1008.65 602.854C1008.55 602.76 1008.5 602.633 1008.5 602.5C1008.5 602.367 1008.55 602.24 1008.65 602.146C1008.74 602.052 1008.87 601.999 1009 601.999C1009.13 601.999 1009.26 602.052 1009.35 602.146L1012.5 605.293L1019.15 598.646C1019.19 598.599 1019.25 598.562 1019.31 598.537C1019.37 598.512 1019.43 598.499 1019.5 598.499C1019.57 598.499 1019.63 598.512 1019.69 598.537C1019.75 598.562 1019.81 598.599 1019.85 598.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="1003"
                            y="591"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_2">
                      <g id="custom-checkbox_2">
                        <text
                          id="clear-session-storage-text"
                          class="storage-text optimize-on-text"
                          fill="#252B42"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                        >
                          <tspan x="1042" y="651.453">
                            <tspan>Clear session storage</tspan>
                          </tspan>
                        </text>
                        <g id="clear-session-storage-checkbox" class="checkbox">
                          <rect
                            x="1003"
                            y="634"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill checkbox-storage optimize-on-cb"
                          />
                          <g id="bi:check_2" clip-path="url(#clip17_0_1)">
                            <g id="Group_2">
                              <path
                                id="Vector_4"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1019.85 641.646C1019.9 641.692 1019.94 641.748 1019.96 641.808C1019.99 641.869 1020 641.934 1020 642C1020 642.066 1019.99 642.131 1019.96 642.192C1019.94 642.252 1019.9 642.308 1019.85 642.354L1012.85 649.354C1012.81 649.401 1012.75 649.438 1012.69 649.463C1012.63 649.488 1012.57 649.501 1012.5 649.501C1012.43 649.501 1012.37 649.488 1012.31 649.463C1012.25 649.438 1012.19 649.401 1012.15 649.354L1008.65 645.854C1008.55 645.76 1008.5 645.633 1008.5 645.5C1008.5 645.367 1008.55 645.24 1008.65 645.146C1008.74 645.052 1008.87 644.999 1009 644.999C1009.13 644.999 1009.26 645.052 1009.35 645.146L1012.5 648.293L1019.15 641.646C1019.19 641.599 1019.25 641.562 1019.31 641.537C1019.37 641.512 1019.43 641.499 1019.5 641.499C1019.57 641.499 1019.63 641.512 1019.69 641.537C1019.75 641.562 1019.81 641.599 1019.85 641.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="1003"
                            y="634"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_3">
                      <g id="custom-checkbox_3">
                        <text
                          id="clear-cache-text"
                          class="storage-text optimize-on-text"
                          fill="#737373"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                        >
                          <tspan x="1042" y="693.453">Clear cache</tspan>
                        </text>
                        <g id="clear-cache-checkbox" class="checkbox">
                          <rect
                            x="1003"
                            y="676"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill checkbox-storage optimize-on-cb"
                          />
                          <g id="bi:check_3" clip-path="url(#clip18_0_1)">
                            <g id="Group_3">
                              <path
                                id="Vector_5"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1019.85 683.646C1019.9 683.692 1019.94 683.748 1019.96 683.808C1019.99 683.869 1020 683.934 1020 684C1020 684.066 1019.99 684.131 1019.96 684.192C1019.94 684.252 1019.9 684.308 1019.85 684.354L1012.85 691.354C1012.81 691.401 1012.75 691.438 1012.69 691.463C1012.63 691.488 1012.57 691.501 1012.5 691.501C1012.43 691.501 1012.37 691.488 1012.31 691.463C1012.25 691.438 1012.19 691.401 1012.15 691.354L1008.65 687.854C1008.55 687.76 1008.5 687.633 1008.5 687.5C1008.5 687.367 1008.55 687.24 1008.65 687.146C1008.74 687.052 1008.87 686.999 1009 686.999C1009.13 686.999 1009.26 687.052 1009.35 687.146L1012.5 690.293L1019.15 683.646C1019.19 683.599 1019.25 683.562 1019.31 683.537C1019.37 683.512 1019.43 683.499 1019.5 683.499C1019.57 683.499 1019.63 683.512 1019.69 683.537C1019.75 683.562 1019.81 683.599 1019.85 683.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="1003"
                            y="676"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_4">
                      <g id="custom-checkbox_4">
                        <text
                          id="clear-cookies-text"
                          class="storage-text optimize-on-text"
                          fill="#252B42"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                        >
                          <tspan x="1042" y="735.453">Clear cookies</tspan>
                        </text>
                        <g id="clear-cookies-checkbox" class="checkbox">
                          <rect
                            x="1003"
                            y="719"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill checkbox-storage optimize-on-cb"
                          />
                          <g id="bi:check_4" clip-path="url(#clip19_0_1)">
                            <g id="Group_4">
                              <path
                                id="Vector_6"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1019.85 726.646C1019.9 726.692 1019.94 726.748 1019.96 726.808C1019.99 726.869 1020 726.934 1020 727C1020 727.066 1019.99 727.131 1019.96 727.192C1019.94 727.252 1019.9 727.308 1019.85 727.354L1012.85 734.354C1012.81 734.401 1012.75 734.437 1012.69 734.463C1012.63 734.488 1012.57 734.501 1012.5 734.501C1012.43 734.501 1012.37 734.488 1012.31 734.463C1012.25 734.437 1012.19 734.401 1012.15 734.354L1008.65 730.854C1008.55 730.76 1008.5 730.633 1008.5 730.5C1008.5 730.367 1008.55 730.24 1008.65 730.146C1008.74 730.052 1008.87 729.999 1009 729.999C1009.13 729.999 1009.26 730.052 1009.35 730.146L1012.5 733.293L1019.15 726.646C1019.19 726.599 1019.25 726.562 1019.31 726.537C1019.37 726.512 1019.43 726.499 1019.5 726.499C1019.57 726.499 1019.63 726.512 1019.69 726.537C1019.75 726.562 1019.81 726.599 1019.85 726.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="1003"
                            y="719"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_5">
                      <g id="custom-checkbox_5">
                        <text
                          id="clear-all-text"
                          class="storage-text optimize-on-text"
                          fill="#737373"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                        >
                          <tspan x="1042" y="778.453">
                            <tspan>Clear all of the above</tspan>
                          </tspan>
                        </text>
                        <g id="clear-all-checkbox" class="checkbox">
                          <rect
                            x="1003"
                            y="761"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill checkbox-storage optimize-on-cb"
                          />
                          <g id="bi:check_5" clip-path="url(#clip20_0_1)">
                            <g id="Group_5">
                              <path
                                id="Vector_7"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M1019.85 768.646C1019.9 768.692 1019.94 768.748 1019.96 768.808C1019.99 768.869 1020 768.934 1020 769C1020 769.066 1019.99 769.131 1019.96 769.192C1019.94 769.252 1019.9 769.308 1019.85 769.354L1012.85 776.354C1012.81 776.401 1012.75 776.437 1012.69 776.463C1012.63 776.488 1012.57 776.501 1012.5 776.501C1012.43 776.501 1012.37 776.488 1012.31 776.463C1012.25 776.437 1012.19 776.401 1012.15 776.354L1008.65 772.854C1008.55 772.76 1008.5 772.633 1008.5 772.5C1008.5 772.367 1008.55 772.24 1008.65 772.146C1008.74 772.052 1008.87 771.999 1009 771.999C1009.13 771.999 1009.26 772.052 1009.35 772.146L1012.5 775.293L1019.15 768.646C1019.19 768.599 1019.25 768.562 1019.31 768.537C1019.37 768.512 1019.43 768.499 1019.5 768.499C1019.57 768.499 1019.63 768.512 1019.69 768.537C1019.75 768.562 1019.81 768.599 1019.85 768.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="1003"
                            y="761"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <rect
                    x="978.5"
                    y="517.5"
                    width="399"
                    height="293"
                    rx="4.5"
                    stroke="#E8E8E8"
                  />
                </g>
                <g id="menu widget_4" filter="url(#filter4_d_0_1)">
                  <rect
                    x="520"
                    y="516"
                    width="400"
                    height="295"
                    rx="5"
                    fill="white"
                  />
                  <g id="list-title_4">
                    <text
                      id="h5_4"
                      fill="#2B5071"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="24"
                      font-weight="bold"
                      letter-spacing="0.1px"
                    >
                      <tspan x="544" y="560.604">Privacy settings</tspan>
                    </text>
                  </g>
                  <g id="List_2">
                    <g id="list-item_6">
                      <g id="custom-checkbox_6">
                        <text
                          id="block-ads-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="privacy-text optimize-on-text"
                        >
                          <tspan x="584" y="608.453">
                            <tspan>Block ads and trackers</tspan>
                          </tspan>
                        </text>
                        <g id="block-ads-checkbox" class="checkbox">
                          <rect
                            x="545"
                            y="590"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill optimize-on-cb"
                          />
                          <g id="bi:check_6">
                            <g id="Group_6">
                              <path
                                id="Vector_8"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M561.854 597.646C561.901 597.692 561.938 597.748 561.963 597.808C561.988 597.869 562.001 597.934 562.001 598C562.001 598.066 561.988 598.131 561.963 598.192C561.938 598.252 561.901 598.308 561.854 598.354L554.854 605.354C554.808 605.401 554.752 605.438 554.692 605.463C554.631 605.488 554.566 605.501 554.5 605.501C554.434 605.501 554.369 605.488 554.308 605.463C554.248 605.438 554.192 605.401 554.146 605.354L550.646 601.854C550.552 601.76 550.499 601.633 550.499 601.5C550.499 601.367 550.552 601.24 550.646 601.146C550.74 601.052 550.867 600.999 551 600.999C551.133 600.999 551.26 601.052 551.354 601.146L554.5 604.293L561.146 597.646C561.192 597.599 561.248 597.562 561.308 597.537C561.369 597.512 561.434 597.499 561.5 597.499C561.566 597.499 561.631 597.512 561.692 597.537C561.752 597.562 561.808 597.599 561.854 597.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="545"
                            y="590"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_7">
                      <g id="custom-checkbox_7">
                        <text
                          id="block-location-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="privacy-text optimize-on-text"
                        >
                          <tspan x="584" y="650.453">
                            <tspan>Block location access</tspan>
                          </tspan>
                        </text>
                        <g id="block-location-checkbox" class="checkbox">
                          <rect
                            x="545"
                            y="632"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill optimize-on-cb"
                          />
                          <g id="bi:check_7">
                            <g id="Group_7">
                              <path
                                id="Vector_9"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M561.854 639.646C561.901 639.692 561.938 639.748 561.963 639.808C561.988 639.869 562.001 639.934 562.001 640C562.001 640.066 561.988 640.131 561.963 640.192C561.938 640.252 561.901 640.308 561.854 640.354L554.854 647.354C554.808 647.401 554.752 647.438 554.692 647.463C554.631 647.488 554.566 647.501 554.5 647.501C554.434 647.501 554.369 647.488 554.308 647.463C554.248 647.438 554.192 647.401 554.146 647.354L550.646 643.854C550.552 643.76 550.499 643.633 550.499 643.5C550.499 643.367 550.552 643.24 550.646 643.146C550.74 643.052 550.867 642.999 551 642.999C551.133 642.999 551.26 643.052 551.354 643.146L554.5 646.293L561.146 639.646C561.192 639.599 561.248 639.562 561.308 639.537C561.369 639.512 561.434 639.499 561.5 639.499C561.566 639.499 561.631 639.512 561.692 639.537C561.752 639.562 561.808 639.599 561.854 639.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="545"
                            y="632"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_8">
                      <g id="custom-checkbox_8">
                        <text
                          id="disallow-cookies-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="privacy-text optimize-on-text"
                        >
                          <tspan x="584" y="692.453">Disallow Cookies</tspan>
                        </text>
                        <g id="disallow-cookies-checkbox" class="checkbox">
                          <rect
                            x="545"
                            y="675"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill optimize-on-cb"
                          />
                          <g id="bi:check_8">
                            <g id="Group_8">
                              <path
                                id="Vector_10"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M561.854 682.646C561.901 682.692 561.938 682.748 561.963 682.808C561.988 682.869 562.001 682.934 562.001 683C562.001 683.066 561.988 683.131 561.963 683.192C561.938 683.252 561.901 683.308 561.854 683.354L554.854 690.354C554.808 690.401 554.752 690.438 554.692 690.463C554.631 690.488 554.566 690.501 554.5 690.501C554.434 690.501 554.369 690.488 554.308 690.463C554.248 690.438 554.192 690.401 554.146 690.354L550.646 686.854C550.552 686.76 550.499 686.633 550.499 686.5C550.499 686.367 550.552 686.24 550.646 686.146C550.74 686.052 550.867 685.999 551 685.999C551.133 685.999 551.26 686.052 551.354 686.146L554.5 689.293L561.146 682.646C561.192 682.599 561.248 682.562 561.308 682.537C561.369 682.512 561.434 682.499 561.5 682.499C561.566 682.499 561.631 682.512 561.692 682.537C561.752 682.562 561.808 682.599 561.854 682.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="545"
                            y="675"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_9">
                      <g id="custom-checkbox_9">
                        <text
                          id="enable-dnt-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="privacy-text optimize-on-text"
                        >
                          <tspan x="584" y="736.453">
                            <tspan>Enable Do-Not-Track header</tspan>
                          </tspan>
                        </text>
                        <g id="enable-dnt-checkbox" class="checkbox">
                          <rect
                            x="545"
                            y="718"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill optimize-on-cb"
                          />
                          <g id="bi:check_9">
                            <g id="Group_9">
                              <path
                                id="Vector_11"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M561.854 725.646C561.901 725.692 561.938 725.748 561.963 725.808C561.988 725.869 562.001 725.934 562.001 726C562.001 726.066 561.988 726.131 561.963 726.192C561.938 726.252 561.901 726.308 561.854 726.354L554.854 733.354C554.808 733.401 554.752 733.437 554.692 733.463C554.631 733.488 554.566 733.501 554.5 733.501C554.434 733.501 554.369 733.488 554.308 733.463C554.248 733.437 554.192 733.401 554.146 733.354L550.646 729.854C550.552 729.76 550.499 729.633 550.499 729.5C550.499 729.367 550.552 729.24 550.646 729.146C550.74 729.052 550.867 728.999 551 728.999C551.133 728.999 551.26 729.052 551.354 729.146L554.5 732.293L561.146 725.646C561.192 725.599 561.248 725.562 561.308 725.537C561.369 725.512 561.434 725.499 561.5 725.499C561.566 725.499 561.631 725.512 561.692 725.537C561.752 725.562 561.808 725.599 561.854 725.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="545"
                            y="718"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_10">
                      <g id="custom-checkbox_10">
                        <text
                          id="enable-all-settings-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="privacy-text optimize-on-text"
                        >
                          <tspan x="584" y="779.453">Enable all settings</tspan>
                        </text>
                        <g id="enable-all-settings-checkbox" class="checkbox">
                          <rect
                            x="545"
                            y="761"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill optimize-on-cb"
                          />
                          <g id="bi:check_10">
                            <g id="Group_10">
                              <path
                                id="Vector_12"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M561.854 768.646C561.901 768.692 561.938 768.748 561.963 768.808C561.988 768.869 562.001 768.934 562.001 769C562.001 769.066 561.988 769.131 561.963 769.192C561.938 769.252 561.901 769.308 561.854 769.354L554.854 776.354C554.808 776.401 554.752 776.437 554.692 776.463C554.631 776.488 554.566 776.501 554.5 776.501C554.434 776.501 554.369 776.488 554.308 776.463C554.248 776.437 554.192 776.401 554.146 776.354L550.646 772.854C550.552 772.76 550.499 772.633 550.499 772.5C550.499 772.367 550.552 772.24 550.646 772.146C550.74 772.052 550.867 771.999 551 771.999C551.133 771.999 551.26 772.052 551.354 772.146L554.5 775.293L561.146 768.646C561.192 768.599 561.248 768.562 561.308 768.537C561.369 768.512 561.434 768.499 561.5 768.499C561.566 768.499 561.631 768.512 561.692 768.537C561.752 768.562 561.808 768.599 561.854 768.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="545"
                            y="761"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <rect
                    x="520.5"
                    y="516.5"
                    width="399"
                    height="294"
                    rx="4.5"
                    stroke="#E8E8E8"
                  />
                </g>
                <g id="menu widget_5" filter="url(#filter5_d_0_1)">
                  <rect
                    x="62"
                    y="517"
                    width="400"
                    height="294"
                    rx="5"
                    fill="white"
                  />
                  <g id="list-title_5">
                    <text
                      id="h5_5"
                      fill="#2B5071"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="24"
                      font-weight="bold"
                      letter-spacing="0.1px"
                    >
                      <tspan x="86" y="561.604">Browsing settings</tspan>
                    </text>
                  </g>
                  <g id="List_3">
                    <g id="list-item_11">
                      <g id="custom-checkbox_11">
                        <text
                          id="switch-ip-address-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="browsing-text optimize-on-text"
                        >
                          <tspan x="126" y="609.453">Switch IP address</tspan>
                        </text>
                        <g id="switch-ip-address-checkbox" class="checkbox">
                          <rect
                            x="87"
                            y="591"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill optimize-on-cb"
                          />
                          <g id="bi:check_11">
                            <g id="Group_11">
                              <path
                                id="Vector_13"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M103.854 598.646C103.901 598.692 103.938 598.748 103.963 598.808C103.988 598.869 104.001 598.934 104.001 599C104.001 599.066 103.988 599.131 103.963 599.192C103.938 599.252 103.901 599.308 103.854 599.354L96.854 606.354C96.8076 606.401 96.7524 606.438 96.6917 606.463C96.6309 606.488 96.5658 606.501 96.5 606.501C96.4343 606.501 96.3691 606.488 96.3084 606.463C96.2476 606.438 96.1925 606.401 96.146 606.354L92.646 602.854C92.5521 602.76 92.4994 602.633 92.4994 602.5C92.4994 602.367 92.5521 602.24 92.646 602.146C92.7399 602.052 92.8672 601.999 93 601.999C93.1328 601.999 93.2601 602.052 93.354 602.146L96.5 605.293L103.146 598.646C103.192 598.599 103.248 598.562 103.308 598.537C103.369 598.512 103.434 598.499 103.5 598.499C103.566 598.499 103.631 598.512 103.692 598.537C103.752 598.562 103.808 598.599 103.854 598.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="87"
                            y="591"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_12">
                      <g id="custom-checkbox_12">
                        <text
                          id="switch-useragent-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="browsing-text optimize-on-text"
                        >
                          <tspan x="126" y="651.453">
                            <tspan>Switch browser&#x2019;s user agent</tspan>
                          </tspan>
                        </text>
                        <g id="switch-useragent-checkbox" class="checkbox">
                          <rect
                            x="87"
                            y="633"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill optimize-on-cb"
                          />
                          <g id="bi:check_12">
                            <g id="Group_12">
                              <path
                                id="Vector_14"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M103.854 640.646C103.901 640.692 103.938 640.748 103.963 640.808C103.988 640.869 104.001 640.934 104.001 641C104.001 641.066 103.988 641.131 103.963 641.192C103.938 641.252 103.901 641.308 103.854 641.354L96.854 648.354C96.8076 648.401 96.7524 648.438 96.6917 648.463C96.6309 648.488 96.5658 648.501 96.5 648.501C96.4343 648.501 96.3691 648.488 96.3084 648.463C96.2476 648.438 96.1925 648.401 96.146 648.354L92.646 644.854C92.5521 644.76 92.4994 644.633 92.4994 644.5C92.4994 644.367 92.5521 644.24 92.646 644.146C92.7399 644.052 92.8672 643.999 93 643.999C93.1328 643.999 93.2601 644.052 93.354 644.146L96.5 647.293L103.146 640.646C103.192 640.599 103.248 640.562 103.308 640.537C103.369 640.512 103.434 640.499 103.5 640.499C103.566 640.499 103.631 640.512 103.692 640.537C103.752 640.562 103.808 640.599 103.854 640.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="87"
                            y="633"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_13">
                      <g id="custom-checkbox_13">
                        <text
                          id="switch-both-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="browsing-text optimize-on-text"
                        >
                          <tspan x="126" y="694.453">Switch both</tspan>
                        </text>
                        <g id="switch-both-checkbox" class="checkbox">
                          <rect
                            x="87"
                            y="676"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill optimize-on-cb"
                          />
                          <g id="bi:check_13">
                            <g id="Group_13">
                              <path
                                id="Vector_15"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M103.854 683.646C103.901 683.692 103.938 683.748 103.963 683.808C103.988 683.869 104.001 683.934 104.001 684C104.001 684.066 103.988 684.131 103.963 684.192C103.938 684.252 103.901 684.308 103.854 684.354L96.854 691.354C96.8076 691.401 96.7524 691.438 96.6917 691.463C96.6309 691.488 96.5658 691.501 96.5 691.501C96.4343 691.501 96.3691 691.488 96.3084 691.463C96.2476 691.438 96.1925 691.401 96.146 691.354L92.646 687.854C92.5521 687.76 92.4994 687.633 92.4994 687.5C92.4994 687.367 92.5521 687.24 92.646 687.146C92.7399 687.052 92.8672 686.999 93 686.999C93.1328 686.999 93.2601 687.052 93.354 687.146L96.5 690.293L103.146 683.646C103.192 683.599 103.248 683.562 103.308 683.537C103.369 683.512 103.434 683.499 103.5 683.499C103.566 683.499 103.631 683.512 103.692 683.537C103.752 683.562 103.808 683.599 103.854 683.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="87"
                            y="676"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="list-item_14">
                      <g id="custom-checkbox_14">
                        <text
                          id="enable-mobile-view-text"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="18"
                          font-weight="600"
                          letter-spacing="0.2px"
                          class="browsing-text"
                        >
                          <tspan x="126" y="737.453">Enable mobile view</tspan>
                        </text>
                        <g id="enable-mobile-view-checkbox" class="checkbox">
                          <rect
                            x="87"
                            y="719"
                            width="23"
                            height="23"
                            rx="4"
                            fill="#2B5071"
                            class="checkbox-fill"
                          />
                          <g id="bi:check_14">
                            <g id="Group_14">
                              <path
                                id="Vector_16"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M103.854 726.646C103.901 726.692 103.938 726.748 103.963 726.808C103.988 726.869 104.001 726.934 104.001 727C104.001 727.066 103.988 727.131 103.963 727.192C103.938 727.252 103.901 727.308 103.854 727.354L96.854 734.354C96.8076 734.401 96.7524 734.437 96.6917 734.463C96.6309 734.488 96.5658 734.501 96.5 734.501C96.4343 734.501 96.3691 734.488 96.3084 734.463C96.2476 734.437 96.1925 734.401 96.146 734.354L92.646 730.854C92.5521 730.76 92.4994 730.633 92.4994 730.5C92.4994 730.367 92.5521 730.24 92.646 730.146C92.7399 730.052 92.8672 729.999 93 729.999C93.1328 729.999 93.2601 730.052 93.354 730.146L96.5 733.293L103.146 726.646C103.192 726.599 103.248 726.562 103.308 726.537C103.369 726.512 103.434 726.499 103.5 726.499C103.566 726.499 103.631 726.512 103.692 726.537C103.752 726.562 103.808 726.599 103.854 726.646Z"
                                fill="white"
                              />
                            </g>
                          </g>
                          <rect
                            x="87"
                            y="719"
                            width="23"
                            height="23"
                            rx="4"
                            stroke="#2B5071"
                            stroke-width="2"
                          />
                        </g>
                      </g>
                    </g>
                  </g>
                  <rect
                    x="62.5"
                    y="517.5"
                    width="399"
                    height="293"
                    rx="4.5"
                    stroke="#E8E8E8"
                  />
                </g>
              </g>
              <g
                id="proxy-dropdown-options-container"
                filter="url(#filter6_d_0_1)"
              >
                <rect x="86" y="929" width="350" height="220" fill="white" />
                <g id="Frame 38">
                  <text
                    id="paragraph"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="110" y="964.736">
                      Kruj&#xeb;, Albania (Free)
                    </tspan>
                  </text>
                </g>
                <g id="Frame 40">
                  <text
                    id="paragraph_2"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="110" y="1004.74">
                      Ljubljana, Slovenia (Free)
                    </tspan>
                  </text>
                </g>
                <g id="Frame 39">
                  <text
                    id="paragraph_3"
                    fill="#252B42"
                    fill-opacity="0.7"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="110" y="1044.74">Cebu, Phillipines</tspan>
                  </text>
                </g>
                <g id="Frame 41">
                  <text
                    id="paragraph_4"
                    fill="#252B42"
                    fill-opacity="0.7"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="110" y="1084.74">Greenville, Liberia</tspan>
                  </text>
                </g>
                <g id="Frame 42">
                  <g id="paragraph_5">
                    <text
                      fill="#252B42"
                      fill-opacity="0.7"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="16"
                      font-weight="500"
                      letter-spacing="0.2px"
                    >
                      <tspan x="181.428" y="1124.74">, Brazil</tspan>
                    </text>
                    <text
                      fill="#252B42"
                      fill-opacity="0.7"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="16"
                      font-weight="500"
                      letter-spacing="0.2px"
                    >
                      <tspan x="110" y="1124.74">
                        <a
                          href="https://www.google.com/search?cs=0&#38;sxsrf=AJOqlzXrb1Ll_d7nwP1R3GRCv3lUQ7t45g:1679240360537&#38;q=Salvador,+Bahia&#38;stick=H4sIAAAAAAAAAEVTz2vTUBxPgitt1mGbMZCeuorQFUeTl7RpBV3R6ckhbBPUgyHNjybNy48mIU1y1IMHL8ODeBAETwr-BR50qCAOURD1KOhFhoeBlxUGznbLS9_p8z7v8_l-v5_He9mZSq5u1un2cAj7oCDpvq54Zd0qd10x1uEOnp2cNnumu4MfCQFwVDPBRybEdw2DTeSMFgkJBELbQoqW6bgJDdkBSKAmx36iYPgG39jB8_VenXHCKIpDdmyYm2yZblMw2KDZTvdSM4SOIydWlpZcNBZH8zKfjkULAirvDTwP8YZkpJFCHiAviGSHRXotaqf15bipJbilOv0h4jl3kuS4LwcipGEgZ1goIQNVJO9KgxhJYsdwEM825GDatsVNx7TQ_bFhnMZt0Bo7SL2RZkzHbCAe8AKfRhRgkNY0rTQKcFUf8ayvBmDaC6bRoxbdQxEZ1ugiDNoeulqOVXkazcZ7dDPNqPVDhP0gHqQZ5QC9HMbkwuEv_DkxW9gd_ZgvPSEevPjwHX9EkIWrtu0pMFpXoOgr8qZNtcjMZcvX_YjKl0jy-LE1VLdUrpBz1d27-wvbX_M_a1Tuc_Xjn_c3H2NF6cLS38zCrSXqOjm7ofib9pot62pEXaFWydyaYnYV17umUixJXrIhVCRfty3qTOk0uViXUqJ-_C2WfXtoecuBDqHYU7xzRJWoDMDtl18efsrcKGLjNbq_3ilVa0Uys2qbom4VOxjW-Xe4t1KbJ7ObYmhbthkV740OX78dk5XF3NjT-X2wtzJxl9-B89un8PKJKsZMiu1_47dr2BaB33n17E0mm8ULGCCyWIzln86c3BBhIMq2e7Z8UdR0cSuD_wetVMIIygMAAA&#38;sa=X&#38;ved=2ahUKEwjpobbpqej9AhXe8TgGHZjtBBwQ7fAIegUIABDRBA"
                        >
                          Salvador
                        </a>
                      </tspan>
                    </text>
                  </g>
                </g>
                <rect
                  x="86.5"
                  y="929.5"
                  width="349"
                  height="219"
                  stroke="#DDDDDD"
                />
              </g>
              <g
                id="browser-dropdown-options-container"
                filter="url(#filter7_d_0_1)"
              >
                <rect x="544" y="929" width="350" height="220" fill="white" />
                <g id="Frame 38_2">
                  <text
                    id="paragraph_6"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="964.736">Google Chrome</tspan>
                  </text>
                </g>
                <g id="Frame 40_2">
                  <text
                    id="paragraph_7"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="1004.74">Microsoft Edge</tspan>
                  </text>
                </g>
                <g id="Frame 39_2">
                  <text
                    id="paragraph_8"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="1044.74">Safari Browser</tspan>
                  </text>
                </g>
                <g id="Frame 41_2">
                  <text
                    id="paragraph_9"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="1084.74">Opera Browser</tspan>
                  </text>
                </g>
                <g id="Frame 42_2">
                  <text
                    id="paragraph_10"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="1124.74">Brave Browser</tspan>
                  </text>
                </g>
                <rect
                  x="544.5"
                  y="929.5"
                  width="349"
                  height="219"
                  stroke="#DDDDDD"
                />
              </g>
              <g
                id="os-dropdown-options-container"
                filter="url(#filter8_d_0_1)"
              >
                <rect x="544" y="853" width="350" height="220" fill="white" />
                <g id="Frame 38_3">
                  <text
                    id="paragraph_11"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="888.736">Ubuntu 22.04</tspan>
                  </text>
                </g>
                <g id="Frame 40_3">
                  <text
                    id="paragraph_12"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="928.736">Windows 11</tspan>
                  </text>
                </g>
                <g id="Frame 41_3">
                  <text
                    id="paragraph_13"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="968.736">Android 12</tspan>
                  </text>
                </g>
                <g id="Frame 39_3">
                  <text
                    id="paragraph_14"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="1008.74">MacOS 10.15</tspan>
                  </text>
                </g>
                <g id="Frame 42_3">
                  <text
                    id="paragraph_15"
                    fill="#252B42"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.2px"
                  >
                    <tspan x="568" y="1048.74">iOS 16</tspan>
                  </text>
                </g>
                <rect
                  x="544.5"
                  y="853.5"
                  width="349"
                  height="219"
                  stroke="#DDDDDD"
                />
              </g>
            </g>
            <g id="List-item-5" filter="url(#filter9_d_0_1)">
              <g clip-path="url(#clip21_0_1)">
                <rect x="62" y="222" width="671" height="278" fill="white" />
                <g id="Frame 40_4">
                  <text
                    id="h3_2"
                    fill="#2B5071"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="24"
                    font-weight="bold"
                    letter-spacing="0.1px"
                  >
                    <tspan x="87" y="274.604">
                      Your system config visible to websites you visit
                    </tspan>
                  </text>
                  <g id="Group 16">
                    <g id="Frame 15_2">
                      <text
                        id="paragraph_16"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="88" y="321.736">IP Address:</tspan>
                      </text>
                      <text
                        id="what-is-ip-address"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="187" y="321.378">70.116.216.2</tspan>
                      </text>
                    </g>
                    <g id="Frame 16">
                      <text
                        id="paragraph_17"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="305" y="321.736">IP Location:</tspan>
                      </text>
                      <text
                        id="what-is-ip-location"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="409" y="321.378">San Antonio, USA</tspan>
                      </text>
                    </g>
                  </g>
                  <g id="Group 15">
                    <g id="Group 17">
                      <g id="Frame 18">
                        <text
                          id="paragraph_18"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="15"
                          letter-spacing="0.2px"
                        >
                          <tspan x="88" y="380.378">Latitude:</tspan>
                        </text>
                        <text
                          id="what-is-longitude"
                          fill="#252B42"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="15"
                          letter-spacing="0.2px"
                        >
                          <tspan x="163" y="380.378">29.4413</tspan>
                        </text>
                      </g>
                      <g id="Frame 19">
                        <text
                          id="paragraph_19"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="15"
                          letter-spacing="0.2px"
                        >
                          <tspan x="263" y="380.378">Latitude:</tspan>
                        </text>
                        <text
                          id="what-is-latitude"
                          fill="#252B42"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="15"
                          letter-spacing="0.2px"
                        >
                          <tspan x="338" y="380.378">-98.4793</tspan>
                        </text>
                      </g>
                      <g id="Frame 20">
                        <text
                          id="paragraph_20"
                          fill="#2B5071"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="15"
                          letter-spacing="0.2px"
                        >
                          <tspan x="435" y="380.378">Location:</tspan>
                        </text>
                        <text
                          id="what-is-geo-location"
                          fill="#252B42"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="15"
                          letter-spacing="0.2px"
                        >
                          <tspan x="512" y="380.378">
                            San Antonio, Texas, USA
                          </tspan>
                        </text>
                      </g>
                    </g>
                    <g id="Frame 17">
                      <text
                        id="paragraph_21"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="87" y="357.736">Geolocation:</tspan>
                      </text>
                      <text
                        id="is-geolocation-off"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="600"
                        letter-spacing="0.2px"
                      >
                        <tspan x="197" y="357.736">ON</tspan>
                      </text>
                    </g>
                  </g>
                  <g id="Group 18">
                    <g id="Frame 21">
                      <text
                        id="paragraph_22"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="87" y="416.736">Browser:</tspan>
                      </text>
                      <text
                        id="which-browser-selected"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="166" y="416.378">Google Chrome</tspan>
                      </text>
                    </g>
                    <g id="Frame 22">
                      <text
                        id="paragraph_23"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="323" y="416.736">OS:</tspan>
                      </text>
                      <text
                        id="which-os-selected"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="357" y="416.378">Windows 11</tspan>
                      </text>
                    </g>
                    <g id="Frame 23">
                      <text
                        id="paragraph_24"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="479" y="416.736">Viewport:</tspan>
                      </text>
                      <text
                        id="paragraph_25"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="565" y="416.378">1440 X 1080</tspan>
                      </text>
                    </g>
                  </g>
                  <g id="Group 19">
                    <g id="Frame 24">
                      <text
                        id="paragraph_26"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="263" y="455.736">Ads:</tspan>
                      </text>
                      <text
                        id="is-ads-disabled"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="304" y="455.378">Allowed</tspan>
                      </text>
                    </g>
                    <g id="Frame 25">
                      <text
                        id="paragraph_27"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="404" y="455.736">Do-Not-Track header:</tspan>
                      </text>
                      <text
                        id="is-dnt-allowed"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="588" y="455.378">Disabled</tspan>
                      </text>
                    </g>
                    <g id="Frame 23_2">
                      <text
                        id="paragraph_28"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="88" y="455.736">Cookies:</tspan>
                      </text>
                      <text
                        id="is-cookie-allowed"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="163" y="455.378">Allowed</tspan>
                      </text>
                    </g>
                  </g>
                  <rect
                    x="62.5"
                    y="222.5"
                    width="670"
                    height="277"
                    stroke="#EBEBEB"
                  />
                </g>
              </g>
              <rect
                x="62.5"
                y="222.5"
                width="670"
                height="277"
                stroke="#E8E8E8"
              />
            </g>
            <g id="List-item-5_2" filter="url(#filter10_d_0_1)">
              <g clip-path="url(#clip22_0_1)">
                <rect x="770" y="222" width="608" height="278" fill="white" />
                <g id="Frame 40_5">
                  <text
                    id="h3_3"
                    fill="#2B5071"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="24"
                    font-weight="bold"
                    letter-spacing="0.1px"
                  >
                    <tspan x="795" y="274.604">Usage stats</tspan>
                  </text>
                  <g id="Frame 15_3">
                    <text
                      id="paragraph_29"
                      fill="#2B5071"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="16"
                      font-weight="500"
                      letter-spacing="0.2px"
                    >
                      <tspan x="796" y="321.736">Tier:</tspan>
                    </text>
                    <text
                      id="paragraph_30"
                      fill="#252B42"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="15"
                      letter-spacing="0.2px"
                    >
                      <tspan x="837" y="321.378">Free</tspan>
                    </text>
                  </g>
                  <g id="Frame 16_2">
                    <text
                      id="paragraph_31"
                      fill="#2B5071"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="16"
                      font-weight="500"
                      letter-spacing="0.2px"
                    >
                      <tspan x="796" y="359.736">Proxy bandwidth:</tspan>
                    </text>
                    <text
                      id="proxy-bandwidth-used-text"
                      fill="#252B42"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="15"
                      letter-spacing="0.2px"
                    >
                      <tspan x="948" y="359.378">2.472 GB of 20 GB used</tspan>
                    </text>
                  </g>
                  <g id="Group 18_2">
                    <g id="Frame 21_2">
                      <text
                        id="paragraph_32"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="796" y="396.736">Ads blocked:</tspan>
                      </text>
                      <text
                        id="paragraph_33"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="908" y="396.378">
                          348 (5000 trackers are allowed in Free tier)
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id="Group 19_2">
                    <g id="Frame 21_3">
                      <text
                        id="paragraph_34"
                        fill="#2B5071"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.2px"
                      >
                        <tspan x="795" y="433.736">Settings synced:</tspan>
                      </text>
                      <text
                        id="paragraph_35"
                        fill="#252B42"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="15"
                        letter-spacing="0.2px"
                      >
                        <tspan x="937" y="433.378">
                          3 times (5 times allowed in Free tier)
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <g id="upgrade-btn">
                    <rect
                      x="892"
                      y="300"
                      width="120"
                      height="32"
                      rx="5"
                      fill="#2B5071"
                    />
                    <text
                      id="upgrade-btn-text"
                      fill="white"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      font-weight="bold"
                      letter-spacing="0.1px"
                    >
                      <tspan x="914.67" y="321.019">UPGRADE</tspan>
                    </text>
                  </g>
                  <rect
                    x="770.5"
                    y="222.5"
                    width="607"
                    height="277"
                    stroke="#EBEBEB"
                  />
                </g>
              </g>
              <rect
                x="770.5"
                y="222.5"
                width="607"
                height="277"
                stroke="#E8E8E8"
              />
            </g>
            <g id="sync-settings-btn">
              <rect
                x="1142"
                y="129"
                width="180"
                height="42"
                rx="5"
                fill="#2B5071"
              />
              <text
                id="sync-settings-btn-text"
                fill="white"
                xml:space="preserve"
                style="white-space: pre"
                font-family="Montserrat"
                font-size="16"
                font-weight="bold"
                letter-spacing="0.1px"
              >
                <tspan x="1165.67" y="155.736">SYNC SETTINGS</tspan>
              </text>
            </g>
            <rect
              id="pricinger-user-profile"
              x="1338"
              y="130"
              width="40"
              height="40"
              rx="20"
              fill="url(#pattern18)"
            />
          </g>
        </g>
        <g id="Browser &#38; URL Controls" clip-path="url(#clip23_0_1)">
          <g id="Toolbar - URL Controls">
            <g id="Toolbar - URL Controls_2" clip-path="url(#clip24_0_1)">
              <g id="URL Controls BG" filter="url(#filter11_i_0_1)">
                <rect y="42" width="1440" height="38" fill="white" />
              </g>
              <g id="Right Locked Icons">
                <g id="Icon - More">
                  <path
                    id="Container"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1418.17 58C1418.99 58 1419.67 57.325 1419.67 56.5C1419.67 55.675 1418.99 55 1418.17 55C1417.34 55 1416.67 55.675 1416.67 56.5C1416.67 57.325 1417.34 58 1418.17 58ZM1418.17 59.5C1417.34 59.5 1416.67 60.175 1416.67 61C1416.67 61.825 1417.34 62.5 1418.17 62.5C1418.99 62.5 1419.67 61.825 1419.67 61C1419.67 60.175 1418.99 59.5 1418.17 59.5ZM1418.17 64C1417.34 64 1416.67 64.675 1416.67 65.5C1416.67 66.325 1417.34 67 1418.17 67C1418.99 67 1419.67 66.325 1419.67 65.5C1419.67 64.675 1418.99 64 1418.17 64Z"
                    fill="#5F6368"
                  />
                </g>
                <rect
                  id="7ecec434137d1fcbe023db38e06c1260 2"
                  x="1374"
                  y="49"
                  width="24"
                  height="24"
                  rx="12"
                  fill="url(#pattern19)"
                />
              </g>
              <g id="URL Bar" clip-path="url(#clip25_0_1)">
                <rect
                  id="URL Fill BG"
                  x="134"
                  y="47"
                  width="1184"
                  height="28"
                  rx="14"
                  fill="#F1F3F4"
                />
                <g id="Icon - Favorite">
                  <path
                    id="Container_2"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1305.36 58.8401L1301.97 58.5456L1300.64 55.4259C1300.41 54.858 1299.59 54.858 1299.35 55.4259L1298.03 58.5526L1294.64 58.8401C1294.03 58.8892 1293.77 59.6603 1294.24 60.0669L1296.82 62.2963L1296.04 65.6053C1295.9 66.2083 1296.56 66.685 1297.09 66.3625L1300 64.6098L1302.91 66.3695C1303.44 66.692 1304.09 66.2153 1303.95 65.6124L1303.18 62.2963L1305.75 60.0669C1306.22 59.6603 1305.98 58.8892 1305.36 58.8401ZM1300 63.2988L1297.36 64.8903L1298.06 61.8897L1295.74 59.8706L1298.81 59.6042L1300 56.7789L1301.2 59.6112L1304.27 59.8777L1301.94 61.8967L1302.64 64.8973L1300 63.2988Z"
                    fill="#5F6368"
                  />
                </g>
                <g id="url-bar-text">
                  <g id="pricinger-extension-domain">
                    <text
                      id="pricinger-extension-domain-domain"
                      fill="#202124"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Roboto"
                      font-size="14"
                      letter-spacing="0.25px"
                    >
                      <tspan x="167" y="65.7852">
                        chrome-extension://bonlhigidpdpehmgbmchnonhhdgcbnjh/settings.html
                      </tspan>
                    </text>
                  </g>
                  <g id="google-domain">
                    <rect
                      width="127"
                      height="16"
                      transform="translate(167 53)"
                      fill="#00A3FF"
                      id="google-domain-select"
                    />
                    <text
                      id="google-domain-domain"
                      fill="#202124"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Roboto"
                      font-size="14"
                      letter-spacing="0.25px"
                    >
                      <tspan x="167" y="65.7852">google.com</tspan>
                    </text>
                    <text
                      id="google-domain-query"
                      fill="#202124"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Roboto"
                      font-size="14"
                      letter-spacing="0.25px"
                    >
                      <tspan x="244" y="65.7852">/search</tspan>
                    </text>
                  </g>
                  <g id="booking-domain">
                    <rect
                      width="995"
                      height="16"
                      transform="translate(167 53)"
                      fill="#00A3FF"
                      id="booking-domain-select"
                    />
                    <text
                      id="booking-domain-domain"
                      fill="#202124"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Roboto"
                      font-size="14"
                      letter-spacing="0.25px"
                    >
                      <tspan x="167" y="65.7852">
                        <tspan class="booking-domain-domain-text">r</tspan>
                        <tspan class="booking-domain-domain-text">an</tspan>
                        <tspan class="booking-domain-domain-text">d</tspan>
                        <tspan class="booking-domain-domain-text">om</tspan>
                        <tspan class="booking-domain-domain-text">-</tspan>
                        <tspan class="booking-domain-domain-text">ho</tspan>
                        <tspan class="booking-domain-domain-text">tel</tspan>
                        <tspan class="booking-domain-domain-text">-</tspan>
                        <tspan class="booking-domain-domain-text">b</tspan>
                        <tspan class="booking-domain-domain-text">oo</tspan>
                        <tspan class="booking-domain-domain-text">k</tspan>
                        <tspan class="booking-domain-domain-text">ing</tspan>
                        <tspan class="booking-domain-domain-text">.</tspan>
                        <tspan class="booking-domain-domain-text">site</tspan>
                      </tspan>
                    </text>
                    <text
                      id="booking-domain-query"
                      fill="#202124"
                      font-family="Roboto"
                      font-size="14"
                      letter-spacing="0.25px"
                    >
                      <tspan x="337" y="65.7852">
                        <tspan id="booking-domain-search-country">
                          /search?country=Australia
                        </tspan>
                        <tspan id="booking-domain-search-location">
                          &#38;location=Apollo
                        </tspan>
                        <tspan id="booking-domain-search-date">
                          &#38;start_date=12_09&#38;end_date=14_09
                        </tspan>
                        <tspan id="booking-domain-search-hotel">
                          &#38;selected_hotel=Apollo_Panaroma_Guesthouse
                        </tspan>
                      </tspan>
                    </text>
                  </g>
                </g>
                <g id="Icon - Secure">
                  <path
                    id="Container_3"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M154 59H153.5V58C153.5 56.62 152.38 55.5 151 55.5C149.62 55.5 148.5 56.62 148.5 58V59H148C147.45 59 147 59.45 147 60V65C147 65.55 147.45 66 148 66H154C154.55 66 155 65.55 155 65V60C155 59.45 154.55 59 154 59ZM149.5 59V58C149.5 57.17 150.17 56.5 151 56.5C151.83 56.5 152.5 57.17 152.5 58V59H149.5Z"
                    fill="#26AB05"
                  />
                </g>
              </g>
              <g id="Left Locked Icons" clip-path="url(#clip26_0_1)">
                <g id="Icon - Home">
                  <path
                    id="Container_4"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M113 55.0078C112.817 54.9827 112.625 55.0354 112.478 55.1688L107.211 59.9354C106.947 60.1741 106.926 60.5809 107.163 60.8457C107.402 61.1125 107.813 61.134 108.078 60.8937L108.474 60.5356V65.7047V66C108.474 66.5523 108.922 67 109.474 67H109.763H116.206H116.495C117.047 67 117.495 66.5523 117.495 66V65.7047V60.5076L117.922 60.8937C118.187 61.134 118.598 61.1125 118.837 60.8457C119.074 60.5809 119.053 60.1741 118.789 59.9354L113.522 55.1688C113.375 55.0354 113.183 54.9827 113 55.0078ZM109.763 59.3693V60.228V61.1857V61.228V63.7047V65V65.0423V65.7047H110.43H110.474H111.763H114.206H115.495H115.539H116.206V65.0423V65V63.7047V61.228V61.1857V60.228V59.3413L113 56.4395L109.763 59.3693Z"
                    fill="#5F6368"
                  />
                </g>
                <g id="Icon - Refresh">
                  <path
                    id="Container_5"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M87.9979 59.3312V55.8045C87.9979 55.5045 87.6379 55.3579 87.4312 55.5712L86.2446 56.7579C85.0379 55.5512 83.3179 54.8579 81.4379 55.0245C78.6446 55.2779 76.3446 57.5245 76.0379 60.3179C75.6379 63.9312 78.4579 66.9979 81.9979 66.9979C85.0579 66.9979 87.5846 64.7046 87.9512 61.7446C87.9979 61.3446 87.6846 60.9979 87.2846 60.9979C86.9512 60.9979 86.6712 61.2446 86.6312 61.5712C86.3446 63.8979 84.3379 65.6979 81.9312 65.6645C79.4579 65.6312 77.3712 63.5445 77.3312 61.0645C77.2912 58.4646 79.4046 56.3312 81.9979 56.3312C83.2846 56.3312 84.4512 56.8579 85.2979 57.6979L83.9046 59.0912C83.6912 59.3045 83.8379 59.6645 84.1379 59.6645H87.6646C87.8512 59.6645 87.9979 59.5179 87.9979 59.3312Z"
                    fill="#5F6368"
                  />
                </g>
                <g id="Icon - Forward">
                  <path
                    id="Container_6"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M45.7701 61.617H54.3721L50.614 65.3751C50.3137 65.6754 50.3137 66.1683 50.614 66.4686C50.9143 66.769 51.3995 66.769 51.6998 66.4686L56.7747 61.3937C57.0751 61.0934 57.0751 60.6082 56.7747 60.3079L51.7075 55.2253C51.4072 54.9249 50.922 54.9249 50.6217 55.2253C50.3214 55.5256 50.3214 56.0107 50.6217 56.3111L54.3721 60.0768H45.7701C45.3465 60.0768 45 60.4234 45 60.8469C45 61.2705 45.3465 61.617 45.7701 61.617Z"
                    fill="#BABCBE"
                  />
                </g>
                <g id="Icon - Back">
                  <path
                    id="Container_7"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M25.2299 60.0768H16.6279L20.386 56.3188C20.6863 56.0185 20.6863 55.5256 20.386 55.2253C20.0857 54.9249 19.6005 54.9249 19.3002 55.2253L14.2253 60.3002C13.9249 60.6005 13.9249 61.0857 14.2253 61.386L19.3002 66.4609C19.6005 66.7613 20.0857 66.7613 20.386 66.4609C20.6863 66.1606 20.6863 65.6754 20.386 65.3751L16.6279 61.617H25.2299C25.6535 61.617 26 61.2705 26 60.8469C26 60.4234 25.6535 60.0768 25.2299 60.0768Z"
                    fill="#5F6368"
                  />
                </g>
              </g>
              <g id="pricinger-extension-icon">
                <circle
                  id="pricinger-icon-hover"
                  cx="1345"
                  cy="61"
                  r="12"
                  fill="#B3B3B3"
                  fill-opacity="0.5"
                />
                <rect
                  id="pricinger-icon"
                  x="1335"
                  y="51"
                  width="20"
                  height="20"
                  fill="url(#pattern20)"
                />
              </g>
            </g>
          </g>
          <g id="Toolbar - Browser Controls">
            <g id="Broswer Control Bar" clip-path="url(#clip27_0_1)">
              <path
                id="Broswer Control Bar BG"
                d="M0 8C0 3.58172 3.58172 0 8 0H1432C1436.42 0 1440 3.58172 1440 8V42H0V8Z"
                fill="#DEE1E6"
              />
              <g id="Tab &#38; Plus">
                <g id="Browser Tab / With Plus">
                  <g id="Frame 5">
                    <g id="tab-one-frame">
                      <path
                        id="Curve L"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M74 42C75.3846 41.0588 78.6154 40.5882 80 34C80 34 80 42 80 42H74Z"
                        fill="white"
                      />
                      <g id="Favicon, Text, &#38; Icons">
                        <path
                          d="M80 16C80 11.5817 83.5817 8 88 8H230C234.418 8 238 11.5817 238 16V42H80V16Z"
                          fill="white"
                        />
                        <rect
                          id="tab-one-google-favicon"
                          x="88"
                          y="17"
                          width="16"
                          height="16"
                          fill="url(#pattern21)"
                        />
                        <g id="tab-one-name">
                          <text
                            fill="#494C4F"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Roboto"
                            font-size="12"
                            letter-spacing="0.2px"
                          >
                            <tspan x="113" y="29.1016">Google</tspan>
                          </text>
                          <text
                            fill="white"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Roboto"
                            font-size="12"
                            letter-spacing="0.2px"
                          >
                            <tspan x="199.735" y="29.1016">.</tspan>
                          </text>
                        </g>
                        <g id="Icon - Close">
                          <path
                            id="Container_8"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M224.584 21.4221C224.362 21.2002 224.003 21.2002 223.782 21.4221L221 24.198L218.218 21.4164C217.997 21.1945 217.638 21.1945 217.416 21.4164C217.195 21.6382 217.195 21.9966 217.416 22.2184L220.198 25L217.416 27.7816C217.195 28.0034 217.195 28.3618 217.416 28.5836C217.638 28.8055 217.997 28.8055 218.218 28.5836L221 25.802L223.782 28.5836C224.003 28.8055 224.362 28.8055 224.584 28.5836C224.805 28.3618 224.805 28.0034 224.584 27.7816L221.802 25L224.584 22.2184C224.8 22.0023 224.8 21.6382 224.584 21.4221Z"
                            fill="#3C4043"
                          />
                        </g>
                        <g id="tab-one-booking-favicon">
                          <path
                            id="Vector_17"
                            d="M101.333 20H99.3333V18.6666C99.3333 17.9313 98.7353 17.3333 98 17.3333H94C93.2646 17.3333 92.6666 17.9313 92.6666 18.6666V20H90.6666C89.9313 20 89.3333 20.598 89.3333 21.3333V23.3333H102.667V21.3333C102.667 20.598 102.069 20 101.333 20ZM94 18.6666H98V20H94V18.6666ZM97.3333 25.3333H94.6666V24H89.3333V28.6666C89.3333 29.402 89.9313 30 90.6666 30H101.333C102.069 30 102.667 29.402 102.667 28.6666V24H97.3333V25.3333Z"
                            fill="#163890"
                          />
                        </g>
                      </g>
                      <path
                        id="Curve R"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M244 42C242.615 41.0588 239.385 40.5882 238 34C238 34 238 42 238 42H244Z"
                        fill="white"
                      />
                    </g>
                    <g id="tab-two-frame">
                      <path
                        id="Curve L_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M252 42C253.385 41.0588 256.615 40.5882 258 34C258 34 258 42 258 42H252Z"
                        fill="white"
                      />
                      <g id="Favicon, Text, &#38; Icons_2">
                        <path
                          d="M258 16C258 11.5817 261.582 8 266 8H408C412.418 8 416 11.5817 416 16V42H258V16Z"
                          fill="white"
                        />
                        <text
                          id="tab-two-name"
                          fill="#494C4F"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Roboto"
                          font-size="12"
                          letter-spacing="0.2px"
                        >
                          <tspan x="291" y="29.1016">Pricinger Settings</tspan>
                        </text>
                        <g id="Icon - Close_2">
                          <path
                            id="Container_9"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M402.584 21.4221C402.362 21.2002 402.003 21.2002 401.782 21.4221L399 24.198L396.218 21.4164C395.997 21.1945 395.638 21.1945 395.416 21.4164C395.195 21.6382 395.195 21.9966 395.416 22.2184L398.198 25L395.416 27.7816C395.195 28.0034 395.195 28.3618 395.416 28.5836C395.638 28.8055 395.997 28.8055 396.218 28.5836L399 25.802L401.782 28.5836C402.003 28.8055 402.362 28.8055 402.584 28.5836C402.805 28.3618 402.805 28.0034 402.584 27.7816L399.802 25L402.584 22.2184C402.8 22.0023 402.8 21.6382 402.584 21.4221Z"
                            fill="#3C4043"
                          />
                        </g>
                        <rect
                          id="tab-two-pricinger-icon"
                          x="266"
                          y="16"
                          width="20"
                          height="20"
                          fill="url(#pattern22)"
                        />
                      </g>
                      <path
                        id="Curve R_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M422 42C420.615 41.0588 417.385 40.5882 416 34C416 34 416 42 416 42H422Z"
                        fill="white"
                      />
                    </g>
                    <g id="add-tab-plus-icon">
                      <path
                        id="Icon - New Tab"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M445.714 25.9524H440.952V30.7143C440.952 31.2381 440.524 31.6666 440 31.6666C439.476 31.6666 439.048 31.2381 439.048 30.7143V25.9524H434.286C433.762 25.9524 433.333 25.5238 433.333 25C433.333 24.4762 433.762 24.0476 434.286 24.0476H439.048V19.2857C439.048 18.7619 439.476 18.3333 440 18.3333C440.524 18.3333 440.952 18.7619 440.952 19.2857V24.0476H445.714C446.238 24.0476 446.667 24.4762 446.667 25C446.667 25.5238 446.238 25.9524 445.714 25.9524Z"
                        fill="#3C4043"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g id="Browser Controls" clip-path="url(#clip28_0_1)">
                <circle
                  id="Option - Expand"
                  cx="59"
                  cy="21.5"
                  r="5.75"
                  fill="#27CA40"
                  stroke="#3EAF3F"
                  stroke-width="0.5"
                />
                <circle
                  id="Option - Minimize"
                  cx="39"
                  cy="21.5"
                  r="5.75"
                  fill="#FFC130"
                  stroke="#E1A325"
                  stroke-width="0.5"
                />
                <circle
                  id="Option - Close"
                  cx="19"
                  cy="21.5"
                  r="5.75"
                  fill="#FF6058"
                  stroke="#E14942"
                  stroke-width="0.5"
                />
              </g>
            </g>
          </g>
        </g>
        <rect
          id="Browser Outline"
          x="0.5"
          y="0.5"
          width="1439"
          height="1159"
          rx="7.5"
          stroke="#E9E9E9"
        />
        <path
          xmlns="http://www.w3.org/2000/svg"
          id="pricinger-icon-highlight"
          d="M1363.5 61C1363.5 71.1826 1355.03 79.5 1344.5 79.5C1333.97 79.5 1325.5 71.1826 1325.5 61C1325.5 50.8174 1333.97 42.5 1344.5 42.5C1355.03 42.5 1363.5 50.8174 1363.5 61Z"
          stroke="#FF0000"
          stroke-width="3"
        />
        <g id="mouse-cursor">
          <path
            id="Vector_18"
            d="M1414.67 1109.01L1383 1097L1395.01 1128.67L1400.47 1114.47L1414.67 1109.01Z"
            fill="url(#paint0_linear_0_1)"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_0_1"
            transform="scale(0.000347222 0.000462963)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image1_0_1" transform="scale(0.00177305)" />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image2_0_1" transform="scale(0.000333333 0.0005)" />
        </pattern>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image3_0_1"
            transform="scale(0.000244141 0.000366166)"
          />
        </pattern>
        <pattern
          id="pattern4"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image4_0_1"
            transform="scale(0.000244141 0.000365764)"
          />
        </pattern>
        <pattern
          id="pattern5"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image5_0_1"
            transform="matrix(0.000244141 0 0 0.000488281 0 -0.166504)"
          />
        </pattern>
        <pattern
          id="pattern6"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image4_0_1"
            transform="scale(0.000244141 0.000365764)"
          />
        </pattern>
        <pattern
          id="pattern7"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image2_0_1" transform="scale(0.000333333 0.0005)" />
        </pattern>
        <pattern
          id="pattern8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image5_0_1"
            transform="matrix(0.000244141 0 0 0.000488281 0 -0.166504)"
          />
        </pattern>
        <pattern
          id="pattern9"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image3_0_1"
            transform="scale(0.000244141 0.000366166)"
          />
        </pattern>
        <pattern
          id="pattern10"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image2_0_1" transform="scale(0.000333333 0.0005)" />
        </pattern>
        <pattern
          id="pattern11"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image3_0_1"
            transform="scale(0.000244141 0.000366166)"
          />
        </pattern>
        <pattern
          id="pattern12"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image2_0_1" transform="scale(0.000333333 0.0005)" />
        </pattern>
        <pattern
          id="pattern13"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image3_0_1"
            transform="scale(0.000244141 0.000366166)"
          />
        </pattern>
        <pattern
          id="pattern14"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image5_0_1"
            transform="matrix(0.000244141 0 0 0.000488281 0 -0.166504)"
          />
        </pattern>
        <pattern
          id="pattern15"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image4_0_1"
            transform="scale(0.000244141 0.000365764)"
          />
        </pattern>
        <filter
          id="filter0_d_0_1"
          x="1151"
          y="77"
          width="240"
          height="350"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="4" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern16"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image6_0_1" transform="scale(0.015625)" />
        </pattern>
        <pattern
          id="pattern17"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image6_0_1" transform="scale(0.015625)" />
        </pattern>
        <filter
          id="filter1_d_0_1"
          x="61"
          y="826"
          width="404"
          height="274"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d_0_1"
          x="519"
          y="826"
          width="404"
          height="274"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_d_0_1"
          x="977"
          y="516"
          width="404"
          height="298"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_d_0_1"
          x="519"
          y="515"
          width="404"
          height="299"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_d_0_1"
          x="61"
          y="516"
          width="404"
          height="298"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_d_0_1"
          x="84"
          y="927"
          width="358"
          height="228"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_d_0_1"
          x="542"
          y="927"
          width="358"
          height="228"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_d_0_1"
          x="542"
          y="851"
          width="358"
          height="228"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_d_0_1"
          x="61"
          y="221"
          width="675"
          height="282"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_0_1"
          x="769"
          y="221"
          width="612"
          height="282"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <pattern
          id="pattern18"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image1_0_1" transform="scale(0.00177305)" />
        </pattern>
        <filter
          id="filter11_i_0_1"
          x="0"
          y="42"
          width="1440"
          height="38"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.854902 0 0 0 0 0.862745 0 0 0 0 0.878431 0 0 0 1 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1" />
        </filter>
        <pattern
          id="pattern19"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image1_0_1" transform="scale(0.00177305)" />
        </pattern>
        <pattern
          id="pattern20"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image6_0_1" transform="scale(0.015625)" />
        </pattern>
        <pattern
          id="pattern21"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image7_0_1" transform="scale(0.00224719)" />
        </pattern>
        <pattern
          id="pattern22"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image6_0_1" transform="scale(0.015625)" />
        </pattern>
        <linearGradient
          id="paint0_linear_0_1"
          x1="1383"
          y1="1103.67"
          x2="1414.67"
          y2="1132.83"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.236842" stop-color="#473BD7" />
          <stop offset="0.684211" stop-color="#E77777" />
        </linearGradient>
        <clipPath id="clip0_0_1">
          <rect width="1440" height="1160" fill="white" />
        </clipPath>
        <clipPath id="clip1_0_1">
          <rect
            width="1440"
            height="1080"
            fill="white"
            transform="translate(0 81)"
          />
        </clipPath>
        <clipPath id="clip2_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(288 392)"
          />
        </clipPath>
        <clipPath id="clip3_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(517 392)"
          />
        </clipPath>
        <clipPath id="clip4_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(746 392)"
          />
        </clipPath>
        <clipPath id="clip5_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(975 392)"
          />
        </clipPath>
        <clipPath id="clip6_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(288 692)"
          />
        </clipPath>
        <clipPath id="clip7_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(517 692)"
          />
        </clipPath>
        <clipPath id="clip8_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(746 692)"
          />
        </clipPath>
        <clipPath id="clip9_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(975 692)"
          />
        </clipPath>
        <clipPath id="clip10_0_1">
          <rect
            width="187"
            height="178"
            fill="white"
            transform="translate(295 291)"
          />
        </clipPath>
        <clipPath id="clip11_0_1">
          <rect
            width="187"
            height="178"
            fill="white"
            transform="translate(295 504)"
          />
        </clipPath>
        <clipPath id="clip12_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(309 347)"
          />
        </clipPath>
        <clipPath id="clip13_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(538 347)"
          />
        </clipPath>
        <clipPath id="clip14_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(767 347)"
          />
        </clipPath>
        <clipPath id="clip15_0_1">
          <rect
            width="219"
            height="219"
            fill="white"
            transform="translate(996 347)"
          />
        </clipPath>
        <clipPath id="clip16_0_1">
          <rect
            width="12.0009"
            height="9"
            fill="white"
            transform="translate(1008 598)"
          />
        </clipPath>
        <clipPath id="clip17_0_1">
          <rect
            width="12.0009"
            height="9"
            fill="white"
            transform="translate(1008 641)"
          />
        </clipPath>
        <clipPath id="clip18_0_1">
          <rect
            width="12.0009"
            height="9"
            fill="white"
            transform="translate(1008 683)"
          />
        </clipPath>
        <clipPath id="clip19_0_1">
          <rect
            width="12.0009"
            height="9"
            fill="white"
            transform="translate(1008 726)"
          />
        </clipPath>
        <clipPath id="clip20_0_1">
          <rect
            width="12.0009"
            height="9"
            fill="white"
            transform="translate(1008 768)"
          />
        </clipPath>
        <clipPath id="clip21_0_1">
          <rect x="62" y="222" width="671" height="278" fill="white" />
        </clipPath>
        <clipPath id="clip22_0_1">
          <rect x="770" y="222" width="608" height="278" fill="white" />
        </clipPath>
        <clipPath id="clip23_0_1">
          <rect width="1440" height="80" fill="white" />
        </clipPath>
        <clipPath id="clip24_0_1">
          <rect
            width="1440"
            height="38"
            fill="white"
            transform="translate(0 42)"
          />
        </clipPath>
        <clipPath id="clip25_0_1">
          <rect
            width="1184"
            height="28"
            fill="white"
            transform="translate(134 47)"
          />
        </clipPath>
        <clipPath id="clip26_0_1">
          <rect
            width="109"
            height="16"
            fill="white"
            transform="translate(12 53)"
          />
        </clipPath>
        <clipPath id="clip27_0_1">
          <rect width="1440" height="42" fill="white" />
        </clipPath>
        <clipPath id="clip28_0_1">
          <rect
            width="52"
            height="12"
            fill="white"
            transform="translate(13 15.5)"
          />
        </clipPath>
        <image
          id="image0_0_1"
          data-name="Google.png"
          width="2880"
          height="2160"
          xlink:href="/images/work-assets/hashbinary/pricinger/google-page.png"
        />
        <image
          id="image1_0_1"
          data-name="7ecec434137d1fcbe023db38e06c1260.jpg"
          width="564"
          height="846"
          xlink:href="data:image/jpeg;base64,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"
        />
        <image
          id="image2_0_1"
          data-name="pexels-thorsten-technoman-338504.jpg"
          width="3000"
          height="2000"
          xlink:href="/images/work-assets/hashbinary/pricinger/pexels-thorsten-technoman.jpg"
        />
        <image
          id="image3_0_1"
          data-name="pexels-donald-tong-189296.jpg"
          width="4096"
          height="2731"
          xlink:href="/images/work-assets/hashbinary/pricinger/pexels-donald-tong.jpg"
        />
        <image
          id="image4_0_1"
          data-name="pexels-pixabay-261102.jpg"
          width="4096"
          height="2734"
          xlink:href="/images/work-assets/hashbinary/pricinger/pexels-pixabay-2.jpg"
        />
        <image
          id="image5_0_1"
          data-name="pexels-pixabay-258154.jpg"
          width="4096"
          height="2730"
          xlink:href="/images/work-assets/hashbinary/pricinger/pexels-pixabay.jpg"
        />
        <image
          id="image6_0_1"
          data-name="output-onlinepngtools.png"
          width="64"
          height="64"
          xlink:href="data:image/png;base64,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"
        />
        <image
          id="image7_0_1"
          data-name="Frame 8.png"
          width="445"
          height="445"
          xlink:href="/images/work-assets/hashbinary/pricinger/google-favicon.png"
        />
      </defs>
    </svg>
    <div class="animated-svg-description">
      <h2>Pricinger</h2>
      <div style="display: flex; flex-direction: column; gap: 0.5rem">
        <p>
          Pricinger is a chrome extension that modifies your browsing
          fingerprint so you get the best possible prices while booking and
          shopping online.
        </p>
        <div>
          Worked on the full stack implementation for Pricinger. Used Node.js
          and MongoDB for backend and
          <a
            href="https://developer.chrome.com/docs/extensions/mv3/getstarted/"
            target="_blank"
            class="link"
            >chrome extension compatible code</a
          >
          for developing extension.
          <ul>
            <li>Integrated Stripe for payments.</li>
            <li>
              Created a proxy server in Node.js and hosted those in different
              AWS regions.
            </li>
            <li>
              Created a scraper that crawls known websites from different
              optimized settings, scrapes the data, compares it, and stores the
              optimized config in our database.
            </li>
            <li>Used maxmind for identifying location of user from his IP.</li>
          </ul>
        </div>
      </div>
      <button
        :class="{
          'hide-restart-animation-button': !timelineRestart.show.value,
        }"
        @click.stop="timelineRestart.restart"
      >
        Restart Animation
      </button>
    </div>
  </div>
</template>

<style scoped>
.animated-svg-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
}

svg {
  width: 100%;
  max-width: 1280px;
  height: auto;
}

.animated-svg-description {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-inline: 1rem;
  margin-bottom: 2rem;
}

#booking-home,
#hotel-list,
#hotel-details-page,
#pricinger-extension-popup,
#switch-on-off-tooltip,
#optimize-settings-tooltip,
#pricinger-window,
#booking-domain,
#pricinger-extension-domain,
#pricinger-icon-hover,
#tab-one-booking-favicon,
#mouse-cursor,
.booking-domain-domain-text,
#booking-domain-search-country,
#booking-domain-search-location,
#booking-domain-search-date,
#booking-domain-search-hotel,
.hotel-list-highlight,
.checkbox-fill,
#proxy-dropdown-options-container,
#browser-dropdown-options-container,
#os-dropdown-options-container,
#pricinger-icon-highlight,
#tab-two-frame {
  opacity: 0;
}

#pricinger-optimize-button,
#pricinger-switch-on-off-button {
  opacity: 0.6;
}

#pricinger-icon {
  filter: grayscale(1);
}

#google-domain-select,
#booking-domain-select {
  fill: none;
}

#add-tab-plus-icon {
  translate: -178px;
}

.storage-text,
.privacy-text,
.browsing-text {
  fill: #737373;
}
</style>
