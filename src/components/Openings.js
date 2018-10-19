import React, { Component } from 'react';
import Api from '../helpers/Api';
import './Openings.css';

class Openings extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      openings: []
    };
  }

  componentDidMount() {
    Api.getOpenings().then(openings => this.setState({ openings }));
  }

  render() {
    return (
      <section className="Openings">
        <h2>Hiring</h2>
        <ul>{this.state.openings.map(opening => <li>{opening.title}</li>)}</ul>
      </section>
    );
  }
}

export default Openings;
