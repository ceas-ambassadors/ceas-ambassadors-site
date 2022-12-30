import React from 'react';

const EventCard = ({ children, date, time, location, type }) => {
    return (
        <div className='eventCard'>
            <div className='eventCard--info'>
                <h2>{children}</h2>
                <p className='eventCard--details'>{date} at {time}{location ? ` in ${location}` : ''}</p>
                <p>Type: {type}</p>
            </div>
        </div>
    );
}
export default EventCard;