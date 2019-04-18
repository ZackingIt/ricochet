import React from 'react';
import BoardCell from './BoardCell';
import styled from 'styled-components';

const Container = styled.View`
    display: flex;
    padding: 0px;
    justify-content: space-between;
    flex-direction: column;
`;

const BoardColumn = ({ column, robots, targets }) => {
    return (
        <Container>
            {column.map((cell) => {
                return <BoardCell key={`${cell.x},${cell.y}`} cell={cell} robots={robots} targets={targets} />
            }) }
        </Container>
    );
};

export default BoardColumn;