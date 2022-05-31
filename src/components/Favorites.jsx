import React, { Component } from "react";
import Header from "./Header/Header";
import ItemList from "./ItemList";

class Favorites extends Component {
  state = {};
  render() {
    const { channelList } = this.props;
    return (
      <main className="App">
        <Header />
        <ItemList channels={channelList} filterBy="subscripcion" />
      </main>
    );
  }
}

export default Favorites;
