import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {

  state = {
    myBots: [],
    detailedBot: undefined
  }

  showDetails = (e, bot) => {
    this.setState({detailedBot: bot})
  }

  hideDetails = (e) => {
    this.setState({detailedBot: undefined})
  }

  addBot = (e, bot) => {
    let filter = this.state.myBots.filter(rbot => rbot.id !== bot.id)
    this.setState({myBots: [...filter, bot]})
  }

  removeBot = (e, bot) => {
    let filter = this.state.myBots.filter(rbot => rbot.id !== bot.id)
    this.setState({myBots: [...filter]})
  }

  render() {
    return (
      <div>
        <YourBotArmy myBots={this.state.myBots} removeBot={this.removeBot}/>
        {(this.state.detailedBot) ? <BotSpecs bot={this.state.detailedBot} addBot={this.addBot} hideDetails={this.hideDetails}/> : <BotCollection showDetails={this.showDetails}/>}
      </div>
    );
  }

}

export default BotsPage;
