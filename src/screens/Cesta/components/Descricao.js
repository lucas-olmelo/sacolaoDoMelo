import React from "react";
import { Image, View, StyleSheet } from "react-native";
import Texto from "../../../components/Texto.js";
import icon from "../../../../assets/icon.png"

export default function Descricao({
    name, sacolaoLogo, sacolaoName, description, price
}) {
    return <>
        <View style={styles.cesta}>
            <Texto style={styles.productName}>{name}</Texto>
            <View style={styles.sacolao}>
                <Image source={sacolaoLogo} style={styles.storeIcon}/>
                <Texto style={styles.storeName}>{sacolaoName}</Texto>
            </View>
            <Texto style={styles.description}>{description}</Texto>
            <Texto style={styles.price}>{price}</Texto>
        </View>
    </>
}

const styles = StyleSheet.create({
    cesta: {
        padding: 16,
    },
    productName: {
        fontSize: 30,
        color: '#464646',
        lineHeight: 42,
        fontWeight: 'bold',
    },
    sacolao: {
        flexDirection: 'row',
        marginVertical: 10
    },
    storeName: {
        fontSize: 18,
        lineHeight: 26,
        marginTop: 7,
        fontWeight: 'bold'
    },
    storeIcon: {
        width: 40,
        height: 40,
        marginRight: 12
    },
    description: {
        color: '#A3A3A3',
        fontSize: 18,
        lineHeight: 26,
    },
    price: {
        color: '#2A9F85',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
        fontWeight: 'bold'
    }
});
