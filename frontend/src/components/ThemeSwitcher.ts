import { useState } from "react";
import darkBackground from "../assets/dark_background.png";
import lightBackground from "../assets/light_background.png";

export const useThemeSwitcher = () => {
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem("themeColor") || "light",
  );

  const background = () => {
    if (
      localStorage.getItem("themeColor") === "light" ||
      !localStorage.getItem("themeColor")
    ) {
      return lightBackground;
    } else {
      return darkBackground;
    }
  };

  const [bgImg, setBgImg] = useState(background());

  const toggleTheme = () => {
    setThemeColor((prev) => (prev === "light" ? "dark" : "light"));
    setBgImg((prev) =>
      prev === lightBackground ? darkBackground : lightBackground,
    );
  };

  localStorage.setItem("themeColor", themeColor);

  return { themeColor, toggleTheme, bgImg };
};
