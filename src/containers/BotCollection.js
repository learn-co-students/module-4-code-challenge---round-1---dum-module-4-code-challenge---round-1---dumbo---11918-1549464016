import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
		// console.log(this.props.bots)
		let bots = this.props.bots.map(bot=> <BotCard bot={bot}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {bots}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
