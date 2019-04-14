import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import RobotSelector from './RobotSelector';

const ControlContainer = styled.View`
    display: flex;
    flex-direction: column;
`;

const Row = styled.View`
    display: flex;
    flex-direction: row;
`;

const RobotControlGroup = (props) => {
    return (
      <ControlContainer>
        <Row>
            <RobotSelector />
            <RobotSelector />
        </Row>
        <Row>
            <RobotSelector />
            <RobotSelector />
        </Row>
      </ControlContainer>
    );
};

export default RobotControlGroup;