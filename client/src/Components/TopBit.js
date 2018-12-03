import React, { Component } from 'react';
import '../App.css';

const TopBit = (props) => {
    return(
    <header className="App-header">
        <img src='Jenn.jpg' className={props.rotate ? "App-logo" : 'App-logo-dont-rotate'} alt="logo" />
        <h1 className="App-title">Welcome </h1>
    </header>
    )
}

export default TopBit