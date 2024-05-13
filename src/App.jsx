import { BrowserRouter } from "react-router-dom";

import { default as Navbar } from "./components/Navbar";
import { default as Hero } from "./components/Hero";
import { default as Experience } from "./components/Experience";
import { default as About } from "./components/About";
import {default as Tech} from './components/Tech'
import {default as Work} from "./components/Work";
import Contact from "./components/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative bg-primary z-10 h-[100vh]">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Work />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
