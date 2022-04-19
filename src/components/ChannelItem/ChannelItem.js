import React, { Component } from "react";

const imagesFolder = require.context("../../assets/img/", true);
export default class ChannelItem extends Component {
  styles = {
    ChannelItem: {
      borderRadius: "4px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      padding: "20px",
      maxWidth: "200px",
      maxHeight: "300px",
      minHeight: "250px",
      margin: "16px",
      display: "inline-block",
    },
    info: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0 0 4px",
      height: "30px",
    },
    infoButton: {
      padding: "4px",
      border: "1px solid black",
      margin: "4px 0",
      color: "white",
      backgroundColor: "#16356e",
      fontWeight: "bold",
      textDecoration: "none",
      textTransform: "capitalize",
      fontSize: "12px",
      borderRadius: "4px",
      visibility:"visible",
    },
    logo: {
      width: "200px",
      height: "200px",
    },
  };
  render() {
    const { channel } = this.props;
    console.log(channel.title);
    this.styles.infoButton.visibility = (channel.info !== "") ? "visible" : "hidden";

    return (
      <div className="ChannelItem" style={this.styles.ChannelItem}>
        <div className="ChannelItem__info">
          <h4>{channel.title}</h4>
        </div>
        <div className="ChannelItem__preview">
          <a href={channel.url} target={channel.title}>
            <img
              src={imagesFolder(channel.logo)}
              style={this.styles.logo}
              alt={channel.title}
            />
          </a>
        </div>
        <small style={this.styles.info}>
          <a
            href={channel.info}
            rel="noreferrer"
            style={this.styles.infoButton}
            target="_blank"
          >
            noticias
          </a>

          {channel.description !== "" && (
            <details>
              <summary>detalles</summary>
              <p>{channel.description}</p>
            </details>
          )}
        </small>
      </div>
    );
  }
}
