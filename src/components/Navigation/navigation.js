import React from 'react';
import { Link } from "react-router-dom";

import '../../sass/app.scss';

const Navigation = () => {

    return (
        <div className='navigation'>
            <div className='navigation--homeIcon'>
                <img src='./amb-logo.png' alt='CEAS Ambassadors'/>
            </div>
            <ul className="navigation--items">
                <li className="navigation--item">
                    Members
                </li>
                <li className="navigation--item">
                    Events
                </li>
                <li className="navigation--item">
                    Training
                </li>
                <li className="navigation--item">
                    Student Orgs
                </li>
                <li className="navigation--item">
                    Resources
                </li>
                <li className="navigation--item">
                    Apply
                </li>
            </ul>
        </div>
    );
}

export default Navigation;