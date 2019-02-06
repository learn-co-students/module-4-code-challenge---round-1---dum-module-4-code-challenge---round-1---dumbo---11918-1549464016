import React from "react";
import BotCollection from "./BotCollection"
import BotSpecsContainer from "./BotSpecContainer"

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
console.log(this.props.clickedBots);
    // debugger
    return (
      <div>
      {this.props.clickedBots == null ?
      <BotCollection bots={this.props.botsAray} clickHandler={this.props.clickHandler}/> :
      <BotSpecsContainer bots={this.props.clickedBots} clickHandler={this.props.clickHandler} addFavFunc={this.props.addFavFunc}/> }
      </div>
    );
  }

}

export default BotsPage;
