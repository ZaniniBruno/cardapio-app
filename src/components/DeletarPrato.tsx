import { useParams } from "react-router-dom";

function DeletarPrato() {
  const { nome } = useParams();
  return <h1>Deletando o prato: {nome}</h1>;
}

export default DeletarPrato;



