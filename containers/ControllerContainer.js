import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectPiece, move } from '../actions';
import { BLUE, RED, GREEN, YELLOW, NORTH, SOUTH, EAST, WEST } from '../utils/constants';

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
`;

const mapStateToProps = (state) => {
    return {
        selectedPiece: state.pieces.selectedPiece
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
                    <InputButton direction={NORTH} movePiece={movePiece} />
                </Row>
                <Row>
                    <InputButton direction={WEST} movePiece={movePiece} /><InputButton direction={EAST} movePiece={movePiece} />
                </Row>
                <Row>
                    <InputButton direction={SOUTH} movePiece={movePiece} />
                </Row>
            </Column>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RobotControlGroup);