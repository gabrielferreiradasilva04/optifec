import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import { Grid2 as Grid, Paper, Stack } from "@mui/material";
import CustomMediumButton from "../basicComponents/CustomMediumButton";
import CustomTextField from "../basicComponents/CustomTextField";
export default function FormCliente() {
  return (
    <>
      <Paper sx={{ padding: "16px" }} elevation={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h3>Formulário Cliente</h3>
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
              <CustomTextField label="Código do Cliente"></CustomTextField>
              <CustomTextField label="Representante Responsável"></CustomTextField>
            </Grid>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              size={{ xs: 2, sm: 4, md: 4 }}
            >
              <CustomTextField label="Nome do Cliente"></CustomTextField>
              <CustomTextField label="Solicitante"></CustomTextField>
            </Grid>
          </Grid>
          <Stack
            sx={{
              paddingTop: "16px",
              paddingBottom: "16px",
              display: "-ms-flexbox",
              flexDirection: { mx: "row", sm: "column", md: "row" },
              justifyContent: "end",
              gap: "6px",
            }}
          >
            <CustomMediumButton color="primary">Salvar</CustomMediumButton>
            <CustomMediumButton color="error">Excluir</CustomMediumButton>
          </Stack>
        </Box>
      </Paper>
    </>
  );
}
