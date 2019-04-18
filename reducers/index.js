import { combineReducers } from 'redux';
import robots from './robots';
import targets from './targets';
import undoable from 'redux-undo';

export default combineReducers({
    robots: undoable(robots),
    targets
});