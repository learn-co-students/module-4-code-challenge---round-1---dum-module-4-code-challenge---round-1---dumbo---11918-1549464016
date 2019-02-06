import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {


  render(){
    // console.log('bot collection', this.props.bot)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">

        <BotCard key={this.props.bot.id} bot={this.props.bot} clickHandler={this.props.clickHandler}/>
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
