import "./App.css";
import channelList from "./db/channels";
import Header from "./components/Header/Header";
import ItemList from "./components/ItemList";

function App() {
  return (
    <main className="App">
      <Header />
      <ItemList channels={channelList} />
    </main>
  );
}

export default App;
