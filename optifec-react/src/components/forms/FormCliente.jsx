import React from "react";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Grid2 as Grid } from "@mui/material";

export default function FormCliente() {
  return (
    <>
      <div>Form Cliente</div>
      <Box
        component="form"
        onSubmit={null}
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          columnCount: "2",
          width: "100%",
          gap: 2,
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 2 }}
          columns={{ xs: 4, sm: 8, md: 8 }}
        >
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <FormControl fullWidth>
              <TextField label="Nome"></TextField>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 2, sm: 4, md: 4 }}>
            <FormControl fullWidth>
              <TextField label="Nome"></TextField>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
