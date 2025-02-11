import React from "react";
//appbar
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Button } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../theme/ThemeContext";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export default function BarraNavegacao({ toggleDrawer, titulo, mostrarIconeDrawer, mostrarBotaoEntrar }) {
  const corBotaoEntrar = grey["A100"];
  const { isDarkMode, toggleTheme } = useThemeContext();
  const theme = useTheme(); // Acessa o tema atual
  return (
    <>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{ backgroundColor: theme.palette.primary.main }}
        >
          <Toolbar>
            {mostrarIconeDrawer && (
              <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            )}
            

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {titulo}
            </Typography>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleTheme}
            >
              <DarkModeIcon />
            </IconButton>
            {mostrarBotaoEntrar && (
            <Button sx={{backgroundColor: corBotaoEntrar, color:'green', borderRadius:'10px'}} variant="contained">Entrar</Button>
            )}
          </Toolbar>
        </AppBar>
    </>
  );
}
