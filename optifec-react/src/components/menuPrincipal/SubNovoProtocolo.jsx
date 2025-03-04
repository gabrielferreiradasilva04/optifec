import { Box, Typography } from "@mui/material";
import React from "react";

export default function SubNovoProtocolo({ protocolo }) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography fontWeight="bold">Protocolo: {protocolo.titulo}</Typography>
      <Typography fontWeight="bold">Data: {protocolo.data}</Typography>
      </Box>
    </>
  );zz
}
