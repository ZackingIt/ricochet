import React from 'react';
import { connect } from 'react-redux';
import BoardRow from './components/boardRow';

class BoardContainer extends React.Component {
    constructor({ board }) {
        this.board = board;
    }

    render() {
        return (
            <div>
                {this.board.map((row) => (<BoardRow row={row} />))}
            </div>
        );
    }

}

const mapStateToProps = state => ({ board: state.board });

export default connect(mapStateToProps)(BoardContainer);