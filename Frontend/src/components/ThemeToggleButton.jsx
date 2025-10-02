// ThemeToggleButton.jsx
import { useContext } from "react";
import { MyThemeContext, themes } from "../context/MyThemeProvider";

export default function ThemeToggleButton() {
  const { darkMode, setTheme } = useContext(MyThemeContext);
  return (
    <button
      type="button"               
      onClick={() => setTheme(darkMode ? themes.light : themes.dark)}
    >
      {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
}