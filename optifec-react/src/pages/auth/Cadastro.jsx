import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import FormCadastro from "../../components/forms/FormCadastro";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", marginBottom: "30px" }}>
          <Box sx={{ flex: 1 }}>
            <img
              style={{ width: "50px" }}
              src="/public/simples-sem-fundo.png"
              alt="LogoOtifec"
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <Typography display={{ md: "block", xs: "none", sm: "none" }}>
              Já possui uma conta?
            </Typography>
            <Button
              onClick={() => navigate("/login")}
              color="secondary"
              variant="outlined"
              sx={{ borderRadius: "10px" }}
            >
              Entrar
            </Button>
          </Box>
        </Box>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <FormCadastro />
        </Container>
      </Box>
    </>
  );
}
