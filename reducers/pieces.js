import { MOVE, SELECT_PIECE, NORTH, SOUTH, EAST, WEST } from '../utils/constants';
import { movePiece } from '../utils/functionUtils';
import merge from 'lodash/merge';

const pieces = (state = {}, action) => {
    switch (action.type) {
        case MOVE:
            // need to return old state as well
            // need to plan out board state
            console.log('PIECES STATE @@@@', state);
            let selectedPiece = state.selectedPiece;
            let newLoc = movePiece(state[selectedPiece], action.direction);

            return merge({}, state, { [selectedPiece]: newLoc } );
        case SELECT_PIECE:
            // need to return old state as wells
            // need to plan out board state
            
            return merge({}, state, { selectedPiece: action.pieceColor });
        default:
            return state;
    }
};

export default pieces;