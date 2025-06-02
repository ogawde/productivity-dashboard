import { useReducer, useState } from "react";

function taskReducer(tasks: any[], action: { type: string; payload: any }) {
  switch (action.type) {
    case "ADD_TASK":
      return [...tasks, action.payload];
    case "DELETE_TASK":
      return tasks.filter((task) => task.id !== action.payload);
    case "TOGGLE_COMPLETE":
      return tasks.map((task) => {
        if (task.id === action.payload) {
          return { ...task, completed: !task.completed };
        }
        return task;
      });

    default:
      return tasks;
  }
}

function TaskManager() {
  const [text, setText] = useState("");
  const initialState: any[] = [];

  const [tasks, dispatch] = useReducer(taskReducer, initialState);

  const addTask = () => {
    if (text.trim() === "") return;
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), text: text, completed: false },
    });
    setText("");
  };

  function deleteTask(id: any) {
    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
  }

  function strikeTask(id: any) {
    dispatch({
      type: "TOGGLE_COMPLETE",
      payload: id,
    });
  }

  return (
    <div className="flex flex-col p-4">
      <div className="text-3xl mb-4">To-do List</div>
      <div className="flex mb-4">
        <input
          type="text"
          className="border-2 border-neutral-900 p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task"
        />
        <button
          className="ml-2 px-4 bg-blue-500 text-white rounded"
          onClick={addTask}
        >
          +
        </button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className="border-b py-2">
            <span className={task.completed ? "line-through" : ""}>
              {task.text}
              <input
                type="checkbox"
                onClick={() => {
                  strikeTask(task.id);
                }}
              />
              <button
                className="ml-2 px-4 bg-blue-500 text-white rounded"
                onClick={() => {
                  deleteTask(task.id);
                }}
              >
                d
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
