import React from 'react';
import Navbar from "../components/navbar";
import '../style/home.css'
import Intro from "../components/intro";
import Skills from "../components/skills";
import home from '../assets/homeimage.gif'
import Work from "../components/work";
import Footer from "../components/footer";

function Home(props) {
    return (
        <div>
            <Navbar/>
            <section className="section">
                <ul className="hero">
                    <li>
                        <Intro/>
                        <Skills/>
                    </li>
                    <li className="homeImage"><img src={home} alt=""/></li>
                </ul>
                <Work/>
            </section>
            <Footer/>
        </div>
    );
}

export default Home;