import React from "react";
import BotCard from "../components/BotCard";
import SearchBar from "../components/SearchBar";

const BotCollection = props => {

  function botCards(bots) {
    return bots.map(bot => <BotCard key={bot.id} bot={bot} handleClick={props.handleClick}/>);
  }

	return (
	  <div className="ui four column grid">
      <SearchBar searchTerm={props.searchTerm} handleChange={props.handleSearchChange} />
  		<div className="row">
  		  {botCards(props.bots)}
  		</div>
	  </div>
	);
};

export default BotCollection;
