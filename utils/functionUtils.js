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
            board[x][y].x = (x + 1) % 8;
            board[x][y].y = (y + 1) % 8;
        }
    }
    return board;
};

export const pluckTargets = function (board) {
    let output = [];
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y].target) {
                output.push([x, y]);
            }
        }
    }
    return output;
};

export const sameCoords = function (firstCoordTuple, secondCoordTuple) {
    return firstCoordTuple[0] === secondCoordTuple[0] && firstCoordTuple[1] === secondCoordTuple[1];
};