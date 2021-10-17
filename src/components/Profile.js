import React from "react"
import {motion} from "framer-motion"

export default class Profile extends React.Component {
    render () {
        const data = this.props.data;
        return (
            <>
                <motion.nav>
                    <motion.div id='title'>
                        Barf
                    </motion.div>
                </motion.nav>
                <motion.div id="profile">
                    <motion.div id="photo">
                        <motion.div style={{backgroundImage: `url(${data.picture.large})`}} id="avatar"/>
                    </motion.div>
                    <motion.div id="name">
                        {data.name.first + ' ' + data.name.last}
                    </motion.div>
                    <motion.div id="email">
                        {data.email}
                    </motion.div>
                </motion.div>
            </>
        )
    }
}