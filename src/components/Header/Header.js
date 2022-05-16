import React, { Component } from "react";
import MenuFilter from "../MenuFilter/MenuFilter";

const imagesFolder = require.context("../../assets/img/", true);

export default class Header extends Component {
  styles = {
    Header: {
      backgroundColor: "#16356e",
      color: "white",
      padding: "10px 0 0 10px",
      fontSize: "20px",
      fontWeight: "bold",
      borderRadius: "4px",
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
      textAlign: "left",
      display: "flex",
      justifyContent: "flex-start",
    },
    logo: {
      backgroundImage: "url(./assets/img/logox128.png)",
      width: "32px",
      height: "38px",
      backgroundSize: "cover",
    },
    brand: {
      padding: "10px",
      alignSelf: "start",
    },
  };
  render() {
    return (
    <div>
      <div className="Header" style={this.styles.Header}>
        <img src="./logox128.png" style={this.styles.logo} aria-label="emoji" />
        <span style={this.styles.brand}>Streamming List</span>
      </div>
      <MenuFilter />
    </div>
    );
  }
}
