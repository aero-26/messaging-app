import { Button } from "@mui/material";
import "./App.css";
import { useState } from "react";

function App() {
  const [themeColor, setThemeColor] = useState("light");

  const switchLightAndDarkMode = () =>
    themeColor === "dark" ? setThemeColor("light") : setThemeColor("dark");

  return <></>;
}

export default App;
