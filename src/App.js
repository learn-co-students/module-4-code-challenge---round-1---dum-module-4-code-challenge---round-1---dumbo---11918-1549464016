import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  state = {
    allRobots: []
  }

  componentDidMount = () => {
    this.fetchBots();
  }

  fetchBots = () => {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(robObj => this.setState({allRobots: robObj}))
  }


  render() {
    return (
      <div className="App">
        <BotsPage robots={this.state.allRobots}/>
      </div>
    );
  }
}

export default App;
