import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import AOS from "aos";
import "aos/dist/aos.css";
import MainAbout from "./pages/AboutUs/MainAbout";
import MainTeacher from "./pages/Teacher/MainTeacher";
import MainContact from "./pages/ContactUs/MainContact";
import Classes from "./pages/Classes/Classes/Classes";
import Blog from "./pages/Blogs/Blog/Blog";
import Login from "./pages/Login/Login";
function App() {
  AOS.init();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<MainTeacher />} />
        <Route path="/about" element={<MainAbout />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<MainContact />} />
      </Routes>
    </div>
  );
}

export default App;
