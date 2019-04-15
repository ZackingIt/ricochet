import { MOVE, SELECT_PIECE, NORTH, SOUTH, EAST, WEST, BLUE, RED, GREEN, YELLOW } from '../utils/constants';
import { movePiece } from '../utils/functionUtils';
import merge from 'lodash/merge';

const game = (state = {}, action) => {
    switch (action.type) {
        case MOVE:
            let selectedPiece = state.pieces.selectedPiece;
            let pieceList = [state.pieces[BLUE], state.pieces[RED], state.pieces[GREEN], state.pieces[YELLOW]];
            let details = { currentLoc: state.pieces[selectedPiece], pieceList: pieceList, board: state.board };
            let newLoc = movePiece(action.direction, details);
            return merge({}, state, { pieces: { [selectedPiece]: newLoc }});
        case SELECT_PIECE:
            return merge({}, state, { pieces: { selectedPiece: action.pieceColor }} );
        default:
            return state;
    }
};

export default game;