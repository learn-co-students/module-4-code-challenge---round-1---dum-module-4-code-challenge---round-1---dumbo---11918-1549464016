import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"
import BotSpecs from "../components/BotSpecs"
import SearchBar from "../components/SearchBar"

class BotsPage extends React.Component {
  state = {
    robots: [],
    filteredBots: [],
    army: [],
    specs: false,
    selectedBot: {},
    filter: false
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

  activateFilter = () => {
    this.setState({filter: !this.state.filter})
  }

  filterBots = (e) => {
    if(this.state.filter) {
      const filteredBots = this.state.robots.filter(bot => bot.bot_class === e.target.value)
      this.setState({filteredBots})
    }
  }

  removeFromArmy = (bot) => {
    const { army } = this.state
    let newArmy = army.filter(robot => robot.id !== bot.id)
    this.setState({army: newArmy})
  }

  fetchs = () => {
    const url = "https://bot-battler-api.herokuapp.com/api/v1/bots"
    fetch(url)
    .then(res => res.json())
    .then(robots => this.setState({robots, filteredBots: robots}))
  }

  render() {
    const {robots, army, specs, selectedBot, filter, filteredBots} = this.state
    return (
      <div>
        <div align="center">
          <SearchBar filter={this.filterBots} check={filter} activateFilter={this.activateFilter}/>
        </div>
        <YourBotArmy army={army} remove={this.removeFromArmy}/>
        {specs
          ? <BotSpecs bot={selectedBot} goBack={this.reset} addToArmy={this.addToArmy}/>
          : <BotCollection robots={filter ? filteredBots : robots} selectBot={this.selectBot} />
        }
      </div>
    );
  }

}

export default BotsPage;
