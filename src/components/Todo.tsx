import React, { useState, Dispatch, SetStateAction, ChangeEvent } from "react";

interface TodoProps {
  item: TodoItem;
  isActive: boolean;
  setTodos: Dispatch<SetStateAction<object[]>>;
}

interface TodoItem {
  // item: boolean | number | object;
  isDone: boolean;
  title: string;
  id: number;
  contents: string[];
}

function Todo({ item, isActive, setTodos }: TodoProps) {
  const handleDeleteButtonClick = () => {
    setTodos((prev) => prev.filter((test) => test.id !== item.id));
  };

  const handleSwitchButtonClick = () => {
    setTodos((prev) =>
      prev.map((test) => {
        if (test.id === item.id) {
          return { ...test, isDone: !test.isDone };
        } else {
          return test;
        }
      })
    );
  };

  return (
    <div
      style={{
        margin: "10px",
        padding: "10px 20px",
        backgroundColor: "#444dcd9d",
        color: "white",
      }}
      key={item.id}
    >
      <h5>{item.title}</h5>
      <p>{item.contents}</p>
      <button onClick={handleSwitchButtonClick}>
        {isActive ? "다했어" : "다시 돌아가"}
      </button>
      <button onClick={handleDeleteButtonClick}>삭제해</button>
    </div>
  );
}

export default Todo;
