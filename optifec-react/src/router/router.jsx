import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayoutComercial from "../layouts/LayoutComercial";
//páginas do comercial
import ComClientes from "../pages/ComClientes";
import ComMenuPrincipal from "../pages/ComMenuPrincipal";
import ComEstatisticas from "../pages/ComEstatisiticas";
import ComFolowUp from "../pages/ComFolowUp";
import ComOrcamentos from "../pages/ComOrcamentos";
import ComProjetos from "../pages/ComProjetos";
import ComTestes from "../pages/ComTestes";

//páginas da engenharia
import EngEstatisticas from "../pages/EngEstatisticas";
import EngMenuPrincipal from "../pages/EngMenuPrincipal";
import EngProtocolos from "../pages/EngProtocolos";
import EngTestes from "../pages/EngTestes";
import EngVerificacoes from "../pages/EngVerificacoes";
import LayoutEngenharia from "../layouts/LayoutEngenharia";
import EngProjetos from "../pages/EngProjetos";
export const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutComercial />}>
          <Route
            path="comercial-menu-principal"
            element={<ComMenuPrincipal />}
          ></Route>
          <Route path="comercial-clientes" element={<ComClientes />}></Route>
          <Route
            path="comercial-estatisticas"
            element={<ComEstatisticas />}
          ></Route>
          <Route path="comercial-folowUp" element={<ComFolowUp />}></Route>
          <Route
            path="comercial-orcamentos"
            element={<ComOrcamentos />}
          ></Route>
          <Route path="comercial-projetos" element={<ComProjetos />}></Route>
          <Route path="comercial-testes" element={<ComTestes />}></Route>
        </Route>

        <Route path="/" element={<LayoutEngenharia />}>
          <Route
            path="engenharia-menu-principal"
            element={<EngMenuPrincipal />}
          ></Route>
          <Route
            path="engenharia-estatisticas"
            element={<EngEstatisticas />}
          ></Route>
          <Route path="engenharia-projetos" element={<EngProjetos />}></Route>
          <Route
            path="engenharia-protocolos"
            element={<EngProtocolos />}
          ></Route>
          <Route path="engenharia-testes" element={<EngTestes />}></Route>
          <Route
            path="engenharia-verificacoes"
            element={<EngVerificacoes />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
