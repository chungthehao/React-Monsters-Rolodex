import React /*, { Component }*/ from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super(); // Call the constructor method on the 'Component' class

    // Default value
    this.state = {
      monsters: [
        { name: 'Frankenstein', id: '6wy2' },
        { name: 'Dracula', id: '4asw' },
        { name: 'Zombie', id: '9snw' }
      ]
    };
  }

  render() {
    // Khi state thay doi (bang setState), this render method gets called again
    // Tat ca moi thu nhin giong HTML deu la JSX (div, src, p, button, onClick,...)
    return (
      <div className='App'>
        {// Tra ve 1 mang cac JSX, React tu hieu la render nhung cai trong mang do.
        // Key de React biet duoc thang nao thay doi thi chi update thang do thoi, ko re-render lai toan bo ca list
        this.state.monsters.map(monster => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
