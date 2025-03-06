import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React, { useState } from "react";
import ListaMembros from "../listas/ListaMembros";
import MembrosEmpresaDialog from "../dialogs/MembrosEmpresaDialog";

export default function FormMembroSetorDialog({ dialog, cliqueFechar, setor }) {
  //lista temporaria, o correto é pegar os membros do objeto setor passado no momento do clique
  const membros = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 },
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 35 },
  ];
  //variáveis e funções do dialog de membros da empresa
  const [dialogMembrosEmpresa, setDialogMembrosEmpresa] = useState(false);

  const abrirDialogMembrosEmpresa = () => {
    setDialogMembrosEmpresa(true);
  };
  const fecharDialogMembrosEmpresa = () => {
    setDialogMembrosEmpresa(false);
  };

  return (
    <>
      <Dialog
        disableRestoreFocus
        fullWidth
        open={dialog}
        slotProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
          },
        }}
      >
        <DialogTitle>Membros do setor</DialogTitle>
        <DialogContent>
          <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
            {membros.map((membro) => (
              <ListaMembros key={membro.nome} membro={membro} />
            ))}
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={abrirDialogMembrosEmpresa}>
            Novo
          </Button>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
          <Button variant="contained" onClick={cliqueFechar}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
      <MembrosEmpresaDialog
        dialog={dialogMembrosEmpresa}
        cliqueFechar={fecharDialogMembrosEmpresa}
      />
    </>
  );
}
