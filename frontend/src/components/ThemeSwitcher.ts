import { useState } from "react";

export const useThemeSwitcher = () => {
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor") || "light",
  );

  const toggleTheme = () => {
    setThemeColor((prev) => (prev === "light" ? "dark" : "light"));
  };

  localStorage.setItem("themeColor", themeColor);

  return { themeColor, toggleTheme };
};
