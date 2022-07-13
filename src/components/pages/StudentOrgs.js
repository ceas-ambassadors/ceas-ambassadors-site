import { Row, Column } from '@carbon/react';
import React from 'react';

import '../../sass/app.scss';

// TODO: Figure out passing params in onClick
 const StudentOrgs = () => {
    return (
        <Row>
            <Column>
                <div className="grid-item">
                    <h1>Student Orgs</h1>
                    <p style={{ fontStyle: 'italic' }}>CEAS organization presentations for training and reference.</p>
                </div>
            </Column>
        </Row>
    );
};

export default StudentOrgs;