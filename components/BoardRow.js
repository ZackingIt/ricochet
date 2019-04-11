import BoardCell from './BoardCell';

const BoardRow = ({ row }) => {

    return (
        <div className='board-row'>
            { row.map((cell) => <BoardCell data={cell} />) }
        </div>
    );
};

export default BoardRow;