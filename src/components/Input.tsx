import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Input({ setTodos, todos }) {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const handleSubmitClick = (event) => {
    console.log(todos);
    event.preventDefault();

    const newTodos = {
      title: title,
      contents: contents,
      isDone: false,
      id: uuidv4(),
    };

    setTodos((prev) => {
      return [...prev, newTodos];
    });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleContentsChange = (event) => {
    setContents(event.target.value);
  };

  return (
    <section
      style={{
        margin: "10px",
        padding: "10px",
        backgroundColor: "#767ee09d",
        color: "white",
      }}
    >
      <form onSubmit={handleSubmitClick}>
        제목 : <input value={title} onChange={handleTitleChange} />
        <p></p>
        내용 : <input value={contents} onChange={handleContentsChange} />
        <p></p>
        <button
          style={{
            marginLeft: "50px",
          }}
        >
          추가
        </button>
      </form>
    </section>
  );
}

export default Input;
