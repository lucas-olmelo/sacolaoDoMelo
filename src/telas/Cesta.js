import React from "react";
import { Image, Text, View, StyleSheet, Dimensions } from "react-native";
import topo from "../../assets/topo.png";
import icon from "../../assets/icon.png"

export default function Cesta () {
    return <>
        <Image source={topo} style={styles.topo}/>
        <Text style={styles.title}>Detalhes da cesta</Text>
        <View style={styles.cesta}>
            <Text style={styles.productName}>Cesta de frutas</Text>
            <View style={styles.sacolao}>
                <Image source={icon} style={styles.storeIcon}/>
                <Text style={styles.storeName}>Sacolão da Rosa</Text>
            </View>
            <Text style={styles.description}>
                Uma cesta com produtos cuidadosamente selecionados da horta diretopara a sua cozinha
            </Text>
            <Text style={styles.price}>R$40,00</Text>
        </View>
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
        fontWeight: 'bold',
        textAlign: 'center',
        width: screenWidth,
        color: 'purple',
        fontSize: 20,
        padding: 10
    },
    cesta: {
        padding: 16
    },
    productName: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#464646',
        lineHeight: 42
    },
    sacolao: {
        flexDirection: 'row',
        marginVertical: 10
    },
    storeName: {
        fontSize: 18,
        lineHeight: 26,
        marginTop: 7
    },
    storeIcon: {
        width: 40,
        height: 40,
        marginRight: 12
    },
    description: {
        color: '#A3A3A3',
        fontSize: 18,
        lineHeight: 26
    },
    price: {
        color: '#2A9F85',
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 42,
        marginTop: 8
    }
});

