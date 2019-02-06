import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here

  render(){
    let robotCards = this.props.robots.map(robot => {
      return <BotCard key={robot.id} bot={robot} clickHandler={this.props.clickHandler}/>
    })

    //console.log(robotCards)

  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {robotCards}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
