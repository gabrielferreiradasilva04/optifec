import React from "react";
import { Container, Typography, Link } from "@mui/material";
export default function RodapeAplicacao({ ...props }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Typography variant="body1">
        © {new Date().getFullYear()} Optifec. Todos os direitos reservados. Desenvolvido por Gabriel Silva
      </Typography>

      <Typography variant="body2">
        Entre em contato:{" "}
        <Link
          href="gabrielferreirasilva04@outlook.com"
          color="inherit"
          underline="hover"
        >
          gabrielferreirasilva04@outlook.com
        </Link>
      </Typography>
    </Container>
  );
}
