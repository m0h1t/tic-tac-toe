import React, { Component, Fragment } from 'react';
import '../styles/css/grid.css';

export default class GridBlock extends Component {
  _addGridBlock = () => {
    const { value } = this.props.block;
    return (
      <td onClick={this.props.onClick.bind(this, this.props.block)}>{value}</td>
    );
  };

  render() {
    return <Fragment>{this._addGridBlock()}</Fragment>;
  }
}
