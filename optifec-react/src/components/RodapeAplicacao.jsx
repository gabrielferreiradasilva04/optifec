import React from "react";
import { Container, Typography, Link, Box, useTheme } from "@mui/material";
export default function RodapeAplicacao({ ...props }) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Optifec. Todos os direitos reservados.
        Desenvolvido por Gabriel Silva
      </Typography>

      <Typography variant="bod2">
        Entre em contato:{" "}
        <Link
          href="gabrielferreirasilva04@outlook.com"
          color="inherit"
          underline="hover"
        >
          gabrielferreirasilva04@outlook.com
        </Link>
      </Typography>
    </Box>
  );
}
