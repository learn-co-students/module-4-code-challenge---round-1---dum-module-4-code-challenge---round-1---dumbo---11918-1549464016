import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){
    let armyMapped = this.props.myArmy.map(bot => <BotCard key={bot.id} bot={bot} removeHandler={this.props.removeHandler} />)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            Your Bot Army
            {armyMapped}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
