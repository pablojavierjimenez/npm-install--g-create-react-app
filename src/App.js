import "./App.css";
import Header from "./components/Header/Header";
import ChannelItem from "./components/ChannelItem/ChannelItem";
import channelList from "./db/channels";

function App() {
  return (
    <div className="App">
      <Header />
      {channelList.map((item) => (
        <ChannelItem channel={item} />
      ))}
    </div>
  );
}

export default App;
