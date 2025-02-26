import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import FormLogin from "../components/forms/FormLogin";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Box>
        <Box sx={{ display: "flex", marginBottom: "60px" }}>
          <Box sx={{flex: 1 }}>
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
            <Typography display={{md:"block", xs:"none", sm:"none"}} >Não possui uma conta?</Typography>
            <Button onClick={()=> navigate("/cadastro")} color="secondary"  variant="outlined" sx={{ borderRadius: "10px"}}>
              Cadastre-se
            </Button>
          </Box>
        </Box>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <FormLogin />
        </Container>
      </Box>
    </>
  );
}
