import React from 'react';

export default function Componente1(props){

    return(
        <>
            <h1>Componente 1</h1>
            <p>O nome recebido do componente pai: {props.nome}</p>
            <p>O valor recebido do componente pai: {props.valor}</p>
            <p>O valorState recebido do componente pai: {props.valorState}</p>
            <button onClick={props.aumentar}>Aumentar</button>

            {props.children}
        </>
    )
}