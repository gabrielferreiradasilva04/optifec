import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Grid2 as Grid, Paper, Stack } from "@mui/material";
import CustomMediumButton from "../defaultComponents/CustomMediumButton";
import CustomTextField from "../defaultComponents/CustomTextField";
import { useSelector } from "react-redux";

export default function FormCliente({clienteSelecionado}) {
  const [dadosFormulario, setDadosFormulario] = useState(clienteSelecionado || {});

  //Quando o cliente selecioando for alterado o useEffect é chamado atualizando o dadosFormulario para o novo valor de clienteSelecionado
  useEffect(()=>{
    setDadosFormulario(clienteSelecionado || {})
  },[clienteSelecionado]);

  //atualizar dados quando editar o formulário do cliente
  const handleEdicaoFormulario = (e) =>{
    const{name, value} = e.target;
    setDadosFormulario((prev) => ({...prev, [name]: value}))
  }

  //limpar os dados do formulário
  const limparFormulario = () =>{
    setDadosFormulario("");
  }

  //salvar cliente
  const salvarFormulario =(e)=>{
    e.preventDefault();
    dadosFormulario? console.log(dadosFormulario): console.log("Sem dados");
  }

  //buscar clientes do store
  const clientes = useSelector((state) => state.clienteStore.clientes);

  return (
    <>
      <Paper sx={{ padding: "16px" }} elevation={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <h3>Formulário Cliente</h3>
        </Box>
        <Box
          component="form"
          onSubmit={salvarFormulario}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            columnCount: "2",
            width: "100%",
            gap: 2,
          }}
        >
          <Grid
            container
            spacing={{ xs: 2, md: 2 }}
            columns={{ xs: 2, sm: 8, md: 8 }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              size={{ xs: 2, sm: 4, md: 4 }}
            >
              <CustomTextField disabled={true} onChange={handleEdicaoFormulario} type="number" name="id" value={dadosFormulario.id || ""} label="Código do Cliente"></CustomTextField>
              <CustomTextField required={true} type="text" onChange={handleEdicaoFormulario} name="representante" value={dadosFormulario.representante || ""} label="Representante Responsável"></CustomTextField>
            </Grid>
            <Grid
              container
              spacing={{ xs: 2, md: 2 }}
              size={{ xs: 2, sm: 4, md: 4 }}
            >
              <CustomTextField required={true} type="text" onChange={handleEdicaoFormulario} name="nome" value={dadosFormulario.nome || ""} label="Nome do Cliente"></CustomTextField>
              <CustomTextField required={true}  type="text" onChange={handleEdicaoFormulario} name="codigoFecial" value={dadosFormulario.codigoFecial || ""} label="Codigo Fecial"></CustomTextField>
            </Grid>
          </Grid>
          <Stack
            sx={{
              paddingTop: "16px",
              paddingBottom: "16px",
              display: "-ms-flexbox",
              flexDirection: { mx: "row", sm: "column", md: "row" },
              justifyContent: "end",
              gap: "6px",
            }}
          >
            <CustomMediumButton type="submit" color="primary">Salvar</CustomMediumButton>
            <CustomMediumButton onClick={limparFormulario} color="warning">Limpar</CustomMediumButton>
            <CustomMediumButton color="error">Excluir</CustomMediumButton>

          </Stack>
        </Box>
      </Paper>
    </>
  );
}
