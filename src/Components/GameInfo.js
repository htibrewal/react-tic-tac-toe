import React from "react";

function MoveInfo (props) {
    // Display list of moves
    const moves = props.history.map((_, move) => {
        const desc = move ?
            'Go to move #' + move:
            'Go to game start';

        return (
            <li key={move}>
                <button
                    className="move-btn"
                    onClick={() => props.jumpTo(move)}>
                    {desc}
                </button>
            </li>
        )
    });

    return (
        <div className="move-info">
            <ol>{moves}</ol>
        </div>
    );
}

export default MoveInfo;