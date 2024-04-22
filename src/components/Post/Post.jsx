import React from "react"
import { useState, useEffect } from "react"

export const Post = (props) => {
    
   const [data, setData] = useState([]);
    useEffect(() => {
    async function fetchData() {
    const response = await fetch('https://my-json-server.typicode.com/pavlena81/test-js/db');
    const data = await response.json();
    setData(data.posts);
    }
    fetchData();
    }, []);
    
    return (
        <>
            {data.map((post) => (
                <article className='post' key={post.id}>
                    <div className='cover-container'>
                       <img src={post.cover} alt={post.title} />
                     </div>
                        <div className='post-footer'>
                        <h3>{post.title} {post.id}</h3>
                        <p>{post.content}</p>
                        <button id='like'>
                    Like this post <strong>{post.likes}</strong>
                </button>
                    </div>
                </article>

                
            ))}
            
        </>
    )
}