import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import channelList from "./db/channels";
import App from "./App";
import Subscription from "./components/Subscription";
import MixedChannel from "./components/MixedChannel";
import FreeChannels from "./components/FreeChannels";
import Favorites from "./components/Favorites";
import InSpanish from "./components/InSpanish";
import Argentinos from "./components/Argentinos";
import FilteredList from "./components/FilteredList";

const root = ReactDOM.createRoot(document.getElementById("root"));
// let channelListFromStorage = [];

// if (
//   localStorage.getItem("channelList") &&
//   JSON.parse(localStorage.getItem("channelList")).length > 0
// ) {
//   console.log("ya existe");
// } else {
  console.log("no existe se agrega");
  localStorage.setItem("channelList", JSON.stringify(channelList));
// }

const haveIPreexistingFavorites =
  localStorage.getItem("FavoritesChannels") &&
  JSON.parse(localStorage.getItem("FavoritesChannels")).length >= 1
    ? true
    : false;
if (!haveIPreexistingFavorites) {
  localStorage.setItem("FavoritesChannels", JSON.stringify([]));
}

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="subcription" element={<FilteredList filterBy="subscripcion"/>} />
      <Route path="music" element={<FilteredList  filterBy="musica"/>} />
      {/* <Route path="music" element={<FilteredList  filterBy="musica"/>} /> */}
      <Route path="favoritos" element={<Favorites filterBy="favorito"/>} />
      <Route path="free" element={<FreeChannels  filterBy="gratis"/>} />
      <Route path="in-spanish" element={<InSpanish filterBy="in-spanish" />} />
      <Route path="argentinos" element={<Argentinos filterBy="argentino"/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
