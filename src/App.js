import logo from "../src/utils/Referpro-logos_transparent.png";
import "./App.css";
import HomeContent from "./Component/HomeContent/HomeContent";
import Navbar from "./Component/NavBar/Navbar";
import Login from "./Component/LoginComponent/Login";
import ContactUs from "./Component/ContactUs/ContactUs";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <div className="nav-bar">
        <img src={logo} className="logo" />
        <Navbar />
      </div>
        <Routes>
          <Route className="HomeContent" path="/" element={<HomeContent />} />
          <Route className="ContactUs" path="/contactus" element={<ContactUs />} />
          <Route className="login" path="/login" element={<Login />} />
        </Routes>
    </div>
  
  );
}

export default App;
