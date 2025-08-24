<script setup lang="ts">
import useOutlineAnalytics from "@useoutline/analytics";

if (process.client) {
  useOutlineAnalytics("OA-BOs-7LVkLuIJiG4dlTcse");
}
</script>

<template>
  <NuxtPage :transition="{ name: 'page-transition', mode: 'out-in' }" />
</template>
