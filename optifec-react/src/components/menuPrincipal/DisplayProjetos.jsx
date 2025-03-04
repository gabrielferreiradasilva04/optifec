import { Box, Card, CardContent, Divider, Grid2 } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";

export default function DisplayProjetos() {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "16px",
          gap: "10px",
          borderRadius: "15px",
        }}
      >
        <Typography fontWeight="bold" component="h1" variant="h6">
          Projetos
        </Typography>
        <Divider />
        <Box>
          <Grid2
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid2 size={{ xs: 6, sm: 4, md: 4 }}>
              <Card
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#a5d6a7",
                  borderRadius: "15px",
                }}
              >
                <Typography fontWeight="bold" component="h1" variant="body1">
                  Conluídos
                </Typography>
                <Divider />
                <CardContent>
                  <Typography fontWeight="bold" component="h1" variant="h3">
                    20
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 4 }}>
              <Card
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                  backgroundColor: "#ffcc80",
                }}
              >
                <Typography fontWeight="bold" component="h1" variant="body2">
                  Pendentes
                </Typography>
                <Divider />
                <CardContent>
                  <Typography
                    fontWeight="bold"
                    component="h1"
                    variant="h3"
                  >
                    20
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
            <Grid2 size={{ xs: 6, sm: 4, md: 4 }}>
              <Card
                sx={{
                  padding: "16px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                  backgroundColor: "#ffab91",
                }}
              >
                <Typography fontWeight="bold" component="h1" variant="body2">
                  Cancelados
                </Typography>
                <Divider />
                <CardContent>
                  <Typography
                    fontWeight="bold"
                    component="h1"
                    variant="h3"
                  >
                    20
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          </Grid2>
        </Box>
      </Card>
    </>
  );
}
