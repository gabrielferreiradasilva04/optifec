import React from "react";
import BarraNavegacao from "../components/BarraNavegacao";
import SecaoApresentacao from "../components/paginaInicial/SecaoApresentacao";
import SecaoCartoes from "../components/paginaInicial/SecaoCartoes";
import SecaoFuncionalidade from "../components/paginaInicial/SecaoFuncionalidade";
import { Box } from "@mui/material";

export default function Index() {
  return (
    <Box sx={{display:"flex", flexDirection:"column", gap:10}}>
      <BarraNavegacao
        mostrarBotaoEntrar={true}
        mostrarIconeDrawer={false}
      />
      <SecaoApresentacao/>
      <SecaoCartoes/>
    </Box>
  );
}
