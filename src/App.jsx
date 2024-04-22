
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Gallery} from './components/Gallery/Gallery'
import {Navbar} from './components/Navbar/Navbar'
import {Footer} from './components/Footer/Footer'
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


function App() {
  

  return (
    <>
      <div>
        <Navbar />
        <Gallery/>

        {jsxElement}
        {header}
        {newFragment}

        
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
      <Footer/>
     
    </>
  )
}

export default App
