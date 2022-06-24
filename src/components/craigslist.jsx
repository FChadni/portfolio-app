import React, { useState } from 'react';
import { IoArrowForward, IoArrowBack } from "react-icons/io5"
import '../style/project.css'
import craigslist from "../assets/c.png";
import cw1 from '../assets/cw1.png';
import cw2 from '../assets/cw2.png';
import sketch from "../assets/sketch-proj2.jpg";
import cw3 from "../assets/Group 3.png";
import cw4 from "../assets/Group 4.png";
import gif from '../assets/Cfinal.gif';

function Craigslist(props) {
    const gp = [{image: cw1}, {image: cw2}]
    const gp2 = [{image: cw3}, {image: cw4}]
    const [current, setCurrent] = useState(0);
    const length = gp.length;
    if(!Array.isArray(gp) || gp.length <= 0){
        return null;
    }
    if(!Array.isArray(gp2) || gp2.length <= 0){
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
                <p className="project-heading">Craigslist UI Case Study</p>
                <p className="project-subheading">As I was searching for project to improve user experience, one of
                    my classmate, from my XA 242, mentioned craigslist in his presentation: as he rated the website
                    as worst user experience due to its UI design. Thus, I took the challenge to practice my learning
                    and implying into a real world project. At first I was hesitant to take on the challenge due to
                    my lack of knowledge and usability of craigslist. It was first time when I was introduced to
                    craigslist from my classmate's presentation. However, after taking a first glance at the website,
                    I could could immediately point out the problem statements. Thus, I took the challenge and to
                    make it more interesting I challenge myself to complete the entire project in 6-10 hours.</p>
            </div>
            <span className="project-banner">
                <img src={craigslist} alt="Project banner"/>
            </span>
            <div className="project-overview">
                <p className="project-heading">Overview</p>
                <p className="project-subheading">
                    <a href="https://en.wikipedia.org/wiki/Craigslist" target='_blank' rel="noreferrer">Craigslist </a>
                    is an American classified advertisements website with sections devoted to jobs, housing, for sale,
                    items wanted, services, community service, gigs, résumés, and discussion forums. It became a
                    web-based service in 1996 in San Francisco Bay Area and expanded to other U.S. and Canadian cities
                    in 2000, and now covers 70 countries.</p>
            </div>
            <div className="project-problem">
                <p className="project-heading">Understanding Problem</p>
                <p className="project-subheading">
                    UI element needed improvement, as according to my research and using WAVE report, I found that
                    craigslist was popular in the past. However, it may be due to increasing rate of scam or the
                    unattractiveness of the website lost popularity. Thus, for the purpose of this project I will be
                    only redesigning the UI element of the website and how it can be improved to fit the market.
                </p>
            </div>
            <div className="project-overview">
                <p className="project-heading">Brainstorming</p>
                <p className="project-subheading">Once I had a clearer idea of the problem, I started sketching
                    potential solution. During this phase I analysed WAVE report and how the low contrast is not best
                    for user with low vision. Also the landing page does not include any visual representation rather
                    all the information are constricted in a single page view. Thus, during this phase I took the
                    time to analyze similar websites like amazon and ebay. As those two websites seem to follow a
                    pattern of including navigation bar where users can be directed to certain part of the website.
                    Thus, I sketched a potential navigation bar with boxes of some visual representation on the the
                    landing page. As I timed myself during this project to make the challenge more interesting.
                    Overall, I spent two hour in the process of analyzing and sketching.</p>
            </div>
            <span className="project-banner">
                <img src={sketch} alt="sketch"/>
            </span>
            <div className="project-overview">
                <p className="project-heading">Wire-framing</p>
                <p className="project-subheading">Once I was satisfied with my analysis and sketch, I took my sketch to figma and converted it to wireframes. Since my main goal for this challenge is to improve the UI layout. In this state, I designed the navigation bar, a search bar with location search option, landing page visual representation as well as the footer. The landing page visuals are displayed based on latest posts. For example the event visual and baby clothing were the most recent post, thus those are being displayed at the moment and it will change simultaneously.

                    The website includes two navigation bars, one above includes profile, location and creating a
                    post. The second navigation right below the first navigation includes subpages. As the user hover
                    over their mouse on any of the navigation items, it allows the users to select a category they
                    are looking for which then takes them to that particular subpage. Each subpage includes image
                    and short description gallery and filter feature which is linked to a detailed subpage. The idea
                    of utilizing separate pages eliminates overwhelming information on the landing page. I spent
                    another one and a half hour in the wire framing phase.</p>
            </div>
            <span className="project-sld">
                <IoArrowBack className="left" onClick={prevS}/>
                <IoArrowForward className="right" onClick={nextS}/>
                {gp.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active':'slide'} key={index}>
                            {index === current && (<img className="sld" src={slide.image} alt="gp"/>)}
                        </div>
                    )
                })}
            </span>
            <div className="project-overview">
                <p className="project-heading">Prototyping</p>
                <p className="project-subheading">
                    After I was done with wire framing, I started playing with colors and design theme to support
                    my vision of improving the UI design. Since October is the month of fall season, I incorporated
                    fall theme as my plan for the design to change theme based on season and holiday. For example,
                    the primary colors for the website in December will be red, green, gold and white to represent
                    christmas and new year. As it can be visually seen on the landing page the calender gives more
                    calm and cool fall vibes and the drinks displayed above the calender creates a cozy environment.
                    In this phase I spent three and a half hours.</p>
            </div>
            <span className="project-sld">
                <IoArrowBack className="left" onClick={prevS}/>
                <IoArrowForward className="right" onClick={nextS}/>
                {gp2.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active':'slide'} key={index}>
                            {index === current && (<img className="sld" src={slide.image} alt="gp"/>)}
                        </div>
                    )
                })}
            </span>
            <div className="project-overview">
                <p className="project-heading">Key Takeaways</p>
                <p className="project-subheading">By the end of the second day (precisely in 7 hours) of the
                    challenge, I completed my final design, still many improvement can be done, however for this
                    challenge I only kept it to improving the UI element. Some other feature I look forward to
                    improving are the privacy and creating a safe and collaborative space for all. I also hope to
                    improve the website accessibility features to make it better experience for all users. While
                    working on this project I learned to manage my time well, as I timed myself for each phase of
                    the project to see my final outcome of a time bound challenge. Some key takeaways from this
                    challenge are: while creating and designing websites, it is important to meet the accessibility
                    standard to create welcoming environment for people with disabilities; It is important to speak
                    with the users in variety of methods, such as some understands better from reading while other
                    understands better from seeing visual representation.</p>
            </div>
            <span className="project-banner">
                <img src={gif} alt="sketch"/>
            </span>
        </div>
    );
}

export default Craigslist;