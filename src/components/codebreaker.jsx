import React from 'react';
import '../style/project.css'
import cd1 from '../assets/codebreaker1.gif';
import cd2 from '../assets/codebreaker2.gif';
import cd3 from '../assets/codebreaker3.gif';
import github from '../assets/github-logo.png';

function Codebreaker(props) {
    return (
        <div className="work">
            <div className="project-intro">
                <p className="project-heading">Codebreaker ~ Web-application</p>
                <p className="project-subheading">A simple game that challenges the user to break simple substitution
                    cypher codes. The object of the game is to find the code that decyphers the phrase to plain text.
                    The site has an opening page index.php that presents a form where user enter their name. Clicking
                    Start Game then takes the user to the actual page codebreaker.php. When Codebreaker starts, a
                    phrase in code is randomly selected.<br/><br/>
                    For example, if the encoded phrase is: SAY HELLO TO THE BAD GUY!. the user will decode that
                    phrase by determining what letters to substitute. For example, P in the encoded version (as in
                    PVT) will map to S when the user finds the correct code (as in SAY).<br/><br/>
                    The area below decoded is the current decoding mapping. Initially it is each letter mapped to
                    itself. Next to each letter is a checkbox. If the user check two boxes and click Swap/Shuffle,
                    it will swap those two values. Clicking on New Game starts a new game. Clicking on Give Up
                    presents the solution.<br/><br/>
                </p>
            </div>
            <div className="codebreaker">
                <img className="cdImg" src={cd1} alt="Project banner"/>
                <img className="cdImg" src={cd2} alt="Project banner"/>
                <img className="cdImg" src={cd3} alt="Project banner"/>
            </div>
            <div className="project-overview">
                <div className="project-heading">
                    <p className="project-heading">Languages</p>
                    <ol>
                        <li className="project-subheading">HTML</li>
                        <li className="project-subheading">CSS</li>
                        <li className="project-subheading">PHP</li>
                    </ol>
                </div>
                <div className="project-subheading">
                    <p className="project-heading">Features</p>
                    <ol>
                        <li className="project-subheading">Opening page contains a text-field and start button.</li>
                        <li className="project-subheading">Game area contains decoded field and encoded field.</li>
                        <li className="project-subheading">Decoded mapping area contains letters checkbox.</li>
                        <li className="project-subheading">Clicking on Swap/shuffle swaps the two selected values.</li>
                        <li className="project-subheading">Clicking on Give Up presents the solution.</li>
                        <li className="project-subheading">Clicking on New Game starts a new game.</li>
                    </ol>
                </div>
            </div>
            <div>
                <button className="btn">
                    <a className="btn-link" href="https://github.com/FChadni/WebDev/tree/master/codebreaker" target="_blank" rel="noreferrer">
                        <img src={github} alt=""/>
                        <p>Github</p>
                    </a>
                </button>
            </div>
        </div>
    );
}

export default Codebreaker;