import React from "react";
import BarraNavegacao from "../components/BarraNavegacao";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import RodapeAplicacao from "../components/rodapeAplicacao/RodapeAplicacao";

export default function AuthLayout() {
  return (
    <>
      <BarraNavegacao mostrarBotaoEntrar={false} mostrarIconeDrawer={false} />
      <Box sx={{
          borderRadius: "8px",
          padding: "16px",
          margin: "16px",
          marginTop: "80px",
        }}  >
        <Outlet />
      </Box>
      <RodapeAplicacao/>
    </>
  );
}
