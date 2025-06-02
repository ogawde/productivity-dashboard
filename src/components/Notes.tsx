import { useEffect, useState } from "react";

function Notes() {
  const [text, setText] = useState("");

  // first render
  useEffect(() => {
    const localText: null | string = localStorage.getItem("note");
    setText(localText || "");
  }, []);

  // inAction
  useEffect(() => {
    localStorage.setItem("note", text);
  }, [text]);

  return (
    <>
      <div>Notes</div>

      <textarea
        name="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
    </>
  );
}

export default Notes;
