import { useEffect, useState } from "react";

// use This component for set the theme dark or light 
const useTheme = () => {
  const [theme, settheme] = useState<"light" | "dark">(
    () => (localStorage.getItem("theme") as "light" | "dark") || "light",
  );
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.remove("light")
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
      html.classList.add("light")
    }
    localStorage.setItem("theme", theme);
  }, [theme])
  const toggleTheme = () => {
    settheme(prev => (prev === "dark" ? "light": "dark"))

  }
  return {theme, settheme, toggleTheme}
};

export default useTheme;
