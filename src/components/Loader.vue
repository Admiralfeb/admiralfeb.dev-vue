<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  border: 16px solid var(--bg-color-raised);
  border-top: 16px solid var(--primary);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  margin: 0 auto;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
