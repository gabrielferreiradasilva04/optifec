import { Card, CardContent, Typography } from "@mui/material";
import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
export default function CustomImageCard({ caminhoImagem, titulo, conteudo }) {
  return (
    <Card sx={{ maxWidth: 345, minHeight:400, maxHeight: 400}} elevation={12}>
        <CardMedia
          component="img"
          height="140"
          image={caminhoImagem}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titulo}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {conteudo}
          </Typography>
        </CardContent>
    </Card>
  );
}
