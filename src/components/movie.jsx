import React from 'react';
import Navbar from "./navbar";
import m1 from "../assets/movie1.gif";
import m2 from "../assets/movie2.gif";
import m3 from "../assets/movie3.gif";
import github from "../assets/github-logo.png";

function Movie(props) {
    return (
        <div className="work">
            <div className="project-intro">
                <p className="project-heading">Codebreaker ~ Web-application</p>
                <p className="project-subheading">A movie browsing app that fetches data from the web and displays
                    it in a scrolling list that is interactive for users to view. Also contains a detail view feature
                    where it allows users to get more details about specific movie in the app by tapping on an movie
                    in a list to reveal a new "screen" which slides in from the right. The app also contains tab bars
                    from which tapping slides to collection views that layout the movies in a grid.
                </p>
            </div>
            <div className="codebreaker">
                <img className="mImg" src={m1} alt="Project banner"/>
                <img className="mImg" src={m2} alt="Project banner"/>
                <img className="mImg" src={m3} alt="Project banner"/>
            </div>
            <div className="project-overview">
                <div className="project-heading">
                    <p className="project-heading">Languages</p>
                    <ol>
                        <li className="project-subheading">Swift</li>
                    </ol>
                </div>
                <div className="project-subheading">
                    <p className="project-heading">Features</p>
                    <ol>
                        <li className="project-subheading">User sees an app icon on the home screen when launched.</li>
                        <li className="project-subheading">User can view and scroll through a list of movies.</li>
                        <li className="project-subheading">User can view the movie poster image for each movie.</li>
                        <li className="project-subheading">User can tap a cell to see more details about a particular movie.</li>
                        <li className="project-subheading">User can tap a tab bar button to view a grid layout Collection View.</li>
                    </ol>
                </div>
            </div>
            <div>
                <button className="btn">
                    <a className="btn-link" href="https://github.com/FChadni/CodePath/tree/main/Movie" target="_blank" rel="noreferrer">
                        <img src={github} alt=""/>
                        <p>Github</p>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Movie;