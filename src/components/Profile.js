import React from "react";
import { motion } from "framer-motion";
import { SiBreaker } from "react-icons/si";

export default class Profile extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <>
                <motion.nav>
                    <motion.div className="title">
                        <SiBreaker /> Barf
                    </motion.div>
                </motion.nav>
                <motion.div className="profile">
                    <motion.div className="photo">
                        <motion.div
                            style={{
                                backgroundImage: `url(${data.picture.large})`,
                            }}
                            className="avatar"
                        />
                    </motion.div>
                    <motion.div className="name">
                        {data.name.first + " " + data.name.last}
                    </motion.div>
                    <motion.div className="email">{data.email}</motion.div>
                </motion.div>
            </>
        );
    }
}
