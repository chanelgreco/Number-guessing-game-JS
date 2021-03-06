import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Input from '@material-ui/core/Input';

import logo from './logo.svg';
import './App.css';

import UserFeedback from './Components/UserFeedback';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNumber: Math.floor(Math.random() * 100),
      userInput: ''
    };
  }

  handleInput = event => {
    this.setState({ userInput: event.target.value });
  };

  startOver = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * 100),
      userInput: ''
    });
  };

  render() {
    return (
      <div className="App">
        <AppBar position="static" color="primary" className="App-Bar">
          <Toolbar>
            <img src={logo} className="App-logo" alt="logo" />
          </Toolbar>
        </AppBar>
        <main>
          <h2 className="subtitle">
            I'm thinking of a number between 0 and 100.
            <br />
            Can you guess it?
          </h2>
          <form>
            <Input
              type="text"
              placeholder="e.g. 83"
              value={this.state.userInput}
              onChange={this.handleInput}
            />
          </form>
          <UserFeedback
            randomNumber={this.state.randomNumber}
            userInput={this.state.userInput}
            startOver={this.startOver}
          />
        </main>
      </div>
    );
  }
}

export default App;
