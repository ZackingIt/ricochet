import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import BoardContainer from '../containers/BoardContainer';
import ControllerContainer from '../containers/ControllerContainer';

const Container = styled.View`
    display: flex;
    flex-direction: column;
`;

const Game = () => {
    return (
        <Container>
            <BoardContainer />
            <ControllerContainer />
        </Container>
    );
};

export default Game;