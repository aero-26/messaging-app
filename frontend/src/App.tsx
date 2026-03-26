import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useThemeSwitcher } from "./components/ThemeSwitcher";
import { Tooltip } from "@mui/material";
import Icon from "@mui/material/Icon";
import Auth from "./pages/Auth";
import Home from "./pages/Home";

function App() {
  const { bgImg, themeColor, toggleTheme } = useThemeSwitcher();

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`bg-no-repeat bg-cover h-dvh text-${themeColor}-font-primary flex-col flex justify-center`}
    >
      <div className=" hidden bg-(--dark-background-color) text-(--dark-font-primary)"></div>
      <Tooltip title="Switch Modes">
        <div
          className={`inline-block backdrop-blur-2xl text-(--${themeColor}-font-primary) rounded-full cursor-pointer m-2 absolute top-0 right-0`}
        >
          <Icon
            className={`material-symbols-outlined p-4 flex! justify-center items-center border-2 border-${themeColor} rounded-full`}
            onClick={toggleTheme}
          >
            {themeColor === "dark"
              ? "partly_cloudy_day"
              : "partly_cloudy_night"}
          </Icon>
        </div>
      </Tooltip>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/auth" element={<Auth themeColor={themeColor} />} />
      </Routes>
    </div>
  );
}

export default App;
