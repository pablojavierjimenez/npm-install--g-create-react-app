import React, { Component } from "react";

export default class MenuFilter extends Component {
  styles = {
    MenuFilter: {
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
      <span className="ff-container">
        <input
          id="select-type-all"
          name="radio-set-1"
          type="radio"
          class="ff-selector-type-all"
          checked="checked"
        />
        <label for="select-type-all" class="ff-label-type-all">
          All
        </label>

        <input
          id="select-type-1"
          name="radio-set-1"
          type="radio"
          class="ff-selector-type-subscripcion"
        />
        <label for="select-type-1" class="ff-label-type-subscripcion">
          Subscripcion
        </label>

        <input
          id="select-type-2"
          name="radio-set-1"
          type="radio"
          class="ff-selector-type-2"
        />
        <label for="select-type-2" class="ff-label-type-2">
          Mixto
        </label>

        <input
          id="select-type-3"
          name="radio-set-1"
          type="radio"
          class="ff-selector-type-3"
        />
        <label for="select-type-3" class="ff-label-type-3">
          Gratis
        </label>
      </span>
    );
  }
}
