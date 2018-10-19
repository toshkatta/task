import React, { Component } from 'react';
import './App.css';

import About from './About';
import Employees from './Employees';
import Openings from './Openings';

class App extends Component {
  render() {
    return (
      <div>
        <About />
        <Employees />
        <Openings />
      </div>
    );
  }
}

export default App;
