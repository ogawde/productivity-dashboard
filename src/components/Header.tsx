import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="h-full w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
      <div className="flex flex-col space-y-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">Theme</h2>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Current: <span className="capitalize font-medium">{theme}</span>
        </p>
      </div>
      <button 
        onClick={toggleTheme}
        className="w-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </div>
  );
}

export default Header;
