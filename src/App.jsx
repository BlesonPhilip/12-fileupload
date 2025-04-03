import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/nav";
import Home from "./pages/Home/home";
import Upload from "./pages/Upload/upload";
import Foot from "./components/Footer/foot";

const App = () => {
  return (
    <div className="app-container">
      <Nav />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </div>
      <Foot />
    </div>
  );
};

export default App;
