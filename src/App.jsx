
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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

const footer = (
    <footer>
    <p>Copyright 2024</p>
    </footer>
) 

function App() {
  

  return (
    <>
      <div>
        {jsxElement}
        {header}
        {newFragment}

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     
      
      {footer}
    </>
  )
}

export default App
