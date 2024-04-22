
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Gallery} from './components/Gallery/Gallery'
import {Navbar} from './components/Navbar/Navbar'
import { Footer } from './components/Footer/Footer'
import { Blog } from './components/Blog/Blog'
import { Post } from './components/Post/Post'
import './App.css'

const jsxElement = <h1>I am a JSX element</h1>;

const header = (
        <header>
        <h1>Welcome to React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        </header>
)

const newFragment = (  
  <>
    <h1>Welcome to React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
</>
)

// to task 35//
let post = {
    id: 1,
    title: "Programming Algorithm",
    content: `The word Algorithm means “a process or set of rules to be followed in calculations or other problem-solving operations”. Therefore Algorithm refers to a set of rules/instructions that step-by-step define how a work is to be executed upon in order to get the expected results.`,
    cover: "/vite.svg",
    likes: 5
  };

// ========
function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Gallery />
        <Post/>

        {jsxElement}
        {header}
        {newFragment}

        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Blog post={post} key={post.id}/>
     
      <Footer/>
     
    </>
  )
}

export default App
