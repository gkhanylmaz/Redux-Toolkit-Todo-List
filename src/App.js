import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

function App() {
  return (
    <div className="todo-app">
      <h1>What's the Plan for Today?</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
