import { Menu, MenuItem } from "@mui/material";
import React from "react";

export default function CrudMenuItem({
  ancoraMenuCrud,
  menuCrudAberto,
  fecharMenuCrud,
  idAncora,
  id,
}) {
  return (
    <>
      <Menu
        id={id}
        anchorEl={ancoraMenuCrud}
        open={menuCrudAberto}
        onClose={fecharMenuCrud}
        MenuListProps={{
          "aria-labelledby": idAncora,
        }}
      >
        <MenuItem onClick={fecharMenuCrud}>Editar</MenuItem>
        <MenuItem onClick={fecharMenuCrud}>Deletar</MenuItem>
      </Menu>
    </>
  );
}
