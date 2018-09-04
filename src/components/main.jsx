import React, { Component } from 'react';
import NavBar from './navBar';

export default class Main extends Component {
  state = {
    board: []
  };
  render() {
    return <NavBar />;
  }
}
