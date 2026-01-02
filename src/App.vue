<template>
  <div class="app">
    <h1 class="heading">Saras Finance Search Tool</h1>

    <SearchBar @search="handleSearch" />

    <Loader v-if="isLoading" />

    <SearchResultList
      v-else
      :results="results"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import SearchBar from './components/SearchBar.vue'
import SearchResultList from './components/SearchResultList.vue'
import Loader from './components/Loader.vue'

import { fetchSearchResults } from './services/searchService'

const results = ref([])
const isLoading = ref(false)

let debounceTimer = null

function handleSearch(query) {
  clearTimeout(debounceTimer)

  debounceTimer = setTimeout(async () => {
    if (!query) {
      results.value = []
      return
    }

    isLoading.value = true
    results.value = await fetchSearchResults(query)
    isLoading.value = false
  }, 400)
}
</script>

<style>
.app {
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
  font-family: Arial, sans-serif;
}

.heading {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  text-align: center;
}
</style>
