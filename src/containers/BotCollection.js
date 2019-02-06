import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    // console.log(this.props);
    let botArray = this.props.bots.map(bot => <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {botArray}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
