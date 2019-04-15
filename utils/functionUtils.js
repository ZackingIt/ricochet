import { NORTH, SOUTH, EAST, WEST } from './constants';

export const transformBoard = function (board, boardFn) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            board[x][y] = boardFn(board[x][y]);
        }
    }
    return board;
};

export const assignProperty = function (board) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            board[x][y].x = x;
            board[x][y].y = y;
        }
    }
    return board;
};

export const sameCoords = function (firstCoordTuple, secondCoordTuple) {
    return firstCoordTuple[0] === secondCoordTuple[0] && firstCoordTuple[1] === secondCoordTuple[1];
};

export const spliceRandomly = function(array) {
    return array.splice(Math.floor(Math.random()*(array.length-1)), 1)[0];
};

export const movePiece = function(currentLoc, direction, board) {
    return [0, 0];
    // switch (direction) {
    //     case NORTH:
        
    // }
};
