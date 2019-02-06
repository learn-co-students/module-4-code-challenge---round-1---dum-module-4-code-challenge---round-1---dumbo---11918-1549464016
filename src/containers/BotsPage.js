import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    robots: [],
    clicked: false,
    clickedRobot: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(robots => this.setState({
      robots: robots
    }))
  }

  clickHandler = (bot) => {
    let newRobots = [...this.state.robots]
    let clickedRobot = newRobots.filter(robot => robot.id === bot.id)
    this.setState({
      clickedRobot: clickedRobot
    })
  }

  render() {
    console.log(this.state.clickedRobots)
    return (
      <div>
        <div>{ <YourBotArmy clickedRobot={this.state.clickedRobot}/>}</div>
        <div>{ <BotCollection robots={ this.state.robots } clickHandler={this.clickHandler}/> }</div>
      </div>
    );
  }

}

export default BotsPage;
