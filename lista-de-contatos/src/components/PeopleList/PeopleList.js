import React, {Component} from 'react';
import { View, Text, FlatList } from "react-native";
import styles  from "./PeopleListStyles";
import axios from 'axios'
import PeopleListItem from "./PeopleListItem/PeopleListItem";

class PeopleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
          pessoas: []
        }
    }

    componentDidMount() {
        this.getDataFromServer();
    }

    getDataFromServer = () => {
        axios
            .get('https://randomuser.me/api?nat=br&results=30')
            .then(({data }) =>this.setState({pessoas: data.results}));
    };

    render() {
        const { pessoas } = this.state;
        const { navigation } = this.props;
        return (
            <View>
                {/*{*/}
                {/*    pessoas.map((item) =>*/}
                {/*        <PeopleListItem*/}
                {/*            key={item.email}*/}
                {/*            item={item}*/}
                {/*            onClick={()=> navigation.navigate('peopleDetail', {people: item})}/>)*/}
                {/*}*/}


                <FlatList
                    data={pessoas}
                    keyExtractor={(item) => item.login.uuid}
                    renderItem={({item}) => {
                        return (
                            <PeopleListItem
                                key={item.email}
                                item={item}
                                onClick={()=> navigation.navigate('peopleDetail', {people: item})}/>
                        )
                    }}
                />
            </View>
        );
    }
}


export default PeopleList;