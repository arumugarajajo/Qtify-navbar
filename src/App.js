import "./App.css";
import logo from "./assets/logo.png";
function App() {
  return (
    <div className="App">
      <div className="components">
        <img src={logo} alt="logo" />
        <div className="searchbar">
          <input type="text" placeholder="Search a song of your choice" />
          <span class="material-symbols-outlined">search</span>
        </div>
        <button>Give Feedback</button>
      </div>
    </div>
  );
}

export default App;
