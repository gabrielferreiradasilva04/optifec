import React from "react";
import { Outlet } from "react-router-dom";
import {
  House,
  Analytics,
  Architecture,
  Science,
  Article,
  Verified,
} from "@mui/icons-material";
//import de componentes de tela
import MenuLateral from "../components/MenuLateral";
export default function LayoutEngenharia() {
  const itensMenu = [
    {
      titulo: "Menu Principal",
      patch: "/engenharia-menu-principal",
      icone: <House />,
    },
    {
      titulo: "Protocolos",
      patch: "/engenharia-protocolos",
      icone: <Article />,
    },
    {
      titulo: "Projetos",
      patch: "/engenharia-projetos",
      icone: <Architecture />,
    },
    {
      titulo: "Testes",
      patch: "/engenharia-testes",
      icone: <Science />,
    },
    {
      titulo: "Verificações",
      patch: "/engenharia-verificacoes",
      icone: <Verified />,
    },
    {
      titulo: "Estatisticas",
      patch: "/engenharia-estatisticas",
      icone: <Analytics />,
    },
  ];
  return (
    <>
      <MenuLateral
        titulo={"Optifec - Engenheiro Projetisa"}
        itensMenu={itensMenu}
      />
      <Outlet />
      
    </>
  );
}
