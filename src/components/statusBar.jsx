import React, { Component } from 'react';

export default class StatusBar extends Component {
  render() {
    const { X, tie, O } = this.props.score;
    const { currentTurn } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">X: {X}</div>
          <div className="col-md-4">Tie: {tie}</div>
          <div className="col-md-4">O: {O}</div>
        </div>
        <div className="row">
          <div className="col-md-12 center pt-5">Turn: {currentTurn}</div>
        </div>
      </div>
    );
  }
}
