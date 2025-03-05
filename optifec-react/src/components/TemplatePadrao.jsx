import * as React from "react";
//menudrawer
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import BarraNavegacao from "./BarraNavegacao";
import { useNavigate } from "react-router-dom";
import { Divider, useTheme } from "@mui/material";

export default function TemplatePadrao({ titulo, itensMenu }) {
  const [open, setOpen] = React.useState(false);

  //Função para ativar e desativar o drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //Navegação dos links
  const navigate = useNavigate();

  //puxar o tema atual
  const theme = useTheme();
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {itensMenu.map((item, index) => (
          <ListItem key={item.titulo} disablePadding>
            <ListItemButton onClick={() => navigate(item.patch)}>
              <ListItemIcon>{item.icone}</ListItemIcon>
              <ListItemText primary={item.titulo} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <BarraNavegacao
        mostrarBotaoEntrar={false}
        mostrarIconeDrawer={true}
        mostrarBotaoNotificacoes={true}
        toggleDrawer={toggleDrawer(true)}
        mostrarBotaoPerfil={true}
        titulo={titulo}
      />
      <Drawer open={open} onClose={toggleDrawer(false)} variant="temporary">
        <Divider />
        <Box sx={{ padding: "10px" }}>
          <img src="/public/simples-sem-fundo.png" width="50px" alt="" />
        </Box>
        <Divider />
        {DrawerList}
      </Drawer>
    </div>
  );
}
