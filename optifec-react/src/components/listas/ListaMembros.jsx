import { Divider, Typography } from "@mui/material";
import React from "react";

export default function ListaMembros({ membro }) {
  return (
    <>
      <Typography>Nome: {membro.nome} </Typography>
      <Divider/>
    </>
  );
}
