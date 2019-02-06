import React from "react";
import BotCollection from "./BotCollection"

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        <BotCollection robots={this.props.robots}/>
      </div>
    );
  }

}

export default BotsPage;
