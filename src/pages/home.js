import React from 'react';
import Navbar from "../components/navbar";
import '../style/home.css'
import Intro from "../components/intro";
import Work from "../components/work";
import Footer from "../components/footer";

function Home(props) {
    return (
        <div className="home-container">
            <div>
                <Intro/>
            </div>
            <div>
                <Work/>
            </div>
        </div>
    );
}

export default Home;