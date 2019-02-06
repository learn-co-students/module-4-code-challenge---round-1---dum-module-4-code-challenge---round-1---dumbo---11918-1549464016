import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            <BotCard key={this.props.bot.id} bot={this.props.bot} clickHandler={this.props.clickHandler}/>
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
