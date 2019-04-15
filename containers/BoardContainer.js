import React from 'react';
import { connect } from 'react-redux';
import BoardColumn from '../components/BoardColumn';
import styled from 'styled-components';

const Container = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const BoardContainer = ({board, pieces}) => {
    return (
        <Container>
            {board.map((row, idx) => (<BoardColumn key={idx} row={row} pieces={pieces} />))}
        </Container>
    );
};

const mapStateToProps = state => {
    return { board: state.game.board, pieces: state.game.pieces }
};

export default connect(mapStateToProps)(BoardContainer);