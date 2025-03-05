import { Route, Routes, BrowserRouter } from "react-router-dom";
//páginas do comercial
import Cliente from "../pages/instituicao/Cliente";
import Login from "../pages/auth/Login";
import MenuPrincipal from "../pages/instituicao/MenuPrincipal";
import Projeto from "../pages/instituicao/Projeto";
import Protocolo from "../pages/instituicao/Protocolo";
import LayoutEmpresa from "../layouts/LayoutEmpresa";
import Index from "../pages/instituicao/Index";
import AuthLayout from "../layouts/AuthLayout";
import LayoutInicial from "../layouts/LayoutInicial";
import Setor from "../pages/instituicao/Setor"
import Representante from "../pages/instituicao/Representante"
import Cadastro from "../pages/auth/Cadastro";
export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutEmpresa />}>
          <Route path="menu-principal" element={<MenuPrincipal />}></Route>
          <Route path="cliente" element={<Cliente />}></Route>
          <Route path="projeto" element={<Projeto />}></Route>
          <Route path="protocolo" element={<Protocolo />}></Route>
          <Route path="setor" element={<Setor />}></Route>
          <Route path="representante" element={<Representante />}></Route>
        </Route>
        <Route path="/" element={<AuthLayout />}>
          {/* rotas de login */}
          <Route path="login" element={<Login />} />
          {/* rotas de cadastro */}
          <Route path="cadastro" element={<Cadastro />} />
        </Route>
        <Route path="/" element={<LayoutInicial />}>
          <Route path="pagina-inicial" element={<Index/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
