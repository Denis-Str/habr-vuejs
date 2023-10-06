<script setup>
import { computed } from 'vue'
import { useSearchStore } from '@/stores/search'
import CloseButton from '@/components/ui/CloseButton.vue'

const searchStore = useSearchStore()
const select = computed(() => searchStore.select)

const onClose = () => {
  searchStore.$patch((state) => {
    state.search = ''
    state.searchList = []
    state.select = []
  })
}
</script>

<template>
  <div class="select-comp">
    <span class="alias">@{{ select[0] }}</span>
    <CloseButton @onClose="onClose" />
  </div>
</template>

<style scoped>
.select-comp {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  background-color: #94a7ba;
  border-radius: 6px;
}

.alias {
  color: white;
  padding: 5px;
  margin-right: 5px;
}

.clear:before,
.clear:after {
  background-color: white !important;
}
</style>