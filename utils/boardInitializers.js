import { QUADRANT_LENGTH } from './constants';
import { transformBoard, assignProperty, pluckTargets } from './functionUtils';

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
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 1, 0] }, { n: 7, target: 0, walls: [1, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 1] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 1, walls: [0, 1, 1, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 1] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 1, 0] }, { n: 8, target: 0, walls: [1, 1, 1, 1] }],
];

export var blueBoardOne = [
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 1, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 1, 0] }, { n: 8, target: 0, walls: [1, 1, 1, 1] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 1, walls: [0, 0, 1, 1] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 1] }],
    [{ n: 1, target: 0, walls: [1, 1, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 1, walls: [0, 1, 1, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 1] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 1] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 1, walls: [1, 0, 0, 1] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 1, walls: [1, 1, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 0, 0] }],
    [{ n: 1, target: 0, walls: [1, 1, 0, 0] }, { n: 2, target: 0, walls: [0, 1, 0, 0] }, { n: 3, target: 0, walls: [0, 1, 0, 1] }, { n: 4, target: 0, walls: [0, 1, 0, 0] }, { n: 5, target: 0, walls: [0, 1, 1, 0] }, { n: 6, target: 0, walls: [0, 1, 0, 0] }, { n: 7, target: 0, walls: [0, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 0, 0] }]
];

export var yellowBoardOne = [
    [{ n: 1, target: 0, walls: [1, 1, 1, 1] }, { n: 2, target: 0, walls: [1, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 1, 0] }, { n: 6, target: 0, walls: [1, 0, 0, 1] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 1] }, { n: 2, target: 1, walls: [0, 1, 1, 0] }, { n: 3, target: 0, walls: [1, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 1] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 1, 0] }, { n: 7, target: 1, walls: [1, 1, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 1, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 1] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 1, 0] }, { n: 4, target: 1, walls: [1, 0, 0, 1] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 1, 0] }],
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
    [{ n: 1, target: 0, walls: [0, 0, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 1, walls: [0, 0, 1, 1] }, { n: 4, target: 0, walls: [1, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 1, 1, 0] }],
    [{ n: 1, target: 0, walls: [0, 1, 0, 0] }, { n: 2, target: 0, walls: [0, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 1, 0] }, { n: 5, target: 1, walls: [1, 1, 0, 0] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 1] }],
    [{ n: 1, target: 0, walls: [1, 1, 1, 1] }, { n: 2, target: 0, walls: [1, 0, 0, 0] }, { n: 3, target: 0, walls: [0, 0, 0, 0] }, { n: 4, target: 0, walls: [0, 0, 0, 0] }, { n: 5, target: 0, walls: [0, 0, 0, 1] }, { n: 6, target: 0, walls: [0, 0, 0, 0] }, { n: 7, target: 0, walls: [0, 0, 0, 0] }, { n: 8, target: 0, walls: [0, 0, 1, 0] }]
];


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