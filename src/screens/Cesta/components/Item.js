import React from "react";
import Texto from "../../../components/Texto";
import { Image, View, StyleSheet } from "react-native";

export default function Item({item: {name, image}}) {
    return <View key={name} style={styles.item}>
        <Image source={image}/>
        <Texto style={styles.name}>{name}</Texto>
    </View>
}

const styles = StyleSheet.create({
    name: {
        fontSize: 16,
        lineHeight: 32,
        marginLeft: 11,
    },
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        padding: 16,
        alignItems: "center",
    },
})
