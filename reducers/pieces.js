import { MOVE, SELECT_PIECE } from '../utils/constants';
import merge from 'lodash/merge';

const pieces = (state = {}, action) => {
    switch (action.type) {
        case MOVE:
            // need to return old state as well
            // need to plan out board state
            return state;
        case SELECT_PIECE:
            // need to return old state as wells
            // need to plan out board state
            
            return merge({}, state, { selectedPiece: action.pieceColor });
        default:
            return state;
    }
};

export default pieces;