import React from "react"
//import BotCard from "../components/BotCard";
import BotCollection from "./BotCollection"
import YourBotArmy from "./YourBotArmy"

class BotsPage extends React.Component {
  //start here with your code for step one
  state = {
  	bots: [],
  	clicked: false,
  }

    componentDidMount(){
    	fetch("https://bot-battler-api.herokuapp.com/api/v1/bots")
        .then(resp=> resp.json())
        .then(bots=>
          this.setState({
          	bots: bots
          })
         )
    }

  handleClick = () => {
    console.log("clicked?")
    this.setState({
    	clicked: !this.state.clicked
    })

  }

  render() {

    return (
      <div>

        <BotCollection bots = {this.state.bots} handleClick = {this.handleClick}/>

      </div>
    );
  }

}

export default BotsPage;
