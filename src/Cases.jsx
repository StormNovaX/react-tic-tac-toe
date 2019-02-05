import React, { Component } from 'react';
import './App.css';
export default class Cases extends Component{
    render(){
        return <div className="case">{this.props.etat}</div>;
    }
}
