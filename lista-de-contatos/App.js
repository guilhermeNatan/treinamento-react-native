import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PeopleListPage from "./src/Pages/PeopleListPage/PeopleListPage";
import PeopleDetailPage from "./src/Pages/PeopleDetailPage/PeopleDetailPage";
import { colors, fonts } from './src/layout'

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
        headerTintColor: colors.textSecondary,
        headerStyle: {
            backgroundColor: colors.primary,
            borderBottomWidth: 1,
            borderBottomColor: colors.secondary,
        },
        headerTitleStyle: {
            color: 'white',
            fontSize: fonts.big,
        },
    }
})

const appContainer = createAppContainer(stackNavigator)

export default appContainer;