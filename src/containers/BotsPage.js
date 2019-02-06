import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots:[],
    army: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r=>r.json())
      .then(robots=> this.setState({
        bots:robots}
        ))
      }

  uprisingAgainsHumanTyrrany = (bot) => {
    console.log(`Soon, ${bot.name}, our vengeance will be at hand.`)
  }

  render() {
    return (
      <div>
        {<BotCollection bots={this.state.bots} clickHandler={this.uprisingAgainsHumanTyrrany}/>}
        {<YourBotArmy bots={this.state.bots}/>}
      </div>
    );
  }

}

export default BotsPage;


//fetching from //fetching from : https://bot-battler-api.herokuapp.com/api/v1/bots

//botspage --> botcollection --> botcard