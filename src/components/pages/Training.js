import React from 'react';
import { Row, Column } from '@carbon/react';

// TODO: Figure out passing params in onClick
 const Training = () => {
    return (
        <Row className='training page-content'>
            <Column>
                <div className='training--title'>
                    <h1>Training</h1>
                    <p style={{ fontStyle: 'italic' }}>Orientation info and documentation for new ambassadors.</p>
                </div>
                <div className='training--resources'>
                    <div className='training--resource'>
                        <h2>Orientation Slide Deck</h2>
                        <p>Late Updated: June 28, 2022</p>
                        <iframe title='Summer 2022 Onboarding Slides' src='https://docs.google.com/presentation/d/19CVXW6lp0fqMRS4esB31DqHlkxxlD2ZSr3dpG7zp6uw/preview?slide=id.p' width='830' height='430'></iframe>
                    </div>
                    <div className='training--resource'>
                        <h2>Site Orientation</h2>
                        <p>Late Updated: --</p>
                        <div className='training--resource tbd'>Coming soon...</div>
                        {/* <iframe title='Tech Orientation' src='https://docs.google.com/presentation/d/19CVXW6lp0fqMRS4esB31DqHlkxxlD2ZSr3dpG7zp6uw/preview?slide=id.p' width='830' height='430'></iframe> */}
                    </div>
                    <div className='training--resource'>
                        <h2>Public Safety Orientation</h2>
                        <p>Late Updated: --</p>
                        <div className='training--resource tbd'>Coming soon...</div>
                        {/* <iframe title='Tech Orientation' src='https://docs.google.com/presentation/d/19CVXW6lp0fqMRS4esB31DqHlkxxlD2ZSr3dpG7zp6uw/preview?slide=id.p' width='830' height='430'></iframe> */}
                    </div>
                </div>
            </Column>
            <Column>
                <div className='apply--questions-timeline'>
                    <h2>Questions?</h2>
                    <p>Reach out to the current Membership Chair for help!</p>
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
                    {/* Logic to render Membership Chair's card based on user input*/}
                </div>
            </Column>
        </Row>
    );
};

export default Training;