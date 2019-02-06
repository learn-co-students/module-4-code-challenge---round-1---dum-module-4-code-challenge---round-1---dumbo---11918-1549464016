import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {

  state = {
    bots: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(res => res.json())
    .then(res => this.setState({bots: res}))
  }

  render(){
    const bots = this.state.bots.map((bot, idx) => <BotCard key={idx} bot={bot} showDetails={this.props.showDetails}/>)
    console.log(bots);
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  Collection of all bots
          {bots}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
