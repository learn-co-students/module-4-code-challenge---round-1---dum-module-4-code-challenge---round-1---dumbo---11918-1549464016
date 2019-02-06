import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

mappedBots = () => {
  return this.props.bots.map(bot =>
    <BotCard
      key={bot.id}
      bot={bot}
      getBot={this.props.getBot}
      showSpec={this.props.showSpec} 
      />)
}



  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
           Collection of all bots
    		  {this.mappedBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
