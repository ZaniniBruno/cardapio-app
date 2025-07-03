import React from "react";


function DetalhesPrato(){

    return(
        <div className="detalhes-prato">
      <div className="detalhes-prato-card">
        <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <img src="../assets/prato1.jpg" alt="" />
          <div style={{marginLeft: "1rem"}}>
            <h1>Feijoada</h1> 
            <p><strong>Cozinha</strong>Brasileira</p>
            <p><strong>Valor</strong> R$28,00</p>
          </div>
        </div> 
        <p><strong>Descrição da sua experiencia Gastronômica</strong> Sinta o sabor com pedaços suculentos de carne suina e aquele sabor brasileiro incomparável.</p>
        <button onClick={() => {}}>Voltar</button>   
      </div>
    </div>
    );
}
export default DetalhesPrato;