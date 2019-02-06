import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import "./App.css";

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1 align="center">InterGalactic Bot Fights</h1>
        <BotsPage />
      </div>
    );
  }
}

export default App;
