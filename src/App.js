import React, { Component } from 'react';
import './App.css';
import SearchCardComponent from './Components/SearchCardComponent'
import NavbarComponent from './Components/NavbarComponent'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent/>
       <SearchCardComponent/>
      </div>
    );
  }
}

export default App;
