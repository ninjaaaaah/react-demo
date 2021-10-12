import React from "react"
import Button from './Button'

export default class App extends React.Component {
    state = {
        profile: {}
    }

    generateProfile = async _ => {
        const profile = (await (await fetch('https://randomuser.me/api')).json()).results[0];
        console.log(profile);
        this.setState({profile});
        console.log(this.state.profile);
    }

    render() {
        return(
            <>
                <button id="toggle" onClick={this.generateProfile}>GENERATE</button>
                <div id="profile"></div>
            </>
        )
    }
}