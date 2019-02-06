import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    yourBotArmyIds: []
  }

  storeBots = (bots) => {
    this.setState({
      bots: bots
    })
    // helper method to store bots in state
  }

  fetchBots(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(this.storeBots)
    // helper method to handle fetch
  }
    
  componentDidMount(){
    this.fetchBots()
    // waits until page mounts to start fetch
  }

  robotClickHandler = (id) => {
    this.setState({
      yourBotArmyIds: [...this.state.yourBotArmyIds, id]
    })
  }

  botDischarge = (id) => {
    let newArray = this.state.yourBotArmyIds.filter(botId => {
      return botId !== id
    })
    this.setState({
      yourBotArmyIds: [...newArray]
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy botDischarge={this.botDischarge} bots={this.state.bots} yourBotArmyIds={this.state.yourBotArmyIds} />
        <BotCollection robotClickHandler={this.robotClickHandler} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
