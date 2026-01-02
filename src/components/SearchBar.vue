<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Search..."
      v-model="searchText"
      @input="onInput"
      aria-label="Search"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchText = ref('')
const emit = defineEmits(['search'])

function onInput() {
  emit('search', searchText.value)
}
</script>

<style scoped>
.search-bar {
  margin-bottom: 16px;
}

input {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

input:focus {
  outline: none;
  border-color: #4f46e5;
}
</style>
