import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(initialState);

  return (
    <div>
      {/* <header>헤더입니다.</header> */}
      <Header></Header>
      <main
        style={{
          padding: "10px",
          backgroundColor: "#fff49012",
        }}
      >
        <Input setTodos={setTodos} todos={todos} />
        <TodoList isActive={true} todos={todos} setTodos={setTodos} />
        <TodoList isActive={false} todos={todos} setTodos={setTodos} />

        {/* todo-list가 들어가는 부분 */}
      </main>
      <footer
        style={{
          backgroundColor: "#ae9a95",
          padding: "20px",
          color: "white",
        }}
      >
        Footer
      </footer>
    </div>
  );
}

export default App;

const initialState = [
  {
    title: "제목1",
    contents: "내용1",
    isDone: false,
    id: uuidv4(),
  },
  {
    title: "제목2",
    contents: "내용2",
    isDone: true,
    id: uuidv4(),
  },
  {
    title: "제목3",
    contents: "내용3",
    isDone: false,
    id: uuidv4(),
  },
];
