import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home.jsx";
import BackStretch from "./components/BackStretch.jsx";
import HipStretch from "./components/HipStretch.jsx";
import Both from "./components/Both.jsx";
import Footer from "./components/Footer.jsx";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/backstretch" element={<BackStretch />} />
          <Route path="/hipstretch" element={<HipStretch />} />
          <Route path="/both" element={<Both />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
