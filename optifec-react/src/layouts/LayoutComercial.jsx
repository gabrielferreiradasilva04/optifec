import React from "react";
import MenuLateral from "../components/MenuLateral";
import { Outlet } from "react-router-dom";

export default function LayoutComercial() {
  return (
    <>
      <MenuLateral titulo={"Optifec - Analista Comercial"} />
      <Outlet />
    </>
  );
}
