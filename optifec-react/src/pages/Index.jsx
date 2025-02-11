import React from "react";
import BarraNavegacao from "../components/BarraNavegacao";
import PrimeiraSecao from "../components/paginaInicial/PrimeiraSecao";
import SegundaSecao from "../components/paginaInicial/SegundaSecao";
import { Box } from "@mui/material";

export default function Index() {
  return (
    <Box sx={{display:"flex", flexDirection:"column", gap:10}}>
      <BarraNavegacao
        mostrarBotaoEntrar={true}
        mostrarIconeDrawer={false}
      />
      <PrimeiraSecao/>
      <SegundaSecao/>
    </Box>
  );
}
