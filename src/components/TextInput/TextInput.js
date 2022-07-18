import React from 'react';

const TextInput = ({ type, title }) => {
    return (
        <div className={`textInput ${type}`}>
            <h4 className='textInput--title'>{title}</h4>
            <input className='textInput--input'></input>
        </div>
    );
}
export default TextInput;