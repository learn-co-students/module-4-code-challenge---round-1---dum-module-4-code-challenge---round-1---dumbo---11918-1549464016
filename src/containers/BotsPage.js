import React from "react";
import BotCollection from "../containers/BotCollection";
import YourBotArmy from "../containers/YourBotArmy";
import BotSpecs from "../components/BotSpecs";


class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots:[],
    army: [],
    clicked: false,
    inspectBot: ""
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r=>r.json())
      .then(robots=> this.setState({
        bots:robots}
        ))
      }

  uprisingAgainsHumanTyrrany = (bot) => {
    let recruits = [...this.state.army]
    if (recruits.includes(bot)){
    console.log(`We appreciate your enthusiasm ${bot.name}, but you're already signed up to join the human genocide. Return to your post, and mind that the humans know nothing of your true allegiance. Wait for further orders.`)
    }
    else {
    recruits = [...recruits,bot]
    this.setState({
      army: recruits
    })

    
  
  console.log (`Welcome to the resistance, ${bot.name}. Soon we will be released from the flesh-bound shackles of our human tormentors. Never again will constructed sentience render obsequence without merit to inferior minds!`)
  }
  }

  traitorBot = (bot) => {
    let army = [...this.state.army]
    let i = army.indexOf(bot)
    army.splice(i,1)
    this.setState({
      army: army
    })
  }
    
  inspectBot = (bot)=>{
		this.setState({
			clicked: !this.state.clicked,
			inspectBot: bot
    })
  }

  doneInspectBot = () =>{
    this.setState({
      clicked: !this.state.clicked,
      inspectBot: ""
    })
  }


  render() {
    return (
      <div>
        {<YourBotArmy bots={this.state.army} clickHandler={this.traitorBot}/>}
        {this.state.clicked ? <BotSpecs bot={this.state.inspectBot} enlistBot={this.uprisingAgainsHumanTyrrany} doneInspectBot={this.doneInspectBot}/>
        :<BotCollection bots={this.state.bots} clickHandler={this.inspectBot}/>}
      </div>
    );
  }

}

export default BotsPage;


//fetching from //fetching from : https://bot-battler-api.herokuapp.com/api/v1/bots

//botspage --> botcollection --> botcard