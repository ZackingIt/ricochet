import { NORTH, SOUTH, EAST, WEST, GREEN, RED, YELLOW,
        BLUE, redBoardOne, yellowBoardOne, blueBoardOne, greenBoardOne } from './constants';

export const sameCoords = function (firstCoordTuple, secondCoordTuple) {
    return firstCoordTuple[0] === secondCoordTuple[0] && firstCoordTuple[1] === secondCoordTuple[1];
};

export const spliceRandomly = function(array) {
    return array.splice(Math.floor(Math.random()*(array.length-1)), 1)[0];
};

export const moveRobot = (direction, { currentLoc, pieceList }) => {
    let board = INITIAL_BOARD;
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

function transformBoard(board, boardFn) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            board[x][y] = boardFn(board[x][y]);
        }
    }
    return board;
}

function assignProperty(board) {
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            board[x][y].x = x;
            board[x][y].y = y;
        }
    }
    return board;
}

function appendNorthSouth(north, south) {
    for (let x = 0; x < north[0].length; x++) {
        north[x] = north[x].concat(south[x]);
    }
    return north;
}

function appendEastWest(east, west) {
    return east.concat(west);
}

function generateDefaultConfiguration(green, blue, yellow, red) {
    let greenBlue = appendEastWest(green, blue);
    let redYellow = appendEastWest(red, yellow);
    return appendNorthSouth(greenBlue, redYellow);
}

function generateBoard(green, blue, yellow, red) {
    let configuration = generateDefaultConfiguration(green, blue, yellow, red);
    let nodedBoards = transformBoard(configuration, generateBoardNode);
    return assignProperty(nodedBoards);
}

export function generateDefaultBoard() {
    return generateBoard(greenBoardOne, blueBoardOne, yellowBoardOne, redBoardOne);
}

const pluckTargets = function (board) {
    let remainingTargets = [];
    let nonTargetSpaces = [];
    let avoidedSpaces = [[7, 7], [8, 7], [7, 8], [8, 8]];
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y].target) {
                remainingTargets.push([x, y]);
            } else if (acceptableSpace([x, y], avoidedSpaces)) {
                nonTargetSpaces.push([x, y]);
            }
        }
    }
    return [remainingTargets, nonTargetSpaces];
};

const acceptableSpace = (currentCoord, avoidedSpaces) => {
    let output = true;
    avoidedSpaces.forEach((avoidedSpace) => {
        if (sameCoords(currentCoord, avoidedSpace)) {
            output = false;
        }
    });
    return output;
};

function generateBoardNode(nodeConfig) {
    return new BoardNode(nodeConfig);
}

export class BoardNode {
    constructor({ walls, target }) {
        this.northWall = Boolean(walls[0]);
        this.eastWall = Boolean(walls[1]);
        this.southWall = Boolean(walls[2]);
        this.westWall = Boolean(walls[3]);
        this.target = Boolean(target);
    }
}

let colorList = [GREEN, GREEN, GREEN, GREEN, YELLOW,
    YELLOW, YELLOW, YELLOW, RED, RED,
    RED, RED, BLUE, BLUE, BLUE, BLUE];

export const INITIAL_BOARD = generateDefaultBoard();

let [remainingTargets, nonTargetSpaces] = pluckTargets(INITIAL_BOARD);
let green = spliceRandomly(nonTargetSpaces);
let red = spliceRandomly(nonTargetSpaces);
let blue = spliceRandomly(nonTargetSpaces);
let yellow = spliceRandomly(nonTargetSpaces);
let activeTargetColor = spliceRandomly(colorList);
let activeTargetCoords = spliceRandomly(remainingTargets);

export const initialState = {
    robots: {
        past: [],
        present: {
            selectedPiece: GREEN,
            green: green,
            red: red,
            blue: blue,
            yellow: yellow
        },
        future: []
    },
    targets: {
        activeColor: activeTargetColor,
        activeCoords: activeTargetCoords,
        remainingCoords: remainingTargets,
        remainingColors: colorList,
        nonTargetSpaces: nonTargetSpaces
    }
};