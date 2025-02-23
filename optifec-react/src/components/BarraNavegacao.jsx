import React, { useState } from "react";
//appbar
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import {Button, Tooltip } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../theme/ThemeContext";
import { useTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Login } from "@mui/icons-material";
export default function BarraNavegacao({
  toggleDrawer,
  titulo,
  mostrarIconeDrawer,
  mostrarBotaoEntrar,
}) {
  //cor do botao principal
  const corBotaoEntrar = grey["A100"];
  
  //alterar o tema
  const { isDarkMode, toggleTheme } = useThemeContext();
  const theme = useTheme(); // Acessa o tema atual

  //navegação
  const navigate = useNavigate();

  //variavel de carregamento do botao de entrar 
  const [loading, setLoading] = useState(false);

  //função do botão entrar
  const navegarParaLogin = () =>{
    setLoading(true);
    const timeout = setTimeout(() =>{
      setLoading(false);
      navigate("/login");
    }, 3000);
    return () => clearTimeout(timeout);
  }
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
            <Tooltip title="Entrar">
            <IconButton
              sx={{
                backgroundColor: corBotaoEntrar,
                color: "black",
                borderRadius: "10px",
              }}
              variant="contained"
              onClick={() => navegarParaLogin()}loading={loading}
            >
              <Login/>
            </IconButton>
            </Tooltip>

          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
