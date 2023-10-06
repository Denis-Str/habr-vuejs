<script setup>
import { computed } from 'vue'
import { useSearchStore } from '@/stores/search'

import UserView from '@/components/PopupView/UserView.vue'
import CompanyView from '@/components/PopupView/CompanyView.vue'

const searchStore = useSearchStore()
const searchList = computed(() => searchStore.searchList)
</script>

<template>
  <div v-if="searchList.length" class="popup-comp">
    <ul class="list">
      <template v-for="(data, index) in searchList">
        <template v-if="data.type === 'user'">
          <UserView :key="`${index}-${data.type}`" :user="data" class="item" />
        </template>
        <template v-if="data.type === 'company'">
          <CompanyView :key="`${index}-${data.type}`" :company="data" class="item" />
        </template>
      </template>
    </ul>
  </div>
</template>

<style scoped>
.popup-comp {
  position: absolute;
  top: 80px;
  left: 0;
  padding: 5px;
  border-radius: 6px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.list {
  max-height: 210px;
  overflow-y: scroll;
}

.item:not(:last-child) {
  margin-bottom: 5px;
}
</style>
