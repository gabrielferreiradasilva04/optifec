import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";
import React from "react";

export default function FormularioClienteDialog({ dialog, cliqueFechar }) {
  return (
    <>
      <Dialog
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
        <DialogTitle>Formulário de Cliente</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha todos os campos requeridos do formulário
          </DialogContentText>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <TextField required margin="dense" label="Codigo"></TextField>
            <TextField required margin="dense" label="Nome"></TextField>
            <TextField required margin="dense" label="Descrição"></TextField>
            <TextField
              required
              margin="dense"
              label="Data Cadastro"
            ></TextField>
            <TextField
              required
              margin="dense"
              label="Data Alteração"
            ></TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" type="submit">
            Salvar
          </Button>
          <Button variant="contained" onClick={cliqueFechar}>
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
