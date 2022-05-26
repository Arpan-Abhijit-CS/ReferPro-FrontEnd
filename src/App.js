import logo from "../src/utils/Referpro-logos_transparent.png";
import "./App.css";
import HomeContent from "./Component/HomeContent/HomeContent";
import Navbar from "./Component/NavBar/Navbar";

function App() {
  return (
    <div>
      <div className="nav-bar">
        <img src={logo} className="logo" />
        <Navbar />
      </div>
      <div className="HomeContent">
        <HomeContent/>
      </div>
    </div>
  );
}

export default App;
