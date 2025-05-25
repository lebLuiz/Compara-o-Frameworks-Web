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
    if (!this.text.trim()) return;
    this.todos.push({
      id: Date.now(),
      text: this.text,
      completed: false,
    });
    this.text = '';
  }

  toggleTodo(id: number) {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter((t) => t.id !== id);
  }
}
