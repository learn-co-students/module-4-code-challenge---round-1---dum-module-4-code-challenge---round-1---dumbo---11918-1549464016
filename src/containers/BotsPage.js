import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state = {
    bots: [],
    myBots: [],
    specView: false,
    currentBot: null
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
  toggleCurrentView = () => {
    let specView = !this.state.specView;
    this.setState({specView});
  }
  setCurrentBot = (currentBot) => {
    this.setState({currentBot});
    this.toggleCurrentView();
  }

  displayCurrentView(specsView) {
    if (specsView) {
      return <BotSpecs bot={this.state.currentBot} handleLibrary={{enlist:this.addBot, back: this.toggleCurrentView}}/>
    } else {
      return <BotCollection bots={this.state.bots} handleClick={this.setCurrentBot}/>
    }
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.myBots} handleClick={this.removeBot}/>
        {this.displayCurrentView(this.state.specView)}
      </div>
    );
  }

}

export default BotsPage;
