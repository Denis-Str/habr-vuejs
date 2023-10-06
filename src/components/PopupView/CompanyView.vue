<script setup>
import { useSearchStore } from '@/stores/search'
import { computed } from 'vue'

const searchStore = useSearchStore()
const props = defineProps({
  company: Object
})
const { alias, name, avatar } = props.company

const srcImg = computed(() => (avatar ? avatar : 'https://placehold.co/24x25.png'))
const add = (alias) => searchStore.$patch((state) => {
  state.select.push(alias)
  state.search = ''
  state.searchList = []
})
</script>

<template>
  <li class="company-comp" @click="add(alias)" @keydown.enter="add(alias)" tabindex="2">
    <img :src="srcImg" width="25" height="25" :alt="name || alias" class="img" />
    <div class="inner">
      <h4>{{ name || `@${alias}` }}</h4>
      <div>Компания</div>
    </div>
  </li>
</template>

<style scoped>
.company-comp {
  display: flex;
  align-items: flex-start;
  padding: 5px;
  border-radius: 6px;
}

.company-comp:hover {
  background-color: #94a7ba;
}

.company-comp:focus-visible {
  background-color: #94a7ba;
  outline: none;
}

.img {
  margin-right: 5px;
}

.inner {
  display: flex;
  flex-direction: column;
}
</style>
