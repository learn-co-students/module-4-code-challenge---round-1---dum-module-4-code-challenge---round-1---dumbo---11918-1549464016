import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBot = () => {
    return this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler}/>
    ))
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBot()}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
