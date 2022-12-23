import React from 'react';
import CheckboxIcondFilled from './CheckboxIconFilled';

const Checkbox = ({ title, type='', checked, onClick }) => {
    return (
        <div className={`checkbox ${type}`}>
            <h4 className='checkbox--title'>{title}</h4>
            <div className='checkbox--icon' onClick={onClick}>
                {/* {checked ? <CheckboxCheckedFilled className='checkbox checked' size={40}/> : <div className='checkbox unchecked'></div>} */}
                {checked ? (
                    <CheckboxIcondFilled/>
                ) : <div className='checkbox unchecked'></div>}
            </div>
        </div>
    );
}
export default Checkbox;