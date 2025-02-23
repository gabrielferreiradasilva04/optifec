import { AccountCircle, Lock, Login } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function FormLogin() {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          padding: "16px",
        }}
        elevation={10}
      >
        <Box>
          <img
            style={{ width: "80px" }}
            src="/public/simples-sem-fundo.png"
            alt="LogoOtifec"
          />
        </Box>
        <Typography component="h1" variant="h4">
          Bem vindo!
        </Typography>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
          component="form"
          noValidate
          onSubmit={null}
        >
          <TextField
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              },
            }}
            fullWidth
            label="E-mail"
            placeholder="fulano@dominio.com"
          ></TextField>
          <TextField
            type="password"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Lock />
                  </InputAdornment>
                ),
              },
            }}
            fullWidth
            placeholder="********"
            label="Senha"
          ></TextField>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Lembre de mim"
              ></FormControlLabel>
            </FormGroup>
          </Box>
            <Button variant="contained" fullWidth>
              <Login />
            </Button>
            <Link variant="button" href="#" underline="always">
              Não possuo uma conta
            </Link>
        </Box>
      </Card>
    </>
  );
}
