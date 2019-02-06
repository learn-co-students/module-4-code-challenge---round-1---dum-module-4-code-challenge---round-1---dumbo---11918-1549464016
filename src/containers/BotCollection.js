import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
	// renderBots = () => {
	// 	let robots = this.props.robots.map((rob) => {
	// 		return < BotCard key={rob.id} rob={rob}/>
	// 	})
	// 	return robots
	// }
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		</div>
    		  <BotCard />
  	  </div>
  	);
  }

};

export default BotCollection;
