import React from "react";
import { motion } from "framer-motion";
import CardContainer from "./CardContainer";
import Events from "./Events.js";
// import Button from './Button'

const hover = { scale: 1.1, backgroundPosition: [`0%`, `100%`] };

export default class App extends React.Component {
    broadcastEvent = () => {
        Events.dispatch("generate");
    };

    render() {
        return (
            <>
                <motion.div id="container">
                    <motion.button
                        id="toggle"
                        whileHover={hover}
                        whileTap={{ scale: 0.9 }}
                        onClick={this.broadcastEvent}
                    >
                        GENERATE
                    </motion.button>
                </motion.div>
                <CardContainer />
            </>
        );
    }
}
