import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#5464ff",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20
    },
    title: {
        fontSize: 50,
        color: '#fff'
    }
});


export default Header;

