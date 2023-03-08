<template>
  <div class="error-container">
    <Illustration404 class="illustration" />
    <h2>Oops!</h2>
    <p>The page you're trying to view does not exist</p>
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

  height: 100%;
}

h2,
p {
  margin: 0;
  padding: 0;
}

.illustration {
  max-width: 360px;
  height: auto;
  margin-bottom: 1rem;
}
</style>
