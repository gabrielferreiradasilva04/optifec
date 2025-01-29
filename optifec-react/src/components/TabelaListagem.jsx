import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Box, IconButton } from "@mui/material";
import CustomMediumButton from "./basicComponents/CustomMediumButton";
import CustomTextField from "./basicComponents/CustomTextField";
import SearchIcon from "@mui/icons-material/Search";

const paginationModel = { page: 0, pageSize: 5 };

export default function TabelaListagem({ colunas, itens }) {
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
      <Box>
        <h3>Dados Cadastrados</h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          flexDirection: { xs: "column", md: "row", sm: "column" },
        }}
      >
        <CustomTextField label="Pesquisar" />
        <IconButton aria-label="pesquisar">
          <SearchIcon />
        </IconButton>
      </Box>

      <DataGrid
        rows={itens}
        columns={colunas}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ padding: 2 }}
      />
    </Paper>
  );
}
