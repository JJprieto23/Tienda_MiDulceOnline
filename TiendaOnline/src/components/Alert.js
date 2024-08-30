import React from 'react';
import '../styles/Alert.css';

function Alert({ message, type, onClose }) {
    return (
        <div className={`alert ${type}`}>
            <span>{message}</span>
            <button onClick={onClose}>X</button>
        </div>
    );
}

export default Alert;
