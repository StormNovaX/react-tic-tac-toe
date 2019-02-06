import React, { Component } from 'react';
import './App.css';
import Game from './Game';
import Clignote from './Clignote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game/>
        <Clignote/>
      </div>
    );
  }
}
export default App;
