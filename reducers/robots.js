import { MOVE, SELECT_PIECE, BLUE, RED, GREEN, YELLOW } from '../utils/constants';
import { moveRobot } from '../utils/functionUtils';
import merge from 'lodash/merge';

const robots = (state = {}, action) => {
    switch (action.type) {
        case MOVE:
            let selectedPiece = state.selectedPiece;
            let pieceList = [state[BLUE], state[RED], state[GREEN], state[YELLOW]];
            let details = { currentLoc: state[selectedPiece], pieceList: pieceList };
            let newLoc = moveRobot(action.direction, details);
            return merge({}, state, { [selectedPiece]: newLoc });
        case SELECT_PIECE:
            return merge({}, state, { selectedPiece: action.pieceColor } );
        default:
            return state;
    }
};

export default robots;