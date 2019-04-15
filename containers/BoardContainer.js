import React from 'react';
import { connect } from 'react-redux';
import BoardColumn from '../components/BoardColumn';
import styled from 'styled-components';

const Container = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

class BoardContainer extends React.Component {
    constructor(props) {
        super(props);
        this.board = props.board;
        this.pieces = props.pieces;
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container>
                {this.board.map((row, idx) => (<BoardColumn key={idx} row={row} pieces={this.pieces} />))}
            </Container>
        );
    }

}

const mapStateToProps = state => ({ board: state.board, pieces: state.pieces });

export default connect(mapStateToProps)(BoardContainer);