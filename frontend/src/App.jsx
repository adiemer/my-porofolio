import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-sans bg-white">
      <Navbar />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
