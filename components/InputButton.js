import React from 'react';
import { Text } from 'react-native';
import { CONTROLLER_SIZE } from '../utils/constants';
import styled from 'styled-components';

const DirectionButton = styled.TouchableHighlight`
    backgroundColor: black;
    height: ${CONTROLLER_SIZE};
    width: ${CONTROLLER_SIZE};
`;

const InputButton = ({direction, movePiece}) => {
    return (
        <DirectionButton onPress={() => movePiece(direction)}>
            <Text>
            </Text>
        </DirectionButton>
    );
};

export default InputButton;