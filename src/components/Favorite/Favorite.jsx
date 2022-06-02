import React, { Component } from "react";
import "./Favorite.css";
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
  },
};
export default class Favorite extends Component {
  favorites = JSON.parse(localStorage.getItem("FavoritesChannels")) || [];
  state = {};

  handleClick = () => {
    const channel = this.props.channel;

    channelList.find((item) => item.id === channel.id).isFavorite =
      !channelList.find((item) => item.id === channel.id).isFavorite;

    localStorage.setItem("channelList", JSON.stringify(channelList));

    if (!!this.favorites.find((item) => item.id === channel.id)) {
      console.log("ya existe asi que LO SALTEO");
      this._removeChannelFromFavorites(channel);
    } else {
      console.log("no existe entonces LO AGREGO");
      this._addChannelToFavorites(channel);
    }

    const newHeart = channelList.find((item) => item.id === channel.id)
      .isFavorite
      ? "❤️"
      : "🤍";
    this.setState({
      heart: newHeart,
    });
  };

  _addChannelToFavorites = (channel) => {
    channel.isFavorite = true;
    const favorites = JSON.parse(localStorage.getItem("FavoritesChannels"));
    const newList = [...favorites, channel];
    // this.favorites.push(channel);
    localStorage.setItem("FavoritesChannels", JSON.stringify(newList));
  };
  
  _removeChannelFromFavorites = (channel) => {
    channel.isFavorite = false;
    this.favorites = this.favorites.filter((item) => item.id !== channel.id);
    localStorage.setItem("FavoritesChannels", JSON.stringify(this.favorites));
  };

  _setInitialState = () => {
    const { channel } = this.props;
    const newHeart = channelList.find((item) => item.id === channel.id)
      .isFavorite
      ? "❤️"
      : "🤍";
    this.setState({
      heart: newHeart,
    });
  };

  render() {
    const { channel } = this.props;
    const heart = channel.isFavorite ? "❤️" : "🤍";
    return (
      <span
        className="App-favorite-heart"
        style={styles.container}
        onClick={this.handleClick}
      >
        {heart}
      </span>
    );
  }
}
