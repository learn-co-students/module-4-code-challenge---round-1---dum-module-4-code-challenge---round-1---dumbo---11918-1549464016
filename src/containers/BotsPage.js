import React from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";
import Nav from "../components/Nav";


class BotsPage extends React.Component {
  state={bots: [], botArmy: [], bot: "", searchTerm:""}

  fetchBots() {
    return fetch(`https://bot-battler-api.herokuapp.com/api/v1/bots`)
      .then(res => res.json())
  }

  componentDidMount() {
    this.fetchBots().then(res => this.setState({bots: res}))
  }

  enlistBot = (e, bot, remove) => {
    let botCheck = this.state.botArmy.find(e => e.id === bot.id)
    if (botCheck && remove) {
      let val = this.state.botArmy.indexOf(botCheck)
      let arr = this.state.botArmy.slice(0, val).concat(this.state.botArmy.slice(val+1, this.state.botArmy.length))
      this.setState({botArmy: arr})
    } else if (!botCheck) {
      this.setState({botArmy: [...this.state.botArmy, bot]})
    }
  }

  botClick = (e, bot) => {
    bot ? this.setState({bot: bot}) : this.setState({bot: false})

  }

  searcHandler = (e) => {
    this.setState({searchTerm: e.target.value.toUpperCase()})
  }

  botHolder() {
    let bots = this.state.bots
    if (this.state.searchTerm) {
      bots = bots.filter(e => e.name.toUpperCase().includes(this.state.searchTerm))
    }
    return bots
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.botArmy} enlistBot={this.enlistBot} />
        <Nav searchHandler={this.searcHandler}/>
        <br></br>
        {this.state.bot ? <BotSpecs bot={this.state.bot} botClick={this.botClick} enlistBot={this.enlistBot}/> : <BotCollection bots={this.botHolder()} enlistBot={this.enlistBot} botClick={this.botClick} /> }
      </div>
    );
  }

}

export default BotsPage;
