import React, { Component } from "react";
import MenuFilter from "../MenuFilter/MenuFilter";
import { Link, NavLink } from "react-router-dom";

const imagesFolder = require.context("../../assets/img/", true);

const styles = {
  container:{
    position: "fixed",
    width: "100vw",
  },
  header: {
    backgroundColor: "#16356e",
    color: "white",
    padding: "10px 0 0 10px",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "left",
    display: "flex",
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
  nav: {
    borderBottom: "solid 1px",
    paddingBottom: "1rem 0",
    display: "flex",
    justifyContent: "space-between",
    position: "fixed",
  },
  link: {
    display: "block",
    boxSize: "border-box",
    width: "20vw",
    textDecoration: "none",
    padding: "4px",
    backgroundColor: "#1f1933",
    color: "white",
    verticalAlign: "middle",
  }
};
export default class Header extends Component {
  render() {
    return (
    <div style={styles.container}>
      <div className="Header" style={styles.header}>
        <img src="./logox128.png" style={styles.logo} aria-label="emoji" />
        <span style={styles.brand}>Streamming List</span>
      </div>
      <nav className="nav-link" style={styles.nav}>
        <NavLink to="/">Todo</NavLink>
        <NavLink to="/subcription">Subscripcion</NavLink>
        <NavLink to="/favoritos">⭐</NavLink>
        <NavLink to="/mixed">Mixto</NavLink>
        <NavLink to="/free">Gratis</NavLink>
      </nav>
    </div>
    );
  }
}
