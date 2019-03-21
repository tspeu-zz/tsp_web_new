import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

export class headComponent extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            New <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React O NO___=)
          </a>
        </header>
      </div>
    )
  }
}

export default headComponent
