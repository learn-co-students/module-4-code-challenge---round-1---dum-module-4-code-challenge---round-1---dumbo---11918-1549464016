import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    console.log("botsCollection props", this.props)
    console.log("---")
      let allBots = this.props.bots.map(bot => {
        return <BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}  />
        })

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {allBots/*...and here..*/}

    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
