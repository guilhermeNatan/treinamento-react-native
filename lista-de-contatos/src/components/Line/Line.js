import React from 'react';
import {Text, View} from "react-native";
import styles from "./LineStyles";

const Line = ({label = "", valor= ""}) => {
    return (
        <View style={ styles.detailContainer}>
            <Text style={[ styles.text, styles.label]}>{label}</Text>
            <Text style={[styles.text, styles.valor]} >{valor}</Text>
        </View>
    );
};

Line.propTypes = {

};

export default Line;