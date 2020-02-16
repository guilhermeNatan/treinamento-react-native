
// <div id="root"> </div>
//
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from "../../components/Header/Header";
import PeopleList from "../../components/PeopleList/PeopleList";

const PeopleListPage = props => {

    return (
        <View style={styles.container}>
            <PeopleList navigation={ props.navigation}  />
        </View>
    );
};


export default PeopleListPage;


const styles = StyleSheet.create({
    conteiner : {
        backgroundColor: 'blue',
    }
});

