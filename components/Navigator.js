import React from 'react';
import Landing from '../containers/Landing';
import { View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Navigator = createStackNavigator({
    Home: {
        screen: Landing
    }
});

export default createAppContainer(Navigator);