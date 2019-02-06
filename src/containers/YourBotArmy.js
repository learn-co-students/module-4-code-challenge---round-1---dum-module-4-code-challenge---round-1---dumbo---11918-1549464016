import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  render(){
    console.log(this.props.bots)

    let bots = this.props.bots.map( bot => {
      return < BotCard key={bot.id} bot={bot} clickHandler={this.props.clickHandler}/>
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
