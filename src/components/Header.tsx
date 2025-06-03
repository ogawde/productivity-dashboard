import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default Header;
