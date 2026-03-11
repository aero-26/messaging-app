import React, { useEffect, useState } from "react";
import { useThemeSwitcher } from "../components/ThemeSwitcher";
import { Button } from "@mui/material";
import axios from "axios";

const Root = () => {
  const { themeColor, toggleTheme } = useThemeSwitcher();

  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/users");
        const data = response.data;
        const users: string[] = [];
        data.users.forEach(
          (element: { firstName: string; lastName: string }) => {
            users.push(`${element.firstName} ${element.lastName}`);
          },
        );
        setData(users.join(", "));
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      Root
      <div>{data}</div>
      <Button variant="contained" onClick={toggleTheme}>
        HELLO
      </Button>
      <h1>{themeColor}</h1>
    </div>
  );
};

export default Root;
