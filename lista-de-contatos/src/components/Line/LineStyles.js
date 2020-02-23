import {StyleSheet} from "react-native";
import React from "react";
import { colors, fonts} from '../../layout'
export default StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
        marginTop: 10 ,
        backgroundColor: colors.lightPrimary,
        padding: 2
    },
    text: {
        fontSize: fonts.regular,
    },
    label: {
        fontWeight: 'bold',
        flex: 1,
    },
    valor: {
        flex: 4
    }

})