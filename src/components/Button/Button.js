import React from 'react';

// TODO: Figure out passing params in onClick
 const Button = ({ type, children, onClick }) => {
    return (
        <div>
            <button className={`button button--${type}`} onClick={onClick}>{children}</button>
        </div>
    );
};

export default Button;