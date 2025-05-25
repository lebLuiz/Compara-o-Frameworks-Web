<template>
  <div class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="$emit('toggle', todo.id)" />
    <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
      {{ todo.text }}
    </span>
    <button @click="$emit('delete', todo.id)">🗑️</button>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
import type Todo from '../types/Todo'

defineProps<{
  todo: Todo
}>()

defineEmits<{
  (e: 'toggle', id: number): void
  (e: 'delete', id: number): void
}>()
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
