import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  render(){
		let bots = this.props.bots.map(bot => {
			return <BotCard robotClickHandler={this.props.robotClickHandler} bot={bot} />
		})
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
					{/* ...and here.. */}
					{bots}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
