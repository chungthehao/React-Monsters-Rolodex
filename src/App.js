import React /*, { Component }*/ from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super(); // Call the constructor method on the 'Component' class

    // Default value
    this.state = {
      monsters: [],
      searchField: ''
    };

    // Bind 'this' for our own method
    // (The bind() method creates a new function that, when called, has its this keyword set to the provided value)
    //this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = e => {
    // this.setState is async method -> not happening immediately -> console.log this.state sẽ thấy chưa update
    this.setState({ searchField: e.target.value }, () =>
      console.log('Callback', this.state)
    );
    console.log('Normal', this.state);
  };

  render() {
    const { monsters, searchField } = this.state;
    // filter method get back a new array
    const filteredMonsters = monsters.filter(m =>
      m.name.toLowerCase().includes(searchField.toLowerCase())
    );

    // Khi state thay doi (bang setState), this render method gets called again
    // Tat ca moi thu nhin giong HTML deu la JSX (div, src, p, button, onClick,...)
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>

        <SearchBox
          placeholder='Search monsters...'
          handleChange={this.handleChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
