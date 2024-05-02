import { useEffect, useState } from "react";

function useDarkMode() {
  const [theme, setTheme] = useState("light");
  const colorTheme = theme == "light" ? "dark" : "light";

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme]);
  useEffect(() => {
    const root = window.document.documentElement;
    if (typeof window != "undefined") {
      root.classList.add("light");
    }
  }, []);
  return [setTheme, theme];
}

export default useDarkMode;
