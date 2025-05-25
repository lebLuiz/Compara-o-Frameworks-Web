import { Component } from '@angular/core';
import type Todo from './todo.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Angular To-Do App';
  todos: Todo[] = [];
  text: string = '';

  addTodo() {
    /*
     * NOTE: A medição de desempenho é feita aqui, mas não é usada para nada.
     * Isso é apenas para simular um atraso na medição de desempenho
     * e para que o teste de desempenho funcione corretamente.
     */
    const t0 = performance.now();

    if (!this.text.trim()) return;
    this.todos.push({
      id: Date.now(),
      text: this.text,
      completed: false,
    });
    this.text = '';

    // NOTE: Essas linhas abaixo (até o fim do escopo dessa função) é apenas para simular um atraso na medição de desempenho
    const t1 = performance.now();
    console.log(
      `ANGULAR -> A adição de uma nova tarefa levou ${t1 - t0} milissegundos`
    );
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number) {
    /*
     * NOTE: A medição de desempenho é feita aqui, mas não é usada para nada.
     * Isso é apenas para simular um atraso na medição de desempenho
     * e para que o teste de desempenho funcione corretamente.
     */
    const t0 = performance.now();
    this.todos = this.todos.filter((t) => t.id !== id);
    // NOTE: Essas linhas abaixo (até o fim do escopo dessa função) é apenas para simular um atraso na medição de desempenho
    const t1 = performance.now();
    console.log(
      `ANGULAR -> A remoção de uma nova tarefa levou ${t1 - t0} milissegundos`
    );
  }
}
