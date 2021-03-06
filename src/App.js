import React from 'react';

import { CardList } from './components/CardList/CardList';
import { SearchBox } from './components/SearchBox/SearchBox';

import './App.css';
class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => {
    this.setState({ searchString: e.target.value });
  };

  render() {
    const { monsters, searchString } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    );

    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} placeholder='search monsters' />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
