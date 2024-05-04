import { Layout } from "../Layout/Layout";  
import { Blog } from '../Blog/Blog'

import { createContext, useContext } from 'react'

export const BlogInfo =()=> {
   
    const BlogContext = createContext();

  const blogName = "Nesteruk blogs";

  return (
    <BlogContext.Provider value={blogName}>
      <Layout>              
              <h1>{blogName}</h1>
              <Blog/>
      </Layout>
    </BlogContext.Provider>
  );

}
  
