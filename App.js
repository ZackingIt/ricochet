import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <Text>Ricochet Robots</Text>
      </View>
    );
  }
}