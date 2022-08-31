import "./App.css";
import Visainput from "./visa/visainput";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={visa} alt="BigCo Inc. logo" />
        <input className="numberCard" />
        <input className="date" />
        <input className="name" /> */}
        <Visainput />
      </header>
    </div>
  );
}

export default App;
