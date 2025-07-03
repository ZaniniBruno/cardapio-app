import React from "react";
import adicionarPrato from "../assets/prato1.jpg";
import { Link, redirect } from "react-router-dom";
import "../estilos/CardNovoPrato.css";

const CardNovoPrato = ()=> {
  const irParaCadastrarPrato = () => {
    redirect("/cadastro-prato");
  };
  return (
    <Link to="/cadastro-prato" className="link-card">
      <div className="prato-card">
        <img src={adicionarPrato} alt="imagem do prato" />
        <h2>Clique aqui para adicionar um novo prato</h2>
      </div>   
    </Link>
  );  
};

export default CardNovoPrato;