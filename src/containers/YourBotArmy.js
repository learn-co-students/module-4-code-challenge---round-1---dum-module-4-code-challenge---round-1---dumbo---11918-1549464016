import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  botCards(bots) {
    return bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>);
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.botCards(this.props.bots)}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
