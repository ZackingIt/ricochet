import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Text, View } from 'react-native';

import rootReducer from './reducers';
import Navigator from './components/Navigator';
import { generateDefaultBoard } from './utils/boardInitializers';

var initialState = { board: generateDefaultBoard() };

const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}