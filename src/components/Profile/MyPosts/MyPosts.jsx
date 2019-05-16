import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
            <div>
                My Posts
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div className={s.posts}>
                    <Post message='Hi bro' likes='10' />
                    <Post message="It's my first post" likes='15' />
                </div>
            </div>
    );
}

export default MyPosts;