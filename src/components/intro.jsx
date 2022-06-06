import React from 'react';
import '../style/home.css';

function Intro(props) {
    return (
        <div>
            <p className="heading">I am an aspiring
                <strong> User Experience</strong>,
                <strong> User Interface</strong>, and
                <strong> Frontend Developer</strong>.</p>
            {/*<p>I enjoy creating delightful experiences for people.</p>*/}
        </div>
    );
}

export default Intro;