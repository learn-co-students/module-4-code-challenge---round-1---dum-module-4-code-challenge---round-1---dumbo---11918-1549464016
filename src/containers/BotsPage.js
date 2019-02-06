import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    botList: [],
    army: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(response => response.json())
      .then(botData =>
        this.setState({
          botList: botData
        })
      )
  }

  getBot = (botObj) => {
    const botArmy = [...this.state.army, botObj]
    const uniqueBotArmy = Array.from(new Set(botArmy));
    this.setState({
      army: uniqueBotArmy
    })
  }

  removeBot =  (botObj) => {
    console.log("remove me");
    let currentArmy = [...this.state.army]
    let updatedArmy = currentArmy.filter(bot => bot.id !== botObj.id)
    this.setState({
      army: updatedArmy
    })
  }


// started working on refactor which broke some stuff
// i have a previous commit
  showSpec = (botObj) => {
    return botObj
  }


  render() {
    return (
      <div>
        <YourBotArmy
          army={this.state.army}
          getBot={this.removeBot} />
        <BotCollection
          bots={this.state.botList}
          getBot={this.getBot}
          showSpec={this.showSpec}/>
        <BotSpecs
          bots={this.showSpec} />
      </div>
    );
  }

}

export default BotsPage;
