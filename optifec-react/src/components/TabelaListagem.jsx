import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, Button, IconButton, useTheme } from "@mui/material";
import CustomTextField from "./defaultComponents/CustomTextField";
import { Search, Add } from "@mui/icons-material";

const paginationModel = { page: 0, pageSize: 5 };

export default function TabelaListagem({
  colunas,
  itens,
  handleSelectOnClick,
  novoRegistro,
  titulo,
}) {
  //puxar o tema
  const theme = useTheme();

  return (
    <Paper
      sx={{
        maxHeight: "600px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "16px",
      }}
      elevation={0}
    >
      <h2>{titulo}</h2>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          flexDirection: { xs: "column", md: "row", sm: "column" },
        }}
      >
        <CustomTextField label="Pesquisar" />
        <IconButton size="small" aria-label="pesquisar">
          <Search />
        </IconButton>
        <IconButton size="small" onClick={novoRegistro} aria-label="pesquisar">
          <Add />
        </IconButton>
      </Box>

      <DataGrid
        density="compact"
        rows={itens}
        columns={colunas}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ padding: 2 }}
        //  onRowClick={(params) => handleSelectOnClick(params.row)}
        isRowSelectable={() => true}
        showCellVerticalBorder
        hideFooterSelectedRowCount
      />
    </Paper>
  );
}
