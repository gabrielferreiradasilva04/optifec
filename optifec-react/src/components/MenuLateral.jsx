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
import RodapeAplicacao from "./RodapeAplicacao";

export default function MenuLateral({ titulo, itensMenu }) {
  const [open, setOpen] = React.useState(false);

  //Função para ativar e desativar o drawer
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  //Navegação dos links
  const navigate = useNavigate();

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
      <BarraNavegacao toggleDrawer={toggleDrawer(true)} titulo={titulo} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
