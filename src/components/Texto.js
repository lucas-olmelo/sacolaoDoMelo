import React from "react";
import { Text , StyleSheet} from "react-native";

export default function Texto({ children, style }) {

    //Determina a estilização padrão
    let styleWeight = styles.texto;

    //Verifica se o texto é negrito ou não
    if (style?.fontWeight === 'bold') {
        styleWeight = styles.textoNegrito;
    }

    return <Text style={[style, styleWeight]}>{ children }</Text>;
}

const styles = StyleSheet.create({
    texto: {
        fontFamily: 'MontserratRegular'
    },
    textoNegrito: {
        fontFamily: 'MontserratBold'
    }
});
