import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import Teacher from "./pages/Teacher/Teacher/Teacher";
import AOS from "aos";
import "aos/dist/aos.css";
import MainTeacher from "./pages/Teacher/MainTeacher";
import MainAbout from "./pages/AboutUs/MainAbout";
import MainContact from "./pages/ContactUs/MainContact";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Classes/Classes";

function App() {
  AOS.init();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<MainTeacher />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/class" element={<Classes/>}/>
        <Route path="/contact" element={<MainContact />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
