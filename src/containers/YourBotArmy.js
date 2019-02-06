import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    let filteredBots = this.props.bots.filter(bot => {
      return this.props.yourBotArmyIds.includes(bot.id)
    })
    let bots = filteredBots.map(bot => {
			return <BotCard cardClickHandler={this.props.botDischarge} bot={bot} />
		})
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {bots}
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
