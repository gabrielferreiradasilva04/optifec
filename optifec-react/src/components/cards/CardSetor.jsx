import { Delete, Edit, Group } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  Divider,
  Grid2,
  Tooltip,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

export default function CardSetor({ setor, cliqueEditar, cliqueMembros }) {
  return (
    <>
      <Grid2 size={{ xs: 6, sm: 4, md: 4 }}>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "tween", restDelta: 1 }}
        >
          <Card
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              minHeight: "250px",
              maxHeight: "250px",
              borderRadius: "15px",
            }}
            variant="outlined"
          >
            <Box
              sx={{
                textAlign: "start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography component="h1" variant="h6">
                Nome: {setor.nome}
              </Typography>
              <Typography component="h1" variant="body1">
                Local: {setor.codigo}
              </Typography>
              <Typography component="h1" variant="body1">
                Responsável: {setor.codigo}
              </Typography>
            </Box>
            <Box>
              <Typography component="h1" variant="body1">
                descrição: {setor.descricao}
              </Typography>
            </Box>
            <Divider />
            <CardActions sx={{ justifyContent: "end" }}>
              <Tooltip title="Editar">
                <Button onClick={cliqueEditar} size="small" variant="contained">
                  <Edit />
                </Button>
              </Tooltip>
              <Tooltip title="Excluir">
                <Button size="small" variant="contained">
                  <Delete />
                </Button>
              </Tooltip>
              <Tooltip title="Membros">
                <Button size="small" variant="contained" onClick={cliqueMembros}>
                  <Group />
                </Button>
              </Tooltip>
            </CardActions>
          </Card>
        </motion.div>
      </Grid2>
    </>
  );
}
