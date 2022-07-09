import React, { Component } from "react";
import Header from "./Header/Header";
import ItemList from "./ItemList";

class Favorites extends Component {
  updateParentState = (newList) => {
    console.log(newList);
  };

  render() {
    const channelList = JSON.parse(localStorage.getItem("FavoritesChannels"));
    return (
      <main className="App">
        <Header />
        <ItemList
          channels={channelList}
          filterByFavorite={true}
          updateParentState={this.updateParentState}
        />
      </main>
    );
  }
}

export default Favorites;
