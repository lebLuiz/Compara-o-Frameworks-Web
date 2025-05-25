<template>
    <div class="container">
        <h1>TO-DO List em VUE ✅</h1>

        <form @submit.prevent="addTodo" class="form">
            <input
                v-model="text"
                type="text"
                class="input"
                placeholder="Digite uma tarefa"
                required />
                <span class="input-border" />
            <button type="submit">Adicionar</button>
        </form>

        <div class="todos">
            <TodoItem
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @toggle="toggleTodo"
                @delete="deleteTodo"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import TodoItem from './components/TodoItem.vue'
import type Todo from './types/Todo'

const text = ref('')
const todos = ref<Todo[]>([])

function addTodo() {
    /*
     * NOTE: A medição de desempenho é feita aqui, mas não é usada para nada.
     * Isso é apenas para simular um atraso na medição de desempenho
     * e para que o teste de desempenho funcione corretamente.
     */
    const t0 = performance.now();

    if (!text.value.trim()) return
    todos.value.push({ id: Date.now(), text: text.value, completed: false })
    text.value = ''

    // NOTE: Essas linhas abaixo (até o fim do escopo dessa função) é apenas para simular um atraso na medição de desempenho
    const t1 = performance.now();
    console.log(`VUE -> A adição de uma nova tarefa levou ${t1 - t0} milissegundos`);
}

function toggleTodo(id: number) {
    const todo = todos.value.find((t: Todo) => t.id === id)
    if (todo) todo.completed = !todo.completed
}

function deleteTodo(id: number) {
    /*
     * NOTE: A medição de desempenho é feita aqui, mas não é usada para nada.
     * Isso é apenas para simular um atraso na medição de desempenho
     * e para que o teste de desempenho funcione corretamente.
     */
    const t0 = performance.now();
    todos.value = todos.value.filter((t: Todo) => t.id !== id)
    // NOTE: Essas linhas abaixo (até o fim do escopo dessa função) é apenas para simular um atraso na medição de desempenho
    const t1 = performance.now();
    console.log(
      `VUE -> A remoção de uma nova tarefa levou ${t1 - t0} milissegundos`
    );
}
</script>
