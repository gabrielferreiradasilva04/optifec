import React from "react";

export default function FormOrcamento() {
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
          <Stack
            direction={{ mx: "column", sm: "column", md: "column" }}
            spacing={{ xs: 1, md: 1 }}
            sx={{ paddingTop: "16px", paddingBottom: "16px" }}
          >
            <CustomMediumButton color="primary">Salvar</CustomMediumButton>
            <CustomMediumButton color="error">Excluir</CustomMediumButton>
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
        </Box>
      </Paper>
    </>
  );
}
