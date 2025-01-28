import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const paginationModel = { page: 0, pageSize: 5 };

export default function TabelaListagem({ colunas, itens }) {
  return (
    <Paper sx={{ height: 600, width: "100%" }} elevation={0}>
      <DataGrid
        rows={itens}
        columns={colunas}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
