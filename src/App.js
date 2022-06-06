import React from "react";
import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Etc from "./pages/etc"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/etc" element={<Etc/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
