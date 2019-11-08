import React /*, { Component }*/ from 'react';

import { CardList } from './components/card-list/card-list.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super(); // Call the constructor method on the 'Component' class

    // Default value
    this.state = {
      monsters: [],
      searchField: ''
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
        <input
          type='search'
          placeholder='Search monsters...'
          onChange={e => {
            // this.setState is async method -> not happening immediately -> console.log this.state sẽ thấy chưa update
            this.setState({ searchField: e.target.value }, () =>
              console.log('Callback', this.state)
            );
            console.log('Normal', this.state);
          }}
        />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
