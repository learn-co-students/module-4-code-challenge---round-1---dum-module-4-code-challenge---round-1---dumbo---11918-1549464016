import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  state = {
    robots: [],
    army: [],
    specs: false,
    selectedBot: {}
  }

  componentDidMount() {
    this.fetchs()
  }

  selectBot = (bot) => {
    this.setState({selectedBot: bot, specs: true})
  }

  reset = () => {
    this.setState({selectedBot: {}, specs: false})
  }

  addToArmy = (bot) => {
    const { army } = this.state
    let enlisted = army.some(robot => robot.id === bot.id)
    if(!enlisted) {
      this.setState({army: [...army, bot]})
    }
  }

  fetchs = () => {
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
    .then(res => res.json())
    .then(robots => this.setState({robots}))
  }

  render() {
    const {robots, army, specs, selectedBot} = this.state
    return (
      <div>
        <YourBotArmy army={army}/>
        {specs
          ? <BotSpecs bot={selectedBot} goBack={this.reset} addToArmy={this.addToArmy}/>
          : <BotCollection robots={robots} selectBot={this.selectBot} />
        }
      </div>
    );
  }

}

export default BotsPage;
