import { Box, Container, Grid2, Paper } from "@mui/material";
import React from "react";

export default function MenuPrincipal() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid2 size={{ xs: 6, sm: 4, md: 6 }}>
            <Paper>Conteudo 4</Paper>{" "}
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 4, md: 6 }}>
            <Paper>Conteudo 4</Paper>{" "}
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 4, md: 6 }}>
            <Paper>Conteudo 4</Paper>{" "}
          </Grid2>
          
          <Grid2 size={{ xs: 6, sm: 4, md: 6 }}>
            <Paper>Conteudo 4</Paper>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
