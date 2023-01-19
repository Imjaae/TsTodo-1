import React from "react";
import Todo from "./Todo";

function TodoList({ todos, isActive, setTodos }) {
  return (
    <>
      <h4>{isActive ? "해야할 일입니다🔥" : "완료된 일입니다👍🏻"}</h4>
      {todos
        .filter((item) => item.isDone !== isActive)
        .map((item) => {
          return <Todo isActive={isActive} item={item} setTodos={setTodos} />;
        })}
    </>
  );
}

export default TodoList;
