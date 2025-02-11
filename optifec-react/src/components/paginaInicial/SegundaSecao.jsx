import { Grid2 } from "@mui/material";
import * as React from "react";
import CustomImageCard from "../basicComponents/CustomImageCard";

export default function SegundaSecao() {
  return (
    <>
      <Grid2
        container
        spacing={{ xs: 2, md: 2 }}
        size={{ xs: 2, sm: 2, md: 2 }}
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "center" },
          width: "100%",
          height: "auto",
        }}
      >
        <CustomImageCard
          caminhoImagem="public/images/gestao.jpg"
          titulo="Importância da Gestão"
          conteudo="Essencial para organizar recursos, otimizar processos e garantir eficiência, impulsionando crescimento e inovação."
        />
        <CustomImageCard
          caminhoImagem="public/images/ti.jpg"
          titulo="Importância da T.I"
          conteudo="Alinha tecnologia e negócios, garantindo segurança, eficiência e inovação para competitividade e crescimento."
        />
        <CustomImageCard
          caminhoImagem="public/images/integracao.jpg"
          titulo="Importância da Integração"
          conteudo="A integração é crucial para otimizar processos, melhorar a comunicação entre sistemas e garantir eficiência operacional. Ela permite a troca de informações de forma fluida, resultando em tomadas de decisão mais rápidas e precisas."
        />
        <CustomImageCard
          caminhoImagem="public/images/projetos.jpg"
          titulo="Importância da Gestão de Projetos"
          conteudo="A gestão de projetos é essencial para garantir o cumprimento de prazos, orçamento e qualidade, coordenando equipes e recursos de maneira eficiente. Ela permite o planejamento, execução e controle de atividades para alcançar objetivos específicos dentro de um escopo definido."
        />
      </Grid2>
    </>
  );
}
