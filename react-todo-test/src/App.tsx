import { useState } from "react";
import TodoItem from "./components/TodoItem";
import type Todo from "./types/Todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    /*
     * NOTE: A medição de desempenho é feita aqui, mas não é usada para nada.
     * Isso é apenas para simular um atraso na medição de desempenho
     * e para que o teste de desempenho funcione corretamente.
     */
    const t0 = performance.now();

    if (text.trim() === "") return;
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setText("");

    // NOTE: Essas linhas abaixo (até o fim do escopo dessa função) é apenas para simular um atraso na medição de desempenho
    const t1 = performance.now();
    console.log(
      `REACT -> A adição de uma nova tarefa levou ${t1 - t0} milissegundos`
    );
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    /*
     * NOTE: A medição de desempenho é feita aqui, mas não é usada para nada.
     * Isso é apenas para simular um atraso na medição de desempenho
     * e para que o teste de desempenho funcione corretamente.
     */
    const t0 = performance.now();
    setTodos(todos.filter((todo) => todo.id !== id));
    // NOTE: Essas linhas abaixo (até o fim do escopo dessa função) é apenas para simular um atraso na medição de desempenho
    const t1 = performance.now();
    console.log(
      `REACT -> A remoção de uma nova tarefa levou ${t1 - t0} milissegundos`
    );
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

      <ul style={{ marginTop: "1rem" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
