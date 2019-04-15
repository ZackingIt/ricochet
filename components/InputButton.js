import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import styled from 'styled-components';

const DirectionButton = styled.TouchableHighlight`
    backgroundColor: black;
    height: 20px;
    width: 20px;
`;

const InputButton = ({direction, movePiece}) => {
    return (
        <DirectionButton onPress={() => movePiece(direction)}>
            <Text>
                {direction}
            </Text>
        </DirectionButton>
    );
};

export default InputButton;