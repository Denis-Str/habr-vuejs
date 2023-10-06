<script setup>
import { useSearchStore } from '@/stores/search'
import { computed } from 'vue'

const searchStore = useSearchStore()
const props = defineProps({
  user: Object
})
const { alias, name, avatar } = props.user
const srcImg = computed(() => (avatar ? avatar : 'https://placehold.co/24x25.png'))
const add = (alias) => searchStore.$patch((state) => {
  state.select.push(alias)
  state.search = ''
  state.searchList = []
})
</script>

<template>
  <li class="user-comp" @click="add(alias)" @keydown.enter="add(alias)" tabindex="1">
    <img :src="srcImg" width="25" height="25" :alt="name || alias" class="img" />
    <div class="inner">
      <h4>{{ name || `@${alias}` }}</h4>
      <div>{{ `@${alias}` }}</div>
    </div>
  </li>
</template>

<style scoped>
.user-comp {
  display: flex;
  align-items: flex-start;
  padding: 5px;
  border-radius: 6px;
}

.user-comp:hover {
  background-color: #94a7ba;
}

.user-comp:focus-visible {
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
