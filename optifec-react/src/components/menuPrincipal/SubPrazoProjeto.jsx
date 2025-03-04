import { Box, Typography } from "@mui/material";
import React from "react";

export default function SubPrazoProjeto({ projeto }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography fontWeight="bold">Projeto: {projeto.titulo}</Typography>
      <Typography fontWeight="bold">Data: {projeto.data}</Typography>
    </Box>
  );
}
