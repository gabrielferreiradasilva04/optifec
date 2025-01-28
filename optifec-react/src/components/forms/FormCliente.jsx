import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Grid2 as Grid, Paper, Stack } from "@mui/material";
import Button from "@mui/material/Button";

export default function FormCliente() {
  return (
    <>
      <Paper sx={{ padding: "16px" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h2>Formulário Cliente</h2>
          <Stack
            direction={{ mx: "row", sm: "column", md: "row" }}
            spacing={{ xs: 2, md: 2 }}
            sx={{ padding: "16px" }}
          >
            <Button variant="contained" size="medium">
              Salvar
            </Button>
            <Button variant="contained">Excluir</Button>
          </Stack>
        </Box>
        <Box
          component="form"
          onSubmit={null}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            columnCount: "2",
            width: "100%",
            gap: 2,
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 8 }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              size={{ xs: 2, sm: 4, md: 4 }}
            >
              <FormControl fullWidth>
                <TextField label="Nome"></TextField>
              </FormControl>
              <FormControl fullWidth>
                <TextField label="Nome"></TextField>
              </FormControl>
            </Grid>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              size={{ xs: 2, sm: 4, md: 4 }}
            >
              <FormControl fullWidth>
                <TextField label="Nome"></TextField>
              </FormControl>
              <FormControl fullWidth>
                <TextField label="Nome"></TextField>
              </FormControl>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
}
