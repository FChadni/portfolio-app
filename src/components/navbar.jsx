import React, { useState} from 'react';
import { Link } from "react-router-dom";
import "../style/navbar.css";
import { FaGithubAlt } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import resume from '../assets/chadni_farjana.pdf';


function Navbar(props) {
    const [navbar, setNavbar] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
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
            <nav className={"navbar"}>
                <div className={ navbar ? "navbar-container active" : "navbar-container"}>
                    <div className="logo"><Link to="/"><span className="logo">Farjana Chadni</span></Link></div>

                    {/*<div className="navbar_toggle" id="mobile_menu"><FaBars/></div>*/}
                    <button className='mobile-menu-icon' onClick={ () => setIsMobile(!isMobile)}>
                        { isMobile ? (
                            <i className='<FaBars/>'><AiOutlineClose/></i>
                        ):(
                            <i className='<AiFillLinkedin/>'><FaBars/></i>
                        )}
                    </button>

                    <ul className={isMobile ? "navbar-menu-mobile" : "navbar-menu"}
                    onClick={() => setIsMobile(false)}
                    >
                        <li className="navbar-item">
                            <Link to="/"><span className="navbar-link">Work</span></Link>
                        </li>
                        <li className="navbar-item">
                            <a download="" href={resume}><span className="navbar-link resume">Resume</span></a>
                        </li>
                        {/*<li className="navbar-item">*/}
                        {/*    <Link to="/etc"><span className="navbar-link">Etc</span></Link>*/}
                        {/*</li>*/}
                        <li className="navbar-item">
                            <Link to="/about"><span className="navbar-link">About</span></Link>
                        </li>
                        <li className="navbar-item">
                            <a href="https://www.linkedin.com/in/farjana-chadni" target="_blank" rel="noopener noreferrer">
                                <span className="navbar-link social-i"><AiFillLinkedin/></span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="https://github.com/FChadni" target="_blank" rel="noreferrer">
                                <span className="navbar-link social-i"><FaGithubAlt/></span>
                            </a>
                        </li>
                    </ul>

                    {/*<button className='mobile-menu-icon'>*/}
                    {/*    { isMobile ? (*/}
                    {/*        <i className='<FaBars/>'><FaBars/></i>*/}
                    {/*        ):(*/}
                    {/*        <i className='<AiFillLinkedin/>'><AiFillLinkedin/></i>*/}
                    {/*    )}*/}
                    {/*</button>*/}

                </div>
            </nav>
            {/*<div className="socialBar">*/}
            {/*    <div className="side-bar">*/}
            {/*        <div className="social text-gray">*/}
            {/*            <ul>*/}
            {/*                <li className="social-container">*/}
            {/*                    <a href="https://www.linkedin.com/in/farjana-chadni" target="_blank" rel="noopener noreferrer">*/}
            {/*                        <span className="social_icon">L</span>*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*                <li className="social-container">*/}
            {/*                    <a href="https://github.com/FChadni" target="_blank" rel="noreferrer">*/}
            {/*                        <span className="social_icon">G</span>*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*                <li className="social-container">*/}
            {/*                    <a href="/" target="_blank" rel="noreferrer">*/}
            {/*                        <span className="social_icon" >I</span>*/}
            {/*                    </a>*/}
            {/*                </li>*/}
            {/*                /!*<li className="social-container dark_mood" id="dark_mode">*!/*/}
            {/*                /!*    <a href="/" target="_blank" rel="noreferrer">*!/*/}
            {/*                /!*        <span className="social_icon">D</span>*!/*/}
            {/*                /!*    </a>*!/*/}
            {/*                /!*</li>*!/*/}
            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
}

export default Navbar;