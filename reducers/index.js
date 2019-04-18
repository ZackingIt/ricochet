import { combineReducers } from 'redux';
import robots from './robots';
import targets from './targets';

export default combineReducers({
    robots,
    targets
});