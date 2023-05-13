import React from "react";
import { Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

import logo from '../../assets/logo.png';
import Texto from '../components/Texto';
import imgSacolao from '../../assets/imagem_sacolao.jpg'

const width = Dimensions.get('screen').width;

export default function Sacolao(){
    return <ScrollView style={styles.sacolao}>
        <Image source={logo} style={styles.logo}/>
        <Texto style={styles.textSacolao}>
            O Sacolão da Rosa está no mercado de frutas, verduras e legumes desde 2000 e trás sempre os melhores produtos direto dos produtores.
        </Texto>
        <Texto style={styles.textSacolao}>
            Estamos localizados em São Caetano do Sul, na rua Boa Vista, nº 123.
        </Texto>
        <Image source={imgSacolao} style={styles.imgSacolao}/>
    </ScrollView>;
}

const styles = StyleSheet.create({
    logo: {
        alignSelf: "center",
        marginBottom: 20,
        borderRadius: 4,
    },
    imgSacolao: {
        width: "100%",
        height: 1024/680 * width,
    },
    sacolao: {
        backgroundColor: "pink",
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    textSacolao: {
        fontSize: 16,
        lineHeight: 26,
        marginBottom: 10,
    }
})