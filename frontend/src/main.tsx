import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

export const theme = {
  dark: {
    notificationColor: "#40D169",
    backgroundColor: "#0a0a0a",
    sendBubble: "#145345",
    receiveBubble: "#363636",
    fontPrimary: "#FFFFFF",
    fontSecondary: "#767676",
  },
  light: {
    notificationColor: "#40D169",
    backgroundColor: "#FFFFFF",
    sendBubble: "#E3FDD4",
    receiveBubble: "#FFFFFF",
    fontPrimary: "#0a0a0a",
    fontSecondary: "#767676",
  },
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
