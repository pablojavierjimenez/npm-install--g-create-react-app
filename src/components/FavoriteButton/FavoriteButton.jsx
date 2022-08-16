import React, { Component } from "react";
import "./FavoriteButton.css";
// import channelList from "../../db/channels";
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
  state = {};
  
  handleClick = () => {
    let channelList = JSON.parse(localStorage.getItem("channelList")) || [];
    let favorites = JSON.parse(localStorage.getItem("FavoritesChannels")) || [];
    const channel = this.props.channel;
    
    // TODO: 
    // * 1 checkear si esta en la lista de favoritos si ya esta es porque ya es favorito
    // * 2 

    if (favorites.includes(channel.id)) {
      channel.isFavorite = false;
      let itemPosition = favorites.indexOf(channel.id)
      favorites.splice(itemPosition,1);
      localStorage.setItem("FavoritesChannels", JSON.stringify(favorites));

      channelList.find((item) => item.id === channel.id).isFavorite = channel.isFavorite;
      localStorage.setItem("channelList", JSON.stringify(channelList));
      // this._removeChannelFromFavorites(channel);
    } else {
      channel.isFavorite = true;
      favorites.push(channel.id);
      localStorage.setItem("FavoritesChannels", JSON.stringify(favorites));

      channelList.find((item) => item.id === channel.id).isFavorite = channel.isFavorite;
      localStorage.setItem("channelList", JSON.stringify(channelList));
      // this._addChannelToFavorites(channel);
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
    const favoritesOnStorage = JSON.parse(localStorage.getItem("FavoritesChannels"));
    const channelListOnStorage = JSON.parse(localStorage.getItem("channelList"));
    favoritesOnStorage.push(channel.id);
    channelListOnStorage.find((item) => item.id === channel.id).isFavorite =
    channel.isFavorite;
    localStorage.setItem("FavoritesChannels", JSON.stringify(favoritesOnStorage));
    localStorage.setItem("channelList", JSON.stringify(channelListOnStorage));
    // this._setIsFavoriteOnChannelList(channel);
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
    // const newList = [...favorites, channel];
    // channelList.find((item) => item.id === channel.id).isFavorite =
    //   channel.isFavorite;
    // localStorage.setItem("channelList", JSON.stringify(channelList));
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
