import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import DetalhesPrato from "./components/DetalhesPrato";
import FormularioPrato from "./components/FormularioPrato";
import EditarPrato from "./components/EditarPrato";
import DeletarPrato from "./components/DeletarPrato";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detalhes-prato/:id" element={<DetalhesPrato />} />
        <Route path="/cadastro-prato" element={<FormularioPrato />} />
        <Route path="/editar-prato" element={<EditarPrato />} />
        <Route path="/deletar" element={<DeletarPrato />} />
        <Route path="/detalhes" element={<DetalhesPrato />} />
      </Routes>
    </Router>
  );
}

export default App;