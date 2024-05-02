import React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { PostTitle } from "../PostTitle/PostTitle";
import { PostMain } from "../PostMain/PostMain";
import { Layout } from "../Layout/Layout";

export const PostContext = createContext();

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
        <PostContext.Provider value={data}>
            <Layout>
            {data.map((post) => (
                <article className='post' key={post.id}>
                    <div className='cover-container'>
                       <img src={post.cover} alt={post.title} />
                     </div>
                    <div className='post-footer'>
                        <PostTitle title={post.title} /> 
                        <PostMain content={post.content} />                       
                       
                        <button id='like'>
                    Like this post <strong>{post.likes}</strong>
                </button>
                    </div>
                </article>
            
                
            ))}
            </Layout>    
        </PostContext.Provider>
    )
}