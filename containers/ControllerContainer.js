import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import styled from 'styled-components';
import RobotControlGroup from '../components/RobotControlGroup';

const Container = styled.View`
    display: flex;
    flex-direction: row;
`;

const mapStateToProps = (state) => ({
    selectedPiece: state.pieces.selectedPiece
});

const ControllerContainer = (props) => {
    return (
       <Container>
           
       </Container>
    );
};

export default connect(mapStateToProps)(ControllerContainer);