import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  state = {
    bots: [],
    army: [],
    clicked: false,
    currentBot: {}
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

  renderCollection = () => {
    if(this.state.clicked === false){
      return <BotCollection bots={this.state.bots} specsHandler={this.renderSpecs} />
    } else {
      return  <BotSpecs bot={this.state.currentBot} armyHandler={this.addToArmy} toggle={this.toggleClick} removeArmy={this.removeArmy}/>
    }
  }

  toggleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };


  renderSpecs = botObj => {
    console.log(botObj, this.state.clicked);
    if (this.state.bots.filter(bot => bot.id === botObj.id)){
      this.setState({ currentBot: botObj, clicked: true })
      console.log(this.state.currentBot);
    }
  }


  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} clickHandler={this.removeArmy}/>
        {this.renderCollection()}
      </div>
    );
  }

}

export default BotsPage;
