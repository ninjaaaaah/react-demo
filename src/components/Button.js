import React from "react"

export default class Counter extends React.Component {
    state = {
        value: 0,
        hover: false
    };

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