import React, { useState } from 'react';
import { Row, Column } from '@carbon/react';

import TextInput from '../TextInput/TextInput.js';
import Checkbox from '../Checkbox/Checkbox.js';
import Button from '../Button/Button.js'

const Settings = () => {

    const [activeTab, setActiveTab] = useState('Display');
    const [checkAccend, setCheckAccend] = useState(false);
   
    return (
        <Row className='settings page-content'>
            {activeTab === 'Display' ? 
                (<Column className='settings--input-information'>
                    <h1>Update Profile</h1>
                    <h3 style={{ fontWeight: 'normal', margin: '1.5em 0 0 0' }}>Personal Information</h3>
                    <div className='settings--input-row'>
                        <TextInput>First Name</TextInput>
                        <TextInput>Last Name</TextInput>
                    </div>
                    <div className='settings--input-row' style={{ width: '55%' }}>
                        <TextInput>Hometown</TextInput>
                    </div>
                    <h3 style={{ fontWeight: 'normal', margin: '1.5em 0 0 0' }}>School Information</h3>
                    <div className='settings--input-row'>
                        <TextInput>Major</TextInput>
                        <TextInput>Minor</TextInput>
                    </div>
                    <div className='settings--input-row' style={{ width: '60%' }}>
                        <TextInput>Grad Year</TextInput>
                        <Checkbox title='ACCEND' checked={checkAccend} onClick={() => setCheckAccend(!checkAccend)}/>
                        <TextInput type={!checkAccend ? 'disabled' : ''} disabled={!checkAccend}>ACCEND Program</TextInput>
                    </div>
                    <div className='settings--input-row'>
                        <TextInput>Clubs & Activities</TextInput>
                    </div>
                    <div className='settings--input-row'>
                        <TextInput>Co-ops</TextInput>
                    </div>
                    <div className='settings--button-row'>
                        {/* <Button type='primary'>Upload Photo</Button> */}
                        <label className='settings--upload-profile-pic-label'>
                            <input type='file' className='settings--upload-profile-pic-input'/>
                            Upload Photo
                        </label>
                        <Button type='primary'>Submit Changes</Button>
                    </div>
                </Column>) : <></>}
            {activeTab === 'Account' ? (
                <Column className='settings--input-information'>
                    <h1>Update Account</h1>
                    <h3 style={{ fontWeight: 'normal', margin: '1.5em 0 0 0' }}>Change Password</h3>
                    <div className='settings--account-password'>
                        <TextInput>Current Password</TextInput>
                        <TextInput>New Password</TextInput>
                        <TextInput>Confirm Password</TextInput>
                        <div className='settings--button-row' style={{ margin: '1em 0em 0em 0em' }}>
                            <p style={{ fontStyle: 'italic' }}>Password must be 8-15 characters and include letters and numbers.</p>
                            <Button type='primary'>Submit Changes</Button>
                        </div>
                    </div>
                </Column>
            ) : <></>}
            <Column>
                <div className="settings--nav-menu">
                    <div className={activeTab === 'Display' ? 'settings--nav-menu-item active' : 'settings--nav-menu-item'} onClick={() => setActiveTab('Display')}>
                        Display
                    </div>
                    <div className={activeTab === 'Account' ? 'settings--nav-menu-item active' : 'settings--nav-menu-item'} onClick={() => setActiveTab('Account')} style={{ transform: 'translateY(-1px)' }}>
                        Account
                    </div>  
                    <div className={activeTab === 'Logout' ? 'settings--nav-menu-item active' : 'settings--nav-menu-item'} onClick={() => setActiveTab('Logout')} style={{ transform: 'translateY(-2px)' }}>
                        Logout
                    </div>   
                </div>
            </Column>
        </Row>
    );
} 
export default Settings;