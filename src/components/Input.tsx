import React, { useState, Dispatch, SetStateAction } from "react";
import { v4 as uuidv4 } from "uuid";
import { uuid } from "uuidv4";

// // useState를 props해 가져오기 위한 첫번째 방법 : 이건 아닌것 같긴함..
// interface States {
//   setTodos: Isettodos;
// }

// interface Isettodos {
//   title: string;
//   contents: string;
//   isDone: false;
//   id: myuuid;

// // uuidv4() 의 type 설정하는 방법
// interface myuuid {
//   uuidv4(): string;
// }

// useState를 props해 가져오기 위한 두번째 방법 : 이것이 깔끔하고 에러가 없긴한데 맞는지는 잘 모르겠음...
interface Props {
  todos: boolean;
  setTodos: Dispatch<SetStateAction<boolean>>;
}

function Input({ setTodos, todos }: Props) {
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
