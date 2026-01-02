<template>
  <div
    class="result-item"
    @click="toggle"
    @keydown.enter="toggle"
    tabindex="0"
  >
    <h3 class="title">{{ item.title }}</h3>
    <p class="snippet">{{ item.snippet }}</p>

    <transition name="expand">
      <div v-if="isOpen" class="details">
        <p class="description">{{ item.description }}</p>
        <div class="meta">
          <span>{{ item.category }}</span>
          <span>{{ item.date }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.result-item {
  border: 1px solid #e5e7eb;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: background 0.2s ease;
}

.result-item:hover {
  background: #f9fafb;
}

.title {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 6px;
}

.snippet {
  color: #4b5563;
  font-size: 14px;
}

.details {
  margin-top: 12px;
  font-size: 14px;
  color: #374151;
}

.meta {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #6b7280;
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>
