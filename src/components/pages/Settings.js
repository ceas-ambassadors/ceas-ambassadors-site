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
            <Column className='settings--input-information'>
                <h1>Update Profile</h1>
                <h3 style={{ fontWeight: 'normal', margin: '1.5em 0 0 0' }}>Personal Information</h3>
                <div className='settings--input-row'>
                    <TextInput title='First Name' type='standard'/>
                    <TextInput title='Last Name' type='standard'/>
                </div>
                <div className='settings--input-row' style={{ width: '55%' }}>
                    <TextInput title='Hometown' type='standard'/>
                </div>
                <h3 style={{ fontWeight: 'normal', margin: '1.5em 0 0 0' }}>School Information</h3>
                <div className='settings--input-row'>
                    <TextInput title='Major' type='standard'/>
                    <TextInput title='Minors' type='standard'/>
                </div>
                <div className='settings--input-row' style={{ width: '60%' }}>
                    <TextInput title='Grad Year' type='standard' />
                    <Checkbox title='ACCEND' checked={checkAccend} onClick={() => setCheckAccend(!checkAccend)}/>
                    <TextInput title='ACCEND Program' type='disabled'/>
                </div>
                <div className='settings--input-row'>
                    <TextInput title='Clubs & Activities' type='standard'/>
                </div>
                <div className='settings--input-row'>
                    <TextInput title='Co-ops' type='standard'/>
                </div>
                <div className='settings--button-row'>
                    <Button type='primary'>Upload Photo</Button>
                    <Button type='primary'>Submit Changes</Button>
                </div>
            </Column>
            <Column>
                <div className="settings--nav-menu">
                    <div className={activeTab === 'Display' ? 'settings--nav-menu-item-active' : 'settings--nav-menu-item'} onClick={(e) => console.log(e)}>
                        Display
                    </div>
                    <div className={activeTab === 'Account' ? 'settings--nav-menu-item-active' : 'settings--nav-menu-item'} style={{ transform: 'translateY(-1px)' }}>
                        Account
                    </div>  
                    <div className={activeTab === 'Logout' ? 'settings--nav-menu-item-active' : 'settings--nav-menu-item'} style={{ transform: 'translateY(-1px)' }}>
                        Logout
                    </div>   
                </div>
            </Column>
        </Row>
    );
} 
export default Settings;