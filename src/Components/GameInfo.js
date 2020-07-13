import React from "react";

function GameInfo (props) {
    // Display list of moves
    const moves = props.history.map((_, move) => {
        const desc = move ?
            'Go to move #' + move:
            'Go to game start';

        return (
            <li key={move}>
                <button onClick={() => props.jumpTo(move)}>{desc}</button>
            </li>
        )
    });

    let status;
    if (props.winner)
        status = 'Winner: ' + props.winner;
    else
        status = 'Next player: ' + (props.xIsNext ? 'X' : 'O');

    return (
        <div className="game-info">
            <div>{status}</div>
            <ol>{moves}</ol>
        </div>
    );
}

export default GameInfo;