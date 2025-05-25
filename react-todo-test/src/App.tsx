import { useState } from "react";
import TodoItem from "./components/TodoItem";
import type Todo from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>TO-DO List em REACT 🌐</h1>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addTodo();
        }}
      >
        <input
          required
          type="text"
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <span className="input-border" />

        <button type="submit">Adicionar</button>
      </form>

      <div style={{ marginTop: "1rem" }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
