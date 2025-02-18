import { EditOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import CrudMenuItem from "./CrudMenuItem";

export default function CrudBotaoEdicao() {
  //ancoras do menu
  const [ancoraMenuCrud, setAncoraMenuCrud] = useState(null);
  const menuCrudAberto = Boolean(ancoraMenuCrud);

  //função para abrir o menu crud
  const abrirMenuCrud = (event) => {
    setAncoraMenuCrud(event.currentTarget);
  };

  //função para fechar o menu crud
  const fecharMenuCrud = () => {
    setAncoraMenuCrud(null);
  };

  return (
    <>
      <Button
        color="success"
        size="compact"
        id="botao-menu-crud"
        aria-controls={menuCrudAberto ? "menu-crud" : undefined}
        aria-haspopup="true"
        aria-expanded={menuCrudAberto ? "true" : undefined}
        onClick={abrirMenuCrud}
      >
        <EditOutlined />
      </Button>
      <CrudMenuItem
        menuCrudAberto={menuCrudAberto}
        fecharMenuCrud={fecharMenuCrud}
        ancoraMenuCrud={ancoraMenuCrud}
        id="menu-crud"
        idAncora="botao-menu-crud"
      />
    </>
  );
}
