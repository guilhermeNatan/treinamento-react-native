import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeopleListPage from "./src/Pages/PeopleListPage/PeopleListPage";
import PeopleDetailPage from "./src/Pages/PeopleDetailPage/PeopleDetailPage";

const stackNavigator =  createStackNavigator ({
    Home: {
        screen: PeopleListPage,
    },
    peopleDetail: {
        screen: PeopleDetailPage,
        navigationOptions: ({navigation})=> {
            return ( {
               title: navigation.state.params.people.name.first,
           })
        }
    }
}, {
    defaultNavigationOptions : {
        title: 'Pessoas',
        headerTintColor: 'white',
        headerStyle: {
            backgroundColor: "#7559ff",
            borderBottomWidth: 1,
            borderBottomColor: 'blue',
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: 30,
        },
    }
})

const appContainer = createAppContainer(stackNavigator)

export default appContainer;