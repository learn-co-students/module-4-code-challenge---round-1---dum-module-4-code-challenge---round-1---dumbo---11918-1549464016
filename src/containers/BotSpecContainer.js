import React from "react";
import BotSpecs from "../components/BotSpecs";

class BotSpecsContainer extends React.Component {
  //your code here

  render(){
    // debugger
    console.log(this.props);
     let botArray = this.props.bots.map(bot => <BotSpecs key={bot.id} bot={bot} clickHandler={this.props.clickHandler} addFavFunc={this.props.addFavFunc}/>)
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
        {botArray}
    		</div>
  	  </div>
  	);
  }

};

export default BotSpecsContainer;
