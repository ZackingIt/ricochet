import React from 'react';
import Landing from '../containers/Landing';
import BoardContainer from '../containers/BoardContainer';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Navigator = createStackNavigator({
    Home: {
        screen: BoardContainer
    },
    Game: {
        screen: BoardContainer
    }
}, { initialRouteName: 'Home' });

export default createAppContainer(Navigator);