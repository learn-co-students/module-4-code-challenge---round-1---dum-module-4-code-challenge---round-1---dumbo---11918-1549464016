import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

	//your code here
	// renderBots = () => {
	// 		let robots = this.props.robots.map((robots) => {
	// 				return < BotCard key={robots.id} rob={robots} />
	// 			})
	// 			return robots
	// 		}
			render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.robots.map((bot) => < BotCard key={bot.id} bot={bot} handleClick={this.props.handleClick}/>)}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
