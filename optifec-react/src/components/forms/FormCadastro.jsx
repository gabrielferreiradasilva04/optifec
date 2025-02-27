import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function FormCadastro() {
  const [cadastroEmpresa, setCadastroEmpresa] = useState(false);

  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignSelf: "center",
          gap: "15px",
          padding: "30px",
          width: "100%",
          maxWidth: "500px",
          borderRadius: "20px",
        }}
        elevation={12}
      >
        <Typography
          sx={{ fontWeight: "bold", textAlign: "center" }}
          component="h1"
          variant="h4"
        >
          É bom ter você conosco!
        </Typography>
        <Box>
          <FormControlLabel
            sx={{ display: "flex", justifyContent: "flex-start" }}
            label="Cadastrar-se como empresa"
            control={
              <Switch
                checked={cadastroEmpresa}
                onChange={() => setCadastroEmpresa(!cadastroEmpresa)}
                name="toggleCadEmpresa"
                color="primary"
              />
            }
          />
        </Box>
        <Divider />
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "10px" }}
          component="form"
          noValidate
          onSubmit={null}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <TextField
              id="cad-primeiro-nome"
              fullWidth
              size="small"
              label="Primeiro nome"
            ></TextField>

            <TextField
              id="cad-ultimo-nome"
              fullWidth
              size="small"
              label="Último nome"
            ></TextField>

            <TextField
              id="cad-email"
              fullWidth
              size="small"
              label="E-mail"
              type="email"
            ></TextField>

            <TextField
              id="cad-telefone"
              fullWidth
              size="small"
              label="Telefone"
              type="text"
            ></TextField>

            {cadastroEmpresa && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "tween", restDelta: 0.5 }}
              >
                <TextField
                  id="cad-cnpj"
                  fullWidth
                  size="small"
                  label="CNPJ"
                  type="text"
                ></TextField>
              </motion.div>
            )}
            <TextField
              id="cad-senha"
              fullWidth
              size="small"
              label="Senha"
              type="password"
            ></TextField>
            <TextField
              id="cad-repsenha"
              fullWidth
              size="small"
              label="Confirmar senha"
              type="password"
            ></TextField>
            <Box>
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label="Eu concordo com os"
                ></FormControlLabel>
                <Link>termos e condições</Link>
              </FormGroup>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Quero receber e-mails com atualizações"
                ></FormControlLabel>
              </FormGroup>
            </Box>
            <Divider />
            <Box sx={{ display: "block", justifyContent: "center" }}>
              <Button sx={{borderRadius:"10px"}} size="large" fullWidth variant="contained">
                Confirmar Cadastro
              </Button>
            </Box>
          </Box>
        </Box>
      </Card>
    </>
  );
}
