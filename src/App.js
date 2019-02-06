import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";


class App extends Component {

  state = {
    allRobots: [],
    botArmy: []
  }

  handleClick = (event) => {
    let newArr = []
    let armyBots = [...this.state.allRobots];
    let myBot = armyBots.find(bot => bot.id === event.id)
    newArr = [...newArr, myBot]
    this.setState({
      botArmy: [...newArr, myBot]
    })
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
        <BotsPage 
          robots={this.state.allRobots} 
          botArmy={this.state.botArmy}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
