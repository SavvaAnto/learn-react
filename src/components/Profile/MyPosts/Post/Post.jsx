import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
                    <div className={s.item}>
                        <img src='https://images.newscientist.com/wp-content/uploads/2019/04/08111018/screenshot-2019-04-08-10.24.34.jpg' />
                        {props.message}
                        <div>
                            <span>{props.likeps} likes</span>
                        </div>
                    </div>
                    
    );
}

export default Post;