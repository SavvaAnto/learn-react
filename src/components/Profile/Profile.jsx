import React from 'react';
import s from './Profile.module.css';
import MyPosts from'./MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo img='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;