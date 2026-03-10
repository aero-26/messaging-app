import React from "react";
import { useThemeSwitcher } from "../components/ThemeSwitcher";
import { Button } from "@mui/material";

const Root = () => {
  const { themeColor, toggleTheme } = useThemeSwitcher();

  return (
    <div>
      Root
      <Button variant="contained" onClick={toggleTheme}>
        HELLO
      </Button>
      <h1>{themeColor}</h1>
    </div>
  );
};

export default Root;
