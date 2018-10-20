import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';

import About from './About/About';
import Employees from './Employees/Employees';
import Openings from './Openings/Openings';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='navbar'>
          <Link to='/' className='accent'>ACME Ltd.</Link>
          <Link to='/team'>Team</Link>
          <Link to='/careers' className='justify-left'>Careers</Link>

          <Route exact path='/' component={About} />
          <Route path='/team' component={Employees} />
          <Route path='/careers' component={Openings} />
        </div>
      </Router>
    );
  }
}

export default App;
