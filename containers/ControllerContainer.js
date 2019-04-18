import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { selectPiece, move } from '../actions';
import { BLUE, RED, GREEN, YELLOW, NORTH,
         SOUTH, EAST, WEST, CONTROLLER_SIZE } from '../utils/constants';

import RobotSelector from '../components/RobotSelector';
import InputButton from '../components/InputButton';
import HistoryButton from '../components/HistoryButton';
import { ActionCreators } from 'redux-undo';

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
        selectedPiece: state.robots.present.selectedPiece
    };
};

const mapDispatchToProps = (dispatch) => ({
    pickPiece: (pieceColor) => {
        dispatch(selectPiece(pieceColor));
    },
    moveRobot: (direction) => {
        dispatch(move(direction));
    },
    undo: () => {
        dispatch(ActionCreators.undo());
    },
    redo: () => {
        dispatch(ActionCreators.redo());
    },
    clearHistory: () => {
        dispatch(ActionCreators.clearHistory());
    }
});

const RobotControlGroup = ({selectedPiece, pickPiece, moveRobot, undo, redo, clearHistory}) => {
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
                <Row>
                    <HistoryButton fn={redo} description="Redo" />
                    <HistoryButton fn={undo} description="Undo" />
                </Row>
            </Column>
            <Column>
                <Row>
                    <Spacing /><InputButton direction={NORTH} moveRobot={moveRobot} /><Spacing />
                </Row>
                <Row>
                    <InputButton direction={WEST} moveRobot={moveRobot} /><Spacing /><InputButton direction={EAST} moveRobot={moveRobot} />
                </Row>
                <Row>
                    <Spacing /><InputButton direction={SOUTH} moveRobot={moveRobot} /><Spacing />
                </Row>
            </Column>
        </Container>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RobotControlGroup);