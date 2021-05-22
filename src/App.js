import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Skills from './components/skills'
import Interests from './components/interests'
import Awards from './components/awards'
import Nav from './components/nav'
function App() {
  return (  
    <div>
         <Nav></Nav>
        <div className="container-fluid p-0">
          <About></About>
          <Experience></Experience>
          <Education></Education>
          <Skills></Skills>
          <Interests></Interests>
          <Awards></Awards>
        </div>
    </div>
  );
}

export default App;
