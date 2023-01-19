import React from 'react';
import defaultProfImg from '../../images/default-prof-image.jpeg';

const UserCard = ({ children, email, major, year, coops }) => {
    return (
        <div className='memberCard'>
            <div className='memberCard--profile-pic'>
                <div className='memberCard--profile-image-container'>
                    <img src={defaultProfImg} alt={email} className='memberCard--profile-image'/>
                </div>
            </div>
            <div className='memberCard--info'>
                <h1>{children}</h1>
                <p className='memberCard--email'>{email}</p>
                <div className='memberCard--student-info'>
                    {major ? <p>{major}</p> : ""}
                    {year ? <p>Class of {year}</p>: ""} 
                </div>
                {coops ? <p>Co-ops: {coops}</p> : ""} 
            </div>
        </div>
    );

// mixin member-card(member)
// div.member-card
//   div.image-cropper
//     if member.path_to_picture
//       img.member-photo(src='/' + member.path_to_picture)
//     else
//       img.member-photo(src='/images/default-profile-picture.jpg')
//   div.member-card-info
//     a.member-name(href='/member/' + member.id) #{member.first_name} #{member.last_name}
//     p.email #{member.email}
//     p.major #{member.major}
//     if member.grad_year
//       p.class='Class of ' + member.grad_year
//     if member.coops
//       p.coop= 'Co-ops: ' + member.coops
//     if user && user.super_user 
//       p.is_certified #{member.is_certified ? "Certified" : "Not Certified"}
}
export default UserCard;