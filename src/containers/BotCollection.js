import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from "../components/BotSpecs"

class BotCollection extends React.Component {

	state = {
		showAll: true,
		botId: 0
	}

	showSpecs = (id) => {
		this.setState({
			showAll: false,
			botId: id
		})
	}

	goBack = () => {
		this.setState({
			showAll: true
		})
	}

  render(){
		let bots = this.props.bots.map(bot => {
			return <BotCard cardClickHandler={this.showSpecs} bot={bot} />
		})
		let bot = this.props.bots.filter(bot => {
			return bot.id === this.state.botId
		})
		bot = bot.map(bot => {
			return <BotSpecs goBack={this.goBack} robotClickHandler={this.props.robotClickHandler} bot={bot} />
		})
		console.log(this.state.showAll)
  	return (
  	  <div className="ui four column grid">
			{this.state.showAll ? 
				(<div className="row">
				 {bots}
				Collection of all bots
				</div>) : (<div className="row">
					{bot}
    		</div>)
				}
    		
  	  </div>
  	);
  }

};

export default BotCollection;
