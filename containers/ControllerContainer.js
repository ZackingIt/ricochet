import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectPiece, move } from '../actions';
import { BLUE, RED, GREEN, YELLOW, NORTH, SOUTH, EAST, WEST, CONTROLLER_SIZE } from '../utils/constants';

import RobotSelector from '../components/RobotSelector';
import InputButton from '../components/InputButton';

const Column = styled.View`
    display: flex;
    flex-direction: column;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
`;

const Container = styled.View`
    display: flex;
    flex-direction: row;
    margin-left: 15px;
    margin-top: 15px;
    margin-right: 15px;
    justify-content: space-between;
`;

const Spacing = styled.View`
    height: ${CONTROLLER_SIZE};
    width: ${CONTROLLER_SIZE};
    backgroundColor: transparent;
`;

const mapStateToProps = (state) => {
    return {
        selectedPiece: state.game.pieces.selectedPiece
    };
};

const mapDispatchToProps = (dispatch) => ({
    pickPiece: (pieceColor) => {
        dispatch(selectPiece(pieceColor));
    },
    movePiece: (direction) => {
        dispatch(move(direction));
    }
});

const RobotControlGroup = ({selectedPiece, pickPiece, movePiece}) => {
    return (
        <Container>
            <Column>
                <Row>
                    <RobotSelector key={GREEN} robotColor={GREEN} selectedPiece={selectedPiece} pickPiece={pickPiece} />
                    <RobotSelector key={BLUE} robotColor={BLUE} selectedPiece={selectedPiece} pickPiece={pickPiece} />
                </Row>
                <Row>
                    <RobotSelector key={RED} robotColor={RED} selectedPiece={selectedPiece} pickPiece={pickPiece} />
                    <RobotSelector key={YELLOW} robotColor={YELLOW} selectedPiece={selectedPiece} pickPiece={pickPiece} />
                </Row>
            </Column>
            <Column>
                <Row>
                    <Spacing /><InputButton direction={NORTH} movePiece={movePiece} /><Spacing />
                </Row>
                <Row>
                    <InputButton direction={WEST} movePiece={movePiece} /><Spacing /><InputButton direction={EAST} movePiece={movePiece} />
                </Row>
                <Row>
                    <Spacing /><InputButton direction={SOUTH} movePiece={movePiece} /><Spacing />
                </Row>
            </Column>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RobotControlGroup);