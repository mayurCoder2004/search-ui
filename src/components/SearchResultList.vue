<template>
  <div class="result-list">
    <SearchResultItem
      v-for="item in results"
      :key="item.id"
      :item="item"
    />

    <div v-if="results.length === 0" class="empty-state">
      No results found
    </div>
  </div>
</template>

<script setup>
import SearchResultItem from './SearchResultItem.vue'

const props = defineProps({
  results: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.result-list {
  display: flex;
  flex-direction: column;
}

.empty-state {
  text-align: center;
  padding: 24px;
  color: #6b7280;
  font-size: 14px;
}
</style>
