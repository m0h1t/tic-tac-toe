import React, { Component } from 'react';
import NavBar from './navBar';
import Grid from './grid';

export default class Main extends Component {
  state = {
    board: [],
    currentTurn: 'X',
    gameInProgress: true,
    score: { X: 0, O: 0, tie: 0 }
  };

  winningNumbers = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  _hasPlayerWon = () => {
    const { board } = this.state;
    for (let i = 0; i < this.winningNumbers.length; i++) {
      const [a, b, c] = this.winningNumbers[i];
      if (
        board[a].value &&
        board[a].value === board[b].value &&
        board[a].value === board[c].value
      ) {
        return true;
      }
    }
  };

  _handleClick = block => {
    const { board, currentTurn, score } = this.state;
    var { gameInProgress } = this.state;
    if (block.value === '' && gameInProgress) {
      const i = board.indexOf(block);
      board[i].value = currentTurn;
      if (this._hasPlayerWon()) {
        score[currentTurn]++;
        gameInProgress = false;
      }
      this.setState({
        board,
        currentTurn: currentTurn === 'X' ? 'O' : 'X',
        gameInProgress
      });
    }
  };

  _addBlock = blockId => {
    this.state.board.push(this._emptyBlock(blockId));
  };

  _emptyBlock = blockId => {
    return { id: blockId, value: '', key: Date.now() + blockId };
  };

  _resetBlock = () => {
    this.setState({ block: [] });
    for (let i = 0; i < 9; i++) this._addBlock(i);
  };

  _isGridFull = () => {
    const emptyBlocks = this.state.board.filter(block => block.value === '');
    return emptyBlocks.length === 0;
  };

  _resetState() {
    this._resetBlock();
    this.setState({
      gameInProgress: true,
      currentTurn: 'X'
    });
    console.log(this.state.board);
  }

  componentWillMount() {
    this._resetBlock();
  }

  render() {
    const { board } = this.state;
    return (
      <div className="theme">
        <NavBar />
        <center>
          <Grid board={board} onClick={this._handleClick} />
        </center>
      </div>
    );
  }
}
