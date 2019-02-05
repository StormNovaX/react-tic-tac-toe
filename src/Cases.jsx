import React, { Component } from 'react';
import './App.css';
import './Cases.css';
export default class Cases extends Component{

    render(){
        return <div className="cases" onClick={this.props.onClick}>{this.props.etat}</div>;
    }
}
