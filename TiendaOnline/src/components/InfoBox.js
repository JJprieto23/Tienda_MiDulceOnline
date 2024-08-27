// InfoBox.js
import React from 'react';

function InfoBox({ title, icon: Icon, description, buttonText, link }) {
    return (
        <div className="info-box">
            <div className="icon-container">
                <Icon className="info-icon" />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={link} className="info-box-btn">{buttonText}</a>
        </div>
    );
}

export default InfoBox;
