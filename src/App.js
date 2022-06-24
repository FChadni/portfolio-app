import React from "react";
import './style/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Etc from "./pages/etc";
import Codebreaker from "./components/codebreaker";
import Craigslist from "./components/craigslist";
import Cube from "./components/cube";
import GroupMe from "./components/group-me";
import Movie from "./components/movie";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/etc" element={<Etc/>}/>
          <Route path="/codebreaker" element={<Codebreaker/>}/>
          <Route path="/craigslist" element={<Craigslist/>}/>
          <Route path="/cube" element={<Cube/>}/>
          <Route path="/groupMe" element={<GroupMe/>}/>
          <Route path="/movie" element={<Movie/>}/>
        </Routes>
        <div>
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
