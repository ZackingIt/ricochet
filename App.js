import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import undoable from 'redux-undo';

import rootReducer from './reducers';
import Navigator from './components/Navigator';
import { initialState } from './utils/functionUtils';

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