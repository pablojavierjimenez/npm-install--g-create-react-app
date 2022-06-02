import React, { Component } from "react";
import Header from "./Header/Header";
import ItemList from "./ItemList";

class Favorites extends Component {
  state = {};
  render() {
    const channelList = JSON.parse(localStorage.getItem("FavoritesChannels"));
    return (
      <main className="App">
        <Header />
        <ItemList channels={channelList} />
      </main>
    );
  }
}

export default Favorites;

