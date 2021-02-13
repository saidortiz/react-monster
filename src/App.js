import React, { Component} from 'react';
import {CardLists} from './components/card-list/card-list.component';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {

  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField: ''
    };

    
  }


componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then (response => response.json())
  .then(users => this.setState({ monsters: users}));
}

 handleChange = (e) => {
   this.setState({searchField: e.target.value})
 }

  render() {
    const {  monsters, searchField } =  this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      
      );
    return (
          <div className="App">
                    <h1>Monster Rolodex</h1>
                      <SearchBox
                        placeholder="search monsters"
                        handleChange={this.handleChange}  
                      />
                     <CardLists monsters={filteredMonsters}  />  
          </div>
        );
  }
}


/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
