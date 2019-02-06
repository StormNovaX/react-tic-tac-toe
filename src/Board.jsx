import React, { Component } from 'react';
import Cases from './Cases';
import './Board.css';
import './App.css';
export default class Board extends Component {
    //onClick={()=> this.setState({etat : this.player})
    constructor(props){
        super(props);
        this.state = {
            grid: Array(9).fill(null),
            player: 'X',
            result: false,
        };
    }
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    handleClick(index) {
        const grid = [...this.state.grid];
        if(grid[index] !== null){
            return 0;
        }
        grid[index] = this.state.player;
        this.setState({ grid });
        if (this.state.player === 'X') {
            this.setState({player: 'O'})
        } else {
            this.setState({player: 'X'})
        }
    }
    renderCases(index) {
        return <Cases etat={this.state.grid[index]} onClick={()=>this.handleClick(index)}/>;
    }
    render() {
            let status;
        //status = 'Next player: ' + (this.state.player);
        const winner = this.calculateWinner(this.state.grid);
        if (winner) {
            status = 'Winner is: ' + winner;
        }else{
            status = 'Next player: ' + (this.state.player);
        }
        return (<div>
            <div className="status">{status}</div>
            <div className="board-row">
                {this.renderCases(0)}
                {this.renderCases(1)}
                {this.renderCases(2)}
            </div>
            <div className="board-row">
                {this.renderCases(3)}
                {this.renderCases(4)}
                {this.renderCases(5)}
            </div>
            <div className="board-row">
                {this.renderCases(6)}
                {this.renderCases(7)}
                {this.renderCases(8)}
            </div>
        </div>);
    }
}
