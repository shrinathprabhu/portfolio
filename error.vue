<template>
  <div class="error-container">
    <Illustration404 class="illustration" />
    <h2>Oops!</h2>
    <span>The page you're trying to view does not exist</span>
    <NuxtLink :to="{ name: 'index' }" class="link"> Head back to home</NuxtLink>
  </div>
</template>

<style scoped>
.error-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  padding: 2rem;
  height: calc(100% - 4rem);
  text-align: center;
}

h2 {
  margin: 0;
  padding: 0;
}

.illustration {
  max-width: 375px;
  width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
</style>
