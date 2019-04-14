import React from 'react';
import { View } from 'react-native';
import BoardCell from './BoardCell';
import styled from 'styled-components';

const Container = styled.View`
    display: flex;
    padding: 0px;
    justify-content: space-between;
    flex-direction: column;
`;

const BoardColumn = ({ row, pieces }) => {
    return (
        <Container>
            {row.map((cell) => <BoardCell key={`${cell.x},${cell.y}`} cell={cell} pieces={pieces} />) }
        </Container>
    );
};

export default BoardColumn;