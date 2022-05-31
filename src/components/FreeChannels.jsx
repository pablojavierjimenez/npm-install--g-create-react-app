import React, { Component } from "react";
import Header from "./Header/Header";
import ItemList from "./ItemList";

class FreeChannels extends Component {
  state = {};
  render() {
    const { channelList } = this.props;
    return (
      <main className="App">
        <Header />
        <ItemList channels={channelList} filterBy="gratis"/>
      </main>
    );
  }
}

export default FreeChannels;
