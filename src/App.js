import './App.css'
import Contact from './Components/Contact/Contact';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import AboutMe from './Components/AboutMe/AboutMe';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
