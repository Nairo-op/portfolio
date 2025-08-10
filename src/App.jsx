import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";

const App = () => {
  return (
    <div className="container mx-auto max-w-full">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
};

export default App;
