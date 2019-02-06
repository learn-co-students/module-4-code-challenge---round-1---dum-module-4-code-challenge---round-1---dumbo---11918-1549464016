import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	
	allBots = () => {
		const showBots = this.props.bots.map(bot => < BotCard key={bot.id} bot={bot} sendToBotArmy={this.props.sendToBotArmy} />)
		return showBots
	}
	

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.allBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
