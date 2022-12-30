import React, { useState } from 'react';
import { Row, Column } from '@carbon/react';

import UserCard from '../UserCard/UserCard.js';
import EventCard from '../EventCard/EventCard.js';
import Button from '../Button/Button.js'
import { View } from '@carbon/icons-react';

const Home = () => {
   
    return (
        <div className='page-content'>
            <h1>Featured Ambassadors</h1>
            <div className='home--featured-ambassadors'>
                <UserCard className='user-card' email="gimpy@mail.uc.edu" major="Environmental Engineering" year="2027" coops="P&G">Gimpy Thunderclap</UserCard>
                <UserCard className='user-card' email="crangada@mail.uc.edu" major="Cybersecurity Engineering" year="2027" coops="Apple">Cranberry Gada</UserCard>
                <UserCard className='user-card' email="butternubs@mail.uc.edu" major="Construction Management" year="2023" coops="X Videos">Randy Butternubs</UserCard>
            </div>
            <h1>Upcoming Events</h1>
            <div className='home--upcoming-events'>
                <EventCard date='January 11, 2023' time='12PM' location='Mantei 427' type='tour'>College Close-up</EventCard>
                <EventCard date='January 16, 2023' time='12PM' location='Baldwin Lobby' type='1:1'>Family 1:1</EventCard>
                <EventCard date='January 18, 2023' time='12PM' location='Mantei 427' type='tour'>College Close-up</EventCard>
                <EventCard date='January 23, 2023' time='12PM' location='' type='Instagram Takeover'>Instagram Takeover</EventCard>
            </div>
        </div>
    );
} 
export default Home;