import React, { Component } from 'react';
import Api from '../../helpers/Api';
import Opening from '../Opening/Opening';
import './Openings.css';

class Openings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openings: [],
      description: ''
    };

    this.handleClick = this.handleClick.bind(this)
    this.getDescription = this.getDescription.bind(this)
    this.hideDescription = this.hideDescription.bind(this)
  }

  componentDidMount() {
    Api.getOpenings().then(openings => this.setState({ openings }));
  }

  getDescription(id) {
    Api.getOpeningDescription(id).then(opening => this.setState({ description: opening.description }))
  }

  handleClick(id) {
    this.getDescription(id)
    this.setState({
      openings: this.state.openings.map(opening => {
        opening.selected = opening.id === id;
        return opening;
      })
    })
  }

  hideDescription() {
    this.setState({
      openings: this.state.openings.map(opening => {
        opening.selected = false;
        return opening;
      }),
      description: ''
    })
  }

  render() {
    return (
      <section className="Openings">
        <h2>Hiring</h2>
        <ul>{this.state.openings.map(opening =>
          <Opening
            key={opening.id}
            {...opening}
            onClickHandler={this.handleClick}
            onDoubleClickHandler={this.hideDescription}
          />)}
        </ul>
        {this.state.description && <article>{this.state.description}</article>}
      </section>
    );
  }
}

export default Openings;
