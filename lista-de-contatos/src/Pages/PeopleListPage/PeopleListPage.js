
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
import styles from './styles.js'

const PeopleListPage = props => {

    return (
        <View style={styles.container}>
            <PeopleList navigation={ props.navigation}  />
        </View>
    );
};


export default PeopleListPage;

