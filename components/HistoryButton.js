import React from 'react';
import { Text } from 'react-native';
import { CONTROLLER_SIZE } from '../utils/constants';
import styled from 'styled-components';

const HistoryInput = styled.TouchableHighlight`
    backgroundColor: yellow;
    height: ${CONTROLLER_SIZE};
    width: ${CONTROLLER_SIZE};
`;

const HistoryButton = ({ fn, description }) => {
    return (
        <HistoryInput onPress={() => fn()}>
            <Text>
                {description}
            </Text>
        </HistoryInput>
    );
};

export default HistoryButton;