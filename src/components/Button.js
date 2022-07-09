import React from 'react';

// TODO: Figure out passing params in onClick
 const Button = ({kind, onClick, text}) => {
    return (
        <div>
            <button className= {kind} onClick={onClick}>{text}</button>
        </div>
    );
};

export default Button;