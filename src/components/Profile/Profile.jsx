import React from 'react';
import s from './Profile.module.css'
import MyPosts from'./MyPosts/MyPosts.jsx';

const Profile = () => {
    return (
        <div>
            <div className={s.cover}>
                <img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            </div>
            <div className={s.ava}>
                <img src='https://www.w3schools.com/w3css/img_lights.jpg' />
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;