import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {

  renderArmy = () => {
    return this.props.army.map(r => <BotCard key={r.id} bot={r} />)
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }

};

export default YourBotArmy;
