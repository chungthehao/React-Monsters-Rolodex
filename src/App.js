import React /*, { Component }*/ from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super(); // Call the constructor method on the 'Component' class

    // Default value
    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    // Khi state thay doi (bang setState), this render method gets called again
    // Tat ca moi thu nhin giong HTML deu la JSX (div, src, p, button, onClick,...)
    return (
      <div className='App'>
        <CardList thamSo={1 + 3} name='Henry Chung'>
          {// Tra ve 1 mang cac JSX, React tu hieu la render nhung cai trong mang do.
          // Key de React biet duoc thang nao thay doi thi chi update thang do thoi, ko re-render lai toan bo ca list
          this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
