export const NEW_GAME = 'NEW_GAME';
export const RESUME_GAME = 'RESUME_GAME';
export const MOVE = 'MOVE';
export const NORTH = 'NORTH';
export const SOUTH = 'SOUTH';
export const EAST = 'EAST';
export const WEST = 'WEST';
export const SELECT_PIECE = 'SELECT_PIECE';
export const ROBOT_COLORS = { blue: '#2E64FE', red: '#DF0000', yellow: '#ECE500', green: '#4BE806' };
export const TARGET_COLORS = { blue: '#33ECFF', red: '#FF3333', yellow: '#F6FF33', green: '#33FF39', grey: 'grey' };
export const RED = 'red';
export const BLUE = 'blue';
export const GREEN = 'green';
export const YELLOW = 'yellow';
export const CONTROLLER_SIZE = '60px';
export const GET_NEW_ACTIVE_TARGET = 'GET_NEW_ACTIVE_TARGET';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export const REDO = 'REDO';
export const UNDO = 'UNDO';

export var blankBoard = [
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }]
];

export var greenBoardOne = [
    [{ y: 0, target: 0, walls: [1, 0, 0, 1] }, { y: 1, target: 0, walls: [0, 0, 0, 1] }, { y: 2, target: 0, walls: [0, 0, 0, 1] }, { y: 3, target: 0, walls: [0, 0, 0, 1] }, { y: 4, target: 0, walls: [0, 0, 0, 1] }, { y: 5, target: 0, walls: [0, 0, 0, 1] }, { y: 6, target: 0, walls: [0, 0, 0, 1] }, { y: 7, target: 0, walls: [1, 0, 0, 1] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 1, walls: [0, 0, 1, 1] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 1] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 1, walls: [1, 0, 0, 1] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 1, walls: [1, 1, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 1, walls: [0, 1, 1, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [1, 0, 0, 1] }],
];

export var blueBoardOne = [
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [1, 1, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 1, walls: [0, 0, 1, 1] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 1, walls: [0, 1, 1, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 1] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 1, walls: [1, 0, 0, 1] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 1, walls: [1, 1, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 0, 0] }],
    [{ y: 0, target: 0, walls: [1, 1, 0, 0] }, { y: 1, target: 0, walls: [0, 1, 0, 0] }, { y: 2, target: 0, walls: [0, 1, 0, 0] }, { y: 3, target: 0, walls: [0, 1, 0, 0] }, { y: 4, target: 0, walls: [0, 1, 1, 0] }, { y: 5, target: 0, walls: [0, 1, 0, 0] }, { y: 6, target: 0, walls: [0, 1, 0, 0] }, { y: 7, target: 0, walls: [0, 1, 0, 0] }]
];

export var yellowBoardOne = [
    [{ y: 0, target: 0, walls: [0, 1, 1, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 1, walls: [1, 0, 0, 1] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 1, walls: [0, 1, 1, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 1, walls: [1, 1, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 1, walls: [1, 0, 0, 1] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 1] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 1, walls: [0, 0, 1, 1] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 1, 0, 0] }, { y: 1, target: 0, walls: [0, 1, 0, 0] }, { y: 2, target: 0, walls: [0, 1, 0, 0] }, { y: 3, target: 0, walls: [0, 1, 1, 0] }, { y: 4, target: 0, walls: [0, 1, 0, 0] }, { y: 5, target: 0, walls: [0, 1, 0, 0] }, { y: 6, target: 0, walls: [0, 1, 0, 0] }, { y: 7, target: 0, walls: [0, 1, 1, 0] }]
];

export var redBoardOne = [
    [{ y: 0, target: 0, walls: [0, 0, 0, 1] }, { y: 1, target: 0, walls: [0, 0, 0, 1] }, { y: 2, target: 0, walls: [0, 0, 0, 1] }, { y: 3, target: 0, walls: [0, 0, 0, 1] }, { y: 4, target: 0, walls: [0, 0, 0, 1] }, { y: 5, target: 0, walls: [0, 0, 1, 1] }, { y: 6, target: 0, walls: [0, 0, 0, 1] }, { y: 7, target: 0, walls: [0, 0, 1, 1] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 1, walls: [1, 0, 0, 1] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 1, walls: [0, 1, 1, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 1, walls: [0, 0, 1, 1] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }],
    [{ y: 0, target: 0, walls: [0, 0, 0, 0] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 1, walls: [1, 1, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 1] }],
    [{ y: 0, target: 0, walls: [0, 0, 1, 1] }, { y: 1, target: 0, walls: [0, 0, 0, 0] }, { y: 2, target: 0, walls: [0, 0, 0, 0] }, { y: 3, target: 0, walls: [0, 0, 0, 0] }, { y: 4, target: 0, walls: [0, 0, 0, 0] }, { y: 5, target: 0, walls: [0, 0, 0, 0] }, { y: 6, target: 0, walls: [0, 0, 0, 0] }, { y: 7, target: 0, walls: [0, 0, 1, 0] }]
];
