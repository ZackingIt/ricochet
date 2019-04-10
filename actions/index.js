import { NEW_GAME, RESUME_GAME, MOVE, SELECT_PIECE, FIND_SOLUTION } from '../utils/constants';

export const newGame = {
    type: NEW_GAME
};

export const resumeGame = {
    type: RESUME_GAME
};

export const move = (direction, id) => ({
    type: MOVE,
    direction,
    id
});

export const selectPiece = (id) => ({
    type: SELECT_PIECE,
    id
});

export const findSolution = () => ({
    type: FIND_SOLUTION
});
