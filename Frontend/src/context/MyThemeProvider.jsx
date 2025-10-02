import React from "react";

export const themes = {
  light: { foreground: "#131211ff", background: "#ccbe86ff" }, // Brown text, beige bg
  dark:  { foreground: "#ffd700", background: "#2f1b14" }, // Gold text, dark brown bg
};

export const MyThemeContext = React.createContext({
  theme: themes.light,
  setTheme: () => {},
  darkMode: false,
});

export default function MyThemeProvider({ children }) {
  const [theme, setTheme] = React.useState(themes.light);
  const darkMode = theme.background === themes.dark.background;

  const value = React.useMemo(() => ({ theme, setTheme, darkMode }), [theme, darkMode]);

  return (
    <MyThemeContext.Provider value={value}>
      {children}
    </MyThemeContext.Provider>
  );
}