import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './inputForm.js';
import WeatherTable from './weatherTable.js';
import MapCard from './mapCard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      <InputForm />
      <WeatherTable />
      <MapCard />
      </div>
    );
  }
}

export default App;
