import { Box, Card, Chip, Divider } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import SubNovoProtocolo from "./SubNovoProtocolo";
import SubNovoProjeto from "./SubNovoProjeto";

export default function DisplayNovos() {
  const lista = [
    { id: 1, titulo: "Lançamento do Produto X", data: "2025-03-10" },
    { id: 2, titulo: "Reunião de Equipe", data: "2025-03-12" },
    { id: 3, titulo: "Entrega do Projeto Y", data: "2025-03-15" },
    { id: 4, titulo: "Treinamento de Segurança", data: "2025-03-18" },
    { id: 5, titulo: "Hackathon Tech", data: "2025-03-22" },
    { id: 6, titulo: "Conferência de Desenvolvedores", data: "2025-03-25" },
    { id: 7, titulo: "Lançamento da Versão 2.0", data: "2025-03-28" },
    { id: 8, titulo: "Feira de Inovação", data: "2025-04-02" },
    { id: 9, titulo: "Workshop de UX/UI", data: "2025-04-05" },
    { id: 10, titulo: "Evento de Networking", data: "2025-04-10" },
  ];
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          gap: "10px",
          borderRadius: "15px",
          height: "450px",
        }}
      >
        <Typography fontWeight="bold" component="h1" variant="h6">
          Novos
        </Typography>
        <Typography fontWeight="bold" component="h1" variant="body2">
          Aqui estão projetos e protocolos abertos recentemente
        </Typography>
        <Divider>
          <Chip label="Protocolos" />
        </Divider>
        <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
          {lista.map((protocolo) => (
            <SubNovoProtocolo key={protocolo.id} protocolo={protocolo} />
          ))}
        </Box>

        <Divider>
          <Chip label="Projetos" />
        </Divider>
        <Box sx={{ maxHeight: "400px", overflowY: "auto" }}>
          {lista.map((projeto) => (
            <SubNovoProjeto key={projeto.id} projeto={projeto} />
          ))}
        </Box>
      </Card>
    </>
  );
}
