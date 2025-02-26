import { createTheme } from "@mui/material/styles";
import { ptBR } from "../utils/dataGridPTBR";

import {
  lightGreen,
  red,
  orange,
} from "@mui/material/colors";

export const lightTheme = createTheme(
  {
    palette: {
      mode: "light",
      primary: {
        main: "#093C2D",
        second:"#D8F2CD"
      },
      secondary: {
        main: "#63A593",
        second: "#63A593"
      },
      background: {
        default: "#f5f5f5",
        paper: "#ffffff",
      },
      text: {
        primary: "#4f4f4f",
        secondary: "#000000",
      },
      error: {
        main: red[500],
      },
      warning: {
        main: orange[500],
      },
      success: {
        main: lightGreen[600],
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
        main: "#093C2D",
        second:"#D8F2C"
      },
      secondary: {
        main: "#3B6654",
        second: "#63A593"
      },
      background: {
        default: "#121212",
        paper: "#1d1d1d",
      },
      text: {
        primary: "#ffffff",
        secondary: "#bdbdbd",
      },
      error: {
        main: red[500],
      },
      warning: {
        main: orange[500],
      },
      success: {
        main: lightGreen[600],
      },
    },
  },
  ptBR
);
