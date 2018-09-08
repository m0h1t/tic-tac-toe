import React, { Component } from 'react';
import '../styles/css/statusBar.css';

export default class StatusBar extends Component {
  _getStatusClass = player => {
    debugger;
    let classes = 'col';
    classes +=
      this.props.currentTurn === player ? ' currentTurn' : ' inactivePlayer';
    return classes;
  };

  _getResult = () => {
    const { winner } = this.props;
    if (winner === '') {
      return winner;
    } else if (winner === 'Tie') {
      return 'Tie';
    } else {
      return 'Winner: ' + winner;
    }
  };

  render() {
    const { X, tie, O } = this.props.score;
    return (
      <div className="container score">
        <div className="row">
          <div className={this._getStatusClass('X')}>Player 1 (X): {X}</div>
          <div className="col inactivePlayer">Tie: {tie}</div>
          <div className={this._getStatusClass('O')}>Player 2 (O): {O}</div>
        </div>
        <div className="row mt-4">
          <div className="col">{this._getResult()}</div>
        </div>
      </div>
    );
  }
}
