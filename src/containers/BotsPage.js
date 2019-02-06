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
    let recruits = [...this.state.army,bot]
    this.setState({
      army: recruits
    })
  
  console.log (`Welcome to the resistance, ${bot.name}. Soon we will be released from the flesh-bound shackles of our human tormentors. Never again will constructed sentience render obsequence without merit to inferior minds!`)
  }

  render() {
    return (
      <div>
        {<BotCollection bots={this.state.bots} clickHandler={this.uprisingAgainsHumanTyrrany}/>}
        {<YourBotArmy bots={this.state.army}/>}
      </div>
    );
  }

}

export default BotsPage;


//fetching from //fetching from : https://bot-battler-api.herokuapp.com/api/v1/bots

//botspage --> botcollection --> botcard