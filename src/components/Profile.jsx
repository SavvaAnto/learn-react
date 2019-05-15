import React from 'react';

const Profile = () => {
    return (
        <div className='content'>
            <div className='cover'>
            <img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
            </div>
            <div className='ava'>
            <img src='https://www.w3schools.com/w3css/img_lights.jpg' />
            </div>
            <div>
            My Posts
            <div>
                New Post
            </div>
            <div>
                Post 1
            </div>
            <div>
                Post 2
            </div>
            </div>
        </div>
    );
}

export default Profile;