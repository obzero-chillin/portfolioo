import Navbar from "./components/navbar.jsx";
import Homie from "./components/home.jsx";
import Skills from "./components/skills.jsx";
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
        
        <footer></footer>
      </main>

    </>
  )
}

export default App
