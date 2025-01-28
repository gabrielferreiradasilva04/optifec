import { createTheme } from "@mui/material/styles";
import { ptBR } from "../utils/DataGridPTBR";

import {
  teal,
  green,
  lightGreen,
  blue,
  lightBlue,
  red,
  yellow,
} from "@mui/material/colors";

export const lightTheme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: green[900],
      },
      secondary: {
        main: "#9c27b0",
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
      text: {
        primary: "#000000",
        secondary: "#4f4f4f",
      },
    },
  },
  ptBR
);

export const darkTheme = createTheme(
  {
    palette: {
      mode: "dark",
      primary: {
        main: green[900],
      },
      secondary: {
        main: "#ce93d8",
      },
      background: {
        default: "#121212",
        paper: "#1d1d1d",
      },
      text: {
        primary: "#ffffff",
        secondary: "#bdbdbd",
      },
    },
  },
  ptBR
);
