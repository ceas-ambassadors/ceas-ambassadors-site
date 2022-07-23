import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';

import '../../sass/app.scss';

const Navigation = ( email, imageURL ) => {

    const [profileModalOpen, setProfileModalOpen] = useState(false);

    return (
        <div className='navigation'>
            <div className='navigation--col'>
                <NavLink to='/'>
                    <img src='./amb-logo.png' alt='CEAS Ambassadors' className='navigation--homeIcon'/>
                </NavLink>
                <ul className='navigation--items'>
                    <li> 
                        <NavLink to='/members' className={e => (e.isActive ? 'navigation--item-active' : 'navigation--item')}>Members</NavLink>
                    </li>
                    <li>
                        <NavLink to='events' className={e => (e.isActive ? 'navigation--item-active' : 'navigation--item')}>Events</NavLink>
                    </li>
                    <li>
                        <NavLink to='/training' className={e => (e.isActive ? 'navigation--item-active' : 'navigation--item')}>Training</NavLink>
                    </li>
                    <li>
                        <NavLink to='/student-orgs' className={e => (e.isActive ? 'navigation--item-active' : 'navigation--item')}>Student Orgs</NavLink>
                    </li>
                    <li>
                        <NavLink to='/resources' className={e => (e.isActive ? 'navigation--item-active' : 'navigation--item')}>Resources</NavLink>
                    </li>
                    <li>
                        <NavLink to='/apply' className={e => (e.isActive ? 'navigation--item-active' : 'navigation--item')}>Apply</NavLink>
                    </li>
                </ul>
            </div>
            <span className='navigation--profile-col'>
                <div className='navigation--profile-image-container' onClick={() => setProfileModalOpen(!profileModalOpen)}>
                    <img src='./default-prof-image.png' alt='{email}'/>
                </div>
                {profileModalOpen ? 
                    <div className="navigation--profile-modal">
                        <NavLink to='/settings' className={e => (e.isActive ? 'navigation--profile-modal-item-active' : 'navigation--profile-modal-item')}>
                            Settings
                        </NavLink>
                        {/* <NavLink 
                            to='/account' 
                            className={e => (e.isActive ? 'navigation--profile-modal-item-active' : 'navigation--profile-modal-item')} 
                            style={{ transform: 'translateY(-1px)' }}
                        >
                            Account
                        </NavLink> */}
                        <div className="navigation--profile-modal-item" style={{ transform: 'translateY(-1px)' }}>
                            Logout
                        </div>   
                    </div>
                : <></>}
            </span>
        </div>
    );
}

export default Navigation;