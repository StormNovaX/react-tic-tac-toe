import React, { Component } from 'react';
import Cases from './Cases';
import './App.css';
export default class Board extends Component {
    render() {
        return <div>
            <table border="1">
                <tbody>
                    <tr>
                        <td><Cases etat={0}/></td>
                        <td><Cases etat={1}/></td>
                        <td><Cases etat={2}/></td>
                    </tr>
                    <tr>
                        <td><Cases etat={3}/></td>
                        <td><Cases etat={4}/></td>
                        <td><Cases etat={5}/></td>
                    </tr>
                    <tr>
                        <td><Cases etat={6}/></td>
                        <td><Cases etat={7}/></td>
                        <td><Cases etat={8}/></td>
                    </tr>
                </tbody>

        </table>
        </div>;
    }
}
