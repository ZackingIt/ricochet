import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selectPiece } from '../actions';
import RobotSelector from '../components/RobotSelector';
import { BLUE, RED, GREEN, YELLOW } from '../utils/constants';

const ControlContainer = styled.View`
    display: flex;
    flex-direction: column;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
`;

const mapStateToProps = (state) => {
    return {
        selectedPiece: state.pieces.selectedPiece
    };
};

const mapDispatchToProps = (dispatch) => ({
    pickPiece: (pieceColor) => {
        dispatch(selectPiece(pieceColor));
    }
});

const RobotControlGroup = ({selectedPiece, pickPiece}) => {
    return (
        <ControlContainer>
            <Row>
                <RobotSelector key={GREEN} robotColor={GREEN} selectedPiece={selectedPiece} pickPiece={pickPiece} />
                <RobotSelector key={BLUE} robotColor={BLUE} selectedPiece={selectedPiece} pickPiece={pickPiece} />
            </Row>
            <Row>
                <RobotSelector key={RED} robotColor={RED} selectedPiece={selectedPiece} pickPiece={pickPiece} />
                <RobotSelector key={YELLOW} robotColor={YELLOW} selectedPiece={selectedPiece} pickPiece={pickPiece} />
            </Row>
        </ControlContainer>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(RobotControlGroup);