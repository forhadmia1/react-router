import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(data => setPost(data.data))

    }, [id])
    
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    );
};

export default PostDetails;