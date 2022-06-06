import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../style/navbar.css";

function Navbar(props) {
    const [navbar, setNavbar] = useState(false);
    const navbarEffect = () => {
      if(window.scrollY >= 50){
          setNavbar(true);
      }else{
          setNavbar(false);
      }
    }
    window.addEventListener('scroll', navbarEffect);
    return (
        <>
            <nav className={ navbar ? "navbar active": "navbar"}>
                <div className="navbar-container">
                    <div className="logo"><Link to="/"><span>LOGO</span></Link></div>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <Link to="/"><span className="navbar-link">Home</span></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/etc"><span className="navbar-link">Etc</span></Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/about"><span className="navbar-link">About</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="socialBar">
                <div className="side-bar">
                    <div className="social text-gray">
                        <ul>
                            <li className="social-container">
                                <a href="https://www.linkedin.com/in/farjana-chadni" target="_blank" rel="noopener noreferrer">
                                    <span className="social_icon">L</span>
                                </a>
                            </li>
                            <li className="social-container">
                                <a href="https://github.com/FChadni" target="_blank" rel="noreferrer">
                                    <span className="social_icon">G</span>
                                </a>
                            </li>
                            <li className="social-container">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <span className="social_icon" >I</span>
                                </a>
                            </li>
                            <li className="social-container dark_mood" id="dark_mode">
                                <a href="/" target="_blank" rel="noreferrer">
                                    <span className="social_icon">D</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;