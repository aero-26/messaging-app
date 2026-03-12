import "./App.css";
import { Route, Routes } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import { useThemeSwitcher } from "./components/ThemeSwitcher";
import { Button, Tooltip } from "@mui/material";
import Icon from "@mui/material/Icon";

function App() {
  const { bgImg, themeColor, toggleTheme } = useThemeSwitcher();

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`bg-no-repeat bg-cover h-dvh text-${themeColor}-fontPrimary`}
    >
      <Button variant="contained" onClick={toggleTheme}>
        HELLO
      </Button>
      <Tooltip title="Switch Modes">
        <div
          className={`inline-block bg-${themeColor}-backgroundColor rounded-full flex justify-center items-center cursor-pointer`}
        >
          <Icon className={`material-symbols-outlined`} onClick={toggleTheme}>
            {themeColor === "dark"
              ? "partly_cloudy_day"
              : "partly_cloudy_night"}
          </Icon>
        </div>
      </Tooltip>
      <h1>{themeColor}</h1>
      <Routes>
        <Route path="/" Component={Root}></Route>
        <Route path="/home" Component={Home} />
      </Routes>
    </div>
  );
}

export default App;
