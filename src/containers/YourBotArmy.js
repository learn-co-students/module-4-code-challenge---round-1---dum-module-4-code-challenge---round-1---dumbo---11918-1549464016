import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    const myBots = this.props.myBots.map((bot, idx) => <BotCard key={idx} bot={bot} showDetails={this.props.removeBot}/>)

    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {myBots}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
