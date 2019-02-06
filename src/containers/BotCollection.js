import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
    let botsMapped = this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} addBotHandler={this.props.addBotHandler}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
          Collection of all bots
    		  {botsMapped}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
