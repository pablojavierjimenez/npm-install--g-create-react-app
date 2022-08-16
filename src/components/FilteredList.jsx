

import React, { Component } from "react";
import Header from "./Header/Header";
import ItemList from "./ItemList";

class FilteredList extends Component {
  state = {};
  render() {
    const channelListFromStorage = JSON.parse(localStorage.getItem("channelList"));
    const {filterBy} =  this.props;
    return (
      <main className="App">
        <Header />
        <ItemList channels={channelListFromStorage} filterBy={filterBy}/>
      </main>
    );
  }
}

export default FilteredList;
