import React, { Component } from "react";
import Header from "./Header/Header";
import ItemList from "./ItemList";

class FreeChannels extends Component {
  state = {};
  render() {
    const channelListFromStorage = JSON.parse(localStorage.getItem("channelList"));
    return (
      <main className="App">
        <Header />
        <ItemList channels={channelListFromStorage} filterBy="gratis"/>
      </main>
    );
  }
}

export default FreeChannels;
