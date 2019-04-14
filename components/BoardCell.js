import React from 'react';
import { View, Text } from 'react-native';
import styled, { css } from 'styled-components';
import { ROBOT_COLORS, TARGET_COLORS, GREEN, YELLOW, RED, BLUE } from '../utils/constants';
import { sameCoords } from '../utils/functionUtils';


const Container = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    height: 24px;
    width: 24px;
    margin: 0px;
    padding: 0px;
    borderTopWidth: ${props => props.northWall ? "4px" : "0px"}
    borderTopColor: ${props => props.northWall ? 'grey' : 'transparent'}
    borderRightWidth: ${props => props.eastWall ? "4px" : "0px"}
    borderRightColor: ${props => props.eastWall ? 'grey' : 'transparent'}
    borderBottomWidth: ${props => props.southWall ? "4px" : "0px"}
    borderBottomColor: ${props => props.southWall ? 'grey' : 'transparent'}
    borderLeftWidth: ${props => props.westWall ? "4px" : "0px"}
    borderLeftColor: ${props => props.westWall ? 'grey' : 'transparent'}
    backgroundColor: ${props => props.targetColor}
`;

const Coordinates = styled.Text`
    font-size: 3px;
`;

const Robot = styled.View`
    border-radius: 10px;
    background-color: ${props => props.robotColor}
`;

// I am storing various piece locations under the 'Pieces' reducer, which will track the locations of
// blue, yellow, green, red robots as well as the location of the next target
// I want to make this data immediately available to every BoardCell, so that I can compare current BoardCell's location
// to the location of the active location, and render accordingly.
// Later on, I'll also need to create an animation that shows the path travelled by the robot

const cellRobotColor = (cell, pieces) => {
    let { green, red, yellow, blue } = pieces;
    let currentCoord = [cell.x, cell.y];
    if (sameCoords(green, currentCoord)) {
        return ROBOT_COLORS[GREEN];
    } else if (sameCoords(red, currentCoord)) {
        return ROBOT_COLORS[RED];
    } else if (sameCoords(yellow, currentCoord)) {
        return ROBOT_COLORS[YELLOW];
    } else if (sameCoords(blue, currentCoord)) {
        return ROBOT_COLORS[BLUE];
    }
    return 'transparent';
};

const cellTargetColor = (cell, pieces) => {
    let { target, x, y } = cell;
    let { activeTargetColor, activeTargetCoords } = pieces;
    let currentCoord = [x, y];
    if (sameCoords(activeTargetCoords, currentCoord)) {
        return TARGET_COLORS[activeTargetColor];
    } else if (target) {
        return 'yellow';
    } else {
        return 'transparent';
    }
};

const BoardCell = ({ cell, pieces }) => {
    return (
        <Container {...cell}
            targetColor={cellTargetColor(cell, pieces)}
        >
            <Coordinates>
                { cell.x },{ cell.y }
            </Coordinates>
            <Robot robotColor={cellRobotColor(cell, pieces)}/>
        </Container>
    );
};

export default BoardCell;