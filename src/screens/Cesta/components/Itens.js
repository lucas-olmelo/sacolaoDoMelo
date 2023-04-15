import React from "react";
import Texto from "../../../components/Texto";
import { Image, View, StyleSheet } from "react-native";

export default function Itens({title, list}) {
    return <>
        <View style={styles.items}>
            <Texto style={styles.title}>{title}</Texto>
            {/*Exibe os itens da lista com o MAP do JS*/}
            {list.map(({name, image}) => {
                return <View key={name} style={styles.item}>
                            <Image source={image}></Image>
                            <Texto style={styles.name}>{name}</Texto>
                </View>
            })}
        </View>
    </>
}

const styles = StyleSheet.create({
    items: {
        paddingHorizontal: 16
    },
    title: {
        color: '#464646',
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 32,
        marginTop: 32,
        marginBottom: 8
    },
    name: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 11,
    },
    item: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ECECEC',
        paddingVertical: 16,
        alignItems: 'center'
    }
});