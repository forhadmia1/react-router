import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'

const Post = ({post}) => {
    const {title,body,id}=post;

    const nevigate= useNavigate()
    const showDetails=()=>{
        const path= `/posts/${id}`;
        nevigate(path)
    }

    return (
        <div className='post'>
            <h1>{title}</h1>
            <p>{body}</p>
            <Link to={`/posts/${id}`}>ShowDetais</Link>
            <button onClick={showDetails}>Details</button>
        </div>
    );
};

export default Post;