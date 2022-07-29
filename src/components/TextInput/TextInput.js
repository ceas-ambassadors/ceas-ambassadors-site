import React from 'react';

const TextInput = ({ type, disabled, placeholderText, children }) => {
    return (
        <div className={`textInput ${type}`}>
            <h4 className='textInput--title'>{children}</h4>
            <input className='textInput--input' disabled={disabled} placeholder={placeholderText}></input>
        </div>
    );
}
export default TextInput;