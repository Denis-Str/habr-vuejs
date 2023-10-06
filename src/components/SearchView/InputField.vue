<script setup>
import { computed } from 'vue'
import { useSearchStore } from '@/stores/search'
const emit = defineEmits(['input'])

const searchStore = useSearchStore()

const search = computed(() => searchStore.search)
const select = computed(() => searchStore.select)

const onChangeInput = (evt) => {
  if (select.value.length > 0) {
    evt.target.value = ''
    return
  }
  const { value } = evt.target
  emit('onChange', value)
  // searchStore.fetchData(value)
}
</script>

<template>
  <input
    :value="search"
    type="text"
    id="name-company"
    class="name-company-input"
    placeholder="Введите логин"
    tabindex="0"
    @input.prevent="onChangeInput"
  />
</template>

<style scoped>
.name-company-input {
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: unset;
  border-radius: 6px;
}
</style>
