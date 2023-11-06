import React, { useEffect, useState } from "react"

export default function Comp(){

    const [valor, setValor] = useState(0);
    const [valor2, setValor2] = useState(0);

    useEffect(() => {
        console.log("Sempre que chamar eu vou!!!");
    });

    useEffect(() => {
        console.log("Somente quando o valor mudar!!!");
    }, [valor]);

    useEffect(() => {
        console.log("Somente quando criar o componente!!!");
    }, []);

    useEffect(() => {
        return () => {
            console.log("Sempre que remover o componente!!!");
        }
    }, []);

    return(
        <>
            <h1>Componente</h1>
            <p>Valor: {valor}</p>
            <p>Valor2: {valor2}</p>
            <button onClick={() => setValor(valor + 1)}>Aumentar</button>
            <button onClick={() => setValor2(valor2 + 1)}>Aumentar</button>
        </>
    )
}