import { Row, Column } from '@carbon/react';
import React from 'react';

// TODO: Figure out passing params in onClick
 const Resources = () => {
    return (
        <div className='resources page-content'>
            <Row>
                <Column>
                    <h1>Resources</h1>
                    <p style={{ fontStyle: 'italic' }}>References and information for ambassador’s success.</p>
                </Column>
            </Row>
            <Row className='resources--content'>
                <Column>
                    <div className='resources--info-booklet'>
                        <h2>Info Booklet</h2>
                        <iframe src='https://drive.google.com/file/d/1skYm8MmeA7-V-G1Zdyng0PTkhrr14-EgkQ2GjLSmcEg/preview' width='600' height='450'></iframe>
                    </div>
                </Column>
                <Column>
                    <div className='resources--calendar'>
                        <h2>Calendar</h2>
                    </div>
                </Column>
            </Row>
        </div>
    );
};

export default Resources;