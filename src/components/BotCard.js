import React from "react";

//  botClick = (e) => {
//     console.log("click")
//     return this.setState({
//         botArmy: !this.state.botArmy
//     })
// }

// function botClick() {
//     this.setState({
//         botArmy: !this.state.botArmy
//     })
// }



const BotCard = props => {
  const { bot } = props;
    // function botClick() {
    //     console.log("click")
    //     return this.setState({
    //         botArmy: !this.state.botArmy
    //     })
    // }

  let botType;

  switch (bot.bot_class) {
    case "Assault":
      botType = <i className="icon military" />;
      break;
    case "Defender":
      botType = <i className="icon shield" />;
      break;
    case "Support":
      botType = <i className="icon ambulance" />;
      break;
    default:
      botType = <div />;

  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={() => this.props.botClick}
      >
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name} {botType}
          </div>

          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
        </div>
      </div>
    </div>
  );

};

export default BotCard;
