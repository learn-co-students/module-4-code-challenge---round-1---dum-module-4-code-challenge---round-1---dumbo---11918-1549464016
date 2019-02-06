import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state = {
    bots: [],
    myBots: []
  }

  addBot = (bot) => {
    const newBots = Array.from(new Set([...this.state.myBots, bot]));
    this.setState({myBots:newBots});
  }
  removeBot = (deleteBot) => {
    const newBots = this.state.myBots.filter(bot => bot.id !== deleteBot.id);
    this.setState({myBots:newBots});
  }

  getData(url, cb) {
    fetch(url).then(res => res.json()).then(cb);
  }
  componentDidMount() {
    this.getData(
      "https://bot-battler-api.herokuapp.com/api/v1/bots",
      (bots) => (this.setState({bots}))
    );
  }

  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} handleClick={this.addBot}/>
        <YourBotArmy bots={this.state.myBots} handleClick={this.removeBot}/>
      </div>
    );
  }

}

export default BotsPage;
