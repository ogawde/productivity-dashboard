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
    <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">To-do List</h2>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {tasks.filter(task => !task.completed).length} remaining
        </div>
      </div>
      
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          className="flex-1 border-2 border-gray-200 dark:border-gray-600 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition-colors duration-200"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task..."
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
          onClick={addTask}
        >
          Add
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {tasks.map((task) => (
            <li key={task.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => strikeTask(task.id)}
                    className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500 focus:ring-2"
                  />
                  <span className={`flex-1 ${task.completed ? "line-through text-gray-400 dark:text-gray-500" : "text-gray-800 dark:text-white"}`}>
                    {task.text}
                  </span>
                </div>
                <button
                  className="ml-3 px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg text-sm font-medium transition-colors duration-200"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        
        {tasks.length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No tasks yet. Add one above to get started!
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskManager;
