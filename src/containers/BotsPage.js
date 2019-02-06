import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
 
  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount() {

    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(bots => this.setState({bots}))

  }

  sendToBotArmy = (botObj) => {
    this.setState({
      botArmy: [...this.state.botArmy, botObj]
    })
  }
  

  render() {
    return (
      <React.Fragment>
        { < BotCollection bots={this.state.bots} sendToBotArmy={this.sendToBotArmy} />}
        { < YourBotArmy botArmy={this.state.botArmy} /> }
      </React.Fragment>
    );
  }

}

export default BotsPage;
