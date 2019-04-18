import merge from 'lodash/merge';
import { GET_NEW_ACTIVE_TARGET } from '../utils/constants';
import { spliceRandomly } from '../utils/functionUtils';

const targets = (state = {}, action) => {
    switch (action.type) {
        case GET_NEW_ACTIVE_TARGET:
            let remainingColors = state.remainingColors.slice(0);
            let activeColor = spliceRandomly(remainingColors);
            let remainingCoords = state.remainingCoords.slice(0);
            let activeCoords = spliceRandomly(remainingCoords);
            return merge({}, state, { remainingColors, activeColor, remainingCoords, activeCoords });
        default:
            return state;
    }
};

export default targets;