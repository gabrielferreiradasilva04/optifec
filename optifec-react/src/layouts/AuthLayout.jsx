import React from "react";
import BarraNavegacao from "../components/BarraNavegacao";
import { Box, Divider } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import RodapeAplicacao from "../components/rodapeAplicacao/RodapeAplicacao";
import { motion } from "framer-motion";

export default function AuthLayout() {
  const location = useLocation();
  return (
    <>
      <Box
        sx={{
          borderRadius: "8px",
          padding: "16px",
          margin: "16px",
        }}
      >
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', restDelta: 0.5 }}
          >
            <Outlet />
          </motion.div>
        
      </Box>
      <Divider />
      <RodapeAplicacao />
    </>
  );
}
