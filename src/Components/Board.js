import React from "react";
import Square from "./Square";

class Board extends React.Component {
    // Function to render each square
    renderSquare(i) {
        return (
            <Square
                key={i}
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
            />
        );
    }


    render() {
        let elems = [];
        for (let i = 0; i < 3; i++) {
            let jsx = [];
            for (let j = 0; j < 3; j++) {
                jsx.push(this.renderSquare((i * 3) + j));
            }

            elems.push(<div className="board-row">{jsx}</div>);
        }

        return(
            <div>
                {elems}
            </div>
        );
    }
}

export default Board;