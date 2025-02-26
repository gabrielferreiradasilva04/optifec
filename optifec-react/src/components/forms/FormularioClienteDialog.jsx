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
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <TextField
              variant="filled"
              required
              size="small"
              label="Codigo"
            ></TextField>
            <TextField
              variant="filled"
              required
              size="small"
              label="Nome"
            ></TextField>
            <TextField
              variant="filled"
              size="small"
              label="Data Cadastro"
            ></TextField>
            <TextField
              variant="filled"
              size="small"
              label="Data Alteração"
            ></TextField>
            <TextField
              multiline
              rows={4}
              variant="filled"
              required
              size="small"
              label="Descrição"
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
