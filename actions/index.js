import { NEW_GAME, RESUME_GAME, MOVE, SELECT_PIECE, FIND_SOLUTION } from '../utils/constants';

export const newGame = {
    type: NEW_GAME
};

export const resumeGame = {
    type: RESUME_GAME
};

export const move = (direction, pieceColor) => ({
    type: MOVE,
    direction,
    pieceColor
});

export const selectPiece = (pieceColor) => ({
    type: SELECT_PIECE,
    pieceColor
});

export const findSolution = () => ({
    type: FIND_SOLUTION
});
