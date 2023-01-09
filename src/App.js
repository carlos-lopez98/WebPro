import NavBar from "./components/NavBar"
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Works from "./components/Works";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Works />
      <Skills />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
