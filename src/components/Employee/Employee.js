import React, { Component } from 'react';

class Employee extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            picture: '',
        }
    }

    componentWillMount() {
        const { name, picture } = this.props;

        this.setState({
            name: name,
            picture: picture,
        })
    }

    render() {
        const { name, picture } =  this.state;
        return (
            <div className="employee">
                <img src={picture} alt="employee" />
                <span>{name}</span>
            </div>
        );
    }
}

export default Employee;
