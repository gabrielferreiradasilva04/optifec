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
import { useState } from "react";
import CardSetor from "../../components/cards/CardSetor";
import FormSetorDialog from "../../components/forms/FormSetorDialog";
import FormMembroSetorDialog from "../../components/forms/FormMembroSetorDialog";

export default function Setor() {
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

  //variaveis e funções do dialog de cadastro
  const [dialogSetor, setDialogSetor] = useState(false);

  const cliqueAbrir = () => {
    setDialogSetor(true);
  };
  
  const cliqueFechar = () => {
    setDialogSetor(false);
  };
  //variaveis e funções do dialog de cadastro

  //variaveis e funções do dialog de membros

  const [dialogMembros, setDialogMembros] = useState(false);
  const [setorSelecionado, setSetorSelecionado] = useState(null);

  const cliqueAbrirMembros = (setor) => {
    setDialogMembros(true);
    setSetorSelecionado(setor);
    console.log("setor: " + setor.nome);
  };

  const cliqueFecharMembros = () => {
    setDialogMembros(false);
  };

  //variaveis e funções do dialog de membros

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
            Meus Setores
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
            {cartoesNoDisplay.map((setor) => (
              <CardSetor
                key={setor.codigo}
                setor={setor}
                cliqueEditar={cliqueAbrir}
                cliqueMembros={() => cliqueAbrirMembros(setor)}
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
      <FormSetorDialog dialog={dialogSetor} cliqueFechar={cliqueFechar} />
      <FormMembroSetorDialog
        dialog={dialogMembros}
        cliqueFechar={cliqueFecharMembros}
        setor={setorSelecionado}
      />
    </>
  );
}
