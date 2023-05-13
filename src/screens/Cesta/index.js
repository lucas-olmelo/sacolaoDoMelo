import React from "react";
import Topo from "./components/Topo";
import Descricao from "./components/Descricao";
import Item from "./components/Item";
import Texto from "../../components/Texto";
import { FlatList, StyleSheet } from "react-native";

export default function Cesta({topo, detalhes, itens}) {
    return <>
        <FlatList
            data={itens.list}
            renderItem={Item}
            extractorKey={({ name }) => (name)}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <Descricao {...detalhes}/>
                    <Texto style={styles.title}>{itens.title}</Texto>
                </>
            }}
        />
    </>
}

const styles = StyleSheet.create({
    title: {
        color: "#464646",
        fontWeight: "bold",
        fontSize: 32,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8,
        paddingHorizontal:16,
    }
})
