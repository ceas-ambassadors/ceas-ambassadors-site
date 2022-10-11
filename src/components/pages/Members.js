import React, {useEffect, useState} from 'react';
import { Row, Column } from '@carbon/react';
import UserCard from '../UserCard/UserCard';
import { getMembers } from '../../services/memberService';

// TODO: Figure out passing params in onClick
 const Members = () => {
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      getMembers()
        .then(res => setItems(res.data['members']))
    }, [])
    console.log(items);
    return (
        <Row className='page-content'>
            <Column>
                <h1>Members</h1>
                { items.map(member => (
                <UserCard email={member.email} major={member.major} year={member.grad_year} coops={member.coops}></UserCard>
                ))
                }
            </Column>
        </Row>
    );
};

export default Members;