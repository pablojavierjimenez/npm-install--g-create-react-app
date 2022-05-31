import React, { Component } from "react";
import { Link } from "react-router-dom";

const styles = {
  borderBottom: "solid 1px",
  paddingBottom: "1rem",
  display: "flex",
  justifyContent: "space-between",
};
export default class MenuFilter extends Component {
  render() {
    return (
      <nav style={styles}>
        <Link to="/">Todo</Link>
        <Link to="/subcription">Subscripcion</Link> |{" "}
        <Link to="/mixed">Mixto</Link>
        <Link to="/free">Gratis</Link>
      </nav>
    );
  }
}
