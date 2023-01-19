import React from "react";
import Todo from "./Todo";
import { TodoProps } from "./Todo";

function TodoList({ todos, isActive, setTodos }: TodoProps) {
  return (
    <>
      <h4>{isActive ? "해야할 일입니다🔥" : "완료된 일입니다👍🏻"}</h4>
      {todos
        .filter((item) => item.isDone !== isActive)
        .map((item) => {
          return (
            <Todo
              isActive={isActive}
              item={item}
              setTodos={setTodos}
              todos={function (value: React.SetStateAction<>): void {
                throw new Error("Function not implemented.");
              }}
            />
          );
        })}
    </>
  );
}

export default TodoList;
