import React from "react";
import { motion } from "framer-motion";
import { SiBreaker } from "react-icons/si";

export default class Details extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <>
                <motion.nav>
                    <motion.div className="title-alt">
                        <SiBreaker /> Barf
                    </motion.div>
                </motion.nav>
                <motion.div className="details">
                    <motion.span>{"GENDER:\t" + data.gender}</motion.span>
                    <motion.span>
                        {"BIRTHDAY:\t" + data.dob.date.substring(0, 10)}
                    </motion.span>
                    <motion.span>{"MOBILE:\t" + data.cell}</motion.span>
                    <motion.span>
                        {"HOMETOWN:\t" +
                            data.location.city +
                            ", " +
                            data.location.country}
                    </motion.span>
                </motion.div>
            </>
        );
    }
}
