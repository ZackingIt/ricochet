import { NEW_GAME, RESUME_GAME } from '../utils/constants';

const board = (state = {}, action) => {
    switch (action.type) {
        case NEW_GAME:
            return state;
        case RESUME_GAME:
            return state;
        default:
            return state;
    }
};

export default board;