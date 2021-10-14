import React from "react"
import {motion} from "framer-motion"
import Button from './Button'

const hover = { scale: 1.1, backgroundPosition: [`0%`,`100%`]};

export default class App extends React.Component {
    state = {
        profile: null
    }

    fetchProfile = async _ => {
        const profile = (await (await fetch('https://randomuser.me/api')).json()).results[0];
        this.setState({profile});
        console.log(this.state.profile);
    }

    render() {
        this.fetchProfile;
        console.log(this.state.profile);
        return(
            <>
                <motion.div 
                    id="container"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    >
                    <motion.button
                        id="toggle"
                        whileHover={hover}
                        whileTap={{ scale: 0.9 }}
                        onClick={this.fetchProfile}
                    >
                        GENERATE
                    </motion.button>
                </motion.div>
                <motion.div id="display">
                    {
                        this.state.profile && <img src={this.state.profile.picture.large} /> 
                    }
                </motion.div>
            </>
        )
    }
}