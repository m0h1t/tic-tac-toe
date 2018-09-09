import React, { Component, Fragment } from 'react';
import '../styles/css/grid.css';

export default class GridBlock extends Component {
  _getBlockClass = () => {
    const { value } = this.props.block;
    if (value === 'X') {
      return 'player1GridBlock';
    } else if (value === 'O') {
      return 'player2GridBlock';
    }
    return '';
  };

  _addGridBlock = () => {
    const { value } = this.props.block;
    return (
      <td
        // className={this._getBlockClass()}
        onClick={this.props.onClick.bind(this, this.props.block)}
      >
        {value}
      </td>
    );
  };

  render() {
    return <Fragment>{this._addGridBlock()}</Fragment>;
  }
}
