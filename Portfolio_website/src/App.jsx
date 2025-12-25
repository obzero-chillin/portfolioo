import { useState, useEffect } from 'react';
import Navbar from "./components/navbar.jsx";
import Homie from "./components/home.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
import References from "./components/references.jsx"; // Ensure you create this

function App() {
  
  const [currentView, setCurrentView] = useState(window.location.pathname);

  useEffect(()=>{
    const handleLocationChange=()=>{
      setCurrentView(window.location.pathname);
    }
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  },[]);

  return (
    <>
      <main>
        <header>
          <Navbar setView={setCurrentView} /> 
        </header>

        <div id="mainContainer">
          {currentView === '/' ? (
            
            <>
              <Homie />
              <Skills />
              <Projects />
            </>
          ) : currentView === '/references' ? (
            <References />
          ) : null
          }
        </div>

        <footer></footer>
      </main>
    </>
  );
}

export default App;