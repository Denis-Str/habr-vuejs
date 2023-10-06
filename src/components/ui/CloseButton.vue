<script setup></script>

<template>
  <div role="button" class="clear" @click="$emit('onClose')" />
</template>

<style scoped>
.clear {
  width: 15px;
  height: 15px;
  opacity: 0.3;
}

.clear:hover {
  opacity: 1;
}

.clear:before,
.clear:after {
  position: absolute;
  content: ' ';
  height: 15px;
  width: 2px;
  background-color: #333;
}

.clear:before {
  transform: rotate(45deg);
}

.clear:after {
  transform: rotate(-45deg);
}
</style>
