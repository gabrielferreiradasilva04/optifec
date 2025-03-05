import React from "react";
import Box from "@mui/material/Box";
import {
  Button,
  Card,
  FormControlLabel,
  Grid2,
  Pagination,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import FormRepresentanteDialog from "../../components/forms/FormRepresentanteDialog";
import { useState } from "react";
import CardCliente from "../../components/cards/CardCliente";
import CardRepresentante from "../../components/cards/CardRepresentante";
import FormularioRepresentanteDialog from "../../components/forms/FormRepresentanteDialog";

export default function Representante() {
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
  const [dialogRepresentante, setDialogRepresentante] = useState(false);

  const cliqueAbrir = () => {
    setDialogRepresentante(true);
  };
  const cliqueFechar = () => {
    setDialogRepresentante(false);
  };
  //variaveis e funções do dialog

  //paginação do conteudo
  const ITENS_POR_PAGINA = 6;

  const [pagina, setPagina] = useState(1);

  const paginasTotal = Math.ceil(itens.length / ITENS_POR_PAGINA);

  const mudarPagina = (event, value) => {
    setPagina(value);
  };

  const paginaInicio = (pagina - 1) * ITENS_POR_PAGINA;

  const cartoesNoDisplay = itens.slice(
    paginaInicio,
    paginaInicio + ITENS_POR_PAGINA
  );
  //paginação do conteudo

  //variaveis de filtragem
  const [somenteAtivos, setSomenteAtivos] = useState(false);

  return (
    <>
      <Box>
        <Box sx={{ marginBottom: "15px" }}>
          <Typography component="h1" fontWeight="bold" variant="h5">
            Meus Representantes
          </Typography>
        </Box>
        <Box
          sx={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            flexDirection: { xs: "column", md: "row", sm: "column" },
          }}
        >
          <TextField placeholder="Pesquisar..." size="small" fullWidth />
          <Button variant="contained" size="small">
            <Search />
          </Button>
          <Button variant="contained" size="small" onClick={cliqueAbrir}>
            <Add />
          </Button>
          <Stack>
            <FormControlLabel
              label="Ativos"
              control={
                <Switch
                  checked={somenteAtivos}
                  onChange={() => setSomenteAtivos(!somenteAtivos)}
                  name="toggleCadEmpresa"
                  color="primary"
                />
              }
            />
          </Stack>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid2
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {cartoesNoDisplay.map((representante) => (
              <CardRepresentante
                key={representante.codigo}
                representante={representante}
                cliqueEditar={cliqueAbrir}
              />
            ))}
          </Grid2>
        </Box>

        <Pagination
          count={paginasTotal}
          page={pagina}
          onChange={mudarPagina}
          sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
        />
      </Box>
      <FormRepresentanteDialog
        dialog={dialogRepresentante}
        cliqueFechar={cliqueFechar}
      />
    </>
  );
}
