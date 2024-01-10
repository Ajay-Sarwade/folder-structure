import "./App.css";
import Folder from "./components/Folder";
import data from "./constants/data.json";

function App() {
  return (
    <div className="App">
      <Folder itemsList={data} />
    </div>
  );
}

export default App;
