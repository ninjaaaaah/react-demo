import React from "react"

const defaultState = {
    transform: "scale(1)",
    backgroundColor: 'white'
}

const hoverState = {
    transform: "scale(1.5)",
    backgroundColor: 'red'
}

export default class Counter extends React.Component {
    state = {
        value: 0,
        hover: false
    };

    handleClick = () => {
        this.setState(prevState => ({
            value: prevState.value + 1
        }));
    }

    handleMouseEnter = () => {
        this.setState(() => ({
            hover: true
        }));
    }

    handleMouseLeave = () => {
        this.setState(() => ({
            hover: false
        }));
    }

    render() {
        return (
            <button 
                id={this.props.id} 
                onClick={this.handleClick} 
                // onMouseEnter={this.handleMouseEnter}
                // onMouseLeave={this.handleMouseLeave}
                // style={this.state.hover ? hoverState : defaultState}
            >
                {this.state.value}
            </button>
        );
    }
}