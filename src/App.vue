<script setup>
import { computed, defineAsyncComponent } from 'vue'
import SearchView from "@/components/SearchView/SearchView.vue"
import PopupView from "@/components/PopupView/PopupView.vue"
import { useSearchStore } from '@/stores/search'

const SearchMsg = defineAsyncComponent(() => import('@/components/ui/SearchMsg.vue'))

const searchStore = useSearchStore()
const isSearch = computed(() => searchStore.search)
const isSearchList = computed(() => searchStore.searchList)
const showSearchMsg = computed(() => isSearch.value && !isSearchList.value.length)
</script>

<template>
  <header class="header">
    <img alt="Vue logo" class="logo" src="./assets/habr.jpg" width="25" height="25" />
    <h4>хочу работать в хабр :)</h4>
    <img alt="Vue logo" class="logo" src="./assets/habr.jpg" width="25" height="25" />
  </header>

  <main>
    <div class="search-block">
      <SearchView />
      <SearchMsg v-if="showSearchMsg" />
      <PopupView />
    </div>
  </main>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  display: block;
  margin-right: 5px;
}

.search-block {
  position: relative;
}
</style>
