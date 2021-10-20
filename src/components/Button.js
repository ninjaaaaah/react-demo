import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Events from "./Events.js";

const hover = { scale: 1.1, backgroundPosition: [`0%`, `100%`] };

const variants = {
    enter: () => {
        return {
            scale: 0,
        };
    },
    load: () => {
        return {
            scale: 1,
        };
    },
    exit: () => {
        return {
            scale: 0,
        };
    },
};

export default class Button extends React.Component {
    broadcastEvent = () => {
        Events.dispatch("generate");
        this.setState({ pressed: true });
        console.log("exit");
    };

    state = {
        pressed: false,
    };

    render() {
        return (
            <AnimatePresence>
                {!this.state.pressed && (
                    <motion.button
                        id="toggle"
                        whileHover={hover}
                        whileTap={{ scale: 0.9 }}
                        onClick={this.broadcastEvent}
                        variants={variants}
                        initial="enter"
                        animate="load"
                        exit="exit"
                        transition={{
                            scale: { type: "spring", duration: 0.1 },
                        }}
                    >
                        {this.props.content}
                    </motion.button>
                )}
            </AnimatePresence>
        );
    }
}
