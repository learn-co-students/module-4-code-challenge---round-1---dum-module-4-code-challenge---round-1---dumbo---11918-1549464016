import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: []
  }

  componentDidMount = () => {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(r => r.json())
    .then(data => this.setState({
      bots: data
    }))
  }

  addToArmy = botObj => {
    if (this.state.army.filter(bot => bot.id === botObj.id).length === 0){
      this.setState({ army: [botObj, ...this.state.army]})
    }
  }

  removeArmy = botObj => {
    let updateArmy = this.state.army.filter(bot => bot.id !== botObj.id)
      this.setState({ army: updateArmy })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} clickHandler={this.removeArmy}/>
        <BotCollection bots={this.state.bots} clickHandler={this.addToArmy}/>
      </div>
    );
  }

}

export default BotsPage;
