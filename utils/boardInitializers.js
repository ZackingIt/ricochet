import { GREEN, RED, YELLOW, BLUE, redBoardOne, yellowBoardOne, blueBoardOne, greenBoardOne } from './constants';
import { transformBoard, assignProperty, spliceRandomly } from './functionUtils';

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
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y].target) {
                remainingTargets.push([x, y]);
            } else {
                nonTargetSpaces.push([x, y]);
            }
        }
    }
    return [remainingTargets, nonTargetSpaces];
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
let initialBoard = generateDefaultBoard();
let [remainingTargets, nonTargetSpaces] = pluckTargets(initialBoard);
let green = spliceRandomly(nonTargetSpaces);
let red = spliceRandomly(nonTargetSpaces);
let blue = spliceRandomly(nonTargetSpaces);
let yellow = spliceRandomly(nonTargetSpaces);
let activeTargetColor = spliceRandomly(colorList);
let activeTargetCoords = spliceRandomly(remainingTargets);

export const initialState = {
    board: initialBoard,
    pieces: {
        activeTargetColor: activeTargetColor,
        activeTargetCoords: activeTargetCoords,
        green: green[0],
        red: red[0],
        blue: blue[0],
        yellow: yellow[0],
        remainingTargets: remainingTargets,
        remainingColors: colorList,
        nonTargetSpaces: nonTargetSpaces
    }
};