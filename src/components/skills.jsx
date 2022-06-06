import React from 'react';
import illustrator from '../assets/adobe-illustrator.png';
import xd from '../assets/adobe-xd.png';
import angular from '../assets/angular-logo.png';
import cpp from '../assets/c-logo.png';
import figma from '../assets/figma.png';
import github from '../assets/github-logo.png';
import gitlab from '../assets/gitlab-logo.png';
import javascript from '../assets/javascript-logo-transparent-logo-javascript-images-3.png';
import node from '../assets/nodejs-icon-logo.png';
import procreate from '../assets/procreate.png';
import python from '../assets/python-logo.png';
import react from '../assets/react.png'
import sketch from '../assets/sketch-logo.png';
import swift from '../assets/swift-logo.png';

function Skills(props) {
    return (
        <div className="skills">
            <ul className="languages">
                <li className="lang">Languages:</li>
                <li className="skill-icon">
                    <img src={javascript} alt="javascript"/>
                    <p>JavaScript</p>
                </li>
                <li className="skill-icon">
                    <img src={react} alt="react" className="react"/>
                    <p>ReactJs</p>
                </li>
                <li className="skill-icon">
                    <img src={angular} alt="angular"/>
                    <p>Angular</p>
                </li>
                <li className="skill-icon">
                    <img src={node} alt="node"/>
                    <p>NodeJs</p>
                </li>
                <li className="skill-icon">
                    <img src={python} alt="python"/>
                    <p>Python</p>
                </li>
                <li className="skill-icon">
                    <img src={cpp} alt="cpp"/>
                    <p>C++</p>
                </li>
                <li className="skill-icon">
                    <img src={swift} alt="swift"/>
                    <p>Swift</p>
                </li>
            </ul>
            <ul className="tools">
                <li className="tool">Tools:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li className="skill-icon">
                    <img src={figma} alt=""/>
                    <p>Figma</p>
                </li>
                <li className="skill-icon">
                    <img src={sketch} alt=""/>
                    <p>Sketch</p>
                </li>
                <li className="skill-icon">
                    <img src={xd} alt=""/>
                    <p>Adobe XD</p>
                </li>
                <li className="skill-icon">
                    <img src={illustrator} alt=""/>
                    <p>Illustrator</p>
                </li>
                <li className="skill-icon">
                    <img src={procreate} alt=""/>
                    <p>Procreate</p>
                </li>
                <li className="skill-icon">
                    <img src={github} alt=""/>
                    <p>Github</p>
                </li>
                <li className="skill-icon">
                    <img src={gitlab} alt=""/>
                    <p>Gitlab</p>
                </li>
            </ul>
        </div>
    );
}

export default Skills;