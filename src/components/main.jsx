import React, { Component } from 'react';
import NavBar from './navBar';
import Grid from './grid';
import StatusBar from './statusBar';

export default class Main extends Component {
  state = {
    board: [],
    currentTurn: 'X',
    gameInProgress: true,
    score: { X: 0, O: 0, tie: 0 },
    winner: ''
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

  _toggleGameOver = player => {
    debugger;
    var { gameInProgress, score, winner } = this.state;
    gameInProgress = false;
    score[player]++;
    winner = player;
    return { gameInProgress, score, winner };
  };

  _handleClick = block => {
    var { score, board, gameInProgress, currentTurn, winner } = this.state;
    if (block.value === '' && gameInProgress) {
      const i = board.indexOf(block);
      board[i].value = currentTurn;
      this._hasPlayerWon()
        ? ({ gameInProgress, score, winner } = this._toggleGameOver(
            currentTurn
          ))
        : this._isGridFull()
          ? ({ gameInProgress, score, winner } = this._toggleGameOver('tie'))
          : (currentTurn = currentTurn === 'X' ? 'O' : 'X');
    }
    this.setState({
      board,
      currentTurn,
      gameInProgress,
      score,
      winner
    });
  };

  _emptyBlock = blockId => {
    return { id: blockId, value: '', key: Date.now() + blockId };
  };

  _resetBlock = () => {
    var block = [];
    for (let i = 0; i < 9; i++) block.push(this._emptyBlock(i));
    return block;
  };

  _isGridFull = () => {
    const emptyBlocks = this.state.board.filter(block => block.value === '');
    return emptyBlocks.length === 0;
  };

  _resetState() {
    this.setState({
      board: this._resetBlock(),
      gameInProgress: true,
      currentTurn: 'X',
      winner: ''
    });
  }

  componentWillMount() {
    this.setState({ board: this._resetBlock() });
  }

  render() {
    const { score, board, currentTurn, winner } = this.state;
    return (
      <div className="theme">
        <NavBar />
        <center>
          <Grid board={board} onClick={this._handleClick} />
          <StatusBar score={score} currentTurn={currentTurn} winner={winner} />
          {this.state.gameInProgress === false ? (
            <button className="newGame" onClick={this._resetState.bind(this)}>
              New Game
            </button>
          ) : null}
        </center>
      </div>
    );
  }
}
