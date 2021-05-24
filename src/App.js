import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Skills from './components/skills'
import Interests from './components/interests'
import Awards from './components/awards'
import Nav from './components/nav'
import Projects from './components/projects'

function App() {
  return (  
    <div>
         <Nav></Nav>
        <div className="container-fluid p-0">
          <About></About>
          <Experience></Experience>
          <Projects></Projects>
          <Skills></Skills>
          <Education></Education>                  
          <Interests></Interests>
          <Awards></Awards>
        </div>
    </div>
  );
}

export default App;
