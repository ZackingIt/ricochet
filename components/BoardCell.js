import React from 'react';
import styled from 'styled-components';
import { ROBOT_COLORS, TARGET_COLORS, GREEN, YELLOW, RED, BLUE } from '../utils/constants';
import { sameCoords } from '../utils/functionUtils';

const Container = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 23px;
    width: 23px;
    padding: 0px;
    borderWidth: 4px;
    borderTopColor: ${props => props.northWall ? 'grey' : 'transparent'}
    borderRightColor: ${props => props.eastWall ? 'grey' : 'transparent'}
    borderBottomColor: ${props => props.southWall ? 'grey' : 'transparent'}
    borderLeftColor: ${props => props.westWall ? 'grey' : 'transparent'}
    backgroundColor: ${props => props.targetColor}
`;

const Robot = styled.View`
    height: 16px;
    width: 16px;
    border-radius: 10px;
    backgroundColor: ${props => props.robotColor};
    border: ${props => (props.robotColor !== 'transparent') ? '1px solid black' : '0px'};
`;

const cellRobotColor = (cell, robots) => {
    let { green, red, yellow, blue } = robots;
    console.log('boardgreen !!', green);
    let currentCoord = [cell.x, cell.y];

    if (sameCoords(green, currentCoord)) {
        return ROBOT_COLORS[GREEN];
    } else if (sameCoords(red, currentCoord)) {
        return ROBOT_COLORS[RED];
    } else if (sameCoords(yellow, currentCoord)) {
        return ROBOT_COLORS[YELLOW];
    } else if (sameCoords(blue, currentCoord)) {
        return ROBOT_COLORS[BLUE];
    } else {
        return 'transparent';
    }
};

const cellTargetColor = (cell, targets) => {
    let { x, y } = cell;
    let { activeColor, activeCoords } = targets;
    let currentCoord = [x, y];
    if (sameCoords(activeCoords, currentCoord)) {
        return TARGET_COLORS[activeColor];
    } else {
        return 'transparent';
    }
};

const BoardCell = ({ cell, targets, robots }) => {
    console.log('board cell robots @@@', robots);
    return (
        <Container {...cell}
            targetColor={cellTargetColor(cell, targets)}
        >
            <Robot robotColor={cellRobotColor(cell, robots)}/>
        </Container>
    );
};

export default BoardCell;