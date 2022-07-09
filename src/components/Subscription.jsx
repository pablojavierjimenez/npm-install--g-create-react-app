import React, { Component } from "react";
import Header from "./Header/Header";
import ItemList from "./ItemList";

class Subscription extends Component {
  state = {};
  render() {
    const channelListFromStorage = JSON.parse(localStorage.getItem("channelList"));
    return (
      <main className="App">
        <Header />
        <ItemList channels={channelListFromStorage} filterBy="subscripcion"/>
      </main>
    );
  }
}

export default Subscription;
