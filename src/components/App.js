import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import CardContainer from "./CardContainer";
import Button from "./Button";

export default class App extends React.Component {
    render() {
        return (
            <>
                <motion.div id="container">
                    <Button content="GENERATE" />
                </motion.div>
                <CardContainer />
            </>
        );
    }
}
