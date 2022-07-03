import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Teacher from "./pages/Teacher/Teacher/Teacher";
import AOS from "aos";
import "aos/dist/aos.css";
import About from "./pages/About/About";

function App() {
  AOS.init();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
