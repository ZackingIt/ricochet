import { MOVE, SELECT_PIECE, NORTH, SOUTH, EAST, WEST, BLUE, RED, GREEN, YELLOW, GET_NEW_ACTIVE_TARGET } from '../utils/constants';
import { movePiece, spliceRandomly } from '../utils/functionUtils';
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
        case GET_NEW_ACTIVE_TARGET:
            let remainingColors = state.pieces.remainingColors.slice(0);
            let activeTargetColor = spliceRandomly(remainingColors);
            let remainingTargets = state.pieces.remainingTargets.slice(0);
            let activeTargetCoords = spliceRandomly(remainingTargets);
            return merge({}, state, { pieces: { remainingColors, activeTargetColor, remainingTargets, activeTargetCoords } });
        default:
            return state;
    }
};

export default game;