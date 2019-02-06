import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  botCards(bots) {
    return bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>);
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.botCards(this.props.bots)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
