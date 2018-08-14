import React, { Component } from 'react';
import logo from './logo.svg';
import Calendars from './Components/Calendars';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {this.props.children}
      </div>
    );
  }
}

export default App;
