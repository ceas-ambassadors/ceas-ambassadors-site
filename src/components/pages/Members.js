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
                <UserCard className='user-card' email={member.email} major={member.major} year={member.grad_year} coops={member.coops}>{member.name}</UserCard>
                ))
                }
                <div className='members--table'>
                    <UserCard className='user-card' email="buttern@mail.uc.edu" major="Computer Engineering" year="2023" coops="PornHub">Randy Butternubs</UserCard>
                    <UserCard className='user-card' email="wagonman@mail.uc.edu" major="Computer Science" year="2023" coops="Apple">Wagon man</UserCard>
                    <UserCard className='user-card' email="wagonman@mail.uc.edu" major="Computer Science" year="2023" coops="Apple">Wagon man</UserCard>
                    <UserCard className='user-card' email="wagonman@mail.uc.edu" major="Computer Science" year="2023" coops="Apple">Wagon man</UserCard>
                    <UserCard className='user-card' email="wagonman@mail.uc.edu" major="Computer Science" year="2023" coops="Apple">Wagon man</UserCard>
                    <UserCard className='user-card' email="wagonman@mail.uc.edu" major="Computer Science" year="2023" coops="Apple">Wagon man</UserCard>
                </div>
            </Column>
        </Row>
    );
};

export default Members;