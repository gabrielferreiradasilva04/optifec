import { Route, Routes, BrowserRouter } from "react-router-dom";
//páginas do comercial
import Cliente from "../pages/Cliente"
import Estatistica from "../pages/Estatistica"
import Followup from "../pages/Followup"
import Login from "../pages/Login"
import MenuPrincipal from "../pages/MenuPrincipal"
import Orcamento from "../pages/Orcamento"
import Projeto from "../pages/Projeto"
import Protocolo from "../pages/Protocolo"
import Teste from "../pages/Teste"
import Verificacao from "../pages/Verificacao"
import DefaultLayout from "../layouts/DefaultLayout";
export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route
            path="menu-principal"
            element={<MenuPrincipal />}
          ></Route>
          <Route
            path="cliente"
            element={<Cliente />}
          ></Route>
          <Route
            path="estatistica"
            element={<Estatistica />}
          ></Route>
          <Route
            path="followup"
            element={<Followup />}
          ></Route>
          <Route
            path="login"
            element={<Login />}
          ></Route>
          <Route
            path="orcamento"
            element={<Orcamento />}
          ></Route>
          <Route
            path="projeto"
            element={<Projeto />}
          ></Route>
          <Route
            path="protocolo"
            element={<Protocolo />}
          ></Route>
          <Route
            path="teste"
            element={<Teste />}
          ></Route>
          <Route
            path="verificacao"
            element={<Verificacao />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
