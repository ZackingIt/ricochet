import React from 'react';
import { connect } from 'react-redux';
import BoardColumn from '../components/BoardColumn';
import styled from 'styled-components';
import { getNewActiveTarget } from '../actions';
import { sameCoords, INITIAL_BOARD } from '../utils/functionUtils';

const Container = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        if (sameCoords(this.props.robots[this.props.targets.activeColor], this.props.targets.activeCoords)) {
            this.props.getNewTarget();
        }
    }

    render() {
        let { getNewTarget, robots, targets } = this.props;

        if (robots) {
            return (
                <Container>
                    {INITIAL_BOARD.map((column, idx) => (<BoardColumn key={idx} getNewTarget={getNewTarget} column={column} targets={targets} robots={robots} />))}
                </Container>
            );
        } else {
            return <Container />
        }
    }
}

const mapStateToProps = state => {
    return { targets: state.targets, robots: state.robots.present || state.robots.past[0] };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNewTarget: () => dispatch(getNewActiveTarget)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardContainer);