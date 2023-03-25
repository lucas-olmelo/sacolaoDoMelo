import React from "react";
import Topo from "./components/Topo";
import Descricao from "./components/Descricao";

export default function Cesta ({topo, detalhes}) {
    return <>
        <Topo {...topo}/>
        <Descricao {...detalhes}/>
    </>
}
