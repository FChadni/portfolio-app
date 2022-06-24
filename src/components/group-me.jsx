import React, { useState } from 'react';
import { IoArrowForward, IoArrowBack } from "react-icons/io5";
import '../style/project.css'
import groupMe from '../assets/g.png';
import sketch from '../assets/brainstrom.jpg';
import gp1 from '../assets/gp1.png';
import gp2 from '../assets/gp2.png';

function GroupMe(props) {
    const gp = [{image: gp1}, {image: gp2}]
    const [current, setCurrent] = useState(0);
    const length = gp.length;
    if(!Array.isArray(gp) || gp.length <= 0){
        return null;
    }
    const nextS = () => {
      setCurrent(current === length-1 ? 0: current+1);
    }
    const prevS = () => {
      setCurrent(current === 0 ? length-1: current-1);
    }

    return (
        <div className="work">
            <div className="project-intro">
                <p className="project-heading">GroupMe UX Case Study</p>
                <p className="project-subheading">GroupMe is a mobile group messaging app owned by Microsoft which was
                    launched in May 2010 by the private company GroupMe. I started using GroupMe in 2018 (the year
                    I started college). With Three years experience of using GroupMe, I discovered some technical
                    aspects that could be redesign for better user experience. Thus, during the fall of 2022, I took
                    a five day challenge to understand to pain points of GroupMe users, especially students, and
                    propose potential solutions.
                </p>
            </div>
            <span className="project-banner">
                <img src={groupMe} alt="Project banner"/>
            </span>
            <div className="project-problem">
                <p className="project-heading">Understanding Problem</p>
                <p className="project-subheading">
                    <ol>
                        <li><strong>There is no delete chat feature.</strong></li>
                        <span>GroupMe only allows user to hide chat. Based on my own experience and peer interview,
                            this accumulates unnecessary chats on the home screen forcing user to scroll down or use
                            the search feature to find a particular chat.</span>
                        <li><strong>There is no feature to leave a group chat from home screen.</strong></li>
                        <span>In order to leave a group chat, user would need preform by clicking group detail,
                            settings and then click "leave group". This method is time consuming since it makes the
                            user do extra functionality.</span>
                    </ol>
                </p>
            </div>
            <div className="project-overview">
                <p className="project-heading">Brainstorming</p>
                <p className="project-subheading">Once I had a clearer idea of the problem, I started sketching
                    potential solution. During this phase I drew inspirations from existing messaging apps. I
                    sketched my potential solution with the idea in mind to add feature that users are already
                    familiar with like the "slide and click delete feature" and "select and click delete feature."
                    For example most mobile applications now uses the slide to the right feature where the user
                    slides their finger on the screen to perform certain action. Thus, I included the slide feature
                    for deleting a single chat. However, to make usability more convenient, I included the feature
                    where the user taps and selects in which a delete button pop-up at the top navigation bar. Both
                    methods have been implemented in variety of popular mobile applications.</p>
            </div>
            <span className="project-banner">
                <img src={sketch} alt="sketch"/>
            </span>
            <div className="project-overview">
                <p className="project-heading">Prototyping</p>
                <p className="project-subheading">Once I was satisfied with one of my sketches, I took my sketch to
                    figma and converted it to a wireframe. I focused on adding more details to my potential solution
                    to convey my ideas clearly. As in the sketching process my ideas were imaginary, meaning that I
                    was unable to perform animation on the sketch stage. As a result, I spent time in the wire
                    framing phase to see and connect how my imagination and ideas can be bought to life. <br/><br/>
                    After I was done with wire framing where I was able to see screen
                    to screen interaction, I moved on to prototype phase where I focused on appearance of the app;
                    icons and colors to help support my vision. I used the color red for delete icon as red represents
                    cancellation and can be easily understood by most users. Since my target users for GroupMe (existing primary color is blue)
                    are students, I wanted to keep color representing understanding among group members and increase
                    collaborative environment. In this stage, I also used the present feature on figma to see the
                    interaction and functionality of the app.
                </p>
            </div>
            <span className="project-sld">
                <IoArrowBack className="left" onClick={prevS}/>
                <IoArrowForward className="right" onClick={nextS}/>
                {gp.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active':'slide'} key={index}>
                            {index === current && (<img className="sld" src={slide.image} alt="gp"/>)}
                            {/*<img className="sld" src={slide.image} alt="gp"/>*/}
                        </div>
                    )
                })}
                {/*<img src={gp1} alt="sketch"/>*/}
            </span>
            <div className="project-overview">
                <p className="project-heading">Key Takeaways</p>
                <p className="project-subheading">The key takeaways from working on this project are: taking
                    initiative to improve something that bothers you rather than complaining; Asking questions to
                    understand if other are experiencing similar issues; and how the appearance and functionality
                    can set a mood to eiter attract or distract the users.while working on the project, I have
                    learned and gained many experiences about mobile communication applications, UI design, and
                    usability of figma.</p>
            </div>
        </div>
    );
}

export default GroupMe;