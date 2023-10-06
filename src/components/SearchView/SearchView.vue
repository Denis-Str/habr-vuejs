<script setup>
import ChipsView from '@/components/ui/ChipsView.vue'
import InputField from '@/components/SearchView/InputField.vue'
import CloseButton from '@/components/ui/CloseButton.vue'

import { computed } from 'vue'
import { useSearchStore } from '@/stores/search'

const searchStore = useSearchStore()

const showClearBtn = computed(() => {
  if (searchStore.select.length !== 0) return false
  return searchStore.search.length
})

const onChangeInput = (value) => searchStore.fetchData(value)

const onClose = () => {
  searchStore.$patch((state) => {
    state.search = ''
    state.searchList = []
  })
}
</script>

<template>
  <label for="name-company" class="name-company-label">Пользователь или компания</label>
  <div class="inner">
    <ChipsView v-if="searchStore.select.length" />
    <InputField class="input-field" @onChange="onChangeInput" />
    <div class="clear-wrap">
      <CloseButton v-if="showClearBtn" @onClose="onClose" />
    </div>
  </div>
</template>

<style scoped>
.name-company-label {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.name-company-label:before {
  display: block;
  content: '*';
  color: red;
  margin-right: 5px;
}

.inner {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 45px;
  border: 1px solid black;
  border-radius: 6px;
}

.input-field {
  margin-left: 10px;
}

.clear-wrap {
  width: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
