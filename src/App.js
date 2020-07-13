import React from 'react';
import './App.css';

import Board from "./Components/Board";
import GameInfo from "./Components/GameInfo";


// Check if any winner exists
function calculateWinner(squares) {
  const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
      }
  }
  return null;
}

class Square extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        }
      ],
      stepNo: 0,
      xIsNext: true,
    }
  }

  handleClick (i) {
    const { history, stepNo } = this.state;
    const current = history[stepNo];
    const squares = current.squares.slice();

    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState((prevState) => ({
      history: [...prevState.history, {squares}],
      stepNo: prevState.stepNo + 1,
      xIsNext: !prevState.xIsNext,
    }));
  }


  jumpTo (step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step%2) === 0,
    });
  }


  render() {
    const { history, stepNo, xIsNext } = this.state;
    const current = history[stepNo];

    const winner = calculateWinner(current.squares);
    
    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <GameInfo
          history={history}
          xIsNext={xIsNext}
          winner={winner}
          jumpTo={(i) => this.jumpTo(i)}
        />
      </div>
    );
  }

}

export default Square;
