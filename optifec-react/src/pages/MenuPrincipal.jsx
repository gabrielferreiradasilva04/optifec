import {
  Box,
  Grid2,
} from "@mui/material";
import React from "react";
import DisplayProjetos from "../components/menuPrincipal/DisplayProjetos";
import DisplayProtocolos from "../components/menuPrincipal/DisplayProtocolos";
import DisplayPrazos from "../components/menuPrincipal/DisplayPrazos";
import DisplayNovos from "../components/menuPrincipal/DisplayNovos";

export default function MenuPrincipal() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid2
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid2 size={{ xs: 6, sm: 4, md: 6 }}>
            <DisplayProjetos />
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 4, md: 6 }}>
            <DisplayProtocolos />
          </Grid2>

          <Grid2 size={{ xs: 6, sm: 4, md: 6 }}>
            <DisplayPrazos />
          </Grid2>
          <Grid2 size={{ xs: 6, sm: 4, md: 6 }}>
            <DisplayNovos />
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
}
