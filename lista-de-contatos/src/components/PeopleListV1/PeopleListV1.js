import React, {Component} from 'react';
import { View, Text } from "react-native";
import styles  from "./styles";
import axios from 'axios'

class PeopleListV1 extends Component {

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
                        <Text style={styles.texto}
                              key={item.email}>
                            {`${
                                item.name.title
                            } ${
                                item.name.first
                            } ${
                                item.name.last
                            }`}
                        </Text>)
                }
            </View>
        );
    }
}


export default PeopleListV1;