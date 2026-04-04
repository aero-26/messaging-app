import { useState } from "react";
// import axios from "axios";
import {
  Box,
  FormControl,
  Tab,
  Tabs,
  TextField,
  Button,
  styled,
} from "@mui/material";

import { CloudUpload } from "@mui/icons-material";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

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
        className={`backdrop-blur-2xl size-100 mx-auto rounded-xl border-2 border-[var(--${props.themeColor}-font-primary)] flex-col flex h-fit pb-8`}
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
        <FormControl
          className={`gap-4 items-center text-[var(--${props.themeColor}-font-primary)]`}
        >
          <TextField
            id="outlined-name-input"
            className="w-[80%]"
            label="Name"
            type="text"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: `var(--${props.themeColor}-font-primary)`,
                },
                "&:hover fieldset": {
                  borderColor: `var(--${props.themeColor}-font-primary)`,
                },
                "&.Mui-focused fieldset": {
                  borderColor: `var(--${props.themeColor}-font-primary)`,
                },
              },
              "& .MuiInputLabel-root": {
                color: `var(--${props.themeColor}-font-primary)`,
              },
            }}
          />
          <TextField
            id="outlined-email-input"
            className="w-[80%]"
            label="Email"
            type="email"
          />
          <TextField
            id="outlined-password-input"
            className="w-[80%]"
            label="Password"
            type="password"
          />
          <TextField
            id="outlined-confirm-password-input"
            className="w-[80%]"
            label="Confirm Password"
            type="password"
          />
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<CloudUpload />}
          >
            Upload Picture
            <VisuallyHiddenInput
              type="file"
              onChange={(event) => console.log(event.target.files)}
              multiple
            />
          </Button>
          <Button
            sx={{ backgroundColor: "red" }}
            className="w-[80%]"
            variant="contained"
            href="#contained-buttons"
          >
            Sign Up
          </Button>
        </FormControl>
      </Box>
    </>
  );
};

export default Auth;
