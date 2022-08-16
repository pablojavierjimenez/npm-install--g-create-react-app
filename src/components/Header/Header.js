import React, { Component } from "react";
// import MenuFilter from "../MenuFilter/MenuFilter";
import { NavLink } from "react-router-dom";

// const imagesFolder = require.context("../../assets/img/", true);

const styles = {
  container:{
    position: "fixed",
    width: "100vw",
    zIndex: "1000"
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
    display: "FLEX",
    gridTemplateColumns: "repeat(7, 1fr)",
    justifyContent: "space-between",
    position: "fixed",
    width: "100%"
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
    <div style={styles.container} tabIndex="1">
      <div className="Header" style={styles.header}>
        <img src="./logox128.png" style={styles.logo} aria-label="emoji" />
        <span style={styles.brand}>Streamming List</span>
      </div>
      <nav className="nav-link" style={styles.nav}>
        <NavLink tabIndex="2" to="/">Todo</NavLink>
        <NavLink tabIndex="3" to="/subcription">Subscripcion</NavLink>
        <NavLink tabIndex="4" to="/music">Musica</NavLink>
        <NavLink tabIndex="5" to="/favoritos">❤️</NavLink>
        <NavLink tabIndex="6" to="/in-spanish">En Español</NavLink>
        <NavLink tabIndex="7" to="/free">Gratis</NavLink>
        <NavLink tabIndex="8" to="/argentinos">Argentinos</NavLink>
      </nav>
    </div>
    );
  }
}
