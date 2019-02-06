import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  
  botArmy = () => {
    const botArmy = this.props.botArmy.map(bot => < BotCard key={bot.id} bot={bot} />)
    return botArmy
  }
  

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.botArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
