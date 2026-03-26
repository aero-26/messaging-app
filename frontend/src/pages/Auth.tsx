import { useState } from "react";
// import axios from "axios";
import { Box, Tab, Tabs, TextField } from "@mui/material";

const Auth = (props: { themeColor: string }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function allyProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <div className="hidden border-(--dark-font-primary) bg-(--light-font-primary)"></div>
      <Box
        className={`backdrop-blur-2xl size-100 mx-auto rounded-xl border-2 border-[var(--${props.themeColor}-font-primary)]`}
      >
        <Tabs
          sx={{
            "& .MuiTab-root": {
              color: `var(--${props.themeColor}-font-secondary) !important`,
            },
            "& .Mui-selected": {
              color: `var(--${props.themeColor}-font-primary) !important`,
            },
            "& .MuiTabs-indicator": {
              backgroundColor: `var(--${props.themeColor}-font-primary) !important`,
            },
          }}
          value={value}
          onChange={handleChange}
          centered
          className="my-2"
        >
          <Tab label="Sign Up" {...allyProps(0)} />
          <Tab label="Log In" {...allyProps(1)} />
        </Tabs>
      </Box>
    </>
  );
};

export default Auth;
