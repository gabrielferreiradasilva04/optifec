import React from "react";
import TabelaListagem from "../components/TabelaListagem";
import Box from "@mui/material/Box";
import FormCliente from "../components/forms/FormCliente";
import Divider from "@mui/material/Divider";

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
      <Box>
        <Box>
          <FormCliente />
        </Box>
        <Divider sx={{margin: "20px"}} orientation="horizontal" />
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            border: "none",
          }}
        >
          <TabelaListagem colunas={colunas} itens={itens} />
        </Box>
      </Box>
    </>
  );
}
