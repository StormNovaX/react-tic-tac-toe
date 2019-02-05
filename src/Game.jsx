import React, { Component } from 'react';
import './App.css';
import Board from './Board';

export default class Game extends Component {
    render() {
        return <div><h1>Next Player : X</h1><Board/></div>;
    }
}
