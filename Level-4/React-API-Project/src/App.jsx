import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from "./components/Home.jsx"
import HouseList from "./components/HouseList.jsx"
import Staff from "./components/Staff.jsx"
import TopStudents from "./components/TopStudents.jsx"
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx"
import axios from "axios";


export default function App() {
  useEffect(()  => {
    axios.get("https://hp-api.onrender.com/api/characters/")
    .then(response => {setNames(response.data);})
    .catch(error => {console.log(error);});
    } , []);

    const [names, setNames] = useState([])
console.log(names, "test names")
  return (
      <div className="App">
        <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/houselist" element={<HouseList />} /> 
        <Route path="/TopStudents" element={<TopStudents />} /> 
        <Route path="/staff" element={<Staff />} /> 
      {/* {names.map(item => 
        
        <Route path="/test" element={<Test {...item} />} />
        )} */}
        </Routes>
    </Router>
    {/* <Card /> */}
    <Footer />
      </div>
  )
}



