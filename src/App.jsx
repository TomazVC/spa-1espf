import Cabecalho from "./components/cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";

export default function App(){
  return(
    <>
      <h1>APP - Componente principal!</h1>
      <div>

        {/* Iniciando a área do cabeçalho */}

        <Cabecalho/>

        {/* Iniciando a área de conteúdo */}

        <Conteudo/>

        {/* Iniciando a área do rodapé */}

        <Rodape/>

      </div>
    </>
  )
}