import React, { Component } from "react";
import channelList from "../../db/channels";
const styles = {
    container: {
        width: "24px",
        height: "24px",
        fontSize: "18px",
        lineHeight: "24px",
        padding: "3px 2px",
        borderRadius: "50%",
        boxSizeing: "border-box",
        backgroundColor: "yellow",
    }
}
export default class Favorite extends Component {
  favorites = JSON.parse(localStorage.getItem("FavoritesChannels")) || [];
  state = {
    heart: "🤍",
  };

  handleClick = () => {
    const channel = this.props.channel;
    if (!!this.favorites.find((item) => item.id === channel.id)) {
      console.log("ya existe asi que LO SALTEO");
    } else {
      console.log("no existe entonces LO AGREGO");
      this.favorites.push(channel);
      localStorage.setItem("FavoritesChannels", JSON.stringify(this.favorites));
    }

    channelList.find((item) => item.id === channel.id).isFavorite = true;
    localStorage.setItem("channelList", JSON.stringify(channelList));

    const newHeart = channelList.find((item) => item.id === channel.id).isFavorite
      ? "❤️"
      : "🤍";
    this.setState({
      heart: newHeart,
    });
  };

  render() {
    return <span style={styles.container} onClick={this.handleClick}>{this.state.heart}</span>;
  }
}
