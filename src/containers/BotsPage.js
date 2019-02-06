import React from "react";
import BotCollection from "./BotCollection";

class BotsPage extends React.Component {

    state = {
        bots: [],
        botArmy: false
    }

    componentDidMount(){
        fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
            .then(res => res.json())
            .then(bots => this.setState({bots: bots}))
    }


    botClick() {
        this.setState({
            botArmy: !this.state.botArmy
        })
    }


  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} botArmy={this.state.botArmy} botClick={this.botClick}  />
          {console.log(this.state.bots[0])}
      </div>
    );
  }

}

export default BotsPage;
