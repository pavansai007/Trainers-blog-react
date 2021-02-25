import React from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import Books from "./components/Books";
import Img from "./components/Img";
import Bars from "./components/Bars";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <div className="bar">
      <Navbar/>
      </div>
      <Img/>
      <Books/>
      <Bars/>
      <Footer/>
     
      
      
    </div>
  )
}

export default App

