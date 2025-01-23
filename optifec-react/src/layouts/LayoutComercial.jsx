import React from "react";
import MenuLateral from "../components/MenuLateral";
import { Outlet } from "react-router-dom";
import {
  House,
  Group,
  Analytics,
  Schema,
  MonetizationOn,
  Architecture,
  Science,
} from "@mui/icons-material";

import Box from "@mui/material/Box";

export default function LayoutComercial() {
  const itensMenu = [
    {
      titulo: "Menu Principal",
      patch: "/comercial-menu-principal",
      icone: <House />,
    },
    { titulo: "Clientes", patch: "/comercial-clientes", icone: <Group /> },
    { titulo: "FolowUp", patch: "/comercial-folowUp", icone: <Schema /> },
    {
      titulo: "Orçamentos",
      patch: "/comercial-orçamentos",
      icone: <MonetizationOn />,
    },
    {
      titulo: "Projetos",
      patch: "/comercial-projetos",
      icone: <Architecture />,
    },
    { titulo: "Testes", patch: "/comercial-testes", icone: <Science /> },
    {
      titulo: "Estatisticas",
      patch: "/comercial-estatisticas",
      icone: <Analytics />,
    },
  ];
  return (
    <>
      <MenuLateral
        titulo={"Optifec - Analista Comercial"}
        itensMenu={itensMenu}
      />
      <Box
        sx={{
          borderRadius: "8px", 
          padding: "16px", 
          margin: "16px",
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}
