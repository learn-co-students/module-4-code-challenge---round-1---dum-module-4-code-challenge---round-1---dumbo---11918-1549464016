import React from "react";
import BotCollection from '../containers/BotCollection'
import YourBotArmy from '../containers/YourBotArmy'

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

  showSpec = (botObj) => {
    console.log("show deets");
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
      </div>
    );
  }

}

export default BotsPage;
