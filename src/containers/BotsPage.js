import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
    robots: []
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(robots => this.setState({
      robots: robots
    }))
  }

  render() {
    //console.log(this.state.robots)
    return (
      <div>
        <div>{ <BotCollection robots={ this.state.robots } /> }</div>
        <div>{ <YourBotArmy robots={this.state.robots}/> }</div>
      </div>
    );
  }

}

export default BotsPage;
