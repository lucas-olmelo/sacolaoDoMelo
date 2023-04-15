import React from "react";
import Topo from "./components/Topo";
import Descricao from "./components/Descricao";
import Itens from "./components/Itens";
import { ScrollView } from "react-native";

export default function Cesta ({topo, detalhes, itens}) {
    return <ScrollView>
        <Topo {...topo}/>
        <Descricao {...detalhes}/>
        <Itens {...itens}/>
    </ScrollView>
}
