import React from 'react';

// TODO: Figure out passing params in onClick
 const Button = ({ type, onClick }) => {
    return (
        <div>
            <button className={`button--${type}`} onClick={onClick}></button>
        </div>
    );
};

export default Button;