import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, Button, TextField} from "@mui/material";
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
      elevation={5}
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
        <TextField placeholder="Pesquisar..." type="text" size="small" fullWidth/>
        <Button variant="contained" size="small" aria-label="pesquisar">
          <Search />
        </Button>
        <Button variant="contained" size="small" onClick={novoRegistro} aria-label="pesquisar">
          <Add />
        </Button>
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
