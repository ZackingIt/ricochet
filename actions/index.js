import { NEW_GAME, RESUME_GAME, MOVE, SELECT_PIECE, FIND_SOLUTION, GET_NEW_ACTIVE_TARGET } from '../utils/constants';

export const newGame = {
    type: NEW_GAME
};

export const resumeGame = {
    type: RESUME_GAME
};

export const move = (direction) => ({
    type: MOVE,
    direction
});

export const selectPiece = (pieceColor) => ({
    type: SELECT_PIECE,
    pieceColor
});

export const findSolution = () => ({
    type: FIND_SOLUTION
});

export const getNewActiveTarget = {
    type: GET_NEW_ACTIVE_TARGET
};