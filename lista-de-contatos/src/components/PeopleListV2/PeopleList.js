import React, {Component} from 'react';
import { View, Text } from "react-native";
import styles  from "./styles";
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
            .get('https://randomuser.me/api?nat=br&results=5')
            .then(({data }) =>this.setState({pessoas: data.results}));
    };

    render() {
        const { pessoas } = this.state;
        return (
            <View>
                {
                    pessoas.map((item) =>
                        <PeopleListItem key={item.email} item={item}/>)
                }
            </View>
        );
    }
}


export default PeopleList;