import { Row, Column } from '@carbon/react';
import React from 'react';

// TODO: Figure out passing params in onClick
 const Resources = () => {
    return (
        <Row className='resources page-content'>
            <Column>
                <div className='grid-item'>
                    <h1>Resources</h1>
                    <p style={{ fontStyle: 'italic' }}>References and information for ambassador’s success.</p>
                </div>
            </Column>
        </Row>
    );
};

export default Resources;