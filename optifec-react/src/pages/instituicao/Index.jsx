import React from "react";
import SecaoApresentacao from "../../components/paginaInicial/SecaoApresentacao";
import SecaoCartoes from "../../components/paginaInicial/SecaoCartoes";
import { Box } from "@mui/material";

export default function Index() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <SecaoApresentacao />
      <SecaoCartoes />
    </Box>
  );
}
