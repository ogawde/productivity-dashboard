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
    <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Notes</h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {text.length} characters
        </div>
      </div>
      
      <textarea
        name="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="Write your notes here..."
        className="flex-1 w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200"
      />
    </div>
  );
}

export default Notes;
