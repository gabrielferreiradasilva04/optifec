import React from "react";
import TabelaListagem from "../components/TabelaListagem";
import Box from "@mui/material/Box";
import FormCliente from "../components/forms/FormCliente";
import Divider from "@mui/material/Divider";
import { Padding } from "@mui/icons-material";

export default function ComClientes() {
  const colunas = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "firstName", headerName: "Primeiro Nome", flex: 1 },
    { field: "lastName", headerName: "Último Nome", flex: 1 },
    {
      field: "age",
      headerName: "Idade",
      type: "number",
      flex: 1,
    },
  ];
  const itens = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <>
      <Box sx={{ display:"flex", flexDirection:"column", gap:"20px"}}>
        <Box>
          <FormCliente />
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <TabelaListagem colunas={colunas} itens={itens} />
        </Box>
      </Box>
    </>
  );
}
