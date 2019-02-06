import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";
import YourBotArmy from './containers/YourBotArmy'

class App extends Component {

  state = {
    bots: [],
    favoriteBots: ''
  }
  componentDidMount () {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(data => this.setState({
        bots: data
      }))
  }

enlistBot = (e, bot) => {
  let newBotsArray = [...this.state.bots]
  let addedBot = newBotsArray.filter(oneBot => oneBot.id === bot.id)
  addedBot[0].favorite = !addedBot[0].favorite
  // debugger
  this.setState({
    bots: newBotsArray
  })
  // debugger


}


  render() {
    let newNewBotsArray = [...this.state.bots]
    let favoriteBots = newNewBotsArray.filter(bot => {if(bot.favorite){
      return {bot}
    }})

    console.log(this.state);
    return (
      <div className="App">
      <YourBotArmy botsArray={favoriteBots} clickHandler={this.enlistBot}/>
        <BotsPage botsAray={this.state.bots} clickHandler={this.enlistBot}/>
      </div>
    );
  }
}

export default App;
