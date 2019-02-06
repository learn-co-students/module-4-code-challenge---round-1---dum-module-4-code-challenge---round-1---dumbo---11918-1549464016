import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    botArmy: []
  }

  componentDidMount = () => {
    fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
    .then(r => r.json())
    .then(bots => this.setState({ bots: bots }))
  }

  mapBots = () => {
    return this.state.bots.map(bot => (
      <BotCollection key={bot.id} bot={bot} clickHandler={this.clickHandler}/>
    ))
  }

  clickHandler = (botObj, botID) => {
    this.preventDefault()
    let allBots = [...this.state.bots]
    let army = allBots.filter(bot => (bot.id === botObj.id))
    this.setState({
      botArmy: army
    })
  }

  renderBotArmy = botObj => {
    console.log(botObj)
    return this.state.botArmy.map(bot => (
      <YourBotArmy key={bot.id} bot={bot} clickHandler={this.clickHandler}/>
    ))
  }


  render(){
    // console.log('botspage', this.state.bots);
    return (
      <div>
      {this.mapBots()}
      {this.renderBotArmy()}
      </div>
    );
  }

}

export default BotsPage;
