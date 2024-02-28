import { useState } from "react";
import "./App.css";
import TodoLists from "./TodoLists/TodoLists";

function App() {
  const [todoList, setTodoList] = useState([
    { todo: "learn html" },
    { todo: "learn css" },
    { todo: "learn responsive" },
    { todo: "learn tailwind" },
    { todo: "learn react" },
    { todo: "learn npm" },
    { todo: "learn bootstrap" },
  ]);

  return (
    <>
      <section className="bgc">
        <header className="header"> -- TODO LISTS --</header>
        <hr />

        {todoList.map((todo) => {
          return <TodoLists todo={todo.todo} />;
        })}
      </section>
    </>
  );
}

export default App;
