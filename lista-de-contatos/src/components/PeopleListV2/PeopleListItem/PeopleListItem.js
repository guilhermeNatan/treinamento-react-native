import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./styles";


const PeopleListItem = ({item}) => {
    return (
        <TouchableOpacity onPress={()=>console.log('clicou')}>
            <View style={styles.container}>
                <Image
                    style={styles.avatar}
                    source={{uri: item.picture.medium}}
                />
                <Text style={styles.lineText}>
                    {`${
                        item.name.title
                    } ${
                        item.name.first
                    } ${
                        item.name.last
                    }`}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


export default PeopleListItem;