export function useTimelineRestart(timeline: gsap.core.Timeline) {
  const show = ref(false);

  timeline.eventCallback("onComplete", () => {
    show.value = true;
  });

  function restart() {
    timeline.restart();
    show.value = false;
  }

  return {
    show,
    restart,
  };
}
