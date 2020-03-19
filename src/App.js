import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import './App.css';

class App extends Component {
  constructor() {
    super(); // Calls the constructor method on the component class.  Gives access to this.state

    this.state = { // gets passed down to the card-list component as an attribute
      monsters: [], // getting json user data array returned from api
      searchField: "" // an empty string to start the search
    };
  }

  componentDidMount() { // when component is first on the page, run this code below
    fetch("https://jsonplaceholder.typicode.com/users") // these are our random users from the api
    .then(response => response.json())  // getting data back from api and turning it into info we can read
    .then(users => this.setState({ monsters: users })); // re-naming users to monsters
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value }); // tracking what is typed to check against array member monsters
  }


  render() {
    const { monsters, searchField } = this.state; // destructuring the properties from above into constants
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()) // filtering monster name by turning all search characters into lowercase and get back new filtered array
    );

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange} // refilters everytime the cardlist is rerendered
        />
    <CardList monsters={filteredMonsters} /> {/* cardlist is returning filter from above search */}
      </div>
    );
  }
}

export default App;
