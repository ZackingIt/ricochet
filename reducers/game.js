import { MOVE, SELECT_PIECE, NORTH, SOUTH, EAST, WEST } from '../utils/constants';
import { movePiece } from '../utils/functionUtils';
import merge from 'lodash/merge';

const game = (state = {}, action) => {
    switch (action.type) {
        case MOVE:
            let selectedPiece = state.pieces.selectedPiece;
            let newLoc = movePiece(state.pieces[selectedPiece], action.direction, state.board);
            return merge({}, state, { pieces: { [selectedPiece]: newLoc }});
        case SELECT_PIECE:
            return merge({}, state, { pieces: { selectedPiece: action.pieceColor }} );
        default:
            return state;
    }
};

export default game;