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
  Article,
} from "@mui/icons-material";

import Box from "@mui/material/Box";
import RodapeAplicacao from "../components/rodapeAplicacao/RodapeAplicacao";
import { Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
export default function DefaultLayout() {
  //pega a localização atual da página
  const location = useLocation();
  //carrega os itens do menu lateral

  const itensMenu = [
    {
      titulo: "Menu Principal",
      patch: "/menu-principal",
      icone: <House />,
    },
    { titulo: "Clientes", patch: "/cliente", icone: <Group /> },
    { titulo: "FolowUp", patch: "/followup", icone: <Schema /> },
    {
      titulo: "Orçamentos",
      patch: "/orcamento",
      icone: <MonetizationOn />,
    },
    {
      titulo: "Projetos",
      patch: "/projeto",
      icone: <Architecture />,
    },
    { titulo: "Testes", patch: "/teste", icone: <Science /> },
    {
      titulo: "Estatisticas",
      patch: "/estatistica",
      icone: <Analytics />,
    },
    {
      titulo: "Protocolos",
      patch: "/protocolo",
      icone: <Article />,
    },
  ];
  return (
    <>
      <MenuLateral
        titulo={"Optifec - Integração Empresarial"}
        itensMenu={itensMenu}
      />
      <Box
        sx={{
          borderRadius: "8px",
          padding: "16px",
          margin: "16px",
          marginTop: "80px",
        }}
      >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 1, y: 10 }}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 0.2}}
          >
            <Outlet />
          </motion.div>
      </Box>
      <Divider />
      <RodapeAplicacao />
    </>
  );
}
