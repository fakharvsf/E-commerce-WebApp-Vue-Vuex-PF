<template>
  <div class="Product-Container">
    <slot></slot>
  </div>
</template>
<style scoped>
.Product-Container {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>