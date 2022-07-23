import React from 'react';

const TextInput = ({ type, disabled, children }) => {
    return (
        <div className={`textInput ${type}`}>
            <h4 className='textInput--title'>{children}</h4>
            <input className='textInput--input' disabled={disabled}></input>
        </div>
    );
}
export default TextInput;