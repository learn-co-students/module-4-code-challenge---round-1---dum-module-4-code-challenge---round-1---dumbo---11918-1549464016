import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	state = {remove: false}
	//your code here
	
	botComponents() {
		return this.props.bots.map((bot, idx) => <BotCard key={idx} bot={bot} enlistBot={this.props.enlistBot} remove={this.state.remove}/>)
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.botComponents()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
