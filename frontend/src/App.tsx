import "./App.css";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import home from "../pages/Home";
import root from "../pages/Root";

function App() {
  const [themeColor, setThemeColor] = useState("light");

  const switchLightAndDarkMode = () =>
    themeColor === "dark" ? setThemeColor("light") : setThemeColor("dark");

  return (
    <>
      <Routes>
        <Route path="/" Component={root}></Route>
        <Route path="/home" Component={home} />
      </Routes>
    </>
  );
}

export default App;
