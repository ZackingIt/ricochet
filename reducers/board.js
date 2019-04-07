import { MOVE, SELECT_PIECE } from '../utils/constants';

const board = (state = {}, action) => {
    switch (action.type) {
        case MOVE:
        // need to return old state as well
        // need to plan out board state
            return state;
        default:
            return state;
    }
};

export default board;