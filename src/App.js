import Nav from './components/Nav.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Projects from './Pages/Projects.jsx';
import Skills from './Pages/Skills.jsx';
import Contact from './Pages/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />

    </div>
  );
}

export default App;
