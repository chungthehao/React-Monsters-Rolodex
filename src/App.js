import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super(); // Call the constructor method on the 'Component' class

    // Default value
    this.state = {
      string: 'Hi Henry Chung!'
    };
  }

  render() {
    // Khi state thay doi (bang setState), this render method gets called again
    // Tat ca moi thu nhin giong HTML deu la JSX (div, src, p, button, onClick,...)
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>{this.state.string}</p>

          <button onClick={() => this.setState({ string: 'Hello Hao!' })}>
            Change Text
          </button>
        </header>
      </div>
    );
  }
}

export default App;
