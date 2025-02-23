import React from 'react'
import BarraNavegacao from '../components/BarraNavegacao'
import { Box, Divider } from '@mui/material'
import {motion } from 'framer-motion'
import { Outlet } from 'react-router-dom'
import RodapeAplicacao from '../components/rodapeAplicacao/RodapeAplicacao'

export default function LayoutInicial() {
  return (
    <>
    <BarraNavegacao mostrarBotaoEntrar={true} mostrarIconeDrawer={false} />
    <Box
      sx={{
        borderRadius: "8px",
        padding: "16px",
        margin: "16px",
        marginTop: "80px",
      }}
    >
        <motion.div
          key={location.pathname} 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.2 }}
        >
          <Outlet />
        </motion.div>
      
    </Box>
    <Divider />
    <RodapeAplicacao />
  </>
  )
}
