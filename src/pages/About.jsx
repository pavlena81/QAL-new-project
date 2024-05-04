import reactLogo from '../assets/react.svg'

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




export const About = ({ }) => {
    return (
        <main>
            <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {jsxElement}
        {header}
        {newFragment}

        </main >
    )
}