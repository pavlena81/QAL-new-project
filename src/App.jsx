
import { Route, Routes } from "react-router-dom";
// import { Post } from './components/Post/Post'
import { Header } from './components/Header/Header'
import { MyBlogs } from "./pages/Blogs";
import { Home } from "./pages/Home";
import { Galleries } from "./pages/Galleries";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import './App.css'



// ========
function App() {
  

  return (
    <>     
        <Header />        
      {/* <Blog post={post} key={post.id}/> */}
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<MyBlogs />} /> 
        <Route path="/galleries" element={<Galleries />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/> } />
      </Routes> 
     
    </>
  )
}

export default App
