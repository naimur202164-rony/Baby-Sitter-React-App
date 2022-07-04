import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Teacher from "./pages/Teacher/Teacher/Teacher";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  AOS.init();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
