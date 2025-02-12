import React from "react";
import { Button, Grid2, Paper } from "@mui/material";
import SliderInicial from "./slider/SliderInicial";

export default function SecaoApresentacao() {
  return (
    <>
      <Grid2
        container
        spacing={{ xs: 2, md: 2 }}
        size={{ xs: 2, sm: 4, md: 2 }}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "center" },
          width: "100%",
          height: "auto",
        }}
      >
        <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
          <h1>Seja Bem Vindo ao Optifec!</h1>
          <h2>Conectando processos e impulsionando negócios!</h2>
          <Button variant="contained">Entre em contato conosco</Button>
        </Paper>
        <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
        <SliderInicial />
        </Paper>
      </Grid2>
    </>
  );
}
