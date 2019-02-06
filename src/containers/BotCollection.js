import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderRobots = () => {
    return this.props.robots.map(r => <BotCard key={r.id} bot={r} selectBot={this.props.selectBot}/>)
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderRobots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
