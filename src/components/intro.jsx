import React, { useState } from 'react';
import '../style/home.css';
import javascript from "../assets/javascript-logo-transparent-logo-javascript-images-3.png";
import react from "../assets/react.png";
import angular from "../assets/angular-logo.png";
import python from "../assets/python-logo.png";
import cpp from "../assets/c-logo.png";
import swift from "../assets/swift-logo.png";
import figma from "../assets/figma.png";
import xd from "../assets/adobe-xd.png";
import illustrator from "../assets/adobe-illustrator.png";
import procreate from "../assets/procreate.png";
import github from "../assets/github-logo.png";
import gitlab from "../assets/gitlab-logo.png";
import home from "../assets/homeimage.gif";
import Popup from "./popup";

function Intro(props) {
    const [jsPopup, setJsPopup] = useState(false);
    const [reactPopup, setReactPopup] = useState(false);
    const [angularPopup, setAngularPopup] = useState(false);
    const [pythonPopup, setPythonPopup] = useState(false);
    const [cppPopup, setCppPopup] = useState(false);
    const [swiftPopup, setSwiftPopup] = useState(false);
    const [figmaPopup, setFigmaPopup] = useState(false);
    const [xdPopup, setXDPopup] = useState(false);
    const [illustratorPopup, setIllustratorPopup] = useState(false);
    const [procreatePopup, setProcreatePopup] = useState(false);
    const [githubPopup, setGithubPopup] = useState(false);
    const [gitlabPopup, setGitlabPopup] = useState(false);

    return (
        <div>
            <ul className="hero">
                <li className="hero-left">
                    <p className="heading">I am an aspiring
                        <span className="one"> full-stack UX/UI Designer</span> and
                        <span className="three"> Frontend Developer</span>.
                    </p>
                    <div className="skills">
                        <p>Click to learn about my expertise</p>
                        <ul className="languages">
                            <li className="skill-icon" onClick={() => setJsPopup(true)}>
                                <img src={javascript} alt="javascript"/>
                                <p>JavaScript</p>
                            </li>
                            <Popup trigger={jsPopup} setTrigger={() => setJsPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={javascript} alt="javascript"/>
                                </div>
                                <p className="skill-level">Advanced</p>
                                <div className="skill-level-shape">
                                    <div className="level-one advanced-one"/>
                                    <div className="level-two advanced-two"/>
                                    <div className="level-three advanced-three"/>
                                    <div className="level-four advanced-four"/>
                                </div>
                                <p className="skill-level-subheading">I was introduced to JavaScript in Web
                                    Application Development course CSE 477 at Michigan State University. After the
                                    introductory learning, I self taught by working on various of projects.</p>
                                <p className="relevant-work">Relevant Work</p>
                                <ul className='relevant-work-list'>
                                    <li>
                                        <a href="https://react-heroku-daptest.herokuapp.com/" target='_blank'
                                           rel="noreferrer">Detroit Accessibility Project</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/" target='_blank'
                                           rel="noreferrer">Portfolio Application</a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/FChadni/weather-app-wra410-master" target='_blank'
                                           rel="noreferrer">Weather App</a>
                                    </li>
                                </ul>
                            </Popup>

                            <li className="skill-icon" onClick={() => setReactPopup(true)}>
                                <img src={react} alt="react" className="react"/>
                                <p>ReactJs</p>
                            </li>
                            <Popup trigger={reactPopup} setTrigger={() => setReactPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={react} alt="react" className="react"/>
                                </div>
                                <p className="skill-level">Intermediate</p>
                                <div className="skill-level-shape">
                                    <div className="level-one intermediate-one"/>
                                    <div className="level-two intermediate-two"/>
                                    <div className="level-three intermediate-three"/>
                                    <div className="level-four intermediate-four"/>
                                </div>
                                <p className="skill-level-subheading">I was introduced to ReactJs in Advanced Web
                                    Authoring course WRA 410 at Michigan State University. After the
                                    introductory learning, I self taught by developing a react application for Detroit
                                    Accessibility Project for my internship at the Cube.</p>
                                <p className="relevant-work">Relevant Work</p>
                                <ul className='relevant-work-list'>
                                    <li>
                                        <a href="https://react-heroku-daptest.herokuapp.com/" target='_blank'
                                           rel="noreferrer">Detroit Accessibility Project</a>
                                    </li>
                                    <li>
                                        <a href="http://localhost:3000/" target='_blank'
                                           rel="noreferrer">Portfolio Application</a>
                                    </li>
                                </ul>
                            </Popup>

                            <li className="skill-icon" onClick={() => setAngularPopup(true)}>
                                <img src={angular} alt="angular"/>
                                <p>Angular</p>
                            </li>
                            <Popup trigger={angularPopup} setTrigger={() => setAngularPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={angular} alt="angular"/>
                                </div>
                                <p className="skill-level">Intermediate</p>
                                <div className="skill-level-shape">
                                    <div className="level-one intermediate-one"/>
                                    <div className="level-two intermediate-two"/>
                                    <div className="level-three intermediate-three"/>
                                    <div className="level-four intermediate-four"/>
                                </div>
                                <p className="skill-level-subheading">I am currently interning as a web application
                                    developer with Open Systems Technologies (OST) where I am working on an application
                                    that uses angular on front-end and AWS amplify as server.</p>
                            </Popup>

                            <li className="skill-icon" onClick={() => setPythonPopup(true)}>
                                <img src={python} alt="python"/>
                                <p>Python</p>
                            </li>
                            <Popup trigger={pythonPopup} setTrigger={() => setPythonPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={python} alt="python"/>
                                </div>
                                <p className="skill-level">Advanced</p>
                                <div className="skill-level-shape">
                                    <div className="level-one advanced-one"/>
                                    <div className="level-two advanced-two"/>
                                    <div className="level-three advanced-three"/>
                                    <div className="level-four advanced-four"/>
                                </div>
                                <p className="skill-level-subheading">Learned Python by taking introduction to
                                    programming I (CSE 231) as well as expanded knowledge of data structures and
                                    algorithms by taking Algorithms and Data Structures (CSE 331) and Algorithm
                                    Engineering (CSE 431) at Michigan State University.</p>
                                <p className="relevant-work">Relevant Work</p>
                                <ul className='relevant-work-list'>
                                    <li>
                                        <a href="https://github.com/FChadni/ObjectOriented/tree/master/Python" target='_blank'
                                           rel="noreferrer">Algorithms and Data Structures</a>
                                    </li>
                                </ul>
                            </Popup>

                            <li className="skill-icon" onClick={() => setCppPopup(true)}>
                                <img src={cpp} alt="cpp"/>
                                <p>C++</p>
                            </li>
                            <Popup trigger={cppPopup} setTrigger={() => setCppPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={cpp} alt="cpp"/>
                                    {/*<p>C++</p>*/}
                                </div>
                                <p className="skill-level">Intermediate</p>
                                <div className="skill-level-shape">
                                    <div className="level-one intermediate-one"/>
                                    <div className="level-two intermediate-two"/>
                                    <div className="level-three intermediate-three"/>
                                    <div className="level-four intermediate-four"/>
                                </div>
                                <p className="skill-level-subheading">Learned C++ by taking introduction to programming
                                    II (CSE 232) at Michigan State University.</p>
                                <p className="relevant-work">Relevant Work</p>
                                <ul className='relevant-work-list'>
                                    <li>
                                        <a href="https://github.com/FChadni/ObjectOriented/tree/master/Cpp" target='_blank'
                                           rel="noreferrer">Doubly Linked List</a>
                                    </li>
                                </ul>
                            </Popup>

                            {/*<li className="skill-icon" onClick={() => setSwiftPopup(true)}>*/}
                            {/*    <img src={swift} alt="swift"/>*/}
                            {/*    <p>Swift</p>*/}
                            {/*</li>*/}
                            {/*<Popup trigger={swiftPopup} setTrigger={() => setSwiftPopup(false)} >*/}
                            {/*</Popup>*/}
                        </ul>
                        <ul className="tools">
                            <li className="skill-icon" onClick={() => setFigmaPopup(true)}>
                                <img src={figma} alt=""/>
                                <p>Figma</p>
                            </li>
                            <Popup trigger={figmaPopup} setTrigger={() => setFigmaPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={figma} alt=""/>
                                    {/*<p>Figma</p>*/}
                                </div>
                                <p className="skill-level">Advanced</p>
                                <div className="skill-level-shape">
                                    <div className="level-one advanced-one"/>
                                    <div className="level-two advanced-two"/>
                                    <div className="level-three advanced-three"/>
                                    <div className="level-four advanced-four"/>
                                </div>
                                <p className="skill-level-subheading">I heavily use Figma for my internship with the Cube
                                    at Michigan State University to plan, brainstorm and create interactive prototypes
                                    for both UX and UI community projects.
                                </p>
                            </Popup>

                            <li className="skill-icon" onClick={() => setXDPopup(true)}>
                                <img src={xd} alt=""/>
                                <p>Adobe XD</p>
                            </li>
                            <Popup trigger={xdPopup} setTrigger={() => setXDPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={xd} alt=""/>
                                </div>
                                <p className="skill-level">Intermediate</p>
                                <div className="skill-level-shape">
                                    <div className="level-one intermediate-one"/>
                                    <div className="level-two intermediate-two"/>
                                    <div className="level-three intermediate-three"/>
                                    <div className="level-four intermediate-four"/>
                                </div>
                                <p className="skill-level-subheading">I also use adobe XD beside Figma for my internship
                                    with the Cube at Michigan State University to create interactive high fidelity
                                    prototypes for UX projects.
                                </p>
                            </Popup>

                            <li className="skill-icon" onClick={() => setIllustratorPopup(true)}>
                                <img src={illustrator} alt=""/>
                                <p>Illustrator</p>
                            </li>
                            <Popup trigger={illustratorPopup} setTrigger={() => setIllustratorPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={illustrator} alt=""/>
                                </div>
                                <p className="skill-level">Intermediate</p>
                                <div className="skill-level-shape">
                                    <div className="level-one intermediate-one"/>
                                    <div className="level-two intermediate-two"/>
                                    <div className="level-three intermediate-three"/>
                                    <div className="level-four intermediate-four"/>
                                </div>
                                <p className="skill-level-subheading">I learned Adobe Illustrator by taking Digital
                                    Graphic Design: Tools and Methods (GD 160) and Concepts of Graphic Design (GD 260) at
                                    Michigan State University.
                                </p>
                            </Popup>

                            <li className="skill-icon" onClick={() => setProcreatePopup(true)}>
                                <img src={procreate} alt=""/>
                                <p>Procreate</p>
                            </li>
                            <Popup trigger={procreatePopup} setTrigger={() => setProcreatePopup(false)}>
                                <div className="skill-level-header">
                                    <img src={procreate} alt=""/>
                                </div>
                                <p className="skill-level">Advanced</p>
                                <div className="skill-level-shape">
                                    <div className="level-one advanced-one"/>
                                    <div className="level-two advanced-two"/>
                                    <div className="level-three advanced-three"/>
                                    <div className="level-four advanced-four"/>
                                </div>
                                <p className="skill-level-subheading">I use Procreate for digital art and animation an
                                    example would be my hero image. I have also used procreate to illustrate the initial
                                    animation idea for the cube redesign website.
                                </p>
                            </Popup>

                            <li className="skill-icon" onClick={() => setGithubPopup(true)}>
                                <img src={github} alt=""/>
                                <p>Github</p>
                            </li>
                            <Popup trigger={githubPopup} setTrigger={() => setGithubPopup(false)}>
                                <div className="skill-level-header">
                                    <img src={github} alt=""/>
                                </div>
                                <p className="skill-level">Advanced</p>
                                <div className="skill-level-shape">
                                    <div className="level-one advanced-one"/>
                                    <div className="level-two advanced-two"/>
                                    <div className="level-three advanced-three"/>
                                    <div className="level-four advanced-four"/>
                                </div>
                                <p className="skill-level-subheading">I have been using github and gitlab for team
                                    collaboration in my internship with the Cube at Michigan State University, as well
                                    as in coursework, and as my own hosting platform.
                                </p>
                                <p className="relevant-work">Relevant Work</p>
                                <ul className='relevant-work-list'>
                                    <li>
                                        <a href="https://github.com/FChadni" target='_blank' rel="noreferrer">
                                            Github Profile</a>
                                    </li>
                                </ul>
                            </Popup>

                            {/*<li className="skill-icon" onClick={() => setGitlabPopup(true)}>*/}
                            {/*    <img src={gitlab} alt=""/>*/}
                            {/*    <p>Gitlab</p>*/}
                            {/*</li>*/}
                            {/*<Popup trigger={gitlabPopup} setTrigger={() => setGitlabPopup(false)} >*/}
                            {/*</Popup>*/}
                        </ul>
                    </div>
                </li>
                <li className="hero-right">
                    <div><img src={home} alt=""/></div>
                </li>
            </ul>

        </div>
    );
}

export default Intro;