import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../components/Texto.js";
import topo from "../../../../assets/topo.png";

export default function Topo() {
    return <>
        <Image source={topo} style={styles.topo}/>
        <Texto style={styles.title}>Detalhes da cesta</Texto>
    </>
}

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: 578 / 768 * screenWidth
    },
    title: {
        position: 'absolute',
        textAlign: 'center',
        width: screenWidth,
        color: 'purple',
        fontSize: 20,
        padding: 6,
        fontWeight: 'bold'
    }
});