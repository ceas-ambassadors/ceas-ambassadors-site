import { Row, Column } from '@carbon/react';
import React from 'react';

// TODO: Figure out passing params in onClick
 const Resources = () => {
    return (
        <Row>
            <Column>
                <div className="grid-item">
                    <h1>Resources</h1>
                    <p style={{ fontStyle: 'italic' }}>Jazz that we call Resources.</p>
                </div>
            </Column>
        </Row>
    );
};

export default Resources;