import React from 'react';
import {  Text, View,Image, ScrollView } from 'react-native';
import styles from "./styles";
import Line from "../../components/Line/Line";
const PeopleDetailPage = props => {
    const { people } = props.navigation.state.params;
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{uri: people.picture.large}} style={styles.avatar} />
                <Line label={"Email"}  valor={people.email}/>
                <Line label={"Cidade"}  valor={people.location.city}/>
                <Line label={"Estado"}  valor={people.location.state}/>
                <Line label={"Telefone"}  valor={people.phone}/>

            </View>
        </ScrollView>
    );
};

PeopleDetailPage.propTypes = {

};

export default PeopleDetailPage;

