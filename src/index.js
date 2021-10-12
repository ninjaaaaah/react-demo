import ReactDOM from 'react-dom';
import React from 'react';
import './style.css'
import Button from './components/Button'

const App = () => {
    return <Button id="toggle"/>;
}
ReactDOM.render(<App />, document.getElementById(`app`));
