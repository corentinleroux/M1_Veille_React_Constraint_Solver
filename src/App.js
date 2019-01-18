import React, { Component } from 'react';
import './App.css';
import InputsComponent from './Components/InputsComponent';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Word Addition Puzzles !</h1>
        <InputsComponent></InputsComponent>
      </div>
    );
  }
}

export default App;
