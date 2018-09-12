import React, { Component } from 'react';
import GridBlock from './gridBlock';

export default class Grid extends Component {
  _renderGridBlock(num) {
    const { board } = this.props;
    return (
      <GridBlock
        block={board[num]}
        key={board[num].key}
        onClick={this.props.onClick}
      />
    );
  }

  render() {
    return (
      <table>
        <tbody>
          <tr>
            {this._renderGridBlock(0)}
            {this._renderGridBlock(1)}
            {this._renderGridBlock(2)}
          </tr>
          <tr>
            {this._renderGridBlock(3)}
            {this._renderGridBlock(4)}
            {this._renderGridBlock(5)}
          </tr>
          <tr>
            {this._renderGridBlock(6)}
            {this._renderGridBlock(7)}
            {this._renderGridBlock(8)}
          </tr>
        </tbody>
      </table>
    );
  }
}
