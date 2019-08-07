import React from 'react';
import './Button.scss';

const Button = ({ children, onClick = () => {} }) => {
    return (
        <button className="button" onClick={onClick}>
            <div className="buttonChildren">{children}</div>
        </button>
    );
}

export default Button;