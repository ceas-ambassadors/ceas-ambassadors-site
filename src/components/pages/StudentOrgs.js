import { Row, Column } from '@carbon/react';
import React from 'react';

import '../../sass/app.scss';

// TODO: Figure out passing params in onClick
 const StudentOrgs = () => {
    return (
        <Row className='page-content'>
            <Column>
                <div>
                    <h1>Student Orgs</h1>
                    <p style={{ fontStyle: 'italic' }}>CEAS organization presentations for training and reference.</p>
                </div>
                <div className='student-orgs'>
                    <div className='student-orgs--org'>
                        <h2>Construction Student Association</h2>
                        <iframe title='CSA' src='https://drive.google.com/file/d/1FrK9o42gcOHGAQgPgsiRzOAr7C2ubd56/preview' width='960' height='840'></iframe>
                    </div>
                    <div className='student-orgs--org'>
                        <h2>Engineers Without Borders</h2>
                        <iframe title='EWB' src='https://drive.google.com/file/d/1nJDrMYlh-soShPRwNZ9q72AVTKalmUh2/preview' width='960' height='840'></iframe>
                    </div>
                    <div className='student-orgs--org'>
                        <h2>CubeCats</h2>
                        <iframe title='CubeCats' src='https://drive.google.com/file/d/10I86wZdBD3mrWklj8zDlXhzAoZoMy-tU/preview' width='960' height='840'></iframe>
                    </div>
                    <div className='student-orgs--org'>
                        <h2>Bearcat Motorsports</h2>
                        <iframe title='BCMS' src='https://drive.google.com/file/d/1eVOd-OasOmluCgJQVpI78ZvdpbDKAD3z/preview' width='960' height='840'></iframe>
                    </div>
                </div>
            </Column>
        </Row>
    );
};

export default StudentOrgs;