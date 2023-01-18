import React from "react";

function Todo({ item, isActive, setTodos }) {
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
