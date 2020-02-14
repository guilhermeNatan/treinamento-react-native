import React from 'react';
import { View, Text } from "react-native";

const Lista = props => {
    return (
        <View>
            {[1,2,3].map(()=><Text> teste </Text>)}
        </View>
    );
};

Lista.propTypes = {

};

export default Lista;