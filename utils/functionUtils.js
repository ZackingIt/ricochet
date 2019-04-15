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

const traverse = (direction, { currentLoc, pieceList, board }) => {
    let [x, y] = currentLoc;
    if (direction === NORTH) {
        while (!board[x][y].northWall && (y >= 1 && !board[x][y - 1].southWall) && !robotCollision([x, y - 1], pieceList)) {
            y -= 1;
        }
    } else if (direction === SOUTH) {
        while (!board[x][y].southWall && (y <= 15 && !board[x][y + 1].northWall) && !robotCollision([x, y + 1], pieceList)) {
            y += 1;
        }
    } else if (direction === WEST) {
        while (!board[x][y].westWall && (x >= 1 && !board[x - 1][y].eastWall) && !robotCollision([x - 1, y], pieceList)) {
            x -= 1;
        }
    } else if (direction === EAST) {
        while (!board[x][y].eastWall && (x <= 15 && !board[x + 1][y].westWall) && !robotCollision([x + 1, y], pieceList)) {
            x += 1;
        }
    }
    return [x, y];
};

const robotCollision = (location, pieceList) => {
    let output = false;
    pieceList.forEach((pieceLoc) => {
        if (sameCoords(pieceLoc, location)){
            output = true;
        }
    });
    return output;
};


export const movePiece = function(direction, details) {
    switch(direction) {
        case NORTH:
            return traverse(NORTH, details);
        case SOUTH:
            return traverse(SOUTH, details);
        case EAST:
            return traverse(EAST, details);
        case WEST:
            return traverse(WEST, details);
        default:
            return details.currentLoc;
        }
};





