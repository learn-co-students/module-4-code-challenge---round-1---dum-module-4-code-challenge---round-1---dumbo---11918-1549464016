import React from "react";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.props.botArmy}/>
        
        <BotCollection robots={this.props.robots} handleClick={this.props.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
