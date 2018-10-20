import React, { Component } from 'react';
import './Opening.css';

class Opening extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: null,
            title: '',
            selected: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        const { id, title, selected } = this.props;

        this.setState({
            id: id,
            title: title,
            selected: selected
        });
    }

    componentWillReceiveProps() {
        const { selected } = this.props;

        this.setState({
            selected: selected
        });
    }

    async handleClick() {
        if(!this.state.selected) {
            this.props.onClickHandler(this.state.id);
        } else {
            await this.props.onDoubleClickHandler();
            this.setState({
                selected: false
            });
        }
    }


    render() {
        const { title, selected } = this.state;
        return (
            <li onClick={this.handleClick} className={selected ? 'selected' : ''}>{title}</li>
        );
    }
}

export default Opening;
