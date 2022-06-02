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

const root = ReactDOM.createRoot(document.getElementById("root"));
let channelListFromStorage = [];
if(localStorage.getItem("channelList") && JSON.parse(localStorage.getItem("channelList")).length > 0) {
  console.log('ya existe');
  channelListFromStorage = JSON.parse(localStorage.getItem("channelList"));
} else {
  console.log('no existe se agrega');
  localStorage.setItem("channelList", JSON.stringify(channelList));
}






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
      <Route
        path="subcription"
        element={<Subscription channelList={channelListFromStorage} />}
      />
      <Route
        path="mixed"
        element={<MixedChannel channelList={channelListFromStorage} />}
      />
      <Route path="free" element={<FreeChannels channelList={channelListFromStorage} />} />
      <Route path="favoritos" element={<Favorites channelList={channelListFromStorage}/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
