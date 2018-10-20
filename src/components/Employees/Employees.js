import React, { Component } from 'react';
import Api from '../../helpers/Api';
import Employee from '../../components/Employee/Employee'
import './Employees.css';

class Employees extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: {
        big: [],
        small: []
      }
    };
  }

  componentDidMount() {
    Api.getEmployees().then(employees => this.setState({
      employees: {
        big: employees.filter((employee) => employee.big),
        small: employees.filter((employee) => !employee.big)
      }
    }));
  }

  render() {
    return (
      <section className="Employees">
        <h2>Team</h2>
        <div className="big">{this.state.employees.big.map(employee => <Employee key={employee.id} {...employee} />)}</div>
        <div className="small">{this.state.employees.small.map(employee => <Employee key={employee.id} {...employee} />)}</div>
      </section>
    );
  }
}

export default Employees;
