import { ref, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const search = ref('');
  const searchList = ref([]);
  const select = ref([]);
  const isLoading = ref(false)
  const error = ref(false)

  const isEmpty = computed(() => searchList.value.length > 0)

  const fetchData = async (value) => {
    search.value = value
    if (search.value.length < 4) {
      searchList.value = []
      return
    }
    try {
      isLoading.value = true
      error.value = false
      const { data} = await useFetch(`https://habr.com/kek/v2/publication/suggest-mention?q=${value}`, {
        timeout: 600,
      })
      const { data: list} = JSON.parse(data.value)
      searchList.value = list
    } catch (err) {
      console.log(err)
      error.value = true
    } finally {
      isLoading.value = false
    }
  }

  return { search, searchList, select, isEmpty, error, fetchData }
})
