import {Link} from "react-router-dom";

export default function Cabecalho(){
    return(
        <>
            <header>
                <h1>Vite+React coded by - rm551417</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/Editar/produtos/1">Editar Produtos - 1</Link></li>
                        <li><Link to="/Editar/produtos/2">Editar Produtos - 2</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}