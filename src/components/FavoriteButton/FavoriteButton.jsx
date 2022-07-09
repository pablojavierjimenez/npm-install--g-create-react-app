import React, { Component } from "react";
import "./FavoriteButton.css";
import channelList from "../../db/channels";
const styles = {
  container: {
    width: "32px",
    height: "32px",
    fontSize: "20px",
    lineHeight: "36px",
    padding: "0",
    borderRadius: "50%",
    boxSizeing: "border-box",
    backgroundColor: "#673ab76b",
  },
};
export default class FavoriteButton extends Component {
  favorites = JSON.parse(localStorage.getItem("FavoritesChannels")) || [];
  state = {};

  handleClick = () => {
    const channel = this.props.channel;

    if (channel.isFavorite) {
      this._removeChannelFromFavorites(channel);
    } else {
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
    this._setIsFavoriteOnChannelList(channel);
    localStorage.setItem("FavoritesChannels", JSON.stringify(newList));
  };

  _removeChannelFromFavorites = (channel) => {
    let { updateParentState } = this.props;
    channel.isFavorite = false;
    let updatedFavorites = this.favorites.filter(
      (item) => item.id !== channel.id
    );
    this._setIsFavoriteOnChannelList(channel);
    // console.log(updatedFavorites);
    localStorage.setItem("FavoritesChannels", JSON.stringify(updatedFavorites));
    updateParentState(updatedFavorites);
  };

  _setIsFavoriteOnChannelList = (channel) => {
    channelList.find((item) => item.id === channel.id).isFavorite =
      channel.isFavorite;
    localStorage.setItem("channelList", JSON.stringify(channelList));
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
