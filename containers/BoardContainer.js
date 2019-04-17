import React from 'react';
import { connect } from 'react-redux';
import BoardColumn from '../components/BoardColumn';
import styled from 'styled-components';
import { getNewActiveTarget } from '../actions';
import { sameCoords } from '../utils/functionUtils';

const Container = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

const BoardContainer = ({ board, pieces, getNewTarget }) => {
    if (sameCoords(pieces[pieces.activeTargetColor], pieces.activeTargetCoords)) {
        getNewTarget();
    }
    return (
        <Container>
            {board.map((row, idx) => (<BoardColumn key={idx} getNewTarget={getNewTarget} row={row} pieces={pieces} />))}
        </Container>
    );
};



const mapStateToProps = state => {
    return { board: state.game.board, pieces: state.game.pieces };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNewTarget: () => dispatch(getNewActiveTarget)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);