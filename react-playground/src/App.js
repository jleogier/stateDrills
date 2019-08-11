// import React from 'react';
import React, { Component } from 'react';
import './App.css';
// import TheDate from './state/TheDate';
// import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>YOUR APPLICATION NAME!</h1>
        {/* <TheDate/>
        <Counter/>
        <Counter count={123} /> */}
        <HelloWorld/>
        <Bomb/>
        <RouletteGun/>
      </div>
    );
  }
}

export default App;