import React from "react";
import BotCollection from "../containers/BotCollection";

class BotsPage extends React.Component {
  //start here with your code for step one
  state={
    bots:[]
  }

  componentDidMount(){
    fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
      .then(r=>r.json())
      .then(robots=> this.setState({
        bots:robots}
        ))
      }

  render() {
    return (
      <div>
        {<BotCollection bots={this.state.bots}/>}
      </div>
    );
  }

}

export default BotsPage;


//fetching from //fetching from : https://bot-battler-api.herokuapp.com/api/v1/bots

//botspage --> botcollection --> botcard