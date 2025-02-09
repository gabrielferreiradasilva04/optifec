import React from "react";
import TabelaListagem from "../components/TabelaListagem";
import Box from "@mui/material/Box";
import FormCliente from "../components/forms/FormCliente";
import { useState } from "react";

export default function Cliente() {
  const colunas = [
    { field: "id", headerName: "Código do Cliente", flex: 1 },
    { field: "nome", headerName: "Nome Cliente", flex: 1 },
    { field: "representante", headerName: "Representante", flex: 1 },
    {
      field: "codigoFecial",
      headerName: "Cod. Fec",
      flex: 1,
    },
  ];
  const itens = [
    { id: 1, nome: "Snow", representante: "Jon", codigoFecial: 35 },
    { id: 2, nome: "Lannister", representante: "Cersei", codigoFecial: 42 },
    { id: 3, nome: "Lannister", representante: "Jaime", codigoFecial: 45 },
    { id: 4, nome: "Stark", representante: "Arya", codigoFecial: 16 },
    { id: 5, nome: "Targaryen", representante: "Daenerys", codigoFecial: null },
    { id: 6, nome: "Melisandre", representante: null, codigoFecial: 150 },
    { id: 7, nome: "Clifford", representante: "Ferrara", codigoFecial: 44 },
    { id: 8, nome: "Frances", representante: "Rossini", codigoFecial: 36 },
    { id: 9, nome: "Roxie", representante: "Harvey", codigoFecial: 65 },
  ];
  //cliente sendo alterado
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const handleSelectOnClick = (cliente) => {  
    if(cliente){
      setClienteSelecionado(cliente);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Box>
          <FormCliente clienteSelecionado={clienteSelecionado}/>
        </Box>
        <Box
          sx={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <TabelaListagem handleSelectOnClick={handleSelectOnClick} colunas={colunas} itens={itens} />
        </Box>
      </Box>
    </>
  );
}
