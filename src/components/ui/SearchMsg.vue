<script setup>
import { computed } from 'vue'
import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()
const error_500 = 'НЛО неудачно приземлилось прямо на сервера Хабра'
const error_404 = 'По вашему запросу ничего не нашлось'

const isError = computed(() => searchStore.error)
const message = computed(() => (isError.value ? error_500 : error_404))
</script>

<template>
  <div class="search-message-comp">
    <span :class="['message', { _error: isError }]">{{ message }}</span>
  </div>
</template>

<style scoped>
._error {
  color: red;
}
</style>
