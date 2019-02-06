import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state={
    bots: [],
    myArmy: []
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(res => res.json())
    .then(data => this.setState({bots: data}))
  }

  addBotHandler = (bot) => {
    let newArr = [...this.state.myArmy, bot]
    let uniqueArr =[...new Set(newArr)]
    this.setState({myArmy: uniqueArr})

  }

  removeHandler = (removeBot) => {
    let filterArr = this.state.myArmy.filter(bot => bot.id !== removeBot.id)
    this.setState({myArmy: filterArr})
  }

  render() {

    return (
      <div>
        <BotCollection bots={this.state.bots} addBotHandler={this.addBotHandler}/>
        <YourBotArmy myArmy={this.state.myArmy} removeHandler={this.removeHandler} />
      </div>
    );
  }

}

export default BotsPage;
