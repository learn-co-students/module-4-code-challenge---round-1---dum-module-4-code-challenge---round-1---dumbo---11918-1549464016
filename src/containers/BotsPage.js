import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {

  state = {
    myBots: []
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
        <BotCollection addBot={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
