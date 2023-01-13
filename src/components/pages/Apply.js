import React from 'react';
import { Row, Column } from '@carbon/react';

// TODO: Figure out passing params in onClick
 const Apply = ({dueDate}) => {
    return (
        <div className='apply page-content'>
            <Row>
                <Column>
                    <div>
                        <h1>Apply</h1>
                        <p className='page-description'>Application and information for CEAS Ambassadors recruitment.</p>
                    </div>
                </Column>
                </Row>
            <Row className='apply--content'>
                <Column>
                    <div className='apply--application'>
                        <h2>Application</h2>
                        <p>All applications are due {dueDate}.</p>
                        <iframe 
                            width='860' 
                            height='500' 
                            frameBorder='0' 
                            marginHeight='0' 
                            marginWidth='0'
                            align='left'
                            title='CEAS Ambassadors Application'
                            src='https://docs.google.com/forms/d/e/1FAIpQLSfem35w2k4VPFyda0RacDDZkKXUemfU6Kk0AdJJO9jKbpcTIw/viewform?embedded=true'
                        >
                            Loading…
                        </iframe>
                    </div>
                </Column>
                <Column>
                    <Row>
                        <div className='apply--questions-timeline'>
                            <h2>Questions?</h2>
                            <p>Reach out to the current Recruitment Chair for help!</p>
                            <div style={{
                                background: 'lightblue',
                                height: '11em',
                                borderRadius: '1em',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                                This is a placeholder.
                            </div>
                            {/* Logic to render Recruitment Chair's card based on user input*/}
                        </div>
                    </Row>
                    <Row>
                        <div>
                            <h2>Timeline</h2>
                            <p>Please be wary of the current dates for recruitment!</p>
                            <p><strong>5/24:</strong> Applications Due at Midnight</p>
                            <p><strong>5/29:</strong> Interview Invitations Sent</p>
                            <p><strong>6/1:</strong> Interviews Day 1</p>
                            <p><strong>6/2:</strong> Interviews Day 2</p> 
                            <p><strong>6/12:</strong> Acceptance Emails Sent</p>
                            <p><strong>7/21:</strong> Onboarding Retreat</p> 
                        </div>
                    </Row>
                </Column>
            </Row> 
        </div>
        
    );
};

export default Apply;