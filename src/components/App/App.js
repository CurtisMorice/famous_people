import React, { Component } from 'react';

import './App.css';
import Header from '../Header/Header';
import FamousPeople from '../Famous_People/famous_people';

class App extends Component {
  render() {
    return (
      <div className="App">
        < Header />
        < FamousPeople />
        
      </div>
    );
  }
}

export default App;  

