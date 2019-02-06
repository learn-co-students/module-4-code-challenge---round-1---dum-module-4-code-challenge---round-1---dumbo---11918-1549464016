import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {

  state = {
    bots: [],
    yourBots: [],
    specClick: false,
    specBot: []
  }

  clickHandler = botObj => {
    if (!this.state.yourBots.includes(botObj)) {
      this.setState({
        yourBots: [botObj, ...this.state.yourBots]
      })
    } else if (this.state.yourBots.includes(botObj)) {
        let newArmy = [...this.state.yourBots]
        let botIndex = newArmy.indexOf(botObj)
        newArmy.splice(botIndex, 1)
        this.setState({
          yourBots: newArmy
        })
    }
  }

  specHandler = botObj => {
    this.setState({
      specClick: !this.state.specClick,
    })
    if (this.state.specClick) {
      {this.setState({
        specBot: [botObj, ...this.state.specBot]
      })}
    } else {
      let emptyBot = []
      this.setState({
        specBot: emptyBot
      })
    }
  }

  componentDidMount() {
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(res => res.json())
      .then(bots => {
        this.setState({
          bots
        })
      })
  }

  conditional = () => {
    if (this.state.yourBots.length > 0 && this.specClick = false) {
      return < YourBotArmy bots={this.state.yourBots} clickHandler={this.specHandler}/>
    } else if (this.state.yourBots.length > 0 && this.specClick = true) {
      return <BotSpecs bot={this.state.specBot}>
    }}} }




  render() {
    return (
      <div>
        {this.conditional()}
        {this.state.bots.length > 0
          ? (<BotCollection bots={this.state.bots} clickHandler={this.clickHandler}/>)
          : (<h1>Loading</h1>)
        }
     </div>
    );
  }

}

export default BotsPage;
