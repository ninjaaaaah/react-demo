import React from "react";
import CardContainer from "./CardContainer";
import Button from "./Button";

export default class App extends React.Component {
    render() {
        return (
            <>
                <Button content="GENERATE" />
                <CardContainer />
            </>
        );
    }
}
