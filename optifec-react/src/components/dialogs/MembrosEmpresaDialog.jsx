import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import * as React from "react";
import ListaMembros from "../listas/ListaMembros";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  const nodeRef = React.useRef(null);
  return (
    <Draggable
      nodeRef={nodeRef}
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} ref={nodeRef} />
    </Draggable>
  );
}

export default function MembrosEmpresaDialog({
  dialog,
  cliqueFechar,
  selecionar,
}) {
  const membros = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "Pedro", idade: 22 },
    { nome: "Ana", idade: 28 },
    { nome: "Carlos", idade: 35 },
  ];
  return (
    <>
      <Dialog
        disableRestoreFocus
        fullWidth
        open={dialog}
        onClose={cliqueFechar}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
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
        <DialogTitle>Lista de Membros na Empresa</DialogTitle>
        <DialogContent>
          {membros.map((membro) => (
            <ListaMembros key={membro.nome} membro={membro} />
          ))}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" type="submit">
            Ok
          </Button>
          <Button variant="contained" onClick={cliqueFechar}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
