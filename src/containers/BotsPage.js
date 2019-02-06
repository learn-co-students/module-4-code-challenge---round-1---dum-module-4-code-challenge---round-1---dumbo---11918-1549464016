import React from "react";
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {

    // debugger
    return (
      <div>
      <BotCollection bots={this.props.botsAray} clickHandler={this.props.clickHandler}/>
        {/* put your components here */}
      </div>
    );
  }

}

export default BotsPage;
