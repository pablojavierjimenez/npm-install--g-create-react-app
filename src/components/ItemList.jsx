import React, { Component } from "react";
import ChannelItem from "./ChannelItem/ChannelItem";

const styles = {
  container: {
    minHeight: "calc(100vh - 89px)",
    paddingTop: "89px",
    alignItems: "flex-start",
    display: "flex",
    flexFlow: "wrap",
    justifyContent: "center",
  },
};
class ItemList extends Component {
  state = {};
  render() {
    const { channels, filterBy } = this.props;
    return (
      <section style={styles.container}>
        {!filterBy && channels.map((item) => <ChannelItem channel={item} />)}
        {filterBy &&
          channels
            .filter((item) => item.tipo === filterBy)
            .map((item) => <ChannelItem channel={item} />)}
      </section>
    );
  }
}

export default ItemList;
