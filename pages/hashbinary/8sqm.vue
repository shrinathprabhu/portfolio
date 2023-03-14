<script setup lang="ts">
import gsap from "gsap";

const otpTimerSeconds = ref(59);
const timeline = gsap.timeline({ delay: 0.2 });
const hoverEffect = {
  filter: "contrast(1.25)",
  duration: 0.1,
};
const showRestartButton = ref(false);

timeline.eventCallback("onComplete", () => {
  showRestartButton.value = true;
});

useHead({
  title: "Created backend for 8SQM | Shrinath Prabhu | Web Developer",
  meta: [
    {
      name: "description",
      content: "An animated way of showing the app that wa",
    },
  ],
  link: [
    {
      rel: "preload",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Noto+Sans:wght@800&display=swap",
      as: "style",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Noto+Sans:wght@800&display=swap",
    },
  ],
});

function startOtpTimer() {
  const otpTimerInterval = setInterval(() => {
    otpTimerSeconds.value -= 1;
    if (otpTimerSeconds.value < 10) {
      clearInterval(otpTimerInterval);
      otpTimerSeconds.value = 59;
    }
  }, 1000);
}

function restartAnimation() {
  timeline.restart();
  showRestartButton.value = false;
}

onMounted(() => {
  const successCheckPathLength = (
    document.querySelector("#success-icon-check") as SVGPathElement
  ).getTotalLength();

  timeline
    .to("#login-page", {
      opacity: 1,
    })
    .to("#login-8sqm-logo", {
      y: 240,
    })
    .to("#login-car-wash-logo", {
      x: 80,
    })
    .to("#login-car-wash-logo", {
      opacity: 1,
      duration: 0.2,
    })
    .to("#login-car-wash-logo", {
      x: 0,
      duration: 0.4,
      delay: 0.1,
    })
    .to(
      ".login-logo-text",
      {
        opacity: 1,
        duration: 0.1,
        stagger: 0.05,
      },
      "-=0.1"
    )
    .to("#login-8sqm-logo", {
      y: 0,
      duration: 0.4,
      delay: 0.25,
    })
    .to("#login-description", {
      opacity: 1,
      duration: 0.2,
      delay: 0.2,
    })
    .to("#car-wash-illustration", {
      scale: 0,
    })
    .to("#car-wash-illustration", {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      delay: 0.15,
    })
    .to("#login-input-data-container", {
      opacity: 1,
      duration: 0.2,
      delay: 0.2,
    })
    .to("#cursor", {
      opacity: 1,
      duration: 0.3,
    })
    .to("#cursor", {
      y: 80,
      duration: 0.6,
    })
    .to(
      "#cursor",
      {
        x: -210,
        duration: 0.3,
      },
      "<"
    )
    .to("#login-input-placeholder", {
      opacity: 0,
      duration: 0.2,
      delay: 0.4,
    })
    .to("#login-input-text", {
      filter: "blur(4px)",
    })
    .to(".login-input-text", {
      opacity: 1,
      duration: 0.2,
      delay: 0.1,
      stagger: 0.15,
    })
    .to("#cursor", {
      x: -100,
      duration: 0.6,
    })
    .to(
      "#cursor",
      {
        y: 200,
        duration: 0.3,
      },
      "<"
    )
    .to("#login-phone-continue-button", hoverEffect, "-=0.15")
    .to("#login-otp-data-container", {
      x: 500,
    })
    .to(".otp-from-sms", {
      opacity: 0,
    })
    .to("#login-input-data-container", {
      x: -500,
      duration: 0.5,
      delay: 0.2,
    })
    .to("#login-otp-data-container", {
      x: 0,
      opacity: 1,
      duration: 0.5,
    })
    .add(startOtpTimer)
    .to(".otp-from-sms", {
      opacity: 1,
      duration: 0.3,
      stagger: 0.15,
      delay: 1,
    })
    .to("#cursor", {
      y: 160,
      duration: 0.3,
    })
    .to("#login-otp-continue-button", hoverEffect, "-=0.15")
    .to("#service-selection-page", {
      opacity: 1,
    })
    .to("#login-page", {
      opacity: 0,
      duration: 0.5,
    })
    .to(
      "#cursor",
      {
        opacity: 0,
        duration: 0.3,
      },
      "<"
    );

  timeline
    .to(".map-loading-circle", {
      attr: {
        r: 200,
      },
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      repeat: 1,
      delay: 0.1,
    })
    .to(
      ".service-marker",
      {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      },
      "-=0.3"
    )
    .to("#map-loading-pin", { opacity: 0, duration: 0.3 }, "<")
    .to("#cursor", {
      opacity: 1,
      duration: 0.3,
    })
    .to("#cursor", {
      x: -55,
      duration: 1,
    })
    .to(
      "#cursor",
      {
        y: -310,
        duration: 0.4,
      },
      "<"
    )
    .to("#service-selected-container", {
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
    })
    .to("#cursor", {
      x: -90,
      duration: 1,
    })
    .to(
      "#cursor",
      {
        y: 120,
        duration: 0.5,
      },
      "<"
    )
    .to("#book-now-button", hoverEffect, "-=0.15")
    .to("#order-details-page", {
      opacity: 1,
    })
    .to("#service-selection-page", {
      opacity: 0,
      duration: 0.5,
      delay: 0.3,
    })
    .to("#cursor", {
      y: 210,
      duration: 0.3,
      delay: 0.5,
    })
    .to("#order-pay-now", hoverEffect, "-=0.15");

  timeline
    .to("#loading-page", { opacity: 1 })
    .to("#cursor", {
      opacity: 0,
      duration: 0.3,
    })
    .to(
      "#order-details-page",
      {
        opacity: 0,
        duration: 0.6,
        delay: 0.3,
      },
      "<"
    )
    .to("#stripe-page", { opacity: 1, duration: 0.6 })
    .to("#cursor", {
      opacity: 1,
      duration: 0.3,
    })
    .to("#cursor", {
      x: -330,
      duration: 1,
      delay: 0.3,
    })
    .to(
      "#cursor",
      {
        y: -280,
        duration: 0.4,
      },
      "<"
    )
    .to(".stripe-email", {
      opacity: 1,
      duration: 0.1,
      delay: 0.1,
      stagger: 0.1,
    })
    .to("#cursor", {
      y: -190,
      duration: 0.3,
    })
    .to(".card-number", {
      opacity: 1,
      duration: 0.1,
      stagger: 0.1,
      delay: 0.1,
    })
    .to(
      "#Cards",
      {
        opacity: 1,
        duration: 0.3,
      },
      "-=1"
    )
    .to("#cursor", {
      y: -150,
      duration: 0.3,
    })
    .to(".card-expiry", {
      opacity: 1,
      duration: 0.2,
      stagger: 0.2,
      delay: 0.1,
    })
    .to("#cursor", {
      x: -165,
      duration: 0.3,
    })
    .to(".cvc", {
      opacity: 1,
      duration: 0.1,
      stagger: 0.1,
      delay: 0.1,
    })
    .to("#cursor", {
      x: -330,
      duration: 1,
      delay: 0.3,
    })
    .to(
      "#cursor",
      {
        y: -60,
        duration: 0.4,
      },
      "<"
    )
    .to(".card-name", {
      opacity: 1,
      duration: 0.1,
      stagger: 0.1,
      delay: 0.1,
    })
    .to("#cursor", {
      x: -110,
      duration: 1,
      delay: 0.3,
    })
    .to(
      "#cursor",
      {
        y: 135,
        filter: "brightness(5)",
        duration: 0.4,
      },
      "<"
    )
    .to("#pay-button", hoverEffect, "-=0.15")
    .to("#stripe-page", { opacity: 0, duration: 0.4, delay: 0.2 })
    .to(
      "#cursor",
      {
        opacity: 0,
        filter: "none",
        duration: 0.4,
      },
      "<"
    )
    .to("#success-page", {
      opacity: 1,
      duration: 0.4,
      delay: 0.3,
    });

  timeline
    .to("#success-icon-check", {
      strokeDasharray: successCheckPathLength,
      strokeDashoffset: -successCheckPathLength + 1,
    })
    .to("#success-icon-circle", {
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
    })
    .to("#success-icon-check", {
      opacity: 1,
      duration: 0.1,
    })
    .to(
      "#success-icon-check",
      {
        strokeDashoffset: 0,
        duration: 0.3,
      },
      "<"
    )
    .to("#success-message-container", {
      opacity: 1,
      duration: 0.3,
      delay: 0.1,
    })
    .to("#schedule-booking-container", {
      opacity: 1,
      duration: 0.3,
      delay: 0.1,
    })
    .to("#success-page-btn", {
      opacity: 1,
      duration: 0.3,
      delay: 0.1,
    });
});
</script>

<template>
  <div class="animated-svg-container">
    <svg
      width="424"
      height="901"
      viewBox="0 0 424 901"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="phone-frame">
        <g id="phone">
          <g id="phone-elements">
            <g id="phone-inputs">
              <path
                id="phone-outer-frame"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M54.2454 0H369.755C397.879 0 420.679 22.7996 420.679 50.9243V849.107C420.679 877.232 397.879 900.031 369.755 900.031H54.2454C26.1207 900.031 3.32117 877.232 3.32117 849.107V50.9243C3.32117 22.7996 26.1207 0 54.2454 0Z"
                fill="#DEDEDE"
              />
              <path
                id="phone-inner-frame"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M50.9243 5.53528H373.076C398.143 5.53528 418.465 25.8566 418.465 50.9243V849.107C418.465 874.175 398.143 894.496 373.076 894.496H50.9243C25.8566 894.496 5.53528 874.175 5.53528 849.107V50.9243C5.53528 25.8566 25.8566 5.53528 50.9243 5.53528Z"
                fill="white"
              />
              <rect
                id="bottom-left-input"
                x="53.1384"
                y="894.496"
                width="9.96345"
                height="5.53525"
                fill="white"
              />
              <path
                id="bottom-right-input"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M360.898 894.496H370.862V900.031H360.898V894.496Z"
                fill="white"
              />
              <rect
                id="top-left-input"
                x="53.1384"
                width="9.96345"
                height="5.53525"
                fill="white"
              />
              <path
                id="top-right-input"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M360.898 0H370.862V5.53525H360.898V0Z"
                fill="white"
              />
            </g>
            <g id="phone-buttons">
              <path
                id="volume-rockers"
                d="M0 147.791C0 145.957 1.48693 144.47 3.32115 144.47V262.924C1.48693 262.924 0 261.437 0 259.603V147.791Z"
                fill="#DEDEDE"
              />
              <path
                id="power-button"
                d="M0 310.527C0 308.693 1.48693 307.206 3.32115 307.206V373.629C1.48693 373.629 0 372.142 0 370.308V310.527Z"
                fill="#DEDEDE"
              />
              <path
                id="sim-slot"
                d="M420.679 239.123C422.513 239.123 424 240.61 424 242.444V303.332C424 305.166 422.513 306.653 420.679 306.653V239.123Z"
                fill="#DEDEDE"
              />
            </g>
            <g id="phone-inner-elements">
              <path
                id="Rectangle 21"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M187.645 21.5875H237.462C239.602 21.5875 241.337 23.3223 241.337 25.4622C241.337 27.6021 239.602 29.3369 237.462 29.3369H187.645C185.505 29.3369 183.77 27.6021 183.77 25.4622C183.77 23.3223 185.505 21.5875 187.645 21.5875Z"
                fill="#DEDEDE"
              />
              <path
                id="Oval 3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M289.493 35.9792C294.079 35.9792 297.796 32.2618 297.796 27.6763C297.796 23.0907 294.079 19.3734 289.493 19.3734C284.908 19.3734 281.191 23.0907 281.191 27.6763C281.191 32.2618 284.908 35.9792 289.493 35.9792Z"
                fill="#DEDEDE"
              />
            </g>
          </g>
          <g id="screen">
            <g id="loading-page">
              <path
                id="screen-placeholder"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.7283 43.7285H380.271C397.391 43.7285 411.269 57.6065 411.269 74.7259V831.948C411.269 849.067 397.391 862.945 380.271 862.945H43.7283C26.609 862.945 12.731 849.067 12.731 831.948V74.7259C12.731 57.6065 26.609 43.7285 43.7283 43.7285Z"
                fill="url(#paint0_linear_0_1)"
                fill-opacity="0.25"
              />
              <g id="loading-clock">
                <path
                  id="loading-clock-outer-ring"
                  d="M212 416.333C204.748 416.333 197.659 418.484 191.629 422.513C185.599 426.542 180.9 432.268 178.124 438.968C175.349 445.668 174.623 453.041 176.038 460.153C177.453 467.266 180.945 473.799 186.073 478.927C191.201 484.055 197.734 487.547 204.847 488.962C211.959 490.377 219.332 489.651 226.032 486.876C232.732 484.1 238.458 479.401 242.487 473.371C246.516 467.341 248.667 460.252 248.667 453C248.667 443.275 244.804 433.949 237.927 427.073C231.051 420.196 221.725 416.333 212 416.333ZM212 483C206.067 483 200.266 481.241 195.333 477.944C190.399 474.648 186.554 469.962 184.284 464.481C182.013 458.999 181.419 452.967 182.576 447.147C183.734 441.328 186.591 435.982 190.787 431.787C194.982 427.591 200.328 424.734 206.147 423.576C211.967 422.419 217.999 423.013 223.48 425.284C228.962 427.554 233.648 431.399 236.944 436.333C240.241 441.266 242 447.067 242 453C242 460.957 238.839 468.587 233.213 474.213C227.587 479.839 219.956 483 212 483Z"
                  fill="url(#paint1_linear_0_1)"
                />
                <path
                  id="hour-hand-loading-clock"
                  d="M215.333 436.333C215.333 434.492 213.841 433 212 433C210.159 433 208.667 434.492 208.667 436.333V453C208.667 454.841 210.159 456.333 212 456.333C213.841 456.333 215.333 454.841 215.333 453V436.333Z"
                  fill="url(#paint2_linear_0_1)"
                />
                <path
                  id="minute-hand-loading-clock"
                  d="M215.333 453C215.333 451.159 213.841 449.667 212 449.667C210.159 449.667 208.667 451.159 208.667 453V476.333C208.667 478.174 210.159 479.667 212 479.667C213.841 479.667 215.333 478.174 215.333 476.333V453Z"
                  fill="url(#paint3_linear_0_1)"
                />
              </g>
            </g>
            <g id="success-page" clip-path="url(#clip0_0_1)">
              <path
                id="screen-placeholder_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.7283 43.7285H380.271C397.391 43.7285 411.269 57.6065 411.269 74.7259V831.948C411.269 849.067 397.391 862.945 380.271 862.945H43.7283C26.609 862.945 12.731 849.067 12.731 831.948V74.7259C12.731 57.6065 26.609 43.7285 43.7283 43.7285Z"
                fill="#F3F3F3"
              />
              <g id="success-page-btn">
                <rect
                  x="29"
                  y="781"
                  width="365"
                  height="48"
                  rx="10"
                  fill="#13C1FF"
                />
                <text
                  id="success-page-btn-done"
                  fill="white"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Montserrat"
                  font-size="20"
                  font-weight="600"
                  letter-spacing="0.2px"
                >
                  <tspan x="183.417" y="812.17">Done</tspan>
                </text>
              </g>
              <g id="schedule-booking-container">
                <g id="Group 3">
                  <g id="Group 6">
                    <text
                      id="- $1.50"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="12"
                      letter-spacing="0.2px"
                    >
                      <tspan x="39" y="574.302">
                        Exxon Mobil Car Wash Services
                      </tspan>
                    </text>
                  </g>
                  <text
                    id="Service Provider"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="39" y="547.736">Service Provider</tspan>
                  </text>
                </g>
                <g id="Group 22">
                  <g id="Group 6_2">
                    <text
                      id="- $1.50_2"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="12"
                      letter-spacing="0.2px"
                    >
                      <tspan x="39" y="719.302">$13.50 (Paid by Card)</tspan>
                    </text>
                  </g>
                  <text
                    id="Price"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="39" y="692.736">Price</tspan>
                  </text>
                </g>
                <g id="Group 2">
                  <text
                    id="Near Auckland Netball Centre, Auckland, New Zealand"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="12"
                    letter-spacing="0.2px"
                  >
                    <tspan x="39" y="648.302">
                      Near Auckland Netball Centre, Auckland, New Zealand
                    </tspan>
                  </text>
                  <text
                    id="Address"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="39" y="623.736">Address</tspan>
                  </text>
                </g>
                <g id="Group 21">
                  <text
                    id="Tomorrow, 16:30"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="12"
                    letter-spacing="0.2px"
                  >
                    <tspan x="39" y="499.302">Tomorrow, 16:30</tspan>
                  </text>
                  <text
                    id="Appointment"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="39" y="472.736">Appointment</tspan>
                  </text>
                </g>
              </g>
              <g id="success-page-header">
                <path
                  id="Rectangle 22"
                  d="M13 80C13 60.1178 29.1178 44 49 44H375C394.882 44 411 60.1178 411 80V426H13V80Z"
                  fill="url(#paint4_linear_0_1)"
                />
                <g id="success-page-header-details">
                  <g id="success-icon">
                    <path
                      id="success-icon-circle"
                      d="M248.452 131.216C250.2 129.141 249.944 126.025 247.737 124.449C237.824 117.371 225.997 113.373 213.748 113.025C199.857 112.63 186.241 116.951 175.12 125.285C164 133.618 156.029 145.472 152.507 158.915C148.986 172.358 150.121 186.598 155.728 199.313C161.335 212.029 171.083 222.47 183.383 228.937C195.684 235.403 209.812 237.513 223.465 234.922C237.118 232.331 249.491 225.193 258.568 214.67C266.572 205.391 271.597 193.963 273.057 181.87C273.382 179.177 271.253 176.887 268.543 176.778C265.832 176.669 263.571 178.783 263.205 181.471C261.861 191.344 257.684 200.657 251.13 208.254C243.503 217.096 233.106 223.094 221.634 225.271C210.161 227.448 198.29 225.675 187.954 220.242C177.618 214.808 169.427 206.034 164.716 195.35C160.004 184.665 159.051 172.7 162.01 161.404C164.969 150.109 171.666 140.148 181.011 133.145C190.356 126.143 201.796 122.512 213.469 122.844C223.498 123.129 233.191 126.326 241.387 131.992C243.618 133.535 246.705 133.291 248.452 131.216Z"
                      fill="white"
                    />
                    <path
                      id="success-icon-check"
                      d="M273.5 132.197L213.378 192.63L186.049 165.16"
                      stroke="white"
                      stroke-width="20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <g id="success-message-container">
                    <text
                      id="success-message-title"
                      fill="white"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="24"
                      font-weight="bold"
                      letter-spacing="0em"
                    >
                      <tspan x="88.5" y="289.104">Booking Confirmed</tspan>
                    </text>
                    <text
                      id="success-message-details"
                      fill="white"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      font-weight="500"
                      letter-spacing="0em"
                    >
                      <tspan x="75.0967" y="325.519">
                        Your transaction is successfully
                      </tspan>
                      <tspan x="74.3037" y="346.519">
                        completed and your booking is confirmed.
                      </tspan>
                      <tspan x="123.584" y="367.519">Details below</tspan>
                    </text>
                  </g>
                </g>
              </g>
            </g>
            <g id="stripe-page" clip-path="url(#clip1_0_1)">
              <path
                id="screen-placeholder_3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.7283 43.7285H380.271C397.391 43.7285 411.269 57.6065 411.269 74.7259V831.948C411.269 849.067 397.391 862.945 380.271 862.945H43.7283C26.609 862.945 12.731 849.067 12.731 831.948V74.7259C12.731 57.6065 26.609 43.7285 43.7283 43.7285Z"
                fill="#F3F3F3"
              />
              <g id="Frame 12">
                <g id="Group 19">
                  <g
                    id="svgexport-1"
                    clip-path="url(#clip2_0_1)"
                    style="transform: translateX(6px)"
                  >
                    <path
                      id="Vector"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M264.045 812.233C264.045 809.841 262.872 807.953 260.631 807.953C258.38 807.953 257.018 809.841 257.018 812.215C257.018 815.028 258.626 816.448 260.933 816.448C262.059 816.448 262.91 816.196 263.553 815.841V813.972C262.91 814.289 262.172 814.486 261.236 814.486C260.319 814.486 259.505 814.168 259.401 813.065H264.026C264.026 812.944 264.045 812.458 264.045 812.233ZM259.373 811.346C259.373 810.29 260.026 809.85 260.621 809.85C261.198 809.85 261.813 810.29 261.813 811.346H259.373Z"
                      fill="#8792A2"
                    />
                    <path
                      id="Vector_2"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M253.368 807.953C252.441 807.953 251.845 808.383 251.515 808.682L251.392 808.103H249.311V819L251.675 818.504L251.685 815.86C252.025 816.102 252.526 816.448 253.359 816.448C255.051 816.448 256.593 815.103 256.593 812.14C256.583 809.43 255.023 807.953 253.368 807.953ZM252.801 814.392C252.243 814.392 251.912 814.196 251.685 813.953L251.675 810.486C251.921 810.215 252.262 810.028 252.801 810.028C253.661 810.028 254.257 810.981 254.257 812.205C254.257 813.458 253.671 814.392 252.801 814.392Z"
                      fill="#8792A2"
                    />
                    <path
                      id="Vector_3"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M246.058 807.402L248.431 806.897V805L246.058 805.495V807.402Z"
                      fill="#8792A2"
                    />
                    <path
                      id="Vector_4"
                      d="M248.431 808.112H246.058V816.289H248.431V808.112Z"
                      fill="#8792A2"
                    />
                    <path
                      id="Vector_5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M243.514 808.803L243.363 808.112H241.32V816.289H243.684V810.747C244.242 810.028 245.188 810.159 245.481 810.261V808.112C245.178 808 244.072 807.794 243.514 808.803Z"
                      fill="#8792A2"
                    />
                    <path
                      id="Vector_6"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M238.786 806.084L236.478 806.57L236.469 814.056C236.469 815.439 237.518 816.458 238.918 816.458C239.693 816.458 240.261 816.318 240.573 816.149V814.252C240.27 814.374 238.776 814.804 238.776 813.42V810.103H240.573V808.112H238.776L238.786 806.084Z"
                      fill="#8792A2"
                    />
                    <path
                      id="Vector_7"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M232.393 810.486C232.393 810.121 232.695 809.981 233.196 809.981C233.915 809.981 234.823 810.196 235.542 810.579V808.383C234.757 808.075 233.981 807.953 233.196 807.953C231.277 807.953 230 808.944 230 810.598C230 813.177 233.594 812.766 233.594 813.878C233.594 814.308 233.215 814.448 232.686 814.448C231.901 814.448 230.898 814.131 230.104 813.701V815.925C230.984 816.299 231.872 816.458 232.686 816.458C234.653 816.458 236.005 815.495 236.005 813.822C235.996 811.037 232.393 811.533 232.393 810.486Z"
                      fill="#8792A2"
                    />
                  </g>
                  <text
                    id="Powered by"
                    fill="#8792A2"
                    xml:space="preserve"
                    style="white-space: pre; transform: translateX(-4px)"
                    font-family="Montserrat"
                    font-size="12"
                    letter-spacing="0.015em"
                  >
                    <tspan x="160" y="816.266">Powered by</tspan>
                  </text>
                </g>
                <g id="Group 20">
                  <text
                    id="Terms"
                    fill="#8792A2"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="12"
                    letter-spacing="0.015em"
                  >
                    <tspan x="163" y="842.266">Terms</tspan>
                  </text>
                  <text
                    id="Privacy"
                    fill="#8792A2"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="12"
                    letter-spacing="0.015em"
                  >
                    <tspan x="220" y="842.266">Privacy</tspan>
                  </text>
                </g>
              </g>
              <g id="Pay Form">
                <g id="Group 4">
                  <text
                    id="Or pay with card"
                    fill="#8792A2"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    letter-spacing="0em"
                  >
                    <tspan x="157.296" y="211.688">Or pay with card</tspan>
                  </text>
                  <line
                    id="Line 2"
                    x1="25"
                    y1="205.5"
                    x2="149.076"
                    y2="205.5"
                    stroke="#3C4257"
                    stroke-opacity="0.12"
                  />
                  <line
                    id="Line 3"
                    x1="274.038"
                    y1="205.5"
                    x2="399"
                    y2="205.5"
                    stroke="#3C4257"
                    stroke-opacity="0.12"
                  />
                </g>
                <g id="Text Input">
                  <text
                    id="Email"
                    fill="#697386"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="14"
                    letter-spacing="0.005em"
                  >
                    <tspan x="25" y="244.977">Email</tspan>
                  </text>
                  <g id="Backplate" filter="url(#filter0_dd_0_1)">
                    <rect
                      x="25"
                      y="259"
                      width="374"
                      height="40"
                      rx="10"
                      fill="white"
                    />
                    <text
                      id="johndoe@example.com"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="16"
                      font-weight="500"
                      letter-spacing="0em"
                    >
                      <tspan x="37.3594" y="284.736">
                        <a href="mailto:johndoe@example.com">
                          <tspan class="stripe-email">j</tspan>
                          <tspan class="stripe-email">o</tspan>
                          <tspan class="stripe-email">h</tspan>
                          <tspan class="stripe-email">n</tspan>
                          <tspan class="stripe-email">d</tspan>
                          <tspan class="stripe-email">o</tspan>
                          <tspan class="stripe-email">e</tspan>
                          <tspan class="stripe-email">@</tspan>
                          <tspan class="stripe-email">e</tspan>
                          <tspan class="stripe-email">x</tspan>
                          <tspan class="stripe-email">a</tspan>
                          <tspan class="stripe-email">m</tspan>
                          <tspan class="stripe-email">p</tspan>
                          <tspan class="stripe-email">l</tspan>
                          <tspan class="stripe-email">e</tspan>
                          <tspan class="stripe-email">.com</tspan>
                        </a>
                      </tspan>
                    </text>
                    <rect
                      x="25.5"
                      y="259.5"
                      width="373"
                      height="39"
                      rx="9.5"
                      stroke="#3C4257"
                      stroke-opacity="0.12"
                    />
                  </g>
                </g>
                <g
                  id="Frame 6"
                  clip-path="url(#clip3_0_1)"
                  filter="url(#filter1_dd_0_1)"
                >
                  <g id="Text Input_2">
                    <text
                      id="Country or region"
                      fill="#697386"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      letter-spacing="0.005em"
                    >
                      <tspan x="25" y="335.977">Country or region</tspan>
                    </text>
                    <g id="Backplate_2" filter="url(#filter2_dd_0_1)">
                      <path
                        d="M25 360C25 354.477 29.4772 350 35 350H389C394.523 350 399 354.477 399 360V390H25V360Z"
                        fill="white"
                      />
                      <g id="Frame 10">
                        <text
                          id="4242 4242 4242 42424"
                          fill="#202020"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="16"
                          font-weight="500"
                          letter-spacing="0em"
                        >
                          <tspan x="37.3281" y="375.736">
                            <tspan class="card-number">4</tspan>
                            <tspan class="card-number">2</tspan>
                            <tspan class="card-number">4</tspan>
                            <tspan class="card-number">2&nbsp;</tspan>
                            <tspan class="card-number">4</tspan>
                            <tspan class="card-number">2</tspan>
                            <tspan class="card-number">4</tspan>
                            <tspan class="card-number">2&nbsp;</tspan>
                            <tspan class="card-number">4</tspan>
                            <tspan class="card-number">2</tspan>
                            <tspan class="card-number">4</tspan>
                            <tspan class="card-number">2&nbsp;</tspan>
                            <tspan class="card-number">4</tspan>
                            <tspan class="card-number">2</tspan>
                            <tspan class="card-number">4</tspan>
                            <tspan class="card-number">2</tspan>
                          </tspan>
                        </text>
                      </g>
                      <path
                        d="M25.5 360C25.5 354.753 29.7533 350.5 35 350.5H389C394.247 350.5 398.5 354.753 398.5 360V389.5H25.5V360Z"
                        stroke="#3C4257"
                        stroke-opacity="0.12"
                      />
                    </g>
                  </g>
                  <g id="Cards">
                    <g id="Visa" clip-path="url(#clip4_0_1)">
                      <g id="319">
                        <g id="New Icons">
                          <g id="Card Brands">
                            <g id="Color">
                              <g id="Visa_2">
                                <path
                                  id="Container"
                                  d="M384.375 362.292H361.625C360.336 362.292 359.292 363.34 359.292 364.633V378.089C359.292 379.382 360.336 380.43 361.625 380.43H384.375C385.664 380.43 386.708 379.382 386.708 378.089V364.633C386.708 363.34 385.664 362.292 384.375 362.292Z"
                                  fill="white"
                                  stroke="black"
                                  stroke-opacity="0.2"
                                  stroke-width="0.5"
                                />
                                <path
                                  id="Shape"
                                  d="M362.252 368.921C361.642 368.585 360.945 368.315 360.167 368.127L360.199 367.982H363.392C363.825 367.997 364.176 368.127 364.291 368.589L364.985 371.907L365.197 372.906L367.141 367.982H369.24L366.12 375.196H364.021L362.252 368.921ZM370.783 375.204H368.799L370.04 367.982H372.025L370.783 375.204ZM377.978 368.158L377.708 369.718L377.528 369.641C377.169 369.495 376.695 369.349 376.05 369.364C375.267 369.364 374.915 369.679 374.907 369.987C374.907 370.325 375.332 370.548 376.026 370.878C377.17 371.393 377.7 372.023 377.692 372.845C377.676 374.343 376.32 375.311 374.238 375.311C373.348 375.304 372.49 375.127 372.024 374.927L372.302 373.306L372.564 373.421C373.209 373.69 373.633 373.805 374.426 373.805C374.997 373.805 375.61 373.582 375.618 373.098C375.618 372.783 375.357 372.553 374.589 372.199C373.837 371.853 372.833 371.277 372.849 370.24C372.858 368.834 374.238 367.851 376.198 367.851C376.966 367.851 377.586 368.012 377.978 368.158ZM380.616 372.645H382.265C382.184 372.284 381.808 370.555 381.808 370.555L381.669 369.933C381.571 370.202 381.4 370.64 381.408 370.624C381.408 370.624 380.779 372.23 380.616 372.645ZM383.066 367.982L384.667 375.204H382.829C382.829 375.204 382.649 374.374 382.592 374.12H380.044C379.97 374.312 379.628 375.204 379.628 375.204H377.545L380.493 368.581C380.697 368.112 381.057 367.982 381.53 367.982H383.066Z"
                                  fill="#171E6C"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g
                    id="Frame 7"
                    clip-path="url(#clip5_0_1)"
                    filter="url(#filter3_dd_0_1)"
                  >
                    <g id="Frame 11">
                      <g id="Backplate_3">
                        <path
                          d="M25 389H235.999V429H35C29.4771 429 25 424.523 25 419V389Z"
                          fill="white"
                        />
                        <g id="Frame 10_2">
                          <text
                            id="11/27"
                            fill="#202020"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="16"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="37.2812" y="415.736">
                              <tspan class="card-expiry">1</tspan>
                              <tspan class="card-expiry">1/</tspan>
                              <tspan class="card-expiry">2</tspan>
                              <tspan class="card-expiry">0</tspan>
                              <tspan class="card-expiry">2</tspan>
                              <tspan class="card-expiry">7</tspan>
                            </tspan>
                          </text>
                        </g>
                        <path
                          d="M25.5 389.5H235.499V428.5H35C29.7533 428.5 25.5 424.247 25.5 419V389.5Z"
                          stroke="#3C4257"
                          stroke-opacity="0.12"
                        />
                      </g>
                      <g id="Backplate_4">
                        <path
                          d="M188.999 389H398.999V419C398.999 424.523 394.522 429 388.999 429H188.999V389Z"
                          fill="white"
                        />
                        <g id="Frame 10_3">
                          <g
                            id="&#226;&#154;&#171; &#226;&#154;&#171; &#226;&#154;&#171;"
                          >
                            <text
                              fill="#202020"
                              xml:space="preserve"
                              style="white-space: pre"
                              font-family="Montserrat"
                              font-size="6"
                              font-weight="500"
                              letter-spacing="0em"
                            >
                              <tspan x="201.387" y="412.151">
                                <tspan class="cvc">&#x26ab;&nbsp;</tspan>
                                <tspan class="cvc">&#x26ab;&nbsp;</tspan>
                                <tspan class="cvc">&#x26ab;&nbsp;</tspan>
                              </tspan>
                            </text>
                          </g>
                        </g>
                        <path
                          d="M189.499 389.5H398.499V419C398.499 424.247 394.246 428.5 388.999 428.5H189.499V389.5Z"
                          stroke="#3C4257"
                          stroke-opacity="0.12"
                        />
                      </g>
                    </g>
                    <g id="CVC Card">
                      <g id="Group 2_2">
                        <g id="Frame" clip-path="url(#clip6_0_1)">
                          <path
                            id="shape"
                            opacity="0.2"
                            d="M381.009 401.567H366.55C365.874 401.567 365.08 402.346 365.08 403.037V414.057C365.08 414.748 365.874 415.527 366.55 415.527H384.917C385.593 415.527 386.387 414.748 386.387 414.057V408.525C385.768 409.082 385.003 409.451 384.182 409.59V409.649C384.182 410.134 383.918 410.384 383.448 410.384H367.285C366.814 410.384 366.55 410.134 366.55 409.649V408.914C366.55 408.429 366.814 408.18 367.285 408.18H380.164C379.74 407.71 379.422 407.154 379.233 406.549C379.044 405.945 378.987 405.307 379.067 404.679C379.148 404.052 379.363 403.448 379.698 402.911C380.033 402.374 380.48 401.916 381.009 401.567V401.567Z"
                            fill="#697386"
                          />
                          <path
                            id="shape_2"
                            d="M379.289 403.771H365.08V405.976H379.098C378.975 405.237 379.041 404.478 379.289 403.771Z"
                            fill="#697386"
                          />
                        </g>
                        <path
                          id="Vector_8"
                          d="M383.893 410.286C382.532 410.286 381.227 409.744 380.265 408.779C379.303 407.815 378.762 406.507 378.762 405.143C378.762 403.779 379.303 402.471 380.265 401.506C381.227 400.542 382.532 400 383.893 400C385.254 400 386.559 400.542 387.521 401.506C388.483 402.471 389.024 403.779 389.024 405.143C389.024 406.507 388.483 407.815 387.521 408.779C386.559 409.744 385.254 410.286 383.893 410.286ZM381.855 403.012H381.276L379.862 403.732V404.467L380.983 403.879V407.273H381.863V403.012H381.855ZM383.541 403.6C383.959 403.6 384.252 403.835 384.252 404.173C384.252 404.54 383.908 404.798 383.409 404.798H383.189V405.422H383.453C383.981 405.422 384.34 405.687 384.34 406.069C384.34 406.436 383.988 406.686 383.49 406.686C383.123 406.686 382.757 406.568 382.376 406.34V407.075C382.786 407.251 383.197 407.347 383.6 407.347C384.56 407.347 385.22 406.855 385.22 406.142C385.22 405.642 384.912 405.238 384.399 405.077C384.838 404.93 385.124 404.54 385.124 404.1C385.124 403.409 384.516 402.939 383.636 402.939C383.24 402.943 382.848 403.028 382.486 403.189V403.909C382.837 403.71 383.197 403.6 383.541 403.6ZM386.707 405.202C387.243 405.202 387.616 405.518 387.616 405.929C387.616 406.362 387.243 406.664 386.707 406.664C386.385 406.664 386.048 406.561 385.703 406.348V407.104C386.062 407.266 386.429 407.347 386.788 407.347C386.979 407.347 387.155 407.318 387.323 407.273C387.704 406.649 387.924 405.929 387.924 405.158L387.909 404.849C387.637 404.687 387.325 404.606 387.008 404.614C386.876 404.614 386.737 404.621 386.59 404.643V403.688H387.646C387.554 403.453 387.441 403.227 387.308 403.012H385.828V405.327C386.121 405.253 386.414 405.202 386.707 405.202Z"
                          fill="#697386"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g id="Text Input_3">
                  <text
                    id="Name on card"
                    fill="#697386"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="14"
                    letter-spacing="0.005em"
                  >
                    <tspan x="25" y="465.977">Name on card</tspan>
                  </text>
                  <g id="Backplate_5" filter="url(#filter4_dd_0_1)">
                    <rect
                      x="25"
                      y="480"
                      width="374"
                      height="40"
                      rx="10"
                      fill="white"
                    />
                    <text
                      id="John Doe"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="16"
                      font-weight="500"
                      letter-spacing="0em"
                    >
                      <tspan x="37.1953" y="505.736">
                        <tspan class="card-name">J</tspan>
                        <tspan class="card-name">o</tspan>
                        <tspan class="card-name">h</tspan>
                        <tspan class="card-name">n&nbsp;</tspan>
                        <tspan class="card-name">D</tspan>
                        <tspan class="card-name">o</tspan>
                        <tspan class="card-name">e</tspan>
                      </tspan>
                    </text>
                    <rect
                      x="25.5"
                      y="480.5"
                      width="373"
                      height="39"
                      rx="9.5"
                      stroke="#3C4257"
                      stroke-opacity="0.12"
                    />
                  </g>
                </g>
                <g id="Group 5">
                  <g id="Text Input_4">
                    <text
                      id="Country or region_2"
                      fill="#697386"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      letter-spacing="0.005em"
                    >
                      <tspan x="25" y="556.977">Country or region</tspan>
                    </text>
                    <g id="Backplate_6" filter="url(#filter5_dd_0_1)">
                      <path
                        d="M25 581C25 575.477 29.4772 571 35 571H389C394.523 571 399 575.477 399 581V611H25V581Z"
                        fill="white"
                      />
                      <g id="Frame 10_4">
                        <text
                          id="Text"
                          fill="#1A1F36"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="16"
                          font-weight="500"
                          letter-spacing="0.005em"
                        >
                          <tspan x="37" y="596.736">New Zealand</tspan>
                        </text>
                        <g id="Icons/Chevron">
                          <path
                            id="Vector_9"
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M384.892 587.757C385.234 587.414 385.788 587.414 386.13 587.757C386.472 588.099 386.472 588.653 386.13 588.995L380.618 594.507C380.276 594.849 379.722 594.849 379.381 594.507L373.868 588.995C373.526 588.653 373.526 588.099 373.868 587.757C374.21 587.414 374.765 587.414 375.107 587.757L379.999 592.649L384.892 587.757Z"
                            fill="#1A1F36"
                          />
                        </g>
                      </g>
                      <path
                        d="M25.5 581C25.5 575.753 29.7533 571.5 35 571.5H389C394.247 571.5 398.5 575.753 398.5 581V610.5H25.5V581Z"
                        stroke="#3C4257"
                        stroke-opacity="0.12"
                      />
                    </g>
                  </g>
                  <g id="Backplate_7" filter="url(#filter6_dd_0_1)">
                    <path
                      d="M25 610H399V640C399 645.523 394.523 650 389 650H35C29.4772 650 25 645.523 25 640V610Z"
                      fill="white"
                    />
                    <g id="Frame 10_5">
                      <text
                        id="Text_2"
                        fill="#202020"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="500"
                        letter-spacing="0.005em"
                      >
                        <tspan x="37" y="635.736">1023</tspan>
                      </text>
                    </g>
                    <path
                      d="M25.5 610.5H398.5V640C398.5 645.247 394.247 649.5 389 649.5H35C29.7533 649.5 25.5 645.247 25.5 640V610.5Z"
                      stroke="#3C4257"
                      stroke-opacity="0.12"
                    />
                  </g>
                </g>
                <g id="pay-button" filter="url(#filter7_ddd_0_1)">
                  <rect
                    x="25"
                    y="671"
                    width="374"
                    height="48"
                    rx="10"
                    fill="black"
                  />
                  <text
                    id="pay-button-text"
                    transform="translate(157 683)"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="18"
                    font-weight="600"
                    letter-spacing="0em"
                  >
                    <tspan x="2.46777" y="18.453">Pay $13.50</tspan>
                  </text>
                  <g id="pay-button-spinner">
                    <path
                      id="pay-button-spinner-path"
                      d="M220.112 695.07C220.652 695.07 221.094 694.632 221.036 694.095C220.551 689.601 216.745 686.102 212.121 686.102C207.498 686.102 203.691 689.601 203.205 694.095C203.147 694.632 203.59 695.07 204.129 695.07C204.669 695.07 205.098 694.631 205.173 694.097C205.647 690.683 208.577 688.055 212.121 688.055C215.665 688.055 218.595 690.683 219.069 694.097C219.143 694.631 219.573 695.07 220.112 695.07Z"
                      fill="white"
                    />
                  </g>
                </g>
                <g id="Apple or Google Pay Button">
                  <g id="Property 1=Apple Pay">
                    <g id="Main Button" filter="url(#filter8_ddd_0_1)">
                      <rect
                        x="229"
                        y="109"
                        width="154.2"
                        height="48"
                        rx="4"
                        fill="black"
                      />
                      <g id="Apple Pay" clip-path="url(#clip7_0_1)">
                        <path
                          id="XMLID 34"
                          d="M287.64 124.094C286.958 124.905 285.866 125.544 284.775 125.453C284.639 124.357 285.173 123.192 285.798 122.473C286.48 121.639 287.674 121.046 288.64 121C288.754 122.142 288.31 123.261 287.64 124.094ZM288.629 125.67C287.049 125.578 285.696 126.572 284.946 126.572C284.184 126.572 283.036 125.716 281.786 125.738C280.16 125.761 278.648 126.686 277.818 128.159C276.113 131.105 277.375 135.466 279.023 137.864C279.83 139.051 280.797 140.353 282.07 140.307C283.275 140.262 283.752 139.52 285.207 139.52C286.673 139.52 287.094 140.307 288.367 140.284C289.686 140.262 290.516 139.097 291.323 137.91C292.243 136.562 292.619 135.249 292.641 135.181C292.619 135.158 290.095 134.187 290.072 131.265C290.05 128.821 292.062 127.657 292.152 127.588C291.016 125.898 289.242 125.716 288.629 125.67ZM297.757 122.359V140.159H300.507V134.073H304.315C307.794 134.073 310.238 131.676 310.238 128.205C310.238 124.734 307.839 122.359 304.406 122.359H297.757ZM300.507 124.688H303.679C306.066 124.688 307.43 125.967 307.43 128.216C307.43 130.465 306.066 131.755 303.667 131.755H300.507V124.688ZM315.262 140.296C316.99 140.296 318.593 139.417 319.32 138.024H319.377V140.159H321.923V131.299C321.923 128.73 319.877 127.074 316.728 127.074C313.807 127.074 311.647 128.753 311.568 131.059H314.046C314.25 129.963 315.262 129.244 316.649 129.244C318.331 129.244 319.275 130.031 319.275 131.481V132.463L315.842 132.669C312.648 132.863 310.92 134.176 310.92 136.46C310.92 138.766 312.704 140.296 315.262 140.296ZM316.001 138.184C314.534 138.184 313.602 137.476 313.602 136.391C313.602 135.272 314.5 134.621 316.217 134.519L319.275 134.324V135.329C319.275 136.996 317.865 138.184 316.001 138.184ZM325.322 145C328.005 145 329.266 143.972 330.369 140.855L335.2 127.245H332.404L329.164 137.761H329.107L325.868 127.245H322.992L327.652 140.205L327.402 140.992C326.982 142.328 326.3 142.842 325.083 142.842C324.867 142.842 324.447 142.819 324.276 142.796V144.931C324.435 144.977 325.117 145 325.322 145Z"
                          fill="white"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="Property 1=Google Pay">
                    <g id="Main Button_2" filter="url(#filter9_ddd_0_1)">
                      <rect
                        x="40"
                        y="109"
                        width="154.2"
                        height="48"
                        rx="4"
                        fill="black"
                      />
                      <g id="Google Pay" clip-path="url(#clip8_0_1)">
                        <path
                          id="Vector_11"
                          d="M115.527 132.725V139.76H113.377V122.386H119.078C119.758 122.372 120.435 122.497 121.068 122.755C121.702 123.013 122.28 123.399 122.769 123.89C123.263 124.352 123.656 124.918 123.922 125.55C124.188 126.183 124.321 126.867 124.311 127.557C124.325 128.251 124.194 128.939 123.928 129.576C123.662 130.212 123.267 130.781 122.769 131.244C121.772 132.231 120.542 132.724 119.078 132.724H115.527V132.725ZM115.527 124.525V130.59H119.131C119.526 130.602 119.919 130.529 120.286 130.374C120.652 130.219 120.983 129.987 121.258 129.692C121.531 129.416 121.748 129.086 121.897 128.721C122.045 128.356 122.121 127.965 122.121 127.569C122.121 127.173 122.045 126.781 121.897 126.416C121.748 126.052 121.531 125.722 121.258 125.446C120.986 125.144 120.656 124.906 120.29 124.747C119.923 124.588 119.528 124.512 119.131 124.524H115.527V124.525Z"
                          fill="white"
                        />
                        <path
                          id="Vector_12"
                          d="M129.263 127.485C130.852 127.485 132.106 127.926 133.025 128.807C133.945 129.689 134.404 130.898 134.403 132.434V139.76H132.347V138.11H132.254C131.364 139.469 130.18 140.148 128.703 140.148C127.442 140.148 126.387 139.76 125.538 138.984C125.13 138.627 124.804 138.181 124.584 137.678C124.364 137.174 124.254 136.626 124.264 136.073C124.264 134.843 124.712 133.864 125.607 133.138C126.502 132.412 127.698 132.047 129.193 132.046C130.469 132.046 131.52 132.288 132.346 132.773V132.263C132.348 131.886 132.27 131.513 132.116 131.172C131.963 130.83 131.738 130.528 131.458 130.288C130.89 129.755 130.149 129.465 129.384 129.474C128.183 129.474 127.233 130 126.533 131.052L124.641 129.814C125.682 128.261 127.223 127.485 129.263 127.485ZM126.483 136.121C126.481 136.405 126.545 136.685 126.669 136.939C126.793 137.192 126.974 137.411 127.196 137.577C127.671 137.965 128.261 138.171 128.866 138.159C129.773 138.157 130.642 137.782 131.283 137.116C131.995 136.421 132.351 135.604 132.351 134.667C131.681 134.112 130.747 133.835 129.548 133.835C128.675 133.835 127.947 134.054 127.364 134.491C126.775 134.935 126.483 135.474 126.483 136.121Z"
                          fill="white"
                        />
                        <path
                          id="Vector_13"
                          d="M146.204 127.873L139.027 145H136.809L139.472 139.007L134.753 127.873H137.089L140.5 136.412H140.546L143.864 127.873H146.204Z"
                          fill="white"
                        />
                        <path
                          id="Vector_14"
                          d="M106.842 131.208C106.842 130.528 106.787 129.849 106.676 129.179H97.6117V133.023H102.803C102.697 133.637 102.472 134.222 102.142 134.743C101.812 135.265 101.384 135.711 100.884 136.056V138.551H103.982C105.796 136.814 106.842 134.246 106.842 131.208Z"
                          fill="#4285F4"
                        />
                        <path
                          id="Vector_15"
                          d="M97.6117 140.962C100.206 140.962 102.389 140.078 103.982 138.553L100.884 136.057C100.021 136.665 98.9106 137.011 97.6117 137.011C95.1046 137.011 92.9767 135.256 92.2158 132.891H89.0239V135.463C89.8239 137.116 91.0506 138.505 92.5671 139.476C94.0835 140.448 95.8301 140.962 97.6117 140.962Z"
                          fill="#34A853"
                        />
                        <path
                          id="Vector_16"
                          d="M92.2158 132.891C91.8136 131.652 91.8136 130.31 92.2158 129.071V126.499H89.024C88.351 127.89 88.0005 129.425 88.0005 130.981C88.0005 132.537 88.351 134.072 89.024 135.463L92.2158 132.891Z"
                          fill="#FBBC04"
                        />
                        <path
                          id="Vector_17"
                          d="M97.6117 124.951C98.9824 124.928 100.307 125.465 101.299 126.448L104.042 123.599C102.303 121.903 99.9981 120.971 97.6117 121C95.8301 121 94.0835 121.514 92.5671 122.485C91.0506 123.457 89.8239 124.846 89.0239 126.499L92.2158 129.071C92.9767 126.706 95.1046 124.951 97.6117 124.951Z"
                          fill="#EA4335"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="order-details-page" clip-path="url(#clip9_0_1)">
              <path
                id="screen-placeholder_4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.7283 43.7285H380.271C397.391 43.7285 411.269 57.6065 411.269 74.7259V831.948C411.269 849.067 397.391 862.945 380.271 862.945H43.7283C26.609 862.945 12.731 849.067 12.731 831.948V74.7259C12.731 57.6065 26.609 43.7285 43.7283 43.7285Z"
                fill="#F3F3F3"
              />
              <g id="schedule-booking-container_2">
                <g id="order-pay-now">
                  <rect
                    x="44"
                    y="753"
                    width="328"
                    height="48"
                    rx="10"
                    fill="#13C1FF"
                  />
                  <text
                    id="order-pay-now-text"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="20"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="161.685" y="784.17">Pay Now</tspan>
                  </text>
                </g>
                <g id="Group 3_2">
                  <g id="Group 6_3">
                    <text
                      id="- $1.50_3"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      letter-spacing="0.2px"
                    >
                      <tspan x="335" y="694.019">$13.50</tspan>
                    </text>
                    <text
                      id="Discount"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      letter-spacing="0.2px"
                    >
                      <tspan x="32" y="694.019">Total</tspan>
                    </text>
                  </g>
                  <path
                    id="Vector 65"
                    d="M32 670H380"
                    stroke="#202020"
                    stroke-width="0.5"
                  />
                  <g id="Group 5_2">
                    <g id="- $1.50_4">
                      <text
                        fill="#202020"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="14"
                        letter-spacing="0.2px"
                      >
                        <tspan x="344.41" y="653.019">$1.50</tspan>
                      </text>
                      <text
                        fill="#202020"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="14"
                        letter-spacing="0.2px"
                      >
                        <tspan x="335" y="653.019">-</tspan>
                      </text>
                    </g>
                    <text
                      id="Discount_2"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      letter-spacing="0.2px"
                    >
                      <tspan x="32" y="653.019">Discount</tspan>
                    </text>
                  </g>
                  <g id="Group 4_2">
                    <text
                      id="$15.00"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      letter-spacing="0.2px"
                    >
                      <tspan x="336" y="625.019">$15.00</tspan>
                    </text>
                    <text
                      id="Service Charges"
                      fill="#202020"
                      xml:space="preserve"
                      style="white-space: pre"
                      font-family="Montserrat"
                      font-size="14"
                      letter-spacing="0.2px"
                    >
                      <tspan x="32" y="625.019">Service Charges</tspan>
                    </text>
                  </g>
                  <text
                    id="Price_2"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="32" y="597.736">Price</tspan>
                  </text>
                </g>
                <g id="Group 2_3">
                  <text
                    id="Near Auckland Netball Centre, Auckland, New Zealand_2"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="12"
                    letter-spacing="0.2px"
                  >
                    <tspan x="32" y="550.302">
                      Near Auckland Netball Centre, Auckland, New Zealand
                    </tspan>
                  </text>
                  <text
                    id="Address_2"
                    fill="#202020"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="32" y="525.736">Address</tspan>
                  </text>
                </g>
                <g id="time-picker-container">
                  <text
                    id="Pick a time"
                    fill="#434343"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="14"
                    letter-spacing="0.2px"
                  >
                    <tspan x="255" y="424.019">Pick a time</tspan>
                  </text>
                  <g id="time-picker" clip-path="url(#clip10_0_1)">
                    <g id="input.form-control">
                      <rect
                        x="255.5"
                        y="433.5"
                        width="129"
                        height="49"
                        rx="9.5"
                        fill="#F9F9F9"
                      />
                      <g id="Time">
                        <circle
                          id="Ellipse 54"
                          cx="362"
                          cy="458"
                          r="9"
                          stroke="#8C8C8C"
                          stroke-width="2"
                        />
                        <path
                          id="Vector 64"
                          d="M366.5 458H362.25C362.112 458 362 457.888 362 457.75V454.5"
                          stroke="#8C8C8C"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                      </g>
                      <text
                        id="Email *"
                        fill="#434343"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="600"
                        letter-spacing="0.2px"
                      >
                        <tspan x="276" y="463.736">16:30</tspan>
                      </text>
                      <rect
                        x="255.5"
                        y="433.5"
                        width="129"
                        height="49"
                        rx="9.5"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                </g>
                <g id="date-picker-calendar">
                  <g id="date-picker" filter="url(#filter10_d_0_1)">
                    <g clip-path="url(#clip11_0_1)">
                      <g id="date-picker-header">
                        <rect
                          id="calendar-bg"
                          x="32"
                          y="483"
                          width="290"
                          height="348"
                          fill="white"
                        />
                        <g id="Weekdays">
                          <rect
                            id="weekday-rect"
                            x="37"
                            y="532.129"
                            width="280"
                            height="40.9412"
                            fill="#F5F7FA"
                          />
                          <text
                            id="saturday"
                            fill="#424242"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="600"
                            letter-spacing="0.001em"
                          >
                            <tspan x="292.118" y="557.884">S</tspan>
                          </text>
                          <text
                            id="friday"
                            fill="#424242"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="600"
                            letter-spacing="0.001em"
                          >
                            <tspan x="252.543" y="557.884">F</tspan>
                          </text>
                          <text
                            id="thursday"
                            fill="#424242"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="600"
                            letter-spacing="0.001em"
                          >
                            <tspan x="212.789" y="557.884">T</tspan>
                          </text>
                          <text
                            id="wednesday"
                            fill="#424242"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="600"
                            letter-spacing="0.001em"
                          >
                            <tspan x="168.995" y="557.884">W</tspan>
                          </text>
                          <text
                            id="tuesday"
                            fill="#424242"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="600"
                            letter-spacing="0.001em"
                          >
                            <tspan x="132.789" y="557.884">T</tspan>
                          </text>
                          <text
                            id="monday"
                            fill="#424242"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="600"
                            letter-spacing="0.001em"
                          >
                            <tspan x="90.3145" y="557.884">M</tspan>
                          </text>
                          <text
                            id="sunday"
                            fill="#FF0000"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="600"
                            letter-spacing="0.001em"
                          >
                            <tspan x="52.5977" y="557.884">S</tspan>
                          </text>
                        </g>
                        <g id="year-selector">
                          <g id="previous-month">
                            <path
                              id="previous-month-arrow"
                              d="M59.4881 504.988L58.25 503.75L53 509L58.25 514.25L59.4881 513.012L55.4762 509L59.4881 504.988Z"
                              fill="#A0A5B6"
                            />
                          </g>
                          <g id="year-selector-text">
                            <text
                              id="sept-2019"
                              fill="#494E50"
                              xml:space="preserve"
                              style="white-space: pre"
                              font-family="Montserrat"
                              font-size="14"
                              font-weight="500"
                              letter-spacing="0em"
                            >
                              <tspan x="118.355" y="513.519">
                                September 2019
                              </tspan>
                            </text>
                          </g>
                          <g id="next-month">
                            <path
                              id="next-month-arrow"
                              d="M296.75 503.75L295.512 504.988L299.524 509L295.512 513.012L296.75 514.25L302 509L296.75 503.75Z"
                              fill="black"
                            />
                          </g>
                        </g>
                      </g>
                      <g id="Dates">
                        <g id="24-prev">
                          <text
                            id="Date"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="48.5713" y="603.6">24</tspan>
                          </text>
                        </g>
                        <g id="3">
                          <text
                            id="Date_2"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="52.8779" y="643.6">3</tspan>
                          </text>
                        </g>
                        <g id="10">
                          <text
                            id="Date_3"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="49.7402" y="683.719">10</tspan>
                          </text>
                        </g>
                        <g id="17">
                          <text
                            id="Date_4"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="50.2256" y="723.719">17</tspan>
                          </text>
                        </g>
                        <g id="24">
                          <text
                            id="Date_5"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="48.4346" y="763.719">24</tspan>
                          </text>
                        </g>
                        <g id="31">
                          <text
                            id="Date_6"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="50.4033" y="803.719">31</tspan>
                          </text>
                        </g>
                        <g id="25-prev">
                          <text
                            id="Date_7"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="88.5781" y="603.6">25</tspan>
                          </text>
                        </g>
                        <g id="4">
                          <text
                            id="Date_8"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="92.5977" y="643.6">4</tspan>
                          </text>
                        </g>
                        <g id="11">
                          <text
                            id="Date_9"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="91.8184" y="683.719">11</tspan>
                          </text>
                        </g>
                        <g id="18">
                          <text
                            id="Date_10"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="89.9043" y="723.719">18</tspan>
                          </text>
                        </g>
                        <g id="25">
                          <g clip-path="url(#clip12_0_1)">
                            <text
                              id="Date_11"
                              fill="#494E50"
                              xml:space="preserve"
                              style="white-space: pre"
                              font-family="Montserrat"
                              font-size="14"
                              font-weight="500"
                              letter-spacing="0em"
                            >
                              <tspan x="88.9609" y="763.719">25</tspan>
                            </text>
                          </g>
                        </g>
                        <g id="1-next">
                          <text
                            id="Date_12"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="94.7578" y="803.6">1</tspan>
                          </text>
                        </g>
                        <g id="26-prev">
                          <text
                            id="Date_13"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="128.53" y="603.6">26</tspan>
                          </text>
                        </g>
                        <g id="5">
                          <text
                            id="Date_14"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="132.604" y="643.6">5</tspan>
                          </text>
                        </g>
                        <g id="12">
                          <text
                            id="Date_15"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="130.39" y="683.719">12</tspan>
                          </text>
                        </g>
                        <g id="19">
                          <text
                            id="Date_16"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="130.089" y="723.719">19</tspan>
                          </text>
                        </g>
                        <g id="26">
                          <text
                            id="Date_17"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="128.667" y="763.719">26</tspan>
                          </text>
                        </g>
                        <g id="2-next">
                          <text
                            id="Date_18"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="132.974" y="803.6">2</tspan>
                          </text>
                        </g>
                        <g id="27-prev">
                          <text
                            id="Date_19"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="169.152" y="603.6">27</tspan>
                          </text>
                        </g>
                        <g id="6">
                          <rect
                            x="157"
                            y="617"
                            width="40"
                            height="40"
                            rx="8"
                            fill="url(#paint5_linear_0_1)"
                          />
                          <text
                            id="Date_20"
                            fill="white"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="600"
                            letter-spacing="0em"
                          >
                            <tspan x="172.611" y="641.519">6</tspan>
                          </text>
                        </g>
                        <g id="13">
                          <text
                            id="Date_21"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="170.403" y="683.719">13</tspan>
                          </text>
                        </g>
                        <g id="20">
                          <text
                            id="Date_22"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="168.318" y="723.719">20</tspan>
                          </text>
                        </g>
                        <g id="27">
                          <text
                            id="Date_23"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="168.804" y="763.719">27</tspan>
                          </text>
                        </g>
                        <g id="3-next">
                          <text
                            id="Date_24"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="172.878" y="803.6">3</tspan>
                          </text>
                        </g>
                        <g id="28-prev">
                          <text
                            id="Date_25"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="208.558" y="603.6">28</tspan>
                          </text>
                        </g>
                        <g id="7">
                          <text
                            id="Date_26"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="212.816" y="643.719">7</tspan>
                          </text>
                        </g>
                        <g id="14">
                          <text
                            id="Date_27"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="209.727" y="683.719">14</tspan>
                          </text>
                        </g>
                        <g id="21">
                          <text
                            id="Date_28"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="210.39" y="723.719">21</tspan>
                          </text>
                        </g>
                        <g id="28">
                          <text
                            id="Date_29"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="208.476" y="763.719">28</tspan>
                          </text>
                        </g>
                        <g id="4-next">
                          <text
                            id="Date_30"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="212.598" y="803.6">4</tspan>
                          </text>
                        </g>
                        <g id="1">
                          <text
                            id="Date_31"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="254.758" y="603.6">1</tspan>
                          </text>
                        </g>
                        <g id="8">
                          <text
                            id="Date_32"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="252.495" y="643.719">8</tspan>
                          </text>
                        </g>
                        <g id="15">
                          <text
                            id="Date_33"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="250.39" y="683.719">15</tspan>
                          </text>
                        </g>
                        <g id="22">
                          <text
                            id="Date_34"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="248.961" y="723.719">22</tspan>
                          </text>
                        </g>
                        <g id="29">
                          <text
                            id="Date_35"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="248.66" y="763.719">29</tspan>
                          </text>
                        </g>
                        <g id="5-next">
                          <text
                            id="Date_36"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="252.604" y="803.6">5</tspan>
                          </text>
                        </g>
                        <g id="2">
                          <text
                            id="Date_37"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="292.974" y="603.6">2</tspan>
                          </text>
                        </g>
                        <g id="9">
                          <text
                            id="Date_38"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="292.68" y="643.719">9</tspan>
                          </text>
                        </g>
                        <g id="16">
                          <text
                            id="Date_39"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="290.089" y="683.719">16</tspan>
                          </text>
                        </g>
                        <g id="23">
                          <text
                            id="Date_40"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="288.975" y="723.719">23</tspan>
                          </text>
                        </g>
                        <g id="30">
                          <text
                            id="Date_41"
                            fill="#494E50"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            font-weight="500"
                            letter-spacing="0em"
                          >
                            <tspan x="288.325" y="763.719">30</tspan>
                          </text>
                        </g>
                        <g id="6-next">
                          <text
                            id="Date_42"
                            fill="#A0A5B6"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Poppins"
                            font-size="14"
                            letter-spacing="0em"
                          >
                            <tspan x="292.557" y="803.6">6</tspan>
                          </text>
                        </g>
                      </g>
                    </g>
                    <rect
                      x="32.5"
                      y="483.5"
                      width="289"
                      height="347"
                      rx="7.5"
                      stroke="#E5E7F0"
                    />
                  </g>
                </g>
                <g id="date-picker-container">
                  <g id="date-picker_2" clip-path="url(#clip13_0_1)">
                    <g id="input.form-control_2">
                      <rect
                        x="32.5"
                        y="433.5"
                        width="196"
                        height="49"
                        rx="9.5"
                        fill="#F9F9F9"
                      />
                      <g id="Date_range_light">
                        <rect
                          id="Rectangle 25"
                          x="193.5"
                          y="451"
                          width="21"
                          height="17.5"
                          rx="2"
                          stroke="#8C8C8C"
                        />
                        <path
                          id="Rectangle 26"
                          d="M193.5 455C193.5 453.114 193.5 452.172 194.086 451.586C194.672 451 195.614 451 197.5 451H210.5C212.386 451 213.328 451 213.914 451.586C214.5 452.172 214.5 453.114 214.5 455V455.667H193.5V455Z"
                          fill="#8C8C8C"
                        />
                        <path
                          id="Line 1"
                          d="M198.167 447.5L198.167 451"
                          stroke="#8C8C8C"
                          stroke-linecap="round"
                        />
                        <path
                          id="Line 2_2"
                          d="M209.833 447.5L209.833 451"
                          stroke="#8C8C8C"
                          stroke-linecap="round"
                        />
                        <rect
                          id="Rectangle 27"
                          x="198.167"
                          y="458"
                          width="4.66667"
                          height="2.33333"
                          rx="0.5"
                          fill="#8C8C8C"
                        />
                        <rect
                          id="Rectangle 29"
                          x="198.167"
                          y="462.667"
                          width="4.66667"
                          height="2.33333"
                          rx="0.5"
                          fill="#8C8C8C"
                        />
                        <rect
                          id="Rectangle 28"
                          x="205.167"
                          y="458"
                          width="4.66667"
                          height="2.33333"
                          rx="0.5"
                          fill="#8C8C8C"
                        />
                        <rect
                          id="Rectangle 30"
                          x="205.167"
                          y="462.667"
                          width="4.66667"
                          height="2.33333"
                          rx="0.5"
                          fill="#8C8C8C"
                        />
                      </g>
                      <text
                        id="Email *_2"
                        fill="#434343"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="16"
                        font-weight="600"
                        letter-spacing="0.2px"
                      >
                        <tspan x="53" y="463.736">Sept 06, 2019</tspan>
                      </text>
                      <rect
                        x="32.5"
                        y="433.5"
                        width="196"
                        height="49"
                        rx="9.5"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                  <text
                    id="Pick a date"
                    fill="#434343"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="14"
                    letter-spacing="0.2px"
                  >
                    <tspan x="32" y="424.019">Pick a date</tspan>
                  </text>
                </g>
                <text
                  id="Schedule your booking"
                  fill="#202020"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Montserrat"
                  font-size="18"
                  font-weight="600"
                  letter-spacing="0.2px"
                >
                  <tspan x="32" y="394.453">Schedule your booking</tspan>
                </text>
              </g>
              <g id="order-details-header-section">
                <path
                  id="Rectangle 22_2"
                  d="M13 80C13 60.1177 29.1178 44 49 44H375C394.882 44 411 60.1177 411 80V319H13V80Z"
                  fill="url(#paint6_linear_0_1)"
                />
                <g id="selected-service">
                  <rect
                    id="exxon-mobil-car-wash"
                    x="205"
                    y="241"
                    width="64"
                    height="18.3652"
                    fill="url(#pattern0)"
                  />
                  <text
                    id="selected-service-provider-label"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="18"
                    font-weight="500"
                    letter-spacing="0.001em"
                  >
                    <tspan x="40.2214" y="255.953">Service provider</tspan>
                  </text>
                  <text
                    id="service-provider-name"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="16"
                    font-weight="500"
                    letter-spacing="0.001em"
                  >
                    <tspan x="275.24" y="255.736">(Exxon Mobil)</tspan>
                  </text>
                </g>
                <text
                  id="Select a time slot and complete the payment to book your service"
                  fill="white"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Montserrat"
                  font-size="14"
                  font-weight="500"
                  letter-spacing="0.001em"
                >
                  <tspan x="84.2247" y="177.519">
                    Select a time slot and complete the &#10;
                  </tspan>
                  <tspan x="106.771" y="198.519">
                    payment to book your service
                  </tspan>
                </text>
                <text
                  id="order-details-title"
                  fill="white"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Montserrat"
                  font-size="28"
                  font-weight="800"
                  letter-spacing="0.001em"
                >
                  <tspan x="37.1126" y="142.038">Complete your booking</tspan>
                </text>
              </g>
            </g>
            <g id="service-selection-page" clip-path="url(#clip14_0_1)">
              <path
                id="screen-placeholder_5"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.7283 43.7285H380.271C397.391 43.7285 411.269 57.6065 411.269 74.7259V831.948C411.269 849.067 397.391 862.945 380.271 862.945H43.7283C26.609 862.945 12.731 849.067 12.731 831.948V74.7259C12.731 57.6065 26.609 43.7285 43.7283 43.7285Z"
                fill="#F3F3F3"
              />
              <g id="maps-container">
                <g clip-path="url(#clip15_0_1)">
                  <rect
                    x="13"
                    y="44"
                    width="398"
                    height="819"
                    rx="35"
                    fill="white"
                  />
                  <rect
                    id="map-place-auckland"
                    x="-884"
                    y="-21"
                    width="1652"
                    height="888"
                    fill="url(#pattern1)"
                  />
                  <g class="service-marker">
                    <g id="map-marker-pin">
                      <g id="map-marker-spotlight" clip-path="url(#clip16_0_1)">
                        <g id="map-marker-shadow" filter="url(#filter11_f_0_1)">
                          <ellipse
                            cx="144.5"
                            cy="781.5"
                            rx="4.5"
                            ry="2.5"
                            fill="black"
                            fill-opacity="0.12"
                          />
                        </g>
                        <g id="map-marker">
                          <mask
                            id="path-230-outside-1_0_1"
                            maskUnits="userSpaceOnUse"
                            x="131"
                            y="742"
                            width="27"
                            height="40"
                            fill="black"
                          >
                            <rect
                              fill="white"
                              x="131"
                              y="742"
                              width="27"
                              height="40"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M157 755.5C157 758.325 156.063 760.932 154.482 763.025C153.92 763.807 153.161 764.638 152.32 765.559C149.4 768.757 145.5 773.029 145.5 780C145.5 780.552 145.052 781 144.5 781C143.948 781 143.5 780.552 143.5 780C143.5 773.029 139.6 768.757 136.68 765.559C135.839 764.638 135.08 763.807 134.518 763.025C132.937 760.932 132 758.325 132 755.5C132 748.596 137.596 743 144.5 743C151.404 743 157 748.596 157 755.5Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M157 755.5C157 758.325 156.063 760.932 154.482 763.025C153.92 763.807 153.161 764.638 152.32 765.559C149.4 768.757 145.5 773.029 145.5 780C145.5 780.552 145.052 781 144.5 781C143.948 781 143.5 780.552 143.5 780C143.5 773.029 139.6 768.757 136.68 765.559C135.839 764.638 135.08 763.807 134.518 763.025C132.937 760.932 132 758.325 132 755.5C132 748.596 137.596 743 144.5 743C151.404 743 157 748.596 157 755.5Z"
                            fill="url(#paint7_linear_0_1)"
                          />
                          <path
                            d="M154.482 763.025L153.684 762.422L153.677 762.432L153.67 762.441L154.482 763.025ZM152.32 765.559L153.059 766.233L152.32 765.559ZM136.68 765.559L137.418 764.885L137.418 764.885L136.68 765.559ZM134.518 763.025L135.33 762.441L135.323 762.432L135.316 762.422L134.518 763.025ZM155.28 763.628C156.987 761.367 158 758.55 158 755.5H156C156 758.1 155.138 760.497 153.684 762.422L155.28 763.628ZM153.059 766.233C153.887 765.326 154.691 764.448 155.294 763.609L153.67 762.441C153.15 763.166 152.435 763.951 151.582 764.885L153.059 766.233ZM146.5 780C146.5 773.451 150.134 769.436 153.059 766.233L151.582 764.885C148.666 768.078 144.5 772.606 144.5 780H146.5ZM144.5 782C145.605 782 146.5 781.105 146.5 780H144.5V782ZM142.5 780C142.5 781.105 143.395 782 144.5 782V780H142.5ZM135.941 766.233C138.866 769.436 142.5 773.451 142.5 780H144.5C144.5 772.606 140.334 768.078 137.418 764.885L135.941 766.233ZM133.706 763.609C134.309 764.448 135.113 765.326 135.941 766.233L137.418 764.885C136.565 763.951 135.85 763.166 135.33 762.441L133.706 763.609ZM131 755.5C131 758.55 132.013 761.367 133.72 763.628L135.316 762.422C133.862 760.497 133 758.1 133 755.5H131ZM144.5 742C137.044 742 131 748.044 131 755.5H133C133 749.149 138.149 744 144.5 744V742ZM158 755.5C158 748.044 151.956 742 144.5 742V744C150.851 744 156 749.149 156 755.5H158Z"
                            fill="url(#paint8_linear_0_1)"
                            mask="url(#path-230-outside-1_0_1)"
                          />
                        </g>
                      </g>
                    </g>
                    <rect
                      id="exxon-mobil-car-wash_2"
                      x="120"
                      y="743"
                      width="48"
                      height="13.7739"
                      fill="url(#pattern2)"
                    />
                  </g>
                  <g class="service-marker">
                    <g id="map-marker-pin_2">
                      <g
                        id="map-marker-spotlight_2"
                        clip-path="url(#clip17_0_1)"
                      >
                        <g
                          id="map-marker-shadow_2"
                          filter="url(#filter12_f_0_1)"
                        >
                          <ellipse
                            cx="47.5"
                            cy="477.5"
                            rx="4.5"
                            ry="2.5"
                            fill="black"
                            fill-opacity="0.12"
                          />
                        </g>
                        <g id="map-marker_2">
                          <mask
                            id="path-234-outside-2_0_1"
                            maskUnits="userSpaceOnUse"
                            x="34"
                            y="438"
                            width="27"
                            height="40"
                            fill="black"
                          >
                            <rect
                              fill="white"
                              x="34"
                              y="438"
                              width="27"
                              height="40"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M60 451.5C60 454.325 59.0627 456.932 57.4821 459.025C56.9203 459.807 56.1609 460.638 55.3202 461.559C52.4001 464.757 48.5 469.029 48.5 476C48.5 476.552 48.0523 477 47.5 477C46.9477 477 46.5 476.552 46.5 476C46.5 469.029 42.5999 464.757 39.6798 461.559C38.8391 460.638 38.0797 459.807 37.5179 459.025C35.9373 456.932 35 454.325 35 451.5C35 444.596 40.5964 439 47.5 439C54.4036 439 60 444.596 60 451.5Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M60 451.5C60 454.325 59.0627 456.932 57.4821 459.025C56.9203 459.807 56.1609 460.638 55.3202 461.559C52.4001 464.757 48.5 469.029 48.5 476C48.5 476.552 48.0523 477 47.5 477C46.9477 477 46.5 476.552 46.5 476C46.5 469.029 42.5999 464.757 39.6798 461.559C38.8391 460.638 38.0797 459.807 37.5179 459.025C35.9373 456.932 35 454.325 35 451.5C35 444.596 40.5964 439 47.5 439C54.4036 439 60 444.596 60 451.5Z"
                            fill="url(#paint9_linear_0_1)"
                          />
                          <path
                            d="M57.4821 459.025L56.684 458.422L56.6769 458.432L56.67 458.441L57.4821 459.025ZM55.3202 461.559L56.0586 462.233L55.3202 461.559ZM39.6798 461.559L40.4183 460.885L40.4183 460.885L39.6798 461.559ZM37.5179 459.025L38.33 458.441L38.3231 458.432L38.316 458.422L37.5179 459.025ZM58.2801 459.628C59.9873 457.367 61 454.55 61 451.5H59C59 454.1 58.1381 456.497 56.684 458.422L58.2801 459.628ZM56.0586 462.233C56.8872 461.326 57.6911 460.448 58.2941 459.609L56.67 458.441C56.1496 459.166 55.4345 459.951 54.5817 460.885L56.0586 462.233ZM49.5 476C49.5 469.451 53.1345 465.436 56.0586 462.233L54.5817 460.885C51.6658 464.078 47.5 468.606 47.5 476H49.5ZM47.5 478C48.6046 478 49.5 477.105 49.5 476H47.5V478ZM45.5 476C45.5 477.105 46.3954 478 47.5 478V476H45.5ZM38.9414 462.233C41.8655 465.436 45.5 469.451 45.5 476H47.5C47.5 468.606 43.3342 464.078 40.4183 460.885L38.9414 462.233ZM36.7059 459.609C37.3089 460.448 38.1128 461.326 38.9414 462.233L40.4183 460.885C39.5655 459.951 38.8504 459.166 38.33 458.441L36.7059 459.609ZM34 451.5C34 454.55 35.0127 457.367 36.7199 459.628L38.316 458.422C36.8619 456.497 36 454.1 36 451.5H34ZM47.5 438C40.0442 438 34 444.044 34 451.5H36C36 445.149 41.1487 440 47.5 440V438ZM61 451.5C61 444.044 54.9558 438 47.5 438V440C53.8513 440 59 445.149 59 451.5H61Z"
                            fill="url(#paint10_linear_0_1)"
                            mask="url(#path-234-outside-2_0_1)"
                          />
                        </g>
                      </g>
                    </g>
                    <rect
                      id="exxon-mobil-car-wash_3"
                      x="23"
                      y="439"
                      width="48"
                      height="13.7739"
                      fill="url(#pattern3)"
                    />
                  </g>
                  <g class="service-marker">
                    <g id="map-marker-pin_3">
                      <g
                        id="map-marker-spotlight_3"
                        clip-path="url(#clip18_0_1)"
                      >
                        <g
                          id="map-marker-shadow_3"
                          filter="url(#filter13_f_0_1)"
                        >
                          <ellipse
                            cx="319.5"
                            cy="289.5"
                            rx="4.5"
                            ry="2.5"
                            fill="black"
                            fill-opacity="0.12"
                          />
                        </g>
                        <g id="map-marker_3">
                          <mask
                            id="path-238-outside-3_0_1"
                            maskUnits="userSpaceOnUse"
                            x="306"
                            y="250"
                            width="27"
                            height="40"
                            fill="black"
                          >
                            <rect
                              fill="white"
                              x="306"
                              y="250"
                              width="27"
                              height="40"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M332 263.5C332 266.325 331.063 268.932 329.482 271.025C328.92 271.807 328.161 272.638 327.32 273.559C324.4 276.757 320.5 281.029 320.5 288C320.5 288.552 320.052 289 319.5 289C318.948 289 318.5 288.552 318.5 288C318.5 281.029 314.6 276.757 311.68 273.559C310.839 272.638 310.08 271.807 309.518 271.025C307.937 268.932 307 266.325 307 263.5C307 256.596 312.596 251 319.5 251C326.404 251 332 256.596 332 263.5Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M332 263.5C332 266.325 331.063 268.932 329.482 271.025C328.92 271.807 328.161 272.638 327.32 273.559C324.4 276.757 320.5 281.029 320.5 288C320.5 288.552 320.052 289 319.5 289C318.948 289 318.5 288.552 318.5 288C318.5 281.029 314.6 276.757 311.68 273.559C310.839 272.638 310.08 271.807 309.518 271.025C307.937 268.932 307 266.325 307 263.5C307 256.596 312.596 251 319.5 251C326.404 251 332 256.596 332 263.5Z"
                            fill="url(#paint11_linear_0_1)"
                          />
                          <path
                            d="M329.482 271.025L328.684 270.422L328.677 270.432L328.67 270.441L329.482 271.025ZM327.32 273.559L328.059 274.233L327.32 273.559ZM311.68 273.559L312.418 272.885L312.418 272.885L311.68 273.559ZM309.518 271.025L310.33 270.441L310.323 270.432L310.316 270.422L309.518 271.025ZM330.28 271.628C331.987 269.367 333 266.55 333 263.5H331C331 266.1 330.138 268.497 328.684 270.422L330.28 271.628ZM328.059 274.233C328.887 273.326 329.691 272.448 330.294 271.609L328.67 270.441C328.15 271.166 327.435 271.951 326.582 272.885L328.059 274.233ZM321.5 288C321.5 281.451 325.134 277.436 328.059 274.233L326.582 272.885C323.666 276.078 319.5 280.606 319.5 288H321.5ZM319.5 290C320.605 290 321.5 289.105 321.5 288H319.5V290ZM317.5 288C317.5 289.105 318.395 290 319.5 290V288H317.5ZM310.941 274.233C313.866 277.436 317.5 281.451 317.5 288H319.5C319.5 280.606 315.334 276.078 312.418 272.885L310.941 274.233ZM308.706 271.609C309.309 272.448 310.113 273.326 310.941 274.233L312.418 272.885C311.565 271.951 310.85 271.166 310.33 270.441L308.706 271.609ZM306 263.5C306 266.55 307.013 269.367 308.72 271.628L310.316 270.422C308.862 268.497 308 266.1 308 263.5H306ZM319.5 250C312.044 250 306 256.044 306 263.5H308C308 257.149 313.149 252 319.5 252V250ZM333 263.5C333 256.044 326.956 250 319.5 250V252C325.851 252 331 257.149 331 263.5H333Z"
                            fill="url(#paint12_linear_0_1)"
                            mask="url(#path-238-outside-3_0_1)"
                          />
                        </g>
                      </g>
                    </g>
                    <rect
                      id="exxon-mobil-car-wash_4"
                      x="295"
                      y="251"
                      width="48"
                      height="13.7739"
                      fill="url(#pattern4)"
                    />
                  </g>
                  <g class="service-marker">
                    <g id="map-marker-pin_4">
                      <g
                        id="map-marker-spotlight_4"
                        clip-path="url(#clip19_0_1)"
                      >
                        <g
                          id="map-marker-shadow_4"
                          filter="url(#filter14_f_0_1)"
                        >
                          <ellipse
                            cx="337.5"
                            cy="422.5"
                            rx="4.5"
                            ry="2.5"
                            fill="black"
                            fill-opacity="0.12"
                          />
                        </g>
                        <g id="map-marker_4">
                          <mask
                            id="path-242-outside-4_0_1"
                            maskUnits="userSpaceOnUse"
                            x="324"
                            y="383"
                            width="27"
                            height="40"
                            fill="black"
                          >
                            <rect
                              fill="white"
                              x="324"
                              y="383"
                              width="27"
                              height="40"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M350 396.5C350 399.325 349.063 401.932 347.482 404.025C346.92 404.807 346.161 405.638 345.32 406.559C342.4 409.757 338.5 414.029 338.5 421C338.5 421.552 338.052 422 337.5 422C336.948 422 336.5 421.552 336.5 421C336.5 414.029 332.6 409.757 329.68 406.559C328.839 405.638 328.08 404.807 327.518 404.025C325.937 401.932 325 399.325 325 396.5C325 389.596 330.596 384 337.5 384C344.404 384 350 389.596 350 396.5Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M350 396.5C350 399.325 349.063 401.932 347.482 404.025C346.92 404.807 346.161 405.638 345.32 406.559C342.4 409.757 338.5 414.029 338.5 421C338.5 421.552 338.052 422 337.5 422C336.948 422 336.5 421.552 336.5 421C336.5 414.029 332.6 409.757 329.68 406.559C328.839 405.638 328.08 404.807 327.518 404.025C325.937 401.932 325 399.325 325 396.5C325 389.596 330.596 384 337.5 384C344.404 384 350 389.596 350 396.5Z"
                            fill="url(#paint13_linear_0_1)"
                          />
                          <path
                            d="M347.482 404.025L346.684 403.422L346.677 403.432L346.67 403.441L347.482 404.025ZM345.32 406.559L346.059 407.233L345.32 406.559ZM329.68 406.559L330.418 405.885L330.418 405.885L329.68 406.559ZM327.518 404.025L328.33 403.441L328.323 403.432L328.316 403.422L327.518 404.025ZM348.28 404.628C349.987 402.367 351 399.55 351 396.5H349C349 399.1 348.138 401.497 346.684 403.422L348.28 404.628ZM346.059 407.233C346.887 406.326 347.691 405.448 348.294 404.609L346.67 403.441C346.15 404.166 345.435 404.951 344.582 405.885L346.059 407.233ZM339.5 421C339.5 414.451 343.134 410.436 346.059 407.233L344.582 405.885C341.666 409.078 337.5 413.606 337.5 421H339.5ZM337.5 423C338.605 423 339.5 422.105 339.5 421H337.5V423ZM335.5 421C335.5 422.105 336.395 423 337.5 423V421H335.5ZM328.941 407.233C331.866 410.436 335.5 414.451 335.5 421H337.5C337.5 413.606 333.334 409.078 330.418 405.885L328.941 407.233ZM326.706 404.609C327.309 405.448 328.113 406.326 328.941 407.233L330.418 405.885C329.565 404.951 328.85 404.166 328.33 403.441L326.706 404.609ZM324 396.5C324 399.55 325.013 402.367 326.72 404.628L328.316 403.422C326.862 401.497 326 399.1 326 396.5H324ZM337.5 383C330.044 383 324 389.044 324 396.5H326C326 390.149 331.149 385 337.5 385V383ZM351 396.5C351 389.044 344.956 383 337.5 383V385C343.851 385 349 390.149 349 396.5H351Z"
                            fill="url(#paint14_linear_0_1)"
                            mask="url(#path-242-outside-4_0_1)"
                          />
                        </g>
                      </g>
                    </g>
                    <rect
                      id="espresso-car-wash"
                      x="322"
                      y="369"
                      width="40"
                      height="34.3226"
                      fill="url(#pattern5)"
                    />
                  </g>
                  <g class="service-marker">
                    <g id="map-marker-pin_5">
                      <g
                        id="map-marker-spotlight_5"
                        clip-path="url(#clip20_0_1)"
                      >
                        <g
                          id="map-marker-shadow_5"
                          filter="url(#filter15_f_0_1)"
                        >
                          <ellipse
                            cx="169.5"
                            cy="585.5"
                            rx="4.5"
                            ry="2.5"
                            fill="black"
                            fill-opacity="0.12"
                          />
                        </g>
                        <g id="map-marker_5">
                          <mask
                            id="path-246-outside-5_0_1"
                            maskUnits="userSpaceOnUse"
                            x="156"
                            y="546"
                            width="27"
                            height="40"
                            fill="black"
                          >
                            <rect
                              fill="white"
                              x="156"
                              y="546"
                              width="27"
                              height="40"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M182 559.5C182 562.325 181.063 564.932 179.482 567.025C178.92 567.807 178.161 568.638 177.32 569.559C174.4 572.757 170.5 577.029 170.5 584C170.5 584.552 170.052 585 169.5 585C168.948 585 168.5 584.552 168.5 584C168.5 577.029 164.6 572.757 161.68 569.559C160.839 568.638 160.08 567.807 159.518 567.025C157.937 564.932 157 562.325 157 559.5C157 552.596 162.596 547 169.5 547C176.404 547 182 552.596 182 559.5Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M182 559.5C182 562.325 181.063 564.932 179.482 567.025C178.92 567.807 178.161 568.638 177.32 569.559C174.4 572.757 170.5 577.029 170.5 584C170.5 584.552 170.052 585 169.5 585C168.948 585 168.5 584.552 168.5 584C168.5 577.029 164.6 572.757 161.68 569.559C160.839 568.638 160.08 567.807 159.518 567.025C157.937 564.932 157 562.325 157 559.5C157 552.596 162.596 547 169.5 547C176.404 547 182 552.596 182 559.5Z"
                            fill="url(#paint15_linear_0_1)"
                          />
                          <path
                            d="M179.482 567.025L178.684 566.422L178.677 566.432L178.67 566.441L179.482 567.025ZM177.32 569.559L178.059 570.233L177.32 569.559ZM161.68 569.559L162.418 568.885L162.418 568.885L161.68 569.559ZM159.518 567.025L160.33 566.441L160.323 566.432L160.316 566.422L159.518 567.025ZM180.28 567.628C181.987 565.367 183 562.55 183 559.5H181C181 562.1 180.138 564.497 178.684 566.422L180.28 567.628ZM178.059 570.233C178.887 569.326 179.691 568.448 180.294 567.609L178.67 566.441C178.15 567.166 177.435 567.951 176.582 568.885L178.059 570.233ZM171.5 584C171.5 577.451 175.134 573.436 178.059 570.233L176.582 568.885C173.666 572.078 169.5 576.606 169.5 584H171.5ZM169.5 586C170.605 586 171.5 585.105 171.5 584H169.5V586ZM167.5 584C167.5 585.105 168.395 586 169.5 586V584H167.5ZM160.941 570.233C163.866 573.436 167.5 577.451 167.5 584H169.5C169.5 576.606 165.334 572.078 162.418 568.885L160.941 570.233ZM158.706 567.609C159.309 568.448 160.113 569.326 160.941 570.233L162.418 568.885C161.565 567.951 160.85 567.166 160.33 566.441L158.706 567.609ZM156 559.5C156 562.55 157.013 565.367 158.72 567.628L160.316 566.422C158.862 564.497 158 562.1 158 559.5H156ZM169.5 546C162.044 546 156 552.044 156 559.5H158C158 553.149 163.149 548 169.5 548V546ZM183 559.5C183 552.044 176.956 546 169.5 546V548C175.851 548 181 553.149 181 559.5H183Z"
                            fill="url(#paint16_linear_0_1)"
                            mask="url(#path-246-outside-5_0_1)"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="bp-logo-group">
                      <rect
                        id="bp-logo"
                        opacity="0.6"
                        x="149"
                        y="533"
                        width="40"
                        height="40.7721"
                        fill="url(#pattern6)"
                      />
                      <rect
                        id="bp-logo_2"
                        opacity="0.6"
                        x="149"
                        y="533"
                        width="40"
                        height="40.7721"
                        fill="url(#pattern7)"
                      />
                    </g>
                  </g>
                  <g class="service-marker">
                    <g id="map-marker-pin_6">
                      <g
                        id="map-marker-spotlight_6"
                        clip-path="url(#clip21_0_1)"
                      >
                        <g
                          id="map-marker-shadow_6"
                          filter="url(#filter16_f_0_1)"
                        >
                          <ellipse
                            cx="111.5"
                            cy="236.5"
                            rx="4.5"
                            ry="2.5"
                            fill="black"
                            fill-opacity="0.12"
                          />
                        </g>
                        <g id="map-marker_6">
                          <mask
                            id="path-251-outside-6_0_1"
                            maskUnits="userSpaceOnUse"
                            x="98"
                            y="197"
                            width="27"
                            height="40"
                            fill="black"
                          >
                            <rect
                              fill="white"
                              x="98"
                              y="197"
                              width="27"
                              height="40"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M124 210.5C124 213.325 123.063 215.932 121.482 218.025C120.92 218.807 120.161 219.638 119.32 220.559C116.4 223.757 112.5 228.029 112.5 235C112.5 235.552 112.052 236 111.5 236C110.948 236 110.5 235.552 110.5 235C110.5 228.029 106.6 223.757 103.68 220.559C102.839 219.638 102.08 218.807 101.518 218.025C99.9373 215.932 99 213.325 99 210.5C99 203.596 104.596 198 111.5 198C118.404 198 124 203.596 124 210.5Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M124 210.5C124 213.325 123.063 215.932 121.482 218.025C120.92 218.807 120.161 219.638 119.32 220.559C116.4 223.757 112.5 228.029 112.5 235C112.5 235.552 112.052 236 111.5 236C110.948 236 110.5 235.552 110.5 235C110.5 228.029 106.6 223.757 103.68 220.559C102.839 219.638 102.08 218.807 101.518 218.025C99.9373 215.932 99 213.325 99 210.5C99 203.596 104.596 198 111.5 198C118.404 198 124 203.596 124 210.5Z"
                            fill="url(#paint17_linear_0_1)"
                          />
                          <path
                            d="M121.482 218.025L120.684 217.422L120.677 217.432L120.67 217.441L121.482 218.025ZM119.32 220.559L120.059 221.233L119.32 220.559ZM103.68 220.559L104.418 219.885L104.418 219.885L103.68 220.559ZM101.518 218.025L102.33 217.441L102.323 217.432L102.316 217.422L101.518 218.025ZM122.28 218.628C123.987 216.367 125 213.55 125 210.5H123C123 213.1 122.138 215.497 120.684 217.422L122.28 218.628ZM120.059 221.233C120.887 220.326 121.691 219.448 122.294 218.609L120.67 217.441C120.15 218.166 119.435 218.951 118.582 219.885L120.059 221.233ZM113.5 235C113.5 228.451 117.134 224.436 120.059 221.233L118.582 219.885C115.666 223.078 111.5 227.606 111.5 235H113.5ZM111.5 237C112.605 237 113.5 236.105 113.5 235H111.5V237ZM109.5 235C109.5 236.105 110.395 237 111.5 237V235H109.5ZM102.941 221.233C105.866 224.436 109.5 228.451 109.5 235H111.5C111.5 227.606 107.334 223.078 104.418 219.885L102.941 221.233ZM100.706 218.609C101.309 219.448 102.113 220.326 102.941 221.233L104.418 219.885C103.565 218.951 102.85 218.166 102.33 217.441L100.706 218.609ZM98 210.5C98 213.55 99.0127 216.367 100.72 218.628L102.316 217.422C100.862 215.497 100 213.1 100 210.5H98ZM111.5 197C104.044 197 98 203.044 98 210.5H100C100 204.149 105.149 199 111.5 199V197ZM125 210.5C125 203.044 118.956 197 111.5 197V199C117.851 199 123 204.149 123 210.5H125Z"
                            fill="url(#paint18_linear_0_1)"
                            mask="url(#path-251-outside-6_0_1)"
                          />
                        </g>
                      </g>
                    </g>
                    <g id="bp-logo-group_2">
                      <rect
                        id="bp-logo_3"
                        opacity="0.6"
                        x="91"
                        y="184"
                        width="40"
                        height="40.7721"
                        fill="url(#pattern8)"
                      />
                      <rect
                        id="bp-logo_4"
                        opacity="0.6"
                        x="91"
                        y="184"
                        width="40"
                        height="40.7721"
                        fill="url(#pattern9)"
                      />
                    </g>
                  </g>
                  <g class="service-marker">
                    <g id="map-marker-pin_7">
                      <g
                        id="map-marker-spotlight_7"
                        clip-path="url(#clip22_0_1)"
                      >
                        <g
                          id="map-marker-shadow_7"
                          filter="url(#filter17_f_0_1)"
                        >
                          <ellipse
                            cx="181.5"
                            cy="300.5"
                            rx="4.5"
                            ry="2.5"
                            fill="black"
                            fill-opacity="0.12"
                          />
                        </g>
                        <g id="map-marker_7">
                          <mask
                            id="path-256-outside-7_0_1"
                            maskUnits="userSpaceOnUse"
                            x="168"
                            y="261"
                            width="27"
                            height="40"
                            fill="black"
                          >
                            <rect
                              fill="white"
                              x="168"
                              y="261"
                              width="27"
                              height="40"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M194 274.5C194 277.325 193.063 279.932 191.482 282.025C190.92 282.807 190.161 283.638 189.32 284.559C186.4 287.757 182.5 292.029 182.5 299C182.5 299.552 182.052 300 181.5 300C180.948 300 180.5 299.552 180.5 299C180.5 292.029 176.6 287.757 173.68 284.559C172.839 283.638 172.08 282.807 171.518 282.025C169.937 279.932 169 277.325 169 274.5C169 267.596 174.596 262 181.5 262C188.404 262 194 267.596 194 274.5Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M194 274.5C194 277.325 193.063 279.932 191.482 282.025C190.92 282.807 190.161 283.638 189.32 284.559C186.4 287.757 182.5 292.029 182.5 299C182.5 299.552 182.052 300 181.5 300C180.948 300 180.5 299.552 180.5 299C180.5 292.029 176.6 287.757 173.68 284.559C172.839 283.638 172.08 282.807 171.518 282.025C169.937 279.932 169 277.325 169 274.5C169 267.596 174.596 262 181.5 262C188.404 262 194 267.596 194 274.5Z"
                            fill="url(#paint19_linear_0_1)"
                          />
                          <path
                            d="M191.482 282.025L190.684 281.422L190.677 281.432L190.67 281.441L191.482 282.025ZM189.32 284.559L190.059 285.233L189.32 284.559ZM173.68 284.559L174.418 283.885L174.418 283.885L173.68 284.559ZM171.518 282.025L172.33 281.441L172.323 281.432L172.316 281.422L171.518 282.025ZM192.28 282.628C193.987 280.367 195 277.55 195 274.5H193C193 277.1 192.138 279.497 190.684 281.422L192.28 282.628ZM190.059 285.233C190.887 284.326 191.691 283.448 192.294 282.609L190.67 281.441C190.15 282.166 189.435 282.951 188.582 283.885L190.059 285.233ZM183.5 299C183.5 292.451 187.134 288.436 190.059 285.233L188.582 283.885C185.666 287.078 181.5 291.606 181.5 299H183.5ZM181.5 301C182.605 301 183.5 300.105 183.5 299H181.5V301ZM179.5 299C179.5 300.105 180.395 301 181.5 301V299H179.5ZM172.941 285.233C175.866 288.436 179.5 292.451 179.5 299H181.5C181.5 291.606 177.334 287.078 174.418 283.885L172.941 285.233ZM170.706 282.609C171.309 283.448 172.113 284.326 172.941 285.233L174.418 283.885C173.565 282.951 172.85 282.166 172.33 281.441L170.706 282.609ZM168 274.5C168 277.55 169.013 280.367 170.72 282.628L172.316 281.422C170.862 279.497 170 277.1 170 274.5H168ZM181.5 261C174.044 261 168 267.044 168 274.5H170C170 268.149 175.149 263 181.5 263V261ZM195 274.5C195 267.044 188.956 261 181.5 261V263C187.851 263 193 268.149 193 274.5H195Z"
                            fill="url(#paint20_linear_0_1)"
                            mask="url(#path-256-outside-7_0_1)"
                          />
                        </g>
                      </g>
                    </g>
                    <rect
                      id="car-care-nz"
                      x="157"
                      y="261"
                      width="48"
                      height="20"
                      fill="url(#pattern10)"
                    />
                  </g>
                  <g class="service-marker">
                    <g id="map-marker-pin_8">
                      <g
                        id="map-marker-spotlight_8"
                        clip-path="url(#clip23_0_1)"
                      >
                        <g
                          id="map-marker-shadow_8"
                          filter="url(#filter18_f_0_1)"
                        >
                          <ellipse
                            cx="106.5"
                            cy="720.5"
                            rx="4.5"
                            ry="2.5"
                            fill="black"
                            fill-opacity="0.12"
                          />
                        </g>
                        <g id="map-marker_8">
                          <mask
                            id="path-260-outside-8_0_1"
                            maskUnits="userSpaceOnUse"
                            x="93"
                            y="681"
                            width="27"
                            height="40"
                            fill="black"
                          >
                            <rect
                              fill="white"
                              x="93"
                              y="681"
                              width="27"
                              height="40"
                            />
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M119 694.5C119 697.325 118.063 699.932 116.482 702.025C115.92 702.807 115.161 703.638 114.32 704.559C111.4 707.757 107.5 712.029 107.5 719C107.5 719.552 107.052 720 106.5 720C105.948 720 105.5 719.552 105.5 719C105.5 712.029 101.6 707.757 98.6798 704.559C97.8391 703.638 97.0797 702.807 96.5179 702.025C94.9373 699.932 94 697.325 94 694.5C94 687.596 99.5964 682 106.5 682C113.404 682 119 687.596 119 694.5Z"
                            />
                          </mask>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M119 694.5C119 697.325 118.063 699.932 116.482 702.025C115.92 702.807 115.161 703.638 114.32 704.559C111.4 707.757 107.5 712.029 107.5 719C107.5 719.552 107.052 720 106.5 720C105.948 720 105.5 719.552 105.5 719C105.5 712.029 101.6 707.757 98.6798 704.559C97.8391 703.638 97.0797 702.807 96.5179 702.025C94.9373 699.932 94 697.325 94 694.5C94 687.596 99.5964 682 106.5 682C113.404 682 119 687.596 119 694.5Z"
                            fill="#63C7FF"
                          />
                          <path
                            d="M116.482 702.025L115.684 701.422L115.677 701.432L115.67 701.441L116.482 702.025ZM114.32 704.559L115.059 705.233L114.32 704.559ZM98.6798 704.559L99.4183 703.885L99.4183 703.885L98.6798 704.559ZM96.5179 702.025L97.33 701.441L97.3231 701.432L97.316 701.422L96.5179 702.025ZM117.28 702.628C118.987 700.367 120 697.55 120 694.5H118C118 697.1 117.138 699.497 115.684 701.422L117.28 702.628ZM115.059 705.233C115.887 704.326 116.691 703.448 117.294 702.609L115.67 701.441C115.15 702.166 114.435 702.951 113.582 703.885L115.059 705.233ZM108.5 719C108.5 712.451 112.134 708.436 115.059 705.233L113.582 703.885C110.666 707.078 106.5 711.606 106.5 719H108.5ZM106.5 721C107.605 721 108.5 720.105 108.5 719H106.5V721ZM104.5 719C104.5 720.105 105.395 721 106.5 721V719H104.5ZM97.9414 705.233C100.866 708.436 104.5 712.451 104.5 719H106.5C106.5 711.606 102.334 707.078 99.4183 703.885L97.9414 705.233ZM95.7059 702.609C96.3089 703.448 97.1128 704.326 97.9414 705.233L99.4183 703.885C98.5655 702.951 97.8504 702.166 97.33 701.441L95.7059 702.609ZM93 694.5C93 697.55 94.0127 700.367 95.7199 702.628L97.316 701.422C95.8619 699.497 95 697.1 95 694.5H93ZM106.5 681C99.0442 681 93 687.044 93 694.5H95C95 688.149 100.149 683 106.5 683V681ZM120 694.5C120 687.044 113.956 681 106.5 681V683C112.851 683 118 688.149 118 694.5H120Z"
                            fill="url(#paint21_linear_0_1)"
                            mask="url(#path-260-outside-8_0_1)"
                          />
                        </g>
                      </g>
                    </g>
                    <rect
                      id="car-care-nz_2"
                      x="82"
                      y="681"
                      width="48"
                      height="20"
                      fill="url(#pattern11)"
                    />
                  </g>
                  <g id="map-loading-markers">
                    <g id="map-loading-markers-loader">
                      <circle
                        id="map-loading-3rd-circle"
                        class="map-loading-circle"
                        opacity="0.3"
                        cx="212"
                        cy="450"
                        r="2"
                        fill="#6393F2"
                        fill-opacity="0.5"
                        stroke="#6393F2"
                        stroke-width="2"
                      />
                      <circle
                        id="map-loading-2nd-circle"
                        class="map-loading-circle"
                        opacity="0.3"
                        cx="212"
                        cy="450"
                        r="2"
                        fill="#6393F2"
                        fill-opacity="0.5"
                        stroke="#6393F2"
                        stroke-width="2"
                      />
                      <circle
                        id="map-loading-1st-circle"
                        class="map-loading-circle"
                        opacity="0.3"
                        cx="212"
                        cy="450"
                        r="2"
                        fill="#6393F2"
                        fill-opacity="0.5"
                        stroke="#6393F2"
                        stroke-width="2"
                      />
                      <g id="map-loading-pin" filter="url(#filter19_d_0_1)">
                        <circle cx="212" cy="450" r="5" fill="#6393F2" />
                        <circle
                          cx="212"
                          cy="450"
                          r="6"
                          stroke="white"
                          stroke-width="2"
                        />
                      </g>
                    </g>
                  </g>
                  <g id="form-input-16" filter="url(#filter20_d_0_1)">
                    <g clip-path="url(#clip24_0_1)">
                      <rect
                        x="28"
                        y="68"
                        width="368"
                        height="50"
                        rx="25"
                        fill="#F9F9F9"
                      />
                      <g id="input-group" clip-path="url(#clip25_0_1)">
                        <g
                          id="input-group-prepend"
                          clip-path="url(#clip26_0_1)"
                        >
                          <g id="input-group-text" clip-path="url(#clip27_0_1)">
                            <g
                              id="icn search .icn-xs"
                              clip-path="url(#clip28_0_1)"
                            >
                              <path
                                id="vector"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M64.4601 95.3188L68.7639 99.6226C68.9151 99.7739 69.0001 99.9792 69 100.193C68.9999 100.407 68.9148 100.612 68.7635 100.764C68.6121 100.915 68.4068 101 68.1928 101C67.9788 101 67.7736 100.915 67.6223 100.763L63.3185 96.4595C62.0319 97.456 60.4141 97.9249 58.794 97.7709C57.174 97.6169 55.6735 96.8515 54.5977 95.6304C53.522 94.4094 52.9518 92.8243 53.0032 91.1978C53.0546 89.5713 53.7237 88.0254 54.8744 86.8747C56.0251 85.724 57.571 85.0548 59.1975 85.0034C60.8241 84.952 62.4091 85.5222 63.6302 86.598C64.8513 87.6737 65.6167 89.1742 65.7707 90.7943C65.9247 92.4143 65.4558 94.0322 64.4593 95.3188H64.4601ZM59.4003 96.1995C60.6733 96.1995 61.8941 95.6938 62.7943 94.7937C63.6944 93.8936 64.2001 92.6727 64.2001 91.3997C64.2001 90.1268 63.6944 88.9059 62.7943 88.0058C61.8941 87.1057 60.6733 86.6 59.4003 86.6C58.1273 86.6 56.9065 87.1057 56.0063 88.0058C55.1062 88.9059 54.6005 90.1268 54.6005 91.3997C54.6005 92.6727 55.1062 93.8936 56.0063 94.7937C56.9065 95.6938 58.1273 96.1995 59.4003 96.1995Z"
                                fill="#737373"
                              />
                            </g>
                          </g>
                        </g>
                        <g id="form-control">
                          <text
                            id="Search"
                            fill="#737373"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="14"
                            letter-spacing="0.2px"
                          >
                            <tspan x="88" y="98.019">Search</tspan>
                          </text>
                        </g>
                      </g>
                    </g>
                    <rect
                      x="28.5"
                      y="68.5"
                      width="367"
                      height="49"
                      rx="24.5"
                      stroke="#DADADA"
                    />
                  </g>
                  <g id="current-location-container">
                    <g
                      id="current-location-background"
                      filter="url(#filter21_d_0_1)"
                    >
                      <circle cx="361" cy="803" r="24" fill="white" />
                    </g>
                    <g id="current-location">
                      <g id="current-location-icon">
                        <path
                          id="current-location-icon-path"
                          d="M362.767 790.513C365.485 790.901 367.92 792.169 369.774 794.023C371.672 795.921 372.959 798.431 373.31 801.231H377V804.767H373.253C372.831 807.405 371.581 809.766 369.774 811.571C367.923 813.422 365.485 814.693 362.767 815.081V818.997H359.231V815.081C356.512 814.693 354.077 813.425 352.226 811.571C350.419 809.764 349.169 807.405 348.747 804.767H345V801.231H348.687C349.039 798.431 350.325 795.921 352.223 794.023C354.075 792.171 356.509 790.901 359.228 790.513V787H362.764V790.513H362.767ZM360.999 796.221C364.631 796.221 367.574 799.166 367.574 802.796C367.574 806.428 364.629 809.371 360.999 809.371C357.366 809.371 354.424 806.426 354.424 802.796C354.424 799.166 357.366 796.221 360.999 796.221ZM368.175 795.622C366.339 793.786 363.801 792.648 360.999 792.648C358.197 792.648 355.658 793.783 353.822 795.622C351.986 797.457 350.848 799.996 350.848 802.798C350.848 805.6 351.984 808.139 353.822 809.975C355.658 811.81 358.197 812.948 360.999 812.948C363.801 812.948 366.339 811.813 368.175 809.975C370.011 808.139 371.149 805.6 371.149 802.798C371.146 799.994 370.011 797.457 368.175 795.622Z"
                          fill="#0066FF"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id="service-selected-container"
                    clip-path="url(#clip29_0_1)"
                  >
                    <g id="service-selection" filter="url(#filter22_d_0_1)">
                      <rect
                        x="98"
                        y="289"
                        width="263"
                        height="435"
                        rx="20"
                        fill="white"
                      />
                      <g id="thumb" clip-path="url(#clip30_0_1)">
                        <rect
                          id="synergy-forecourt-header-xl 2"
                          x="-163.954"
                          y="300.198"
                          width="720"
                          height="214.925"
                          fill="url(#pattern12)"
                        />
                        <g id="tag" filter="url(#filter23_d_0_1)">
                          <rect
                            x="130.046"
                            y="317.198"
                            width="66"
                            height="24"
                            rx="12"
                            fill="#4083E7"
                          />
                          <text
                            id="10% off"
                            fill="white"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="13"
                            font-weight="600"
                            letter-spacing="0.2px"
                          >
                            <tspan x="139.201" y="333.858">10% off</tspan>
                          </text>
                        </g>
                      </g>
                      <g id="content-card">
                        <text
                          id="h4"
                          fill="#252B42"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="20"
                          font-weight="500"
                          letter-spacing="0.2px"
                        >
                          <tspan x="118" y="547.17">Exxon Mobil</tspan>
                        </text>
                        <g id="div">
                          <text
                            id="h6"
                            fill="#737373"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="12"
                            font-weight="600"
                            letter-spacing="0.2px"
                          >
                            <tspan x="118" y="564.302">
                              Near Auckland Netball Centre,&#10;
                            </tspan>
                            <tspan x="118" y="582.302">Auckland</tspan>
                          </text>
                        </g>
                        <g id="Frame 31">
                          <g id="stars" clip-path="url(#clip31_0_1)">
                            <g id="icn bxs-star">
                              <path
                                id="Vector_18"
                                d="M136.289 602.649C136.237 602.495 136.141 602.359 136.012 602.259C135.883 602.159 135.728 602.099 135.566 602.086L130.815 601.708L128.759 597.158C128.694 597.011 128.587 596.886 128.453 596.799C128.318 596.712 128.161 596.665 128 596.665C127.84 596.665 127.683 596.711 127.548 596.799C127.413 596.886 127.307 597.01 127.241 597.157L125.185 601.708L120.434 602.086C120.275 602.098 120.122 602.157 119.995 602.254C119.868 602.351 119.771 602.483 119.716 602.633C119.662 602.784 119.652 602.947 119.688 603.103C119.724 603.259 119.804 603.402 119.919 603.513L123.429 606.936L122.188 612.313C122.15 612.475 122.162 612.646 122.222 612.801C122.283 612.957 122.388 613.091 122.526 613.186C122.663 613.281 122.826 613.333 122.993 613.334C123.16 613.335 123.324 613.286 123.463 613.193L128 610.168L132.538 613.193C132.68 613.288 132.847 613.336 133.017 613.332C133.188 613.329 133.353 613.273 133.491 613.172C133.628 613.072 133.732 612.932 133.788 612.771C133.843 612.61 133.848 612.436 133.802 612.272L132.278 606.938L136.058 603.537C136.305 603.313 136.396 602.965 136.289 602.649Z"
                                fill="#13C1FF"
                              />
                            </g>
                            <g id="icn bxs-star_2">
                              <path
                                id="Vector_19"
                                d="M161.291 602.649C161.238 602.495 161.142 602.359 161.013 602.259C160.885 602.159 160.73 602.099 160.567 602.086L155.816 601.708L153.761 597.158C153.695 597.011 153.589 596.886 153.454 596.799C153.319 596.712 153.162 596.665 153.002 596.665C152.841 596.665 152.684 596.711 152.549 596.799C152.414 596.886 152.308 597.01 152.242 597.157L150.186 601.708L145.436 602.086C145.276 602.098 145.123 602.157 144.996 602.254C144.869 602.351 144.772 602.483 144.718 602.633C144.663 602.784 144.653 602.947 144.689 603.103C144.725 603.259 144.805 603.402 144.92 603.513L148.431 606.936L147.189 612.313C147.151 612.475 147.163 612.646 147.224 612.801C147.284 612.957 147.39 613.091 147.527 613.186C147.665 613.281 147.827 613.333 147.994 613.334C148.161 613.335 148.325 613.286 148.464 613.193L153.001 610.168L157.539 613.193C157.681 613.288 157.848 613.336 158.019 613.332C158.189 613.329 158.354 613.273 158.492 613.172C158.629 613.072 158.733 612.932 158.789 612.771C158.844 612.61 158.849 612.436 158.803 612.272L157.279 606.938L161.059 603.537C161.306 603.313 161.397 602.965 161.291 602.649Z"
                                fill="#13C1FF"
                              />
                            </g>
                            <g id="icn bxs-star_3">
                              <path
                                id="Vector_20"
                                d="M186.288 602.649C186.236 602.495 186.139 602.359 186.011 602.259C185.882 602.159 185.727 602.099 185.565 602.086L180.814 601.708L178.758 597.158C178.693 597.011 178.586 596.886 178.452 596.799C178.317 596.712 178.16 596.665 177.999 596.665C177.839 596.665 177.682 596.711 177.547 596.799C177.412 596.886 177.306 597.01 177.24 597.157L175.184 601.708L170.433 602.086C170.274 602.098 170.121 602.157 169.994 602.254C169.866 602.351 169.77 602.483 169.715 602.633C169.661 602.784 169.651 602.947 169.687 603.103C169.723 603.259 169.803 603.402 169.917 603.513L173.428 606.936L172.187 612.313C172.149 612.475 172.161 612.646 172.221 612.801C172.282 612.957 172.387 613.091 172.525 613.186C172.662 613.281 172.825 613.333 172.992 613.334C173.159 613.335 173.323 613.286 173.462 613.193L177.999 610.168L182.537 613.193C182.678 613.288 182.846 613.336 183.016 613.332C183.187 613.329 183.352 613.273 183.489 613.172C183.627 613.072 183.731 612.932 183.786 612.771C183.842 612.61 183.847 612.436 183.801 612.272L182.277 606.938L186.057 603.537C186.304 603.313 186.395 602.965 186.288 602.649Z"
                                fill="#13C1FF"
                              />
                            </g>
                            <g id="icn bxs-star_4">
                              <path
                                id="Vector_21"
                                d="M211.289 602.649C211.236 602.495 211.14 602.359 211.011 602.259C210.883 602.159 210.728 602.099 210.565 602.086L205.814 601.708L203.759 597.158C203.693 597.011 203.587 596.886 203.452 596.799C203.317 596.712 203.16 596.665 203 596.665C202.839 596.665 202.682 596.711 202.547 596.799C202.412 596.886 202.306 597.01 202.24 597.157L200.184 601.708L195.434 602.086C195.274 602.098 195.121 602.157 194.994 602.254C194.867 602.351 194.77 602.483 194.716 602.633C194.661 602.784 194.651 602.947 194.687 603.103C194.723 603.259 194.803 603.402 194.918 603.513L198.429 606.936L197.187 612.313C197.149 612.475 197.161 612.646 197.222 612.801C197.282 612.957 197.388 613.091 197.525 613.186C197.662 613.281 197.825 613.333 197.992 613.334C198.159 613.335 198.323 613.286 198.462 613.193L202.999 610.168L207.537 613.193C207.679 613.288 207.846 613.336 208.017 613.332C208.187 613.329 208.352 613.273 208.49 613.172C208.627 613.072 208.731 612.932 208.787 612.771C208.842 612.61 208.847 612.436 208.801 612.272L207.277 606.938L211.057 603.537C211.304 603.313 211.395 602.965 211.289 602.649Z"
                                fill="#13C1FF"
                              />
                            </g>
                            <g id="icn bx-star">
                              <path
                                id="Vector_22"
                                d="M223.431 606.936L222.189 612.313C222.15 612.475 222.162 612.646 222.222 612.802C222.282 612.958 222.388 613.093 222.525 613.188C222.663 613.283 222.826 613.334 222.993 613.335C223.161 613.336 223.324 613.287 223.463 613.193L228.001 610.168L232.538 613.193C232.68 613.288 232.847 613.336 233.018 613.332C233.188 613.329 233.353 613.273 233.491 613.173C233.629 613.072 233.732 612.932 233.788 612.771C233.843 612.61 233.849 612.436 233.802 612.272L232.278 606.938L236.058 603.537C236.179 603.428 236.266 603.286 236.307 603.128C236.348 602.97 236.342 602.804 236.29 602.65C236.237 602.496 236.141 602.36 236.012 602.26C235.884 602.16 235.729 602.1 235.566 602.087L230.816 601.708L228.76 597.158C228.694 597.011 228.588 596.887 228.453 596.799C228.318 596.712 228.161 596.666 228.001 596.666C227.84 596.666 227.683 596.712 227.548 596.799C227.413 596.887 227.307 597.011 227.241 597.158L225.186 601.708L220.435 602.086C220.275 602.099 220.122 602.157 219.995 602.254C219.868 602.351 219.771 602.483 219.717 602.633C219.662 602.784 219.652 602.947 219.688 603.103C219.724 603.259 219.804 603.402 219.919 603.513L223.431 606.936ZM225.808 603.331C225.957 603.319 226.1 603.268 226.222 603.182C226.344 603.096 226.44 602.979 226.501 602.843L228.001 599.525L229.5 602.843C229.561 602.979 229.657 603.096 229.779 603.182C229.901 603.268 230.044 603.319 230.193 603.331L233.503 603.593L230.777 606.047C230.541 606.26 230.446 606.588 230.533 606.895L231.577 610.549L228.464 608.473C228.327 608.382 228.166 608.333 228.002 608.333C227.837 608.333 227.676 608.382 227.54 608.473L224.286 610.643L225.161 606.854C225.193 606.715 225.189 606.57 225.149 606.432C225.109 606.295 225.034 606.171 224.931 606.071L222.4 603.603L225.808 603.331Z"
                                fill="#13C1FF"
                              />
                            </g>
                          </g>
                          <text
                            id="h6_2"
                            fill="#737373"
                            xml:space="preserve"
                            style="white-space: pre"
                            font-family="Montserrat"
                            font-size="12"
                            font-weight="600"
                            letter-spacing="0.2px"
                          >
                            <tspan x="248" y="611.302">216 Reviews</tspan>
                          </text>
                        </g>
                        <g id="Group 1">
                          <g id="price-tag">
                            <g clip-path="url(#clip32_0_1)">
                              <text
                                id="h5"
                                fill="#D21010"
                                xml:space="preserve"
                                style="white-space: pre"
                                font-family="Montserrat"
                                font-size="16"
                                font-weight="600"
                                letter-spacing="0.1px"
                                text-decoration="line-through"
                              >
                                <tspan x="141.728" y="649.736">$15</tspan>
                                <tspan x="141.775" y="673.736">.00</tspan>
                              </text>
                            </g>
                            <rect
                              x="120.5"
                              y="627.5"
                              width="68"
                              height="33"
                              rx="4.5"
                              stroke="#E6E6E6"
                            />
                          </g>
                          <g id="price-tag_2">
                            <text
                              id="h5_2"
                              fill="#13C1FF"
                              xml:space="preserve"
                              style="white-space: pre"
                              font-family="Montserrat"
                              font-size="16"
                              font-weight="600"
                              letter-spacing="0.1px"
                            >
                              <tspan x="211.019" y="649.736">$13.5</tspan>
                            </text>
                            <rect
                              x="196.5"
                              y="627.5"
                              width="68"
                              height="33"
                              rx="4.5"
                              stroke="#E6E6E6"
                            />
                          </g>
                        </g>
                      </g>
                      <g id="book-now-button">
                        <rect
                          x="118"
                          y="669"
                          width="223"
                          height="39"
                          rx="10"
                          fill="#13C1FF"
                        />
                        <text
                          id="book-now"
                          fill="white"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="14"
                          font-weight="600"
                          letter-spacing="0.2px"
                        >
                          <tspan x="191.647" y="693.019">Book Now</tspan>
                        </text>
                      </g>
                      <rect
                        x="98.5"
                        y="289.5"
                        width="262"
                        height="434"
                        rx="19.5"
                        stroke="#DEDEDE"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g id="login-page" clip-path="url(#clip33_0_1)">
              <path
                id="screen-placeholder_6"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43.7283 43.7285H380.271C397.391 43.7285 411.269 57.6065 411.269 74.7259V831.948C411.269 849.067 397.391 862.945 380.271 862.945H43.7283C26.609 862.945 12.731 849.067 12.731 831.948V74.7259C12.731 57.6065 26.609 43.7285 43.7283 43.7285Z"
                fill="url(#paint22_linear_0_1)"
              />
              <g id="login-otp-data-container">
                <text
                  id="otp-resend"
                  fill="white"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Montserrat"
                  font-size="14"
                  font-weight="500"
                  letter-spacing="0.2px"
                >
                  <tspan x="154.156" y="773.019">
                    Resend in 00:
                    <tspan id="otp-timer">{{ otpTimerSeconds }}</tspan>
                  </tspan>
                </text>
                <g id="login-otp-continue-button">
                  <rect
                    x="30"
                    y="698"
                    width="365"
                    height="48"
                    rx="10"
                    fill="#13C1FF"
                  />
                  <text
                    id="login-otp-continue"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="20"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="164.446" y="729.17">Continue</tspan>
                  </text>
                </g>
                <g id="login-otp-input">
                  <g id="login-otp-input-container_5">
                    <g id="login-otp-form-control_5">
                      <rect
                        x="30.5"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="1_2"
                        fill="black"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="20"
                        letter-spacing="0.2px"
                      >
                        <tspan class="otp-from-sms" x="44.3867" y="652.17">
                          1
                        </tspan>
                      </text>
                      <rect
                        x="30.5"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                  <g
                    id="login-otp-input-container_6"
                    clip-path="url(#clip38_0_1)"
                  >
                    <g id="login-otp-form-control_6">
                      <rect
                        x="94.2965"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="2_2"
                        fill="black"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="20"
                        letter-spacing="0.2px"
                      >
                        <tspan class="otp-from-sms" x="106.316" y="652.17">
                          2
                        </tspan>
                      </text>
                      <rect
                        x="94.2965"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                  <g
                    id="login-otp-input-container"
                    clip-path="url(#clip34_0_1)"
                  >
                    <g id="login-otp-form-control">
                      <rect
                        x="158.093"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="3_2"
                        fill="black"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="20"
                        letter-spacing="0.2px"
                      >
                        <tspan class="otp-from-sms" x="170.355" y="652.17">
                          3
                        </tspan>
                      </text>
                      <rect
                        x="158.093"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                  <g
                    id="login-otp-input-container_2"
                    clip-path="url(#clip35_0_1)"
                  >
                    <g id="login-otp-form-control_2">
                      <rect
                        x="221.89"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="4_2"
                        fill="black"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="20"
                        letter-spacing="0.2px"
                      >
                        <tspan class="otp-from-sms" x="233.389" y="652.17">
                          4
                        </tspan>
                      </text>
                      <rect
                        x="221.89"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                  <g
                    id="login-otp-input-container_3"
                    clip-path="url(#clip36_0_1)"
                  >
                    <g id="login-otp-form-control_3">
                      <rect
                        x="285.686"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="5_2"
                        fill="black"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="20"
                        letter-spacing="0.2px"
                      >
                        <tspan class="otp-from-sms" x="298.336" y="652.17">
                          5
                        </tspan>
                      </text>
                      <rect
                        x="285.686"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                  <g
                    id="login-otp-input-container_4"
                    clip-path="url(#clip37_0_1)"
                  >
                    <g id="login-otp-form-control_4">
                      <rect
                        x="348.437"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        fill="#F9F9F9"
                      />
                      <text
                        id="6_2"
                        fill="black"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="20"
                        letter-spacing="0.2px"
                      >
                        <tspan class="otp-from-sms" x="360.406" y="652.17">
                          6
                        </tspan>
                      </text>
                      <rect
                        x="348.437"
                        y="620.5"
                        width="46"
                        height="49"
                        rx="9.5"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                </g>
                <text
                  id="login-otp-label"
                  fill="white"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Montserrat"
                  font-size="15"
                  font-weight="500"
                  letter-spacing="0.2px"
                >
                  <tspan x="33.1298" y="604.378">
                    Enter the OTP to continue
                  </tspan>
                </text>
              </g>
              <g id="login-input-data-container">
                <g id="login-phone-continue-button">
                  <rect
                    x="30"
                    y="748"
                    width="365"
                    height="48"
                    rx="10"
                    fill="#13C1FF"
                  />
                  <text
                    id="login-phone-continue"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="20"
                    font-weight="600"
                    letter-spacing="0.2px"
                  >
                    <tspan x="164.446" y="779.17">Continue</tspan>
                  </text>
                </g>
                <g id="login-tnc">
                  <text
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="12"
                    letter-spacing="0.2px"
                  >
                    <tspan x="86.3812" y="699.802">
                      By clicking on continue you agree to our&#x2028;
                    </tspan>
                    <tspan x="207.679" y="716.802">and</tspan>
                  </text>
                  <text
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Montserrat"
                    font-size="12"
                    font-weight="600"
                    letter-spacing="0.2px"
                    text-decoration="underline"
                  >
                    <tspan x="99.8891" y="716.802">Terms of Service</tspan>
                    <tspan x="235.28" y="716.802">Privacy Policy</tspan>
                  </text>
                </g>
                <g id="login-input">
                  <g id="login-phone-input-container">
                    <g clip-path="url(#clip39_0_1)">
                      <g id="login-phone-form-control">
                        <rect
                          x="30.5"
                          y="620.5"
                          width="364"
                          height="49"
                          rx="9.5"
                          fill="#F9F9F9"
                        />
                        <text
                          id="000 000 0000"
                          fill="#202020"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="20"
                          letter-spacing="0.2px"
                        >
                          <tspan id="login-input-text" x="159.455" y="652.17">
                            <tspan class="login-input-text">0</tspan>
                            <tspan class="login-input-text">0</tspan>
                            <tspan class="login-input-text">0&nbsp;</tspan>
                            <tspan class="login-input-text">0</tspan>
                            <tspan class="login-input-text">0</tspan>
                            <tspan class="login-input-text">0&nbsp;</tspan>
                            <tspan class="login-input-text">0</tspan>
                            <tspan class="login-input-text">0</tspan>
                            <tspan class="login-input-text">0</tspan>
                            <tspan class="login-input-text">0</tspan>
                          </tspan>
                        </text>
                        <text
                          id="login-input-placeholder"
                          fill="#A3A3A3"
                          xml:space="preserve"
                          style="white-space: pre"
                          font-family="Montserrat"
                          font-size="20"
                          letter-spacing="0.2px"
                        >
                          <tspan x="159.455" y="652.17">XXX XXX XXXX</tspan>
                        </text>
                        <rect
                          x="30.5"
                          y="620.5"
                          width="364"
                          height="49"
                          rx="9.5"
                          stroke="#E6E6E6"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id="login-country-code-input-container"
                    clip-path="url(#clip40_0_1)"
                  >
                    <g id="login-country-input-form-control">
                      <path
                        d="M30.5 630C30.5 624.753 34.7533 620.5 40 620.5H147.5V669.5H40C34.7533 669.5 30.5 665.247 30.5 660V630Z"
                        fill="#F9F9F9"
                      />
                      <text
                        id="login-country-code"
                        fill="#A3A3A3"
                        xml:space="preserve"
                        style="white-space: pre"
                        font-family="Montserrat"
                        font-size="20"
                        letter-spacing="0.2px"
                      >
                        <tspan x="96" y="652.17">+64</tspan>
                      </text>
                      <rect
                        id="login-country-code-nz-flag"
                        x="44"
                        y="634"
                        width="40"
                        height="22.2727"
                        fill="url(#pattern13)"
                      />
                      <path
                        d="M30.5 630C30.5 624.753 34.7533 620.5 40 620.5H147.5V669.5H40C34.7533 669.5 30.5 665.247 30.5 660V630Z"
                        stroke="#E6E6E6"
                      />
                    </g>
                  </g>
                </g>
                <text
                  id="login-phone-label"
                  fill="white"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Montserrat"
                  font-size="15"
                  font-weight="500"
                  letter-spacing="0.2px"
                >
                  <tspan x="33.4323" y="604.378">Enter your phone number</tspan>
                </text>
              </g>
              <rect
                id="car-wash-illustration"
                x="13"
                width="398"
                height="528"
                fill="url(#pattern14)"
                transform="translate(0, 24)"
              />
              <g id="login-header">
                <text
                  id="login-description"
                  fill="white"
                  xml:space="preserve"
                  style="white-space: pre"
                  font-family="Montserrat"
                  font-size="14"
                  font-weight="600"
                  letter-spacing="0.2px"
                >
                  <tspan x="72.3119" y="229.019">
                    Booking car wash services made easy
                  </tspan>
                </text>
                <g id="login-8sqm-logo">
                  <text
                    id="login-logo-8SQM"
                    fill="white"
                    xml:space="preserve"
                    style="white-space: pre"
                    font-family="Noto Sans"
                    font-size="48"
                    font-weight="800"
                    letter-spacing="0.2px"
                  >
                    <tspan x="186" y="189.593">
                      <tspan class="login-logo-text">8</tspan>
                      <tspan class="login-logo-text">S</tspan>
                      <tspan class="login-logo-text">Q</tspan>
                      <tspan class="login-logo-text">M</tspan>
                    </tspan>
                  </text>
                  <rect
                    id="login-car-wash-logo"
                    x="97"
                    y="137"
                    width="72.4749"
                    height="71"
                    fill="url(#pattern15)"
                  />
                </g>
              </g>
            </g>
            <g id="cursor">
              <path
                id="Vector_23"
                d="M404.667 584.012L373 572L385.012 603.667L390.471 589.471L404.667 584.012Z"
                fill="url(#paint23_linear_0_1)"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_dd_0_1"
          x="20"
          y="256"
          width="384"
          height="50"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_dd_0_1"
          x="20"
          y="317"
          width="384"
          height="119"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_dd_0_1"
          x="20"
          y="347"
          width="384"
          height="50"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter3_dd_0_1"
          x="20"
          y="386"
          width="384"
          height="50"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter4_dd_0_1"
          x="20"
          y="477"
          width="384"
          height="50"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter5_dd_0_1"
          x="20"
          y="568"
          width="384"
          height="50"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter6_dd_0_1"
          x="20"
          y="607"
          width="384"
          height="50"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.04 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect2_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter7_ddd_0_1"
          x="20"
          y="668"
          width="384"
          height="58"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_0_1"
            result="effect3_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter8_ddd_0_1"
          x="224"
          y="106"
          width="164.2"
          height="58"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_0_1"
            result="effect3_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter9_ddd_0_1"
          x="35"
          y="106"
          width="164.2"
          height="58"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow_0_1"
            result="effect2_dropShadow_0_1"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-1" />
          <feGaussianBlur stdDeviation="0.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow_0_1"
            result="effect3_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect3_dropShadow_0_1"
            result="shape"
          />
        </filter>
        <filter
          id="filter10_d_0_1"
          x="16"
          y="475"
          width="322"
          height="380"
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
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
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
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_0_1"
            transform="scale(0.00869565 0.030303)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image1_0_1"
            transform="scale(0.000605327 0.00112613)"
          />
        </pattern>
        <filter
          id="filter11_f_0_1"
          x="138"
          y="777"
          width="13"
          height="9"
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
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_0_1"
            transform="scale(0.00869565 0.030303)"
          />
        </pattern>
        <filter
          id="filter12_f_0_1"
          x="41"
          y="473"
          width="13"
          height="9"
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
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_0_1"
            transform="scale(0.00869565 0.030303)"
          />
        </pattern>
        <filter
          id="filter13_f_0_1"
          x="313"
          y="285"
          width="13"
          height="9"
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
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <pattern
          id="pattern4"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image0_0_1"
            transform="scale(0.00869565 0.030303)"
          />
        </pattern>
        <filter
          id="filter14_f_0_1"
          x="331"
          y="418"
          width="13"
          height="9"
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
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <pattern
          id="pattern5"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image2_0_1"
            transform="matrix(0.00645161 0 0 0.0075188 -0.0322581 -0.225564)"
          />
        </pattern>
        <filter
          id="filter15_f_0_1"
          x="163"
          y="581"
          width="13"
          height="9"
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
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <pattern
          id="pattern6"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image3_0_1"
            transform="matrix(0.00352113 0 0 0.00345444 -4.30545e-08 -0.302326)"
          />
        </pattern>
        <pattern
          id="pattern7"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image3_0_1"
            transform="matrix(0.00352113 0 0 0.00345444 -4.30545e-08 -0.302326)"
          />
        </pattern>
        <filter
          id="filter16_f_0_1"
          x="105"
          y="232"
          width="13"
          height="9"
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
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <pattern
          id="pattern8"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image3_0_1"
            transform="matrix(0.00352113 0 0 0.00345444 -4.30545e-08 -0.302326)"
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
            transform="matrix(0.00352113 0 0 0.00345444 -4.30545e-08 -0.302326)"
          />
        </pattern>
        <filter
          id="filter17_f_0_1"
          x="175"
          y="296"
          width="13"
          height="9"
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
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <pattern
          id="pattern10"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image4_0_1" transform="scale(0.0104167 0.025)" />
        </pattern>
        <filter
          id="filter18_f_0_1"
          x="100"
          y="716"
          width="13"
          height="9"
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
          <feGaussianBlur
            stdDeviation="1"
            result="effect1_foregroundBlur_0_1"
          />
        </filter>
        <pattern
          id="pattern11"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image4_0_1" transform="scale(0.0104167 0.025)" />
        </pattern>
        <filter
          id="filter19_d_0_1"
          x="199"
          y="438"
          width="26"
          height="26"
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
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
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
          id="filter20_d_0_1"
          x="19"
          y="62"
          width="386"
          height="68"
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
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_0_1"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="4" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
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
          id="filter21_d_0_1"
          x="328"
          y="773"
          width="66"
          height="66"
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
          <feMorphology
            radius="1"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_0_1"
          />
          <feOffset dy="3" />
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
        <filter
          id="filter22_d_0_1"
          x="79"
          y="283"
          width="301"
          height="473"
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
          <feOffset dy="13" />
          <feGaussianBlur stdDeviation="9.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
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
          id="pattern12"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlink:href="#image5_0_1" transform="scale(0.000746269 0.0025)" />
        </pattern>
        <filter
          id="filter23_d_0_1"
          x="126.046"
          y="315.198"
          width="74"
          height="32"
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
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
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
          id="pattern13"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image6_0_1"
            transform="matrix(0.000580019 0 0 0.00104167 -0.0568182 0)"
          />
        </pattern>
        <pattern
          id="pattern14"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image7_0_1"
            transform="matrix(0.00163399 0 0 0.00123168 0 0.50726)"
          />
        </pattern>
        <pattern
          id="pattern15"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlink:href="#image8_0_1"
            transform="matrix(0.015625 0 0 0.0159496 0 -0.0103865)"
          />
        </pattern>
        <linearGradient
          id="paint0_linear_0_1"
          x1="212"
          y1="1056"
          x2="212"
          y2="262"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6363FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_0_1"
          x1="212"
          y1="416.333"
          x2="212"
          y2="489.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6363FF" />
          <stop offset="1" stop-color="#13C1FF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_0_1"
          x1="212"
          y1="433"
          x2="212"
          y2="456.333"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6363FF" />
          <stop offset="1" stop-color="#13C1FF" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_0_1"
          x1="212"
          y1="449.667"
          x2="212"
          y2="479.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6363FF" />
          <stop offset="1" stop-color="#13C1FF" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_0_1"
          x1="212"
          y1="516.021"
          x2="212"
          y2="145.78"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#17A400" />
          <stop offset="1" stop-color="#00E817" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_0_1"
          x1="177"
          y1="683.667"
          x2="177"
          y2="612.417"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6363FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_0_1"
          x1="212"
          y1="383.806"
          x2="212"
          y2="117.271"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6363FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_0_1"
          x1="144.5"
          y1="743"
          x2="144.5"
          y2="781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#63C7FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_0_1"
          x1="144.5"
          y1="743"
          x2="144.5"
          y2="781"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint9_linear_0_1"
          x1="47.5"
          y1="439"
          x2="47.5"
          y2="477"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#63C7FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint10_linear_0_1"
          x1="47.5"
          y1="439"
          x2="47.5"
          y2="477"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_0_1"
          x1="319.5"
          y1="251"
          x2="319.5"
          y2="289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#63C7FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint12_linear_0_1"
          x1="319.5"
          y1="251"
          x2="319.5"
          y2="289"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint13_linear_0_1"
          x1="337.5"
          y1="384"
          x2="337.5"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#63C7FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint14_linear_0_1"
          x1="337.5"
          y1="384"
          x2="337.5"
          y2="422"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint15_linear_0_1"
          x1="169.5"
          y1="547"
          x2="169.5"
          y2="585"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#63C7FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint16_linear_0_1"
          x1="169.5"
          y1="547"
          x2="169.5"
          y2="585"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint17_linear_0_1"
          x1="111.5"
          y1="198"
          x2="111.5"
          y2="236"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#63C7FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint18_linear_0_1"
          x1="111.5"
          y1="198"
          x2="111.5"
          y2="236"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint19_linear_0_1"
          x1="181.5"
          y1="262"
          x2="181.5"
          y2="300"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#63C7FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint20_linear_0_1"
          x1="181.5"
          y1="262"
          x2="181.5"
          y2="300"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_0_1"
          x1="106.5"
          y1="682"
          x2="106.5"
          y2="720"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" stop-opacity="0.35" />
        </linearGradient>
        <linearGradient
          id="paint22_linear_0_1"
          x1="212"
          y1="1056"
          x2="212"
          y2="262"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#6363FF" />
          <stop offset="1" stop-color="#00D7FF" />
        </linearGradient>
        <linearGradient
          id="paint23_linear_0_1"
          x1="373"
          y1="578.667"
          x2="404.667"
          y2="607.833"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.236842" stop-color="#473BD7" />
          <stop offset="0.684211" stop-color="#E77777" />
        </linearGradient>
        <clipPath id="clip0_0_1">
          <rect
            width="398.538"
            height="819.217"
            fill="white"
            transform="translate(12.731 43.7285)"
          />
        </clipPath>
        <clipPath id="clip1_0_1">
          <rect
            width="398.538"
            height="819.217"
            fill="white"
            transform="translate(12.731 43.7285)"
          />
        </clipPath>
        <clipPath id="clip2_0_1">
          <rect
            width="34"
            height="14"
            fill="white"
            transform="translate(230 805)"
          />
        </clipPath>
        <clipPath id="clip3_0_1">
          <rect
            width="374"
            height="109"
            fill="white"
            transform="translate(25 320)"
          />
        </clipPath>
        <clipPath id="clip4_0_1">
          <rect
            width="28"
            height="18.7221"
            fill="white"
            transform="translate(359 362)"
          />
        </clipPath>
        <clipPath id="clip5_0_1">
          <rect
            width="374"
            height="40"
            fill="white"
            transform="translate(25 389)"
          />
        </clipPath>
        <clipPath id="clip6_0_1">
          <rect
            width="23.5102"
            height="15.4286"
            fill="white"
            transform="translate(365.08 401.567)"
          />
        </clipPath>
        <clipPath id="clip7_0_1">
          <rect
            width="58.2"
            height="24"
            fill="white"
            transform="translate(277 121)"
          />
        </clipPath>
        <clipPath id="clip8_0_1">
          <rect
            width="58.2"
            height="24"
            fill="white"
            transform="translate(88 121)"
          />
        </clipPath>
        <clipPath id="clip9_0_1">
          <rect
            width="398.538"
            height="819.217"
            fill="white"
            transform="translate(12.731 43.7285)"
          />
        </clipPath>
        <clipPath id="clip10_0_1">
          <rect
            width="130"
            height="50"
            fill="white"
            transform="translate(255 433)"
          />
        </clipPath>
        <clipPath id="clip11_0_1">
          <rect x="32" y="483" width="290" height="348" rx="8" fill="white" />
        </clipPath>
        <clipPath id="clip12_0_1">
          <rect x="77" y="735" width="40" height="48" rx="8" fill="white" />
        </clipPath>
        <clipPath id="clip13_0_1">
          <rect
            width="197"
            height="50"
            fill="white"
            transform="translate(32 433)"
          />
        </clipPath>
        <clipPath id="clip14_0_1">
          <rect
            width="398.538"
            height="819.271"
            fill="white"
            transform="translate(12.731 43.7285)"
          />
        </clipPath>
        <clipPath id="clip15_0_1">
          <rect x="13" y="44" width="398" height="819" rx="35" fill="white" />
        </clipPath>
        <clipPath id="clip16_0_1">
          <rect
            width="27"
            height="43"
            fill="white"
            transform="translate(131 742)"
          />
        </clipPath>
        <clipPath id="clip17_0_1">
          <rect
            width="27"
            height="43"
            fill="white"
            transform="translate(34 438)"
          />
        </clipPath>
        <clipPath id="clip18_0_1">
          <rect
            width="27"
            height="43"
            fill="white"
            transform="translate(306 250)"
          />
        </clipPath>
        <clipPath id="clip19_0_1">
          <rect
            width="27"
            height="43"
            fill="white"
            transform="translate(324 383)"
          />
        </clipPath>
        <clipPath id="clip20_0_1">
          <rect
            width="27"
            height="43"
            fill="white"
            transform="translate(156 546)"
          />
        </clipPath>
        <clipPath id="clip21_0_1">
          <rect
            width="27"
            height="43"
            fill="white"
            transform="translate(98 197)"
          />
        </clipPath>
        <clipPath id="clip22_0_1">
          <rect
            width="27"
            height="43"
            fill="white"
            transform="translate(168 261)"
          />
        </clipPath>
        <clipPath id="clip23_0_1">
          <rect
            width="27"
            height="43"
            fill="white"
            transform="translate(93 681)"
          />
        </clipPath>
        <clipPath id="clip24_0_1">
          <rect x="28" y="68" width="368" height="50" rx="25" fill="white" />
        </clipPath>
        <clipPath id="clip25_0_1">
          <rect
            width="368"
            height="50"
            fill="white"
            transform="translate(28 68)"
          />
        </clipPath>
        <clipPath id="clip26_0_1">
          <rect
            width="15.9645"
            height="15.9998"
            fill="white"
            transform="translate(52.9414 85)"
          />
        </clipPath>
        <clipPath id="clip27_0_1">
          <rect
            width="15.9645"
            height="15.9998"
            fill="white"
            transform="translate(52.9414 85)"
          />
        </clipPath>
        <clipPath id="clip28_0_1">
          <rect
            width="16"
            height="16"
            fill="white"
            transform="translate(53 85)"
          />
        </clipPath>
        <clipPath id="clip29_0_1">
          <rect
            width="263"
            height="435"
            fill="white"
            transform="translate(98 289)"
          />
        </clipPath>
        <clipPath id="clip30_0_1">
          <rect
            width="222.909"
            height="210.419"
            fill="white"
            transform="translate(118.046 306.198)"
          />
        </clipPath>
        <clipPath id="clip31_0_1">
          <rect
            width="120"
            height="20"
            fill="white"
            transform="translate(118 595)"
          />
        </clipPath>
        <clipPath id="clip32_0_1">
          <rect x="120" y="627" width="69" height="34" rx="5" fill="white" />
        </clipPath>
        <clipPath id="clip33_0_1">
          <rect
            width="398.538"
            height="862.945"
            fill="white"
            transform="translate(12.731)"
          />
        </clipPath>
        <clipPath id="clip34_0_1">
          <rect
            width="47.063"
            height="50"
            fill="white"
            transform="translate(157.593 620)"
          />
        </clipPath>
        <clipPath id="clip35_0_1">
          <rect
            width="47.063"
            height="50"
            fill="white"
            transform="translate(221.39 620)"
          />
        </clipPath>
        <clipPath id="clip36_0_1">
          <rect
            width="47.063"
            height="50"
            fill="white"
            transform="translate(285.186 620)"
          />
        </clipPath>
        <clipPath id="clip37_0_1">
          <rect
            width="47.063"
            height="50"
            fill="white"
            transform="translate(347.937 620)"
          />
        </clipPath>
        <clipPath id="clip38_0_1">
          <rect
            width="47.063"
            height="50"
            fill="white"
            transform="translate(93.7965 620)"
          />
        </clipPath>
        <clipPath id="clip39_0_1">
          <rect x="30" y="620" width="365" height="50" rx="10" fill="white" />
        </clipPath>
        <clipPath id="clip40_0_1">
          <rect
            width="118"
            height="50"
            fill="white"
            transform="translate(30 620)"
          />
        </clipPath>
        <image
          id="image0_0_1"
          data-name="mobil.png"
          width="115"
          height="33"
          xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAhCAYAAADqBZQaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA7dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ODI3NDNCMEQzNjIwNjgxMTgwODNFQTAwMUFFOUE2NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MEM4MzZBRjA0QjY4MTFFNkI0M0VENTA3RUVCQUI4OUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MEM4MzZBRUY0QjY4MTFFNkI0M0VENTA3RUVCQUI4OUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA5ODAxMTc0MDcyMDY4MTE4MDgzODgyQjFDOTRBQzNDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyNzQzQjBEMzYyMDY4MTE4MDgzRUEwMDFBRTlBNjZFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sQuPoAAADRNJREFUeNqsWwuQFMUZ/md27/a44+2BIg+JkIiWGk5TaiKCqBg80bJCkQiJsYqKSYyJmqSoVKpMTIl5mWiKwtKoqYqVZyVqYoQEOIjEQ4j4ABGjkSBBoggKx8HBvXZ3Jt8/27PX0/t3zxzSVf92T89MT/f/9//u9U5qfWSzT+FHSJWAPMI16YX7UH4D+BplL09hnEvi8fRxjfZSVPdJA5S9HB3z87T63d/R9H07CS/xCwM1qXZysrRu0nm0qHkejSz143Zgm9838e07zLWqMgfwIp3Y8g9876MxLipTj9qvoDkrvkb5KmCp/oxW5qJ/M+r56L8F9ROAi9G3EtfX5/EzER0jqYqb2sWpj96I5m0aGq3Po4wFXKPflzYI9wFG2lbfkcvTd49uGSBkloLnrtizhb7SOJV+PmQajSr1UuiJT46M1y1s4AKd+DLegucJBtOMYJzoRNfm2KT6V6DrQsDfAAsBiwBjGEWdrhloAw4DXJRx4q36RMyxvORieqQBuv0CDS0HtHj32uPC3JLdT9GwoEj94GxL6ZE2Gs8RUFJ1DWTAk1hC8g4bzBG3D6tNHd/uFaRX3C6qd+pQvYf+JtTtuH4H9aa8SwyaE0TfPPRtSkMknpknie249rTvSMWLiOnR8s52Gtrfd1zEbOrtpdt6XqHvDT2fmkulQb0rSZs0YqUVXrNn4MQUpZIassynG3A/ayI8exfu8wLzvrArxYWpel68i4zdpJcGwJVqN2ZCnAlduXq6tP8gLdz1jKwXM5bPvf0MjSoXqc+rc3JUvGa9zsKNrvGEMXzL2o9ndaHi4KKqmZi9vqG/bEZKPMg5gMkpH7qURbIfkTKs7kBT/kuGVjzNkufRLYc3fiBCRkqx+yjdCu7syuWsG8vX5ihxgWXDDmpzqjFOsejnU9IkQ1Zxn5eQKl1ri21F9YBD/MyT7pkbw4ako7kCzQRXzv7fyyfE6li4dwPdN2U69Xt5KoTFVNFq3WQfsGDcxRh3NCDUvuGh3eGaQxq+EsS0WZlx21PyXutrRfsBB1KutljDomjWCe5FssKjm4/8M23eLDfHAIYA2LA4YLNsm48eodvBnUuHtlChVBTFojA//wQQz+xabXPPTGLZiOpisoiY5sfNF5iQYUTUqu6cjapRKWHz+aoYto3nmuARxZWXw7UQyocAC/DC7Og7Po3CAOxCHAW8D3gO0AZ43LSQF+1rp3tPZ+6so/qwmAXxB1XfBMzv06hnoD4bffy9Iur/4nqbcg2ezkjf6wDj+H2NCIz/fYAnJSmWhRv1Z/IOxHfgmonW4CWR34j6MlyuFAa+JjZ8DIIdUr5bo22C/E4/dOXNXc+Zt8ZgkO+jXoyBcibnsV8WQUBT2eZBHz97D+r742fGHDlMX+/eRncPa6ExxWJivcJ8+nC/Dv23ov1jZdCZnDAFcAUHHgAb0fdD1H9N0bUP4LlxgrRiF+NJl6g3DTQbQV3iZIOaqChKLYi4Vnc9jGhQhzkp3ThiC3ZmsYPmvPWS/t7VuPka6psAuShcEdRGfIyVTER7Oer1unHx2XfbqQmGfBG60ybu1bzKgFWAZTohdcPD0GcX43qlet5luOyTCMScafMMzE3nMK4GUGDhlr0YbJ0Qfor0pvD8KSoqkeA2pc/+DhhtMaiiFnPlTUee11+/IeJ+n5qjWfoG0aRwnp8g9qUqJDeB+8d2ddLt4M6uXL4GYYYkYWk0UXJZUowm5uQVTjUqj1XO4ufG+LRBZQ7CB9RCWNSssSxiEu63GC5Na22kJ+pnufkCI8k2yT5wy6RSH83Yvz3uYhH2qwThglrjRuyvDaE9i2fq+eIz722ihiAE9nIJxGn2gNMosXGQRlS25B+V3L0sejDNr/Uc5Kx8wz5xtha3sjHgyUEEkzuvNn05dc1cuceF8aPwA2/oe52G9fbwwMMBT9YQzpetVYMbSdgAp6kkAY3vPECzi/voWC7vNIJMf9vGIZb3b0R7fpaoUfyNUJMOsdQKjyPi5DsWNSKO9ofyzpmniV02buboOzwYsIDZ4svZzOoArTxutRyr0vsn6GyqIVKSGzsArNf+gnqzk9CV9gLWbdyc0bcnCkpInBDK9gHDGxzc5uwEW7Kexs2SMYX6EY6fSgETSUTr4+nSYtABC4e/k1OLW2vZZRcpU7sa9RGeYxdhB/rGxv0mwsowqOvDkCZ374uzLV8UiTOgI78FmApoRd910TwCOh/1n2qeDRLv3R2xafFgwq81EWggn+X+VYBpuH+tygRxunC+Lm0Ego3iLJMU9XLpx7RIjy1UGOg600KsUH1mjRTqU/VVakLX6pPTCNYec7kUZOe+ou/RBeVDNKq3KzI6rXqwMtNZkdtBdMi4u0UheFmCkEni8oabMLl7P40v94E7c9FMJImh+ljPnwdYbXyrpDbOdMAuk8s0Tl1sGbcG3ybhbM+lWbV+Wh4TZTcGfNMSy5ypnrlSiubgeo0iWl7yl7guofnhUgeN6D5GigtkjiT6BtrtKcri9oiwvlXPtp7e+Q6NBjH7lYuiI1PbhL1qLiWHsXJIRcNqjB21vo+jPdaRkBCTGpLRlVnMSqkuYUestegSjvhcACRM1fVgqML6zNW2VJg+0R4/ymqwiXlWwoAZIMYBXP+shuNkwt7lIPb07rpCpDP9sJYjNb31S8z3YAbEv8E+tJTCU+Vcm7Xqa1tHIprN78wkZlPM5bXSojCdaah+EQpRJNS7AK+ZhHRYaSdFIBOrPcFtgcXnrLQ3VjmqVneOq9RJ/W1yKKDN5DTPjuTVplj0BhhkvCtD42XkujBjKi4vm901hFuvEJQIzKPViCfOMcNQ6nqtLdZrKQ2kH9fwE9z5vmjV+qI47kK7B/eGCeeDGip9YTUpGCpChUmidkpWqgWpnVJgRY0zJEvg3JZD1pOXNgnqtGY9w8FVwPphs00cW2K7bYN0io8pXUWCW3JaqoM1AM34bbJweI+ENNOrQ//JNtEnwDgpQK6gxxVkSNONg0l/Wf1MS7pljY2Awg4rxtkE08yWdqNX0V+c19tvCdXNUumuDCuIDBffol/3VL/veTUE1coC2wYUNuOnbC4GG482IkrPm2J4sDFa32YGCwRusxkwwgRZb3UKznTiOzE/VJyE6OdlMVwXRIS8x+q2JHXmnY6Q3+ZcEFQYOLQbGGElgjM9AzNcFQcjhMKpsm02fzELzgc22nFGgBzi5QVdd6WcVFvt8p10bqgPQnoxN5YODB3OXX8WQ3SVwudJv2w12YLIGl4VB9aFwjp/1aujp9De3BCqD0sOg6OyBlRTHWv8mMqd2qJGfGqu08aBkui2qSyv1kBLt2ZTZDP2tPe0pOiFxbSl+UjxvTw4ZFeukQ40juLLxyLjxRaP9enBKAAPH04zljjseD2ADxPPFd6Jx3mMpUVXvoEO+fnq4WibU45yMoAT0N+mgXNPPBJb8EvxzPMqw2LjsgdtJwJcOJGCC1kPlWU6HqENuNbcVYJOeQew1SU+9DoP9cpHRXY0nloxUNhPtMVk49RYQHzccyfq7VEUxqffA85KWcR3IiVWaIaIlWOkQuyYMz0/wOV/AP8GsF/5OuAOZhibmuEgC+AJW1DAlloz026mHk3VmVlOfWkvrLPd0zh2nSk29AnauHV7w/h4RT9SyKOa0Fwy1sri9Gw9T+pIiXFc9s1yzqc/FM6MpEGaZW6skQ++ncFi13ba0CifTxOtLjzHejLLKb2EmLXFXS2DvIXLV11iU3JJbHozHrexXKYn6qdQV0PVYJ2LG30J2SElqMmR/howftjfjbhyR/Mk2lY3koYExRrfOuUssPU4poCvO3F/k5TLDLREsksCahmnQbknrkB7DaurAdsc7wRxsGAwPmYBxsiefIH+OGFG3MWi82JK+euEQTQp98m51E/G99aMOCeKBeeixFvSwNDmFriceuH/H/rG/Cm673JHc47/wJaXAr6KvEjuQ8GyU9scJ+9e0i1ebRP4Us5QvZ9nZDYFZVre1ELHGqrHbnisFgy6oSZsF2TS+PzPsivicE9H43BaNuRcGloui9EvjfP4gUdIO84hId/gzn5UX0LfEofdUbAwQcFgmrztOCrw5LtPG1QO4kr6zIaqDRzZsOyiFWm7zOAC7osuWPS9nWug306cpb/CTvfMyCVhy9K3xGP9BIeye3IJVU7OVcuvJ8yMTrY3DBy19HTRpxGUo/5L0GbX43lXUhltjlo9DDhD1a61+xZJ5XtJX9JzGI5eWmyWc5HD8bF+fbfg+qDlne6IYygKm/WrRfFH+JzNVoupzlbnJ3SBqO414N2d1eAsfM7HC9PoC7k28suhPtBD+H0IH7oM7blon4n2+OjcrB+dm92tEL/GptO31p0aJcG18jC7WsRHkKqp28iGYKOwhJoDGBfysVK0L6fK8comXHfj+l0A/09yPZ+6yygy+fwt+199mnVaz3Fgg4qPAp5lbvfVvNRG4Nv/cn3g/wIMAMQWt9yvdcspAAAAAElFTkSuQmCC"
        />
        <image
          id="image1_0_1"
          data-name="Auckland.png"
          width="1652"
          height="888"
          xlink:href="/images/work-assets/hashbinary/8sqm/map-place-auckland.png"
        />
        <image
          id="image2_0_1"
          data-name="Espresso-Carwash-Cafe-Large-Logo.png"
          width="680"
          height="213"
          xlink:href="data:image/png;base64,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"
        />
        <image
          id="image3_0_1"
          data-name="bp-logo.png"
          width="284"
          height="377"
          xlink:href="data:image/png;base64,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"
        />
        <image
          id="image4_0_1"
          data-name="logo.png"
          width="136"
          height="40"
          xlink:href="data:image/png;base64,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"
        />
        <image
          id="image5_0_1"
          data-name="synergy-forecourt-header-xl.jpg"
          width="1340"
          height="400"
          xlink:href="/images/work-assets/hashbinary/8sqm/synergy-forecourt-header-xl.png"
        />
        <image
          id="image6_0_1"
          data-name="Flag_of_New_Zealand.png"
          width="1920"
          height="960"
          xlink:href="data:image/png;base64,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gAYAAAAAIBQCNAAAAAAAoRCgAQAAAAAIhQANAAAAAEAoBGgAAAAAAEIhQAMAAAAAEAoBGgAAAACAUAjQAAAAAACEQoAGAAAAACAUAjQAAAAAAKEQoAEAAAAACIUADQAAAABAKARoAAAAAABCIUADAAAAABAKARoAAAAAgFAI0AAAAAAAhEKABgAAAAAgFAI0AAAAAAChEKABAAAAAAiFAA0AAAAAQCgEaAAAAAAAQiFAAwAAAAAQCgEaAAAAAIBQCNAAAAAAAIRCgAYAAAAAIBQCNAAAAAAAoRCgAQAAAAAIhQANAAAAAEAoBGgAAAAAAEIhQAMAAAAAEAoBGgAAAACAUAjQAAAAAACEQoAGAAAAACAUAjQAAAAAAKEQoAEAAAAACIUADQAAAABAKARoAAAAAABCIUADAAAAABAKARoAAAAAgFAI0AAAAAAAhEKABgAAAAAgFAI0AAAAAAChEKABAAAAAAiFAA0AAAAAQCgEaAAAAAAAQiFAAwAAAAAQCgEaAAAAAIBQCNAAAAAAAIRCgAYAAAAAIBQCNAAAAAAAoRCgAQAAAAAIhQANAAAAAEAoBGgAAAAAAEIhQAMAAAAAEAoBGgAAAACAUAjQAAAAAACEQoAGAAAAACAUAjQAAAAAAKEQoAEAAAAACIUADQAAAABAKARoAAAAAABCIUADAAAAABAKARoAAAAAgFAI0AAAAAAAhEKABgAAAAAgFAI0AAAAAAChEKABAAAAAAiFAA0AAAAAQCgEaAAAAAAAQiFAAwAAAAAQCgEaAAAAAIBQCNAAAAAAAIRCgAYAAAAAIBQCNAAAAAAAoRCgAQAAAAAIhQANAAAAAEAoBGgAAAAAAEIhQAMAAAAAEAoBGgAAAACAUAjQAAAAAACEQoAGAAAAACAUAjQAAAAAAKEQoAEAAAAACIUADQAAAABAKARoAAAAAABCIUADAAAAABAKARoAAAAAgFAI0AAAAAAAhEKABgAAAAAgFAI0AAAAAAChEKABAAAAAAiFAA0AAAAAQCgEaAAAAAAAQiFAAwAAAAAQCgEaAAAAAIBQCNAAAAAAAIRCgAYAAAAAIBQCNAAAAAAAoRCgAQAAAAAIhQANAAAAAEAoBGgAAAAAAEIhQAMAAAAAEAoBGgAAAACAUAjQAAAAAACEQoAGAAAAACAUAjQAAAAAAKEQoAEAAAAACIUADQAAAABAKARoAAAAAABCIUADAAAAABAKARoAAAAAgFAI0AAAAAAAhEKABgAAAAAgFAI0AAAAAAChEKABAAAAAAiFAA0AAAAAQCgEaAAAAAAAQiFAAwAAAAAQCgEaAAAAAIBQCNAAAAAAAIRCgAYAAAAAIBQCNAAAAAAAoRCgAQAAgMzWZ/11+qzfwTgApCEBGgAAAMhsf9x/qyP+sIVxAEhDAjQAAACQ2XbfYdAeOw42DgBpqMAQAAAAAJmrfZvm/Xt1jMVjHdq1mL9wqQEBSCu+AQ0AAABksDG7Ds3Li+fF43vtNMRoAKQbARoAAADIYGNHDl/rPwBIHwI0AAAAkKlat2yy/eZ9f/3vHbfs17Z1M2MCkFYEaAAAACBT7b3z0KLC//sFV4UF+XvsMMiYAKQVARoAAADIVGtddsNVOADSjQANAAAAZKTmTRvtvFX/39+y6zYDWzZvbGQA0ocADQAAAGSkPXYc3LhR4e9vaVRUMGq7DYwMQPoQoAEAAICMlPSCG67CAZBWBGgAAAAg8zRtUjRq2yRfdt59+0HNmhYZH4A0IUADAAAAmWfkNgOThuamTYp22Xqg8QFIEwI0AAAAkHnGjqryUhtjRw4zPgBpQoAGAAAAMkyjooLdtx9U1da9dhqy1i8nBCAqAjQAAACQYXbasn+rFk2q2tqiWeMdNu9nlADSgQANAAAAZJgU19/4/3cYZpQA0oEADQAAAGSSgvy8PXccnHqfvXcaWpAvegBEz1wMAAAAZJLtN+/Xvk3z1Pu0a9Nsu836GiuAyAnQAAAAQCYZO3JYzXYbbqwAIidAAwAAABkjLy++105DarLnmF2H5rsKB0Dk87YhAAAAADLF1hv37tShVU32XLd9yy037GnEAKIlQAMAAAAZo1YX1nAVDoDICdAAAABAZojH46N3GVrz/fcZOTwejxs3gAgJ0AAAAEBm2HTY+l07tan5/ut1bL3J0O7GDSBCAjQAAACQGaq6pMaKj75Y8dEXtboLAA1DgAYAAAAyw5hdk19/Y/60//5y+/1JN+07aoRxA4iQAA0AAABkgBGDuvbqtk7STYuffmnRUy8m3dSja7vhG3Q1egBREaABAACADFDVxTTW/Dx/1dffrfr6+zU/zq3VHQFoAAI0AAAAkAHG7jos6e3FM56NxWKxRKLksZlJd9hvN1fhAIiMAA0AAACkuw36dOrfq2PSTSUPP/PrfxT///+xlr49Ogzs08kYAkRCgAYAAADS3T6jkl9Go2zhoqWz3/71v5e++lbpL8XJ7+4qHAAREaABAACAdFfVdZyLH34mUVb+638nyitKHn2uirsPM4YAkRCgAQAAgLTWZ/0OQ/qvl3RT8YxnUvzxN0MHdOnXc10jCdDwBGgAAAAgrVV1AY3yxUuXvPzG729Z8uKcspLFSXcevctQIwnQ8ARoAAAAIK2NHTUs6e3Fjz6XWFP6+1sSpWWLnng++YO4DDRAFARoAAAAIH117dRmw0Hdkm4qfviZGt4Yi8U2Gtyt+3ptjSdAAxOgAQAAgPS176jh8Xi88u3ly5YvmTW78u2LZ75avnR55dvj8fiYXYcZT4AGJkADAAAA6WvsqOSXzlj0xPMVq1dXvr1i9ZpFT72Q/KFchQOgwQnQAAAAQJrquE7LzYf3TLqpqkttpNi0xYienddtZVQBGpIADQAAAKSpfUYOz8tLcv2NipWrFj37SlX3WvT0SxUrVla+PS8vPnrnoUYVoCEJ0AAAAECaquqiGVUl5l+lyNNVXdADgJAI0AAAAEA6at+m+dab9E666XcX2UhUt8P/2HaTPuu0bW5sARqMAA0AAACko9G7DC3ITxIu/vfXDMaT3nfRE89XrEryKwrz8/P22mmIsQVoMAI0AAAAkI6quv7G4pmvli9dnvq+5cuWL3l+dq0eFoAwCNAAAABA2mndsskOW/RNuqmqy2vUcLedturfplVTIwzQMARoAAAAIO3stdOQosKCyrcnSssWPfF8TR6h+NHnEmtKK99eWJC/xw6DjTBAwxCgAQAAgLRT1YUylrw4p6xkcU0eoXzx0iUvv1GrBweg3gnQAAAAQHpp3rTRzlsNSLqpeMYzNX+cqnbedZsBLZo1Ns4ADUCABgAAANLLHjsObtK4MMmGioqSx2bV/HFKHp2ZKK+ofHvjRoW7bb+BcQZoAAI0AAAAkF6qvP7GK2+Vzl9Q88cpnb9w6Wtv1eqvAKB+CdAAAABAGmnSuHDUtsm/nlz88DO1fbSSKu6y+/aDmjYpMtoAYROgAQAAgDQyctsNmjVNloYTiZLHZtb20YpnPBtLJCrf3rRJ0S5bDzDaAGEToAEAAIA0MnbksKS3L3vjvTU/zq3to635ef6yN9+v4i9yFQ6A0AnQAAAAQLooLMjfbbtBSTfV4fobqe+4546DiwoLjDlAqARoAAAAIF3ssvWANq2aJt1U/MhzdXvM4oeeTnoVjlYtmuy0ZX9jDhAqARoAAABIF2NHJb8sxvJ3Plr9zQ91e8zV3/20/L1PqvjrhhlzgFD5SRMAAADINn17rNuuddM1peWZ9bTz8/PG7DIs6aY6X3/jt7s3G5rkVw7uM3L4TXe9VF5ekVkDVVSYv3DRis++nuejDqS/eLzHcUYBAAAAskmzpkV3X3XkrlsPLCzMz45X9N4mo1d+/nWd7964d/ehcx7OjqFYvaZszrvf7PXH6xctXemjDqQ/l+AAAACAbLN8xZq9/nj9wadMXb5idRa8nJUffxGkPsdisVVffLvyky+zYChWrS495m93brP/5eozkCkEaAAAAMhO0x97a9Cu57/y5leZ/kIWPvR08Acpro8HidYb7307ZOQFt90/22cbyCACNAAAAGStb38s3u6Ay8+d/GhFRSJzX0XAC0DX44NEJZFIXHXrzK32u+yLb3/xqQYyiwANAAAA2aysvOLcyY/ufMjkn+YtzsTnv+rL71Z+/EXwx1nx0eerPv8mE0dg/sKlux9x7cnnTV9TWubzDGQcARoAAACy38xXPxu224WPPPd+xj3z4ofr7dIZxY8+l3Ev/+mXPh6222Wo/a0AABqySURBVIVPPP+RzzCQoQRoAAAAyAkLSpbtfdQNx/79rpWrSjPoadfjpTMy6yocq9eUnXnJg6PGXzP3lyU+vUDmisd7HGcUAAAAIHds0KfT3VcfOahv55rsvPTVt/KaNI7qqa6Z+8tn406KJertAtZ975pc1KlDVC+nYuWqFpuPqMmen341b9xJU97+8HsfVyDTCdAAAACQc5o0Lrz49NEnjt++2j2Xvvr2F0dOWDPvl1hFhXGrs3heXkH7tj1vuKD19ptXu/PtD8z+01n3LFux2rgBWSA/3mZjowAAAAA5pays4onnP/rg05923mpAk8aFKfZs1LXTukf+oWz+wuXvfmzc6qztnjsOePjmpn17pt5tybJVf5xwx3lXPbamtNygAdnBN6ABAAAgd3Xr3PbOyYdvuWGvavcsfviZr0/8Z9nipQatVvKbN13/8n+032/3avec8963406c8uV3vxg0IKumQd+ABgAAgJy1eOnK2++fXZFIbL1x77y8eIo9m/Tr2W6fUcvf+mDNj3ONWw01G7FB//tvbLlVNe0lkUhcPW3WuBOnLChZZtCALCNAAwAAQE6rSCSen/35S298sdOW/Vs2T/X7BgtatWh/wF6xvPiy196qx18MmJ3i8Y7HjOtzyyWF7dum3nHegiX7/enf1972fLmrbAPZSIAGAAAA/r/27jy6yvrcF/jeOyNTmAIEZBCZAjKESapCHRBlVEStVo/V2nMUz+1qta3au3rvOtcJtKfqCVal2qrIqVMUR0RFGUVABZxHKCCoKJIQkkDGve8f9liFnTcDeQvK5/OXvr9nv/s3vGuz1ne960lk09Ydc+etzu2d0++ITgFl0Vgsa/TIVkcP37VkVU1pmX1LKq1j+z5z/pBz8Y+jKSnBlc8vf2/ChX98472tNg34vhJAAwAAAJFIJLK7vPKhp9cUFe8+/gd9U1ODktOMHod1OOfU8g83lq/fbN/20vqEo3Pn3dFiUG5wWXlF1W9mzPvF1Q+XllXYNOB7TAANAAAA/MPq1zc9/vwbY47q0ym7VUBZrHlm+zPGp+d02LXslUR1tX2LRCKxjPSu/+fnPW/6XUrLFsGV72/YNvGntz2x8E2bBnzvCaABAACAb9leWDrn0ZWtWmSOyusZVBeNtsgb0G7SiSUr11ZtLzzENy2zz+H9Cm5vf9q4SDQaXDn3sdVTL5695dMiTxpwKBBAAwAAAHurro4/u/Tdt97/5KTRuc0y0wMq07LbdTjvtHhpWematw7Z7co+e3Lf+/MzunUOLttVWn7RFfdde+uCqqoazxhwiBBAAwAAAMm9t2Hbg0+tGTG4R/cu7QLKoqmpbU4a3axfr+LFKxMVlYfUFqVktex1x/WHXXFxLD0tuPKVNzad8pNbl7263nMFHFq/kwJoAAAAoDbFJXvmzlsdTyTGjOwdiwU1l2jev1f2WRPL1r1TuXXb/n5rIhKJfgc2p+XwgbnzZmcdPayO1SQSt85Z8uNf3P1lUaknCjjUCKABAACAIPFEYunqj5a/un7ssblZLTMDKlOyWmWfMyUSi5auWhtJJBr/lQd/+hyN5lxybu+//D6tfdvgws+/3HXmv99129yl8XjCswQcggTQAAAAQN02bd1xT8HLPbtlH9m3S0BZNBbLGj2y1TEjdi1ZVVNa9r3cirSO7fvOuanTxT+OpsSCK5984c3xF9z69gefen6AQ5YAGgAAAKiX8orqRxas27jly5PHDEhLSwmozOjepcM5p5Z/tKl8/abv2Sa0PvHo3EdnNx/Ur669qrpi5rxfXffo7j2VnhzgUBaN9rzULgAAAAD1N6BP5/vzLxqce1idlV8++NTGX10X31P+PVh1LCOj2//7Zc4l50aidbQIeX/DtnN/effr7271qAB4AxoAAABomO2Fpfc+sqpVy8xReT2DK5sP7Ndu8tiSl9dWbS/8Ti+5WZ+euY/c3nbSCXWmz3MfWz314tlbPi3ynABEBNAAAABAI1TXxJ9d+u6b738ybnRus8z0gMq07LYdzjstXlpWuuatAzTZRNCfNUzU/TcPs8+e3O+BWeldc4LLikv2/OzKudfeuqCqqsYTAvAVATQAAADQSO9v2PbAk6+NGNyjx2HtAsqiqaltThrdYmC/4iWr4uUV//RpRhs9mNKqRa/brz3sykuiaWnB37H69U2nXHDr8lfXeyoAvvVDKoAGAAAAGm1Xafncx1YnEokxI3vHYkFpbrO+PbPPnFC27t3KrZ8dTCuo9RXolsMH9n/szlbHDA/+fDyeuHXOknN/cfeOojLPA8BeBNAAAADAfkkkEktXf7TwpfdOPCa3bevmAZUpWS2zzzk1Eo2WrlobSSQOjuknS59jsZyLf9z7L79Pbd8m+MNbt+2cevHsP92/PB5PeBIAkvzyC6ABAACA/bd12845j67q2S17YN8uAWXRWDRr9MjWJx6za9krNcUlB+FC0rt06nt/fqeLfhRNiQVXPrHwzUkX/fG99ducPkBtBNAAAABA06iorH50wbqNW748ecyAtLSUgMr0Lp06nHtaxcef7Hlvw0G1hLYTT8gtuK1ZvyOCy8orqq6YOe9X1z26e0+lcwcIIIAGAAAAmtIb733y2POvjxnZu1N2VkBZLCO93WnjMg/vWrzo5UR19QGfdiwjo/t1v+4x44pY82bBle+t3zbxp7c9sfBNZw1QJwE0AAAA0MS+LCy995FVrVpmjsrrGVzZfGC/dlPG7nxhRc3OXQdwwhnduvR/4s62E0+IRKPBlXMfWz31ktlbPityygD1EbMFAAAAQJMrr6i67JqCadP/tKOoLLiyWd8j2ow95sDOts3Jo5sP7BdcU1yy59xf3n3Br+eU7dZ2A6C+BNAAAABAWB5//o1hk2cse2V9UFEiUfTssgM7z6JnlkQSiYCCVes2Dps848GnXnOmAA0igAYAAABCtOWzorHn/df//v3j8VoS3tI1b1V+su3ATrLysy9K17yddCiRSNw4+/njzr5545YdThOgoQTQAAAAQLhqauI3//nFsrKKpKOFT75wMEyy8Knk0yjbXfkftzxdVV3jHAEaQQANAAAAhG7c6P6tWmYmHSp86sWDYYaFjz+ftAtHyxYZY4/t5wQBGkcADQAAAIRu2oS8pNfL3nivYtPWg2GGFR9/WvbWB8knP36oEwRoHAE0AAAAEK6UlNiUsYOTDh0k/Te+UlTLZKaOG5KaIkIBaAy/ngAAAEC4jh/Vp0O7lkmHig6O/htf2fHE80mvt2/b4odH9XGOAI0ggAYAAADCNW1C8hYWe97fsOejjd+6lDiQ8yxfv3nPB39r0BIACCaABgAAAEIUi0WnjhuSdKjwiYV7X4oe4NkmmVIkEolEzhifl6ILB0Aj/hWwBQAAAEB4jh3eq3PH1kmHDqoG0MFT6pSddfTQnk4ToKEE0AAAAECIpo1P3ryifMPHu9/96GCb7e53Piz/aFODFgJAAAE0AAAAEJZoNHr6KbX033jqhYNzzoXzFyW9fubEYdFo1JkCNIgAGgAAAAjLUUN6dO/SLunQQdh/4+8TqyUZ75rTZuTgHs4UoEEE0AAAAEBYamtbUfnJtrLX323Kb0o02Z3K1r1bseWzBi0HgNoIoAEAAICwTBufl/T6jscXRhJNlhln9uyW2ffwJpt0IlFUy0vQZ00c5kwBGkQADQAAAIQib0DXXt07JB0qarr+G9lnTx604pFByx7OueTcSKN7NH87DK+tPUjPbu2H9O/qZAHqTwANAAAAhKK2hhVVX3xZ8tqb+3//lNatet/9n71mXx9rlhnLzOhxw1V9//pfqe3aNOZe3w6uS159s3Lb9loWledkAepPAA0AAACE4oxaAujCJ1+IxOP7efOs0SMGv/xo+9NP/ubFthOOH7xyXuuxx+zv1OPxovmLGrQoAJISQAMAAABNr98Rnfr3zkk6VLh//TeiqSmHXTU99/G70rt02nc0rWP73ILbe8y8MpqWuj/fUtskB/TpXNu6ANiXABoAAABoej+aNDzp9eodO0tWrm30bdO7du7/1F+6/vbSaErtmUY0mjP9vAEL5mT27NboLypZ8VrV9sKkQ16CBqg/ATQAAADQ9GrrlVz49IuJ6prG3bPdlLGDlj3U6gf1yn9bDh84cOlD7c+c2LjvStTEixYsqWVpAmiA+hJAAwAAAE2sZ7f2Q/p3TTpU+FRj+m/EMjN6zLyyz303p7ZtXf9PpbRq0fuumb3uuC7WvFkjvrSoli4ceQO69urewSkD1OsH3BYAAAAATeusicOSXq8pLtm1/NWG3q1Zbq8jX/xrzvTzGjeZ7HOmDFzyQPNB/Rr6weJlq6t37ko6VNv73QDsRQANAAAANLHamlQULViSqKxq0K2yz548cNH9zQf02Z/5NOvT88iF/51zybmRaLT+n0pUVe98blmDFgjAXgTQAAAAQFPqmtNm5OAeSYcKn2xA/43U9m36PjCr1+zrY80ygytXrNmwdPWHwTWxjPQeN1yV+8gdaR2z6z+H2iZ81JAe3bu0c9YAdRJAAwAAAE3pzInDosleNK4p2128aGU9b5I1ZuSg5QVtxx8XXFZdE786f/7x59xy4rn5l19bUFlVHVzf+sSjBy1/uPXYY+o5jeIXV9SUlO17PRqNnn7KEGcNUCcBNAAAANCUamtPsfO5ZfGKijo/Hk1NOeyq6bmP3ZneuWNw5cefFp5wzi1X58+vqYknEon8exaPOeumDR9vD/5UWsf2uQW395h5ZTQ9rc7JxCsqdy58qUHLBOCbBNAAAABAk+mUnXX00J5Jh+rTfyO9a+f+T9/d9beXRlPqiCwefXbd0EkzVqzZ8M2Lr765efjkmX994pU6viYazZl+3pEL5mT27FbnlAqfSj7tY4f36tyxtRMHCCaABgAAAJrMGePzUpJlx/HyitpeJf5au1NPGrT84Vaj8oLL9pRXXX5twVn/fldR8e59R3eVlp9/+b0X/mZO6e463rZuMezIgUsfyj5rUnDZzueWxfeU73s9FotOHacLB0AdBNAAAABAk5k2IXljiuIXVsR376ntU7HMjB4zr+wz56bUNlnB93/no89GTb0x/57FwWX3zVs98tQb1r2zJbgspVWLXnfO6HXHdSktmtdWE99TXrzo5QYtFoB//MLbAgAAAKBJtG/b4odH9Uk6FNB/o1lur4GL7s+Zfl7wzROJxKx7F4+YMvPtDz+tz2Q++NvnPzj991fnz4/HE8GV2edMGbj4gRaDc2srqG3yx4/q06FdS+cOEEAADQAAADSNqeOGpCbtv1FRWfTc0iQfiEY7XnjmwMUPNOvfO/jOXxaVnvZvsy+7pqCisrr+86mqrrk6f/6EC/+4bfuu4MrMPocPeH5ul8suisSSzL/omSXx8iQNPVJSYlPGDnbuAAEE0AAAAEDTmDY+eUuKXUtX1+wq3etiavs2/R6Y1fOW/xvLzAi+7eKVH+ZNvP7pRW81blYLX3ovb+L1zy59N7gslpHe7T9+mfvI7Wkds/caqikt27U8+R82nDYhz7kDBP262gIAAABg/7Vu1Wzssf2SDhU+uXCvK1ljRg566ZE2p/ww+J7VNfGr8+ePOz//08+L92duX+womXTRbZdfW1BZVccL1K1POHrQSwVtxh67zxKSd+EYN7p/29bNnT5AbQTQAAAAQBM49aTB6Wmp+15PVNcUPfuP/hvR1JTDrpre//E703M6BN9w8yeFJ5xzS32aONdHIpHIv2fx6DNvWr95e3BlWod2/Qpu6zHzymh62tcXi55ZkqiuSVKcmjLphIFOH6A2AmgAAACgCdTaf+OlV6t37PzqvzO6de7/9N1df3tp0lbL3/TIgnXDJs9YsWZD007ytbc2D588878ff6WOumg0Z/p5Ry6Yk3lE968uVBfuLFnxWoMWDkBEAA0AAADsv5bNM04e0z/p0I55z371H+1OGzdw2cOtRuUF32pPedXl1xb86H/dVVS8O4yplpSV/+RX9174mzmluyuCK1sMO3Lg0gezfzTp7wt59NmkZeOPG9CqRaZnACApATQAAACwvyaeMLBZZlqSgXh8x7znoqkpPWZe2efeP6S2yQq+z9q3twyddH3+PYvDnvB981YPmXDdqnUbg8tSWrbo9acZve64LpaWtmPes4ma+L41mRlp448b4BkASEoADQAAAOyvaePzkl7f+fzy1LZZg1c+ljP9vOA7JBKJWfcuPvbM//xw4xf/nDlv3LLjuLNvrk+P6exzpgx+9YnUDu12Llxey/J14QBILhrtealdAAAAABotMyPt89duTNqGYtfS1S1/MDSWkR58h+2FpRddcd/8xW8fkPmfdGzunJsu6NyxdXBZvKKydNW6rONG7TtUurui04gr95RXeRgA9uINaAAAAGC/BDRBzjpuVJ3p86KVHwyddP2BSp8jkcgLK94fOmnGgiXvBJfFMtKTps+RwBbYAIc4ATQAAACwXxrdgKK6Jn51/vyTz5/16efFB3YJX+womfyz2y+/tqCyqvqfvAkA329acAAAAACNl5aasu3VG9u2bt7QD27auuNfLrvn5bV/O6iWM2JQj7/m/7TP4R0b+sGdu/bkjLyq0fk1wPeVN6ABAACAxjtpdG4j0ueCZ9YOmzzjYEufI5HIa29tHjHlhrmPrW7oB9tkNTvxmL6eB4C9CKABAACAxmto64mSsvLpv7v/7J//eeeuPQfnikrKyi/49ZxGzFAXDoB9CaABAACARkpJiZ160uD61695++MRU26484GXDv6lffWO9sqGvKM99eQhqSmSFoBv8bMIAAAANNLxo/p0aNeyPpWJRGLWvYuPPeMPH2364ruyuk1bdxx39s1X58+PxxP1qc9u2/KHR/XxVAB8kwAaAAAAaKRpE+rVdGJ7YemUn91x2TUF37m/0VddE786f/4pP5n12RfFTbghAIcOATQAAADQGLFYdOq4IXWWvfjyB3kTr39mydvf3ZXWfwnTTsmLxaKeDYB//GNhCwAAAIBGOGbYEZ07tg4oaOjrwwezr17ivvzaOl7izumQdfTQIzwbAF8TQAMAAACNMW18ULuJhjZQPvglEon8e+puY60LB8A3CaABAACABotGo9PG59U2WvDM2mGTZ6xc+7fv38LXvP3xiCk33PnAS7UVnDVxWDSqCwfA3wmgAQAAgAYbObhH9y7t9r1eUlZ+wa/nnP3zP+/ctef7uvaSsvLpv7u/tjV2zWkzYlB3TwjAVwTQAAAAQIMl7b/x2lubh0+eOfex1YfCDhQ8s3bopOtfTvaWd3BzEoBDigAaAAAAaLC9+m8kEolZ9y4efeZN6zdvP3Q2YfMnhccn63N91sRhnhCArwigAQAAgIbJG9C1d48OX//vFztKJv/s9suuKaisqj7UtqK6Jn51/vyTz5/16efFX188onv2kP5dPScAEQE0AAAA0FDfbDHxwor3h06asWDJO4fyhixa+cHQSdfPX/z2N7Yoz3MCEBFAAwAAAA31L1NHRf7n5d/xF9z62RfF9mR7Yemp/3rH5dcWVFXVRCKR808fZU8AIgJoAAAAoEH6HdGpe5e2W7cV/eD0G/dtf3woSyQS+fcsHj5l5sYtX3br0q5/7xx7ApASbTvSLgAAAAD1dMOVU3eV7hlz1k2bPym0G/v6YkfJXQ++NLBvl0H9Dnt60Vs2BDjECaABAACABigpq7hm1jOVVTW2ojbV1fGHnl5Turti09YddgM4xEWjPS+1CwAAAAAANDk9oAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUAigAQAAAAAIhQAaAAAAAIBQCKABAAAAAAiFABoAAAAAgFAIoAEAAAAACIUAGgAAAACAUPx/nBQYFP8AISwAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMTEtMjZUMjE6MTA6NTErMDA6MDAEBSp3AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTExLTI2VDIxOjEwOjUxKzAwOjAwdViSywAAAABJRU5ErkJggg=="
        />
        <image
          id="image7_0_1"
          data-name="16276546_5741941-removebg-preview.png"
          width="398"
          height="528"
          xlink:href="/images/work-assets/hashbinary/8sqm/car-wash-illustration.png"
          transform="translate(108, -172) scale(1.5)"
          transform-origin="center"
        />
        <image
          id="image8_0_1"
          data-name="icons8-car-wash-64 (1).png"
          width="64"
          height="64"
          xlink:href="data:image/png;base64,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"
        />
      </defs>
    </svg>
    <div class="animated-svg-description">
      <h2>8SQM</h2>
      <div style="display: flex; flex-direction: column; gap: 0.5rem">
        <p>8SQM is an on-demand solution for booking car wash services.</p>
        <p>
          Worked on the backend for 8SQM using Node.js and MongoDB from scratch.
          Integrated Stripe for payments, Twilio for sending SMS, and GeoJSON
          for storing coordinates.
        </p>
      </div>
      <button
        :class="{ 'hide-restart-animation-button': !showRestartButton }"
        @click.stop="restartAnimation"
      >
        Restart Animation
      </button>
    </div>
  </div>
</template>

<style scoped>
.animated-svg-container {
  height: calc(100vh - 4rem);
  height: calc(100dvh - 4rem);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
}

.animated-svg-container svg {
  max-width: 100%;
  height: auto;
}

.animated-svg-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

h2 {
  margin: 0;
}

#loading-page,
#login-page,
#service-selection-page,
#order-details-page,
#stripe-page,
#success-page,
#login-otp-data-container,
#login-car-wash-logo,
.login-logo-text,
#car-wash-illustration,
#login-description,
#login-input-data-container,
#cursor,
.login-input-text,
.service-marker,
#service-selected-container,
.card-number,
#Cards,
.stripe-email,
.card-expiry,
.cvc,
.card-name,
#success-page,
#success-icon-circle,
#success-icon-check,
#success-message-container,
#schedule-booking-container,
#success-page-btn {
  opacity: 0;
  transform-origin: center;
}

#login-phone-continue-button,
#login-otp-continue-button,
#book-now-button,
#order-pay-now,
#pay-button {
  filter: contrast(1);
}

#pay-button-spinner {
  opacity: 0;
}

#minute-hand-loading-clock {
  transform-origin: center;
  animation: clockHandRotation 0.5s linear infinite;
}

#hour-hand-loading-clock {
  transform-origin: center;
  animation: clockHandRotation 3s linear infinite;
}

@keyframes clockHandRotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#map-place-auckland {
  transform-origin: center;
}

.service-marker {
  transform-origin: center;
  opacity: 0;
}

#date-picker-calendar {
  display: none;
}

@media screen and (min-width: 1024px) {
  .animated-svg-container {
    flex-direction: row;
    justify-content: space-between;
  }

  .animated-svg-description {
    max-width: 32rem;
    align-items: flex-start;
  }
}
</style>
