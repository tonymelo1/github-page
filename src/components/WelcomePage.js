import React from 'react';
import '../css/WelcomePage.css';

function WelcomePage(props) {
    return (
        <div 
            className={`welcomeText_container${props.clicked ? '_clicked' : ''}`} 
            onClick={props.onClick}>
            <span className="first_text">
                Welcome.
            </span>
            <span className="second_text">
                Click to enter.
            </span>
        </div>
    )
}

export default WelcomePage;