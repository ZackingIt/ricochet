import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components';
import { ROBOT_COLORS } from '../utils/constants';

const Button = styled.TouchableHighlight`
    backgroundColor: ${props => ROBOT_COLORS[props.robotColor]};
    border: ${props => props.robotColor === props.selectedPiece ? '2px solid black' : '0px'};
    height: 60px;
    width: 60px;
    margin-right: 5px;
    margin-bottom: 5px;
    border-radius: 23px;
`;

const RobotSelector = ({robotColor, selectedPiece, pickPiece }) => {
    return (
        <Button onPress={() => pickPiece(robotColor)} robotColor={robotColor} selectedPiece={selectedPiece}>
            <Text></Text>
        </Button>
    );
};

export default RobotSelector;