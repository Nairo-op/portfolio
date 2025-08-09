import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";

const App = () => {
  return (
    <div className="container mx-auto max-w-full">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
};

export default App;
