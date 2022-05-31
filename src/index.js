import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import channelList from "./db/channels";
import App from "./App";
import Subscription from "./components/Subscription";
import MixedChannel from "./components/MixedChannel";
import FreeChannels from "./components/FreeChannels";
import Favorites from "./components/Favorites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="subcription" element={<Subscription  channelList={channelList}/>} />
      <Route path="mixed" element={<MixedChannel  channelList={channelList}/>} />
      <Route path="free" element={<FreeChannels  channelList={channelList}/>} />
      <Route path="favoritos" element={<Favorites  channelList={channelList}/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
