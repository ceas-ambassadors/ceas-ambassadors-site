import React from 'react';
import { Link } from "react-router-dom";

import '../../sass/app.scss';

const Navigation = ( email, imageURL ) => {

    return (
        <div className='navigation'>
            <div className='navigation--col'>
                <div className='navigation--homeIcon'>
                    <img src='./amb-logo.png' alt='CEAS Ambassadors'/>
                </div>
                <ul className="navigation--items">
                    <li className="navigation--item">
                        <Link to="/members">Members</Link>
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
            <span className='navigation--col'>
                <div className='navigation--profile-image-container'>
                    <img src='./default-prof-image.png' alt='{email}'/>
                </div>
            </span>
        </div>
    );
}

export default Navigation;