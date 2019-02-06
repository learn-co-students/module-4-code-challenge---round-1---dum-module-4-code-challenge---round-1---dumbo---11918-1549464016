import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  state={remove:true}
  //your bot army code here...

  botArmy() {
    return this.props.bots.map((bot, idx) => <BotCard key={idx} bot={bot} enlistBot={this.props.enlistBot} remove={this.state.remove} /> )
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
