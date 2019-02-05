import React, { Component } from 'react';
import Cases from './Cases';
import './App.css';
export default class Board extends Component {
    render() {
        return <div>
            <table border="1">
                <tbody>
                    <tr>
                        <td><Cases/></td>
                        <td><Cases/></td>
                        <td><Cases/></td>
                    </tr>
                    <tr>
                        <td><Cases/></td>
                        <td><Cases/></td>
                        <td><Cases/></td>
                    </tr>
                    <tr>
                        <td><Cases/></td>
                        <td><Cases/></td>
                        <td><Cases/></td>
                    </tr>
                </tbody>

        </table>
        </div>;
    }
}
