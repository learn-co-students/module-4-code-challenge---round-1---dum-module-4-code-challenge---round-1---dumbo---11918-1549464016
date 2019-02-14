import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  renderBot = () => {
    return this.props.bots.map(bot => (
      <BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler}/>
    ))
  }

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.renderBot()}
    		  Collection of all bots
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
