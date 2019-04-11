import { QUADRANT_LENGTH } from './constants';
import { transformBoard } from './functionUtils';

// walls = [[ {northWall: 1, southWall: false }, { southWall: true } ]
// 

// [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],

export var blankBoard = [
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }]
];

export var greenBoardOne = [
    [{ n: 1, target: 0, walls: [1, 0, 0, 1] }, { n: 2, target: 0, walls: [0, 0, 0, 1] }, { n: 3, target: 0, walls: [0, 0, 0, 1] }, { n: 4, target: 0, walls: [0, 0, 0, 1] }, { n: 5, target: 0, walls: [0, 1, 0, 1] }, { n: 6, target: 0, walls: [0, 0, 0, 1] }, { n: 7, target: 0, walls: [0, 0, 1, 1] }, { n: 8, target: 0, walls: [1, 0, 0, 1] }],
    [{ n: 1, target: 0, walls: [1, 1, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 1, walls: [0, 0, 1, 1] }, { n: 6, target: 0, walls: [1, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 1] }, { n: 2, target: 0, walls: [0, 1, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 1, 0] }, { n: 2, target: 1, walls: [1, 0, 0, 1] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [1, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 1, walls: [0, 1, 1, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 1] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [1, 1, 1, 1] }],
];

export var blueBoardOne = [
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 1, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [1, 1, 1, 1] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 1, walls: [0, 0, 1, 1] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 1] }],
    [{ n: 1, target: 0, walls: [1, 1, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 1, walls: [0, 1, 1, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 1] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 1] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 1, walls: [1, 0, 0, 1] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 1, walls: [1, 1, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 1, 0, 0] }, { n: 2, target: 0, walls: [0, 1, 0, 0] }, { n: 3, target: 0, walls: [0, 1, 0, 1] }, { n: 4, target: 0, walls: [0, 1, 0, 0] }, { n: 5, target: 0, walls: [0, 1, 1, 0] }, { n: 6, target: 0, walls: [0, 1, 0, 0] }, { n: 7, target: 0, walls: [0, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 0, 0] }]
];

export var yellowBoardOne = [
    [{ n: 1, target: 0, walls: [1, 1, 1, 1] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [1, 0, 0, 1] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 1, walls: [0, 1, 1, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 1, walls: [1, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 1, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 1, walls: [1, 0, 0, 1] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 1, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 1] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 1, walls: [0, 0, 1, 1] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 1, 0, 0] }, { n: 2, target: 0, walls: [0, 1, 0, 0] }, { n: 3, target: 0, walls: [0, 1, 0, 0] }, { n: 4, target: 0, walls: [0, 1, 1, 0] }, { n: 5, target: 0, walls: [1, 1, 0, 0] }, { n: 6, target: 0, walls: [0, 1, 0, 0] }, { n: 7, target: 0, walls: [0, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 1, 0] }]
];

export var redBoardOne = [
    [{ n: 1, target: 0, walls: [0, 0, 0, 1] }, { n: 2, target: 0, walls: [0, 0, 0, 1] }, { n: 3, target: 0, walls: [0, 0, 0, 1] }, { n: 4, target: 0, walls: [0, 1, 0, 1] }, { n: 5, target: 0, walls: [0, 0, 0, 1] }, { n: 6, target: 0, walls: [0, 0, 1, 1] }, { n: 7, target: 0, walls: [1, 0, 0, 1] }, { n: 8, target: 0, walls: [0, 0, 1, 1] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 1, 0] }, { n: 4, target: 1, walls: [1, 0, 0, 1] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 1, walls: [0, 1, 1, 0] }, { n: 8, target: 0, walls: [1, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 1, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 1] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 1, walls: [0, 0, 1, 1] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 1, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 1, 0] }, { n: 5, target: 1, walls: [1, 1, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 1] }],
    [{ n: 1, target: 0, walls: [1, 1, 1, 1] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 1] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }]
];


function appendBottom(firstQuadrant, secondQuadrant) {
    return firstQuadrant.concat(secondQuadrant);
}

function appendHalves(firstHalf, secondHalf) {
    for (let x = 0; x < firstHalf.length; x++) {
        firstHalf[x] = firstHalf[x].concat(secondHalf[x]);
    }
    return firstHalf;
}

function generateDefaultConfiguration(green, blue, yellow, red) {
    let firstHalfBoard = appendBottom(green, red);
    let secondHalfBoard = appendBottom(blue, yellow);
    return appendHalves(firstHalfBoard, secondHalfBoard);
}

function generateBoard(green, blue, yellow, red) {
    let configuration = generateDefaultConfiguration(green, blue, yellow, red);
    return transformBoard(configuration, generateBoardNode);
}

export function generateDefaultBoard() {
    return generateBoard(greenBoardOne, blueBoardOne, yellowBoardOne, redBoardOne);
}

function generateBoardNode(nodeConfig) {
    return new BoardNode(nodeConfig);
}

function rotateBoardPrecursors() {

}

export class BoardNode {
    constructor({ walls, robotPresent, target }) {
        this.northWall = Boolean(walls[0]);
        this.eastWall = Boolean(walls[1]);
        this.southWall = Boolean(walls[2]);
        this.walls = Boolean(walls[3]);
        this.target = Boolean(target);
        this.robotPresent = robotPresent || false;
    }
    setRobot(robotPresent) {
        this.robotPresent = robotPresent;
    }
}