import React from "react";
import TemplatePadrao from "../components/TemplatePadrao";
import { Outlet } from "react-router-dom";
import {
  House,
  Group,
  Architecture,
  Article,
  AccountTree,
  SupportAgent,
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
    { titulo: "Setores", patch: "/setor", icone: <AccountTree /> },
    {
      titulo: "Projetos",
      patch: "/projeto",
      icone: <Architecture />,
    },
    {
      titulo: "Protocolos",
      patch: "/protocolo",
      icone: <Article />,
    },
    { titulo: "Clientes", patch: "/cliente", icone: <Group /> },

    {
      titulo: "Representantes",
      patch: "/representante",
      icone: <SupportAgent />,
    },
  ];
  return (
    <>
      <TemplatePadrao titulo={"Administração"} itensMenu={itensMenu} />
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
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", restDelta: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </Box>
      <Divider />
      <RodapeAplicacao />
    </>
  );
}
