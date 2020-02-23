import React from 'react';
import {  ScrollView, View,Image, Button } from 'react-native';
import styles from "./styles";
import Line from "../../components/Line/Line";
import { connect } from 'react-redux';
import { favoritar,  desfavoritar} from '../../actions'
const PeopleDetailPage = props => {
    const { people } = props.navigation.state.params;
    const { favoritar } = props;

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image source={{uri: people.picture.large}} style={styles.avatar} />
                <Line label={"Email"}  valor={people.email}/>
                <Line label={"Cidade"}  valor={people.location.city}/>
                <Line label={"Estado"}  valor={people.location.state}/>
                <Line label={"Telefone"}  valor={people.phone}/>
                <Button
                    title="Press me"
                    onPress={() => favoritar(people) }
                />

            </View>
        </ScrollView>
    );
};

PeopleDetailPage.propTypes = {

};


const mapStateToProps = state => ({
    user: state.user,
});

const mapDispatchToProps = {
    favoritar,
    desfavoritar
};
export default connect(mapStateToProps, mapDispatchToProps)(PeopleDetailPage);
