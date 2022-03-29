import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Post from '../Post/Post';
import './Posts.css'

const Posts = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data=>setPosts(data.data))
    },[])
    return (
        <div className='post-container'>
            {
                posts.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;