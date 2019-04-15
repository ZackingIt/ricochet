import { MOVE, SELECT_PIECE, NORTH, SOUTH, EAST, WEST } from '../utils/constants';
import { movePiece } from '../utils/functionUtils';
import merge from 'lodash/merge';

const game = (state = {}, action) => {
    switch (action.type) {
        case MOVE:
            // need to return old state as well
            // need to plan out board state
            console.log('PIECES STATE @@@@', state);
            let selectedPiece = state.pieces.selectedPiece;
            console.log('!!! selected piece is ', selectedPiece);

            let newLoc = movePiece(state.pieces[selectedPiece], action.direction, state.board);

            return merge({}, state, { pieces: { [selectedPiece]: newLoc }});
        case SELECT_PIECE:
            // need to return old state as wells
            // need to plan out board state
            
            return merge({}, state, { pieces: { selectedPiece: action.pieceColor }} );
        default:
            return state;
    }
};

export default game;