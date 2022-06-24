import React from 'react';
import '../style/about.css';
import hero from '../assets/homeimage.gif';
import h2 from '../assets/chadni_headshot.jpg';
import h3 from '../assets/h.jpg';
import h from '../assets/20190821_113440_Original.jpg';
import javascript from "../assets/javascript-logo-transparent-logo-javascript-images-3.png";
import react from "../assets/react.png";
import angular from "../assets/angular-logo.png";
import python from "../assets/python-logo.png";
import cpp from "../assets/c-logo.png";
import figma from "../assets/figma.png";
import xd from "../assets/adobe-xd.png";
import illustrator from "../assets/adobe-illustrator.png";
import procreate from "../assets/procreate.png";
import github from "../assets/github-logo.png";
import gitlab from "../assets/gitlab-logo.png";
import swift from "../assets/swift-logo.png";

function About(props) {
    return (
        <div className="about">
            <div className="about-intro">
                <div className="hero-img"><img src={h} alt=""/></div>
                <p className="about-subheading">My name is Farjana Chadni and I'm currently in my last year at Michigan State
                    University, studying Computer Science, Experience Architecture (Human-Computer Interaction), and
                    Information Science. I like to call myself a explorer and a passionate learner who loves to gain
                    knowledge and experiences. <br/><br/>
                    Due to my diverse interest in medicine and engineering; during my freshmen year at MSU I explored
                    little bit of Biochemistry, Math and Mechanical Engineering. During my sophomore year I changed
                    my major to computer science after taking my first programming course in python. Over the summer
                    of 2021 I grew fascinated by the field of UX and learning why effective programming is essential.
                    For this reason, I enrolled into the Experience Architecture and Information Science with
                    Human-Centered Technologies focus program at Michigan State University.
                    <br/><br/>
                    Apart from academic experiences, I have been interning with the Cube at MSU as a UX designer and
                    engineer from Fall of 2022 where I do both design and develop. For the summer of 2022, I am
                    interning with the Open Systems Technologies as a web application developer where I am using the
                    JavaScript framework:Angular and AWS amplify for development.
                </p>
            </div>
            <div className="about-education">
                <p className="about-heading">Education</p>
                <p className="about-subheading">
                    <ul>
                        <li className="uni">Michigan State University, class of 2023</li>
                        <li className="about-list">bachelors of arts in Experience Architecture</li>
                        <li className="about-list">bachelors of arts in Information Science</li>
                        <li className="about-list">bachelors of science in Computer Science</li>
                    </ul>
                </p>
            </div>
            <div className="about-experience">
                <p className="about-heading">Experience</p>
                <p className="about-subheading">
                    <ul>
                        <li className="exp">Web Application Development Intern, Open System Technologies</li>
                        <li className="about-list">Grand Rapids, MI | May 2022 - Present</li>
                        <li className="about-list"><ul>
                            <li>Involve in developing a floor planning web application with angular as front end and AWS amplify as
                                back-end with a lead developer</li>
                            <li>Utilizing agile methodology to collaborate with the team on every day for standup session to discuss
                                sprint updates as well as meet twice a week for sprint planning.</li>
                            <li>Actively learning Angular, AWS amplify, and agile methodology by working on the web application.</li>
                        </ul></li>
                    </ul>
                    <ul>
                        <li className="exp2">UX Engineer and Designer, The Cube at Michigan State University</li>
                        <li className="about-list">East Lansing | Aug 2021 - Present</li>
                        <li className="about-list"><ul>
                            <li>Collaborating on multiple cross-functional team of 10+ members to better understand the needs of
                                accessibility and enhance user experience.</li>
                            <li> Involve in planning and researching for Detroit Accessibility Project (a nonprofit organization meant to
                                act as a resource on venue accessibility in Detroit), and the Cube website redesign project.</li>
                            <li>Designed and Developed the initial build of the Detroit Accessibility Project using reactjs and REST
                                API.</li>
                        </ul></li>
                    </ul>
                </p>
            </div>
            <div className="about-expertise">
                <p className="about-heading">Expertise</p>
                <p className="about-subheading">
                    <div className="about-skills">
                        <ul className="about-languages">
                            <li className="about-skill-icon">
                                <img src={javascript} alt="javascript"/>
                                <p>JavaScript</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={react} alt="react" className="react"/>
                                <p>ReactJs</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={angular} alt="angular"/>
                                <p>Angular</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={python} alt="python"/>
                                <p>Python</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={cpp} alt="cpp"/>
                                <p>C++</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={swift} alt="swift"/>
                                <p>Swift</p>
                            </li>
                        </ul>
                        <ul className="about-tools">
                            <li className="about-skill-icon">
                                <img src={figma} alt=""/>
                                <p>Figma</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={xd} alt=""/>
                                <p>Adobe XD</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={illustrator} alt=""/>
                                <p>Illustrator</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={procreate} alt=""/>
                                <p>Procreate</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={github} alt=""/>
                                <p>Github</p>
                            </li>
                            <li className="about-skill-icon">
                                <img src={gitlab} alt=""/>
                                <p>Gitlab</p>
                            </li>
                        </ul>
                    </div>
                </p>
            </div>
        </div>
    );
}

export default About;