import React from 'react';
import '../style/popup.css';
import { AiFillCloseCircle } from 'react-icons/ai'

function Popup(props) {
    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}><AiFillCloseCircle/></button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;