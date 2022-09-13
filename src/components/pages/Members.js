import React from 'react';
import { Row, Column } from '@carbon/react';
import UserCard from '../UserCard/UserCard';

// TODO: Figure out passing params in onClick
 const Members = () => {
    return (
        <Row className='page-content'>
            <Column>
                <h1>Members</h1>
                <UserCard email='memow@mail.uc.edu' major='Anus Engineering' year='2069' coops='Siemens, Janitor LLC'></UserCard>
            </Column>
        </Row>
    );
};

export default Members;