import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
class BotsPage extends React.Component {
  state = {
    robots: [],
    army: []
  }

  componentDidMount() {
    this.fetchs()
  }

  addToArmy = (bot) => {
    const { army } = this.state
    let enlisted = army.some(robot => robot.id === bot.id)
    if(!enlisted) {
      this.setState({army: [...army, bot]})
    }
  }

  fetchs = () => {
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
    .then(res => res.json())
    .then(robots => this.setState({robots}))
  }

  render() {
    return (
      <div>
        <YourBotArmy army={this.state.army}/>
        <BotCollection robots={this.state.robots} addToArmy={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
