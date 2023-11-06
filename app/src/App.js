import React, { useState } from "react";

import Componente1 from "./components/Componente1";
import Comp from "./components/Comp";

export default function App(){

    var nome = "JavaScript";
    var valor = 10;

    const [valorState, setValorState] = useState(0);

    function aumentar(){
        valor += 1;

        setValorState(valorState + 1);
    }

    //Ciclo de vida
    const [componente, setComponente] = useState(false);

    //exemplo react
    const [tarefa, setTarefa] = useState("");
    const [todas, setTodas] = useState([]);
    
    function incluir(){
        setTodas([...todas, tarefa]);
        setTarefa("");
    }

    return(
        <>
            <h1>App react!!!</h1>
            <p>Nome da linguagem: {nome}</p>
            <p>Valor: {valor}, valorState {valorState}</p>

            <button onClick={aumentar}>Aumentar</button>

            <Componente1 nome={nome} valor={valor} valorState={valorState} aumentar={aumentar}>
                <p>Este paragrafo foi passado de pai para filho!</p>
            </Componente1>


            <h1>Ciclo de vida</h1>
            {componente ? <Comp/> : null}
            <button onClick={() => setComponente(!componente)}>Mostrar/Esconder</button>

            <h1>Exemplo React</h1>
            <textarea name="tarefa" onChange={(e) => setTarefa(e.target.value)} value={tarefa}></textarea>
            <br/>
            <button onClick={incluir}>Incluir</button>

            <ul>
                {todas.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>


    )

}