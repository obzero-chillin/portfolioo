import Navbar from "./components/navbar.jsx";
import Homie from "./components/home.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
function App() {

  return (
    <>
      <main>
        <header>
          <div>

            <Navbar /> 
            

          </div>

        </header>

        <Homie />
        <Skills/>
        <Projects/>
        
        <footer></footer>
      </main>

    </>
  )
}

export default App
