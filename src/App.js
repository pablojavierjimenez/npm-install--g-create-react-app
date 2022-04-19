import "./App.css";
import ChannelItem from "./components/ChannelItem/ChannelItem";
import channelList from "./db/channels";

function App() {
  return (
    <div className="App">
      {channelList.map((item) => (
        <ChannelItem channel={item} />
      ))}
    </div>
  );
}

export default App;
