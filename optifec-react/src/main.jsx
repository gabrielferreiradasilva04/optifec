import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CssBaseline from "@mui/material/CssBaseline";

//importar fontes
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//importar tema
import { ThemeProviderWrapper } from "./theme/ThemeContext.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssBaseline>
      <ThemeProviderWrapper>
        <App />
      </ThemeProviderWrapper>
    </CssBaseline>
  </StrictMode>
);
