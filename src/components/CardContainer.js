import React from "react";
import { motion } from "framer-motion";
import { Card } from "./Card";
import Events from "./Events.js";

const hiddenProfile = {
    visibility: `hidden`,
    height: 0,
    width: 0,
};
const shownProfile = {
    visibility: `unset`,
    height: `300px`,
    width: `500px`,
};

export default class CardContainer extends React.Component {
    state = {
        profiles: null,
    };

    constructor(props) {
        super(props);
        this.fetchProfile = this.fetchProfile.bind(this);
        this.removeChild = this.removeChild.bind(this);
    }

    getProfile = () =>
        fetch("https://randomuser.me/api")
            .then((p) => p.json())
            .then((p) => p.results[0]);

    async fetchProfile() {
        let profiles = await Promise.all([
            this.getProfile(),
            this.getProfile(),
            this.getProfile(),
        ]);
        this.setState({ profiles });
        console.log({ profiles });
    }

    componentDidMount() {
        Events.subscribe("generate", this.fetchProfile);
    }

    async removeChild() {
        let profiles = [...this.state.profiles].splice(1);
        profiles.push(await this.getProfile());
        this.setState({
            profiles,
        });
    }

    render() {
        let profiles = this.state.profiles;
        console.log(profiles);
        return (
            <motion.div id="card-container">
                {profiles &&
                    profiles.map((profile, i) => (
                        <Card
                            profile={profile}
                            key={profile.login.uuid}
                            index={i}
                            animate={profile ? shownProfile : hiddenProfile}
                            remove={this.removeChild}
                        />
                    ))}
            </motion.div>
        );
    }
}
