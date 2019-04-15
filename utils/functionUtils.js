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

const traverseNorthSouth = (direction, { currentLoc, pieceList, board }) => {
    let [x, y] = currentLoc;
    if (direction === NORTH) {
        while (!board[x][y].northWall && (y >= 1 && !board[x][y-1].southWall)) {
            y -= 1;
        }
    } else if (direction === SOUTH) {
        while (!board[x][y].southWall && (y <= 15 && !board[x][y + 1].northWall)) {
            y += 1;
        }
    }
    return [x, y];
};

const traverseEastWest = (direction, { currentLoc, pieceList, board }) => {
    let [x, y] = currentLoc;
    if (direction === WEST) {
        while (!board[x][y].westWall && (x >= 1 && !board[x - 1][y].eastWall)) {
            x -= 1;
        }
    } else if (direction === EAST) {
        while (!board[x][y].eastWall && (x <= 15 && !board[x + 1][y].westWall)) {
            x += 1;
        }
    }
    return [x, y];
};


export const movePiece = function(direction, details) {
    switch(direction) {
        case NORTH:
            return traverseNorthSouth(NORTH, details);
        case SOUTH:
            return traverseNorthSouth(SOUTH, details);
        case EAST:
            return traverseEastWest(EAST, details);
        case WEST:
            return traverseEastWest(WEST, details);
        default:
            return details.currentLoc;
        }
};





