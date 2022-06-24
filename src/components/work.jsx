import React from 'react';
import { Link } from "react-router-dom";
import cube from '../assets/tc.png';
import groupme from '../assets/g.png';
import craigs from "../assets/c.png";
import codebreaker from '../assets/cb.png';
import movie from '../assets/m.png';
import '../style/home.css';

function Work(props) {
    return (
        <div className="projects">
            {/*<div>*/}
            {/*    <div className="project project-one">*/}
            {/*        <Link to="/">*/}
            {/*            <div className="project-view">*/}
            {/*                <p className="project-title">Detroit Accessibility Project</p>*/}
            {/*                <p className="project-subtitle">Detroit Accessibility Project (DAP) is a nonprofit*/}
            {/*                    organization meant to act as a resource on venue accessibility in Detroit. <br/><br/> (In Progress)</p>*/}
            {/*            </div>*/}
            {/*            <div><img className="image" src={cube} alt=""/></div>*/}
            {/*        </Link>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div>
                <div className="project project-two">
                    <div className="project-view">
                        <p className="project-title">The Cube MSU</p>
                        <p className="project-subtitle">The Cube is a communication firm that participates in
                            communications from book production to UX research to application development. <br/>
                            <a href='https://thecubemsu.com/' target='_blank' rel="noreferrer">case study in Progress, click to see the website</a>
                        </p>
                    </div>
                    <div><img className="image" src={cube} alt=""/></div>
                </div>
            </div>
            <div>
                <div className="project project-three">
                    <Link to="/groupMe">
                        <div className="project-view">
                            <p className="project-title">UX Case Study ~ GroupMe </p>
                            <p className="project-subtitle">During this case study I attempted my best effort to improve
                            usability of GroupMe for the people.</p>
                        </div>
                        <div><img className="image" src={groupme} alt=""/></div>
                    </Link>
                </div>
            </div>
            <div>
                <div className="project project-four">
                    <Link to="/craigslist">
                        <div className="project-view">
                            <p className="project-title">UI Case Study ~ Craigslist</p>
                            <p className="project-subtitle">During this case study I focused effort on improving the UI
                                of Craigslist to fit the current market for the people.</p>
                            </div>
                        <div><img className="image" src={craigs} alt=""/></div>
                    </Link>
                </div>
            </div>
            <div>
                <div className="project project-five">
                    <Link to="/codebreaker">
                        <div className="project-view">
                            <p className="project-title">Codebreaker Application</p>
                            <p className="project-subtitle">Codebreaker is a simple game that challenges the user to
                                break simple substitution cypher codes.</p>
                        </div>
                        <div><img className="image" src={codebreaker} alt=""/></div>
                    </Link>
                </div>
            </div>
            <div>
                <div className="project project-six">
                    <Link to="/movie">
                        <div className="project-view">
                            <p className="project-title">Movie Application</p>
                            <p className="project-subtitle">Movie is a browsing app that fetches data from the web
                                and displays it in a scrolling list that is interactive for users to view.</p>
                        </div>
                        <div><img className="image" src={movie} alt=""/></div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Work;