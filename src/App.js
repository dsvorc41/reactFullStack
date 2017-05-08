import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './inputForm.js';
import WeatherTable from './weatherTable.js';
import MapCard from './mapCard.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: true
    };
  }

  renderInputForm(){
    return(
      <div className='inputForm'>
        <InputForm />
      </div>
    )
  }

  renderWeatherMapAndTable(data){
    if (data){
      return(
        <div>
          <WeatherTable />
          <MapCard />
        </div>
      )
    }
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.renderInputForm()}        
        {this.renderWeatherMapAndTable(this.state.data)}        
      </div>
    );
  }
}

export default App;
