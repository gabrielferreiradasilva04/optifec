import React from "react";
import TabelaListagem from "../components/TabelaListagem";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { MoreHoriz } from "@mui/icons-material";
import FormularioClienteDialog from "../components/forms/FormularioClienteDialog";
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
    {
      field: "actions",
      headerName: "Ações",
      width: 150,
      renderCell: (params) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <IconButton size="compact">
            <MoreHoriz />
          </IconButton>
        </div>
      ),
    },
  ];
  const itens = [
    { id: 1, nome: "Snow", representante: "Jon", codigo: 35 },
    { id: 2, nome: "Lannister", representante: "Cersei", codigo: 42 },
    { id: 3, nome: "Lannister", representante: "Jaime", codigo: 45 },
    { id: 4, nome: "Stark", representante: "Arya", codigo: 16 },
    { id: 5, nome: "Targaryen", representante: "Daenerys", codigo: "" },
    { id: 6, nome: "Melisandre", representante: "", codigo: 150 },
    { id: 7, nome: "Clifford", representante: "Ferrara", codigo: 44 },
    { id: 8, nome: "Frances", representante: "Rossini", codigo: 36 },
    { id: 9, nome: "Roxie", representante: "Harvey", codigo: 65 },
  ];

  //variaveis e funções do dialog
  const [dialogCliente, setDialogCliente] = useState(false);

  const cliqueAbrir = () => {
    setDialogCliente(true);
  };
  const cliqueFechar = () => {
    setDialogCliente(false);
  };
  //variaveis e funções do dialog

  return (
    <>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <TabelaListagem
          novoRegistro={cliqueAbrir}
          colunas={colunas}
          itens={itens}
          titulo="Cadastro de Clientes"
        />
      </Box>
      <FormularioClienteDialog
        dialog={dialogCliente}
        cliqueFechar={cliqueFechar}
      />
    </>
  );
}
