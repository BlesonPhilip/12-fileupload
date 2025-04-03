import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Navbar/nav";
import Home from "./pages/Home/home";
import Upload from "./pages/Upload/upload";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
      </Routes>
    </>
  );
};

export default App;
