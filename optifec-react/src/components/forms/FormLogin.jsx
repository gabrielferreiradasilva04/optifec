import { AccountCircle, Lock, Login } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  Link,
  Stack,
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
          alignSelf: "center",
          gap: "30px",
          padding: "30px",
          width: "100%",
          maxWidth: "450px",
          borderRadius: "20px",
        }}
        elevation={12}
      >
        <Typography
          sx={{ fontWeight: "bold", textAlign:"center" }}
          component="h1"
          variant="h4"
        >
          Bem vindo de volta!
        </Typography>
        <Divider />
        <Box
          sx={{ display: "flex", flexDirection: "column", gap:"10px"}}
          component="form"
          noValidate
          onSubmit={null}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
              size="small"
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
              size="small"
            ></TextField>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", margin: "0" }}>
            <Link color="textPrimary" variant="body1" href="/cadastro" underline="always">
              Esqueci minha senha
            </Link>
          </Box>
          <Divider/>
          <Box>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox />}
                label="Lembre de mim"
              ></FormControlLabel>
            </FormGroup>
          </Box>
          <Stack sx={{ gap: "10px", display: "flex"}}>
            <Button sx={{borderRadius:"10px"}} size="large" variant="contained" fullWidth>
              Entrar
            </Button>
          </Stack>
        </Box>
      </Card>
    </>
  );
}
