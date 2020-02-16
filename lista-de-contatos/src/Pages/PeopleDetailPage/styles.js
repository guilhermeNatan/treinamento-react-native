import {Image, StyleSheet} from "react-native";
import React from "react";

export default StyleSheet.create({
    container: {
      padding: 15
    },
    avatar:{
        aspectRatio: 1,
    },
    detailContainer: {
        flexDirection: 'row',
        marginTop: 10 ,
        backgroundColor: "#7dbeff"
    },
    text: {
        fontSize: 20,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
    },
    valor: {
        flex: 4
    }

})